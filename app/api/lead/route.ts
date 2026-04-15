import { NextResponse } from "next/server";

// ─── In-memory rate limiter ────────────────────────────────────────────────
// Keyed by IP. Stores timestamps of recent submissions.
// This is intentionally process-local — no Redis required for a landing MVP.
// On serverless platforms each instance tracks its own window, which is fine
// for stopping naive bursts from a single IP hitting the same instance.
const RATE_WINDOW_MS  = 60_000; // 1 minute window
const RATE_MAX_HITS   = 5;      // max 5 submissions per window per IP

const ipLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now   = Date.now();
  const hits  = (ipLog.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  hits.push(now);
  ipLog.set(ip, hits);

  // Prune old entries to avoid unbounded growth
  if (ipLog.size > 2_000) {
    for (const [k, v] of ipLog) {
      if (v.every((t) => now - t >= RATE_WINDOW_MS)) ipLog.delete(k);
    }
  }

  return hits.length > RATE_MAX_HITS;
}

// ─── Constants ────────────────────────────────────────────────────────────
const MIN_SUBMIT_MS = 2_500;   // reject if form submitted in under 2.5 s
const MAX_NAME_LEN  = 120;
const MAX_MSG_LEN   = 2_000;
const MAX_PHONE_LEN = 30;

// ─── Route handler ─────────────────────────────────────────────────────────
export async function POST(req: Request) {
  try {
    // ── 1. IP rate limiting ────────────────────────────────────────────────
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
      req.headers.get("x-real-ip") ??
      "unknown";

    if (isRateLimited(ip)) {
      console.warn(`Rate limit hit — IP: ${ip}`);
      return NextResponse.json(
        { success: false, error: "Попробуйте позже." },
        { status: 429 }
      );
    }

    // ── 2. Parse body ──────────────────────────────────────────────────────
    const data = await req.json();

    const {
      client_name,
      client_phone,
      client_message,
      source,
      pageUrl,
      _hp,          // honeypot field — must be empty
      _t,           // form-open timestamp (ms since epoch)
    } = data;

    // ── 3. Honeypot check ──────────────────────────────────────────────────
    // Bots fill hidden fields; real users never see or touch them.
    if (_hp && String(_hp).trim().length > 0) {
      console.warn(`Honeypot triggered — IP: ${ip}`);
      // Silent rejection — return 200 so bots don't know they were caught
      return NextResponse.json({ success: true, message: "Заявка принята." }, { status: 200 });
    }

    // ── 4. Minimum submission time ─────────────────────────────────────────
    // If the form was submitted suspiciously fast, treat as bot.
    const formOpenedAt = typeof _t === "number" ? _t : 0;
    const elapsed = Date.now() - formOpenedAt;
    if (formOpenedAt === 0 || elapsed < MIN_SUBMIT_MS) {
      console.warn(`Too-fast submission — IP: ${ip}, elapsed: ${elapsed}ms`);
      return NextResponse.json(
        { success: false, error: "Ошибка отправки, попробуйте ещё раз." },
        { status: 400 }
      );
    }

    // ── 5. Field validation & length caps ─────────────────────────────────
    const name    = (client_name   ?? "").slice(0, MAX_NAME_LEN).trim();
    const phone   = (client_phone  ?? "").slice(0, MAX_PHONE_LEN).trim();
    const message = (client_message ?? "").slice(0, MAX_MSG_LEN).trim();
    const leadSource = (source    ?? "landing").trim();
    const page       = (pageUrl   ?? "").trim();

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: "Имя и телефон обязательны для заполнения." },
        { status: 400 }
      );
    }

    // ── 6. Compose Telegram message ────────────────────────────────────────
    // Plain text only — no parse_mode, so user input cannot break formatting.
    const now = new Date();
    const timeStr = now.toLocaleString("ru-RU", {
      timeZone: "Europe/Moscow",
      day:    "2-digit",
      month:  "2-digit",
      year:   "numeric",
      hour:   "2-digit",
      minute: "2-digit",
    });

    const text = [
      "Новая заявка с лендинга",
      "",
      `Имя:        ${name}`,
      `Телефон:    ${phone}`,
      `Сообщение:  ${message || "—"}`,
      `Источник:   ${leadSource}`,
      `Страница:   ${page || "—"}`,
      `Время:      ${timeStr} МСК`,
    ].join("\n");

    // ── 7. Send to Telegram ────────────────────────────────────────────────
    // Env vars are server-side only — never exposed to the client.
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId   = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error("Telegram env vars not configured: TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID");
      console.log("=== NEW LEAD (Telegram not configured) ===");
      console.log(`Source:  ${leadSource}`);
      console.log(`Name:    ${name}`);
      console.log(`Phone:   ${phone}`);
      if (message) console.log(`Message: ${message}`);
      console.log("==========================================");
      return NextResponse.json(
        { success: false, error: "Сервис уведомлений не настроен. Обратитесь к администратору." },
        { status: 500 }
      );
    }

    const tgRes = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ chat_id: chatId, text }),
      }
    );

    if (!tgRes.ok) {
      const errBody = await tgRes.text();
      console.error("Telegram API error:", tgRes.status, errBody);
      return NextResponse.json(
        { success: false, error: "Ошибка отправки уведомления." },
        { status: 502 }
      );
    }

    console.log(`Lead sent to Telegram — ${name} / ${phone} / source: ${leadSource}`);
    return NextResponse.json({ success: true, message: "Заявка отправлена." }, { status: 200 });

  } catch (error) {
    console.error("Lead submission exception:", error);
    return NextResponse.json(
      { success: false, error: "Внутренняя ошибка сервера." },
      { status: 500 }
    );
  }
}
