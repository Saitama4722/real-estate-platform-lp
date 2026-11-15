"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getCookieConsent, setCookieConsent, type CookieConsent } from "@/lib/cookieConsent";

/**
 * CookieBanner
 *
 * Shown until the visitor makes a choice. "Принять" enables third-party
 * services (callback widget, future analytics); "Только необходимые" keeps them off.
 */
export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getCookieConsent() === null) setVisible(true);
  }, []);

  const choose = (value: CookieConsent) => {
    setCookieConsent(value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Использование файлов cookie"
      className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:pb-6 pointer-events-none"
    >
      <div className="pointer-events-auto mx-auto max-w-3xl rounded-xl border border-stone-200 bg-white shadow-[0_12px_40px_rgba(28,28,30,0.18)] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 animate-[fadeUp_400ms_cubic-bezier(0.16,1,0.3,1)_both]">
        <p className="flex-1 text-sm text-stone-600 leading-relaxed">
          Мы используем файлы cookie: необходимые — для работы сайта, а также cookie
          сервиса обратного звонка. Подробнее — в{" "}
          <Link
            href="/privacy"
            className="font-medium text-stone-900 underline underline-offset-2 hover:text-accent-500 transition-colors"
          >
            политике конфиденциальности
          </Link>
          .
        </p>
        <div className="flex flex-col-reverse sm:flex-row gap-2.5 shrink-0">
          <button
            type="button"
            onClick={() => choose("necessary")}
            className="btn-outline justify-center text-sm px-5 py-2.5 cursor-pointer"
          >
            Только необходимые
          </button>
          <button
            type="button"
            onClick={() => choose("all")}
            className="btn-solid justify-center text-sm px-6 py-2.5 cursor-pointer"
          >
            Принять
          </button>
        </div>
      </div>
    </div>
  );
}
