"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const trustPoints = [
  "Работаю в Краснодаре и Геленджике",
  "Отвечаю быстро, без лишних ожиданий",
  "На связи в удобное для вас время",
];

const countries = [
  {
    code: "ru", prefix: "+7", name: "Россия",
    flag: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6" className="w-[22px] h-auto rounded-sm flex-shrink-0 shadow-sm border border-black/10 pointer-events-none hidden sm:block">
        <rect fill="#fff" width="9" height="3" />
        <rect fill="#d52b1e" y="4" width="9" height="2" />
        <rect fill="#0039a6" y="2" width="9" height="2" />
      </svg>
    )
  },
  {
    code: "kz", prefix: "+7", name: "Казахстан",
    flag: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 1" className="w-[22px] h-auto rounded-sm flex-shrink-0 shadow-sm border border-black/10 bg-[#00afca] pointer-events-none hidden sm:block">
        <circle cx="1" cy="0.5" r="0.25" fill="#fec50c" />
      </svg>
    )
  },
  {
    code: "kg", prefix: "+996", name: "Кыргызстан",
    flag: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" className="w-[22px] h-auto rounded-sm flex-shrink-0 shadow-sm border border-black/10 bg-[#e31e24] pointer-events-none hidden sm:block">
        <circle cx="1.5" cy="1" r="0.6" fill="#ffe600" />
        <circle cx="1.5" cy="1" r="0.45" fill="#e31e24" />
      </svg>
    )
  },
  {
    code: "by", prefix: "+375", name: "Беларусь",
    flag: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" className="w-[22px] h-auto rounded-sm flex-shrink-0 shadow-sm border border-black/10 pointer-events-none hidden sm:block">
        <rect fill="#d52b1e" width="3" height="1.333" />
        <rect fill="#008d46" y="1.333" width="3" height="0.667" />
        <rect fill="#fff" width="0.333" height="2" />
        <rect fill="#d52b1e" x="0.1" y="0.1" width="0.13" height="1.8" />
      </svg>
    )
  },
];

const PROHIBITED_WORDS = ["хуй", "пизд", "еба", "бля", "шлюх", "мудак", "гандон", "пидор", "сука", "залуп"];
const hasProfanity = (text: string) => {
  const lText = text.toLowerCase();
  return PROHIBITED_WORDS.some(word => lText.includes(word));
};

// Per-country phone format config
const PHONE_FORMATS: Record<string, { maxDigits: number; placeholder: string; format: (d: string) => string }> = {
  ru: {
    maxDigits: 10,
    placeholder: "(999)333-33-33",
    // (XXX)XXX-XX-XX
    format: (d) => {
      let r = "";
      if (d.length > 0) r += "(" + d.substring(0, 3);
      if (d.length >= 4) r += ")" + d.substring(3, 6);
      if (d.length >= 7) r += "-" + d.substring(6, 8);
      if (d.length >= 9) r += "-" + d.substring(8, 10);
      return r;
    },
  },
  kz: {
    maxDigits: 10,
    placeholder: "(999)333-33-33",
    // Same visual mask as Russia
    format: (d) => {
      let r = "";
      if (d.length > 0) r += "(" + d.substring(0, 3);
      if (d.length >= 4) r += ")" + d.substring(3, 6);
      if (d.length >= 7) r += "-" + d.substring(6, 8);
      if (d.length >= 9) r += "-" + d.substring(8, 10);
      return r;
    },
  },
  by: {
    maxDigits: 9,
    placeholder: "(99)999-99-99",
    // (XX)XXX-XX-XX  — 9 local digits after +375
    format: (d) => {
      let r = "";
      if (d.length > 0) r += "(" + d.substring(0, 2);
      if (d.length >= 3) r += ")" + d.substring(2, 5);
      if (d.length >= 6) r += "-" + d.substring(5, 7);
      if (d.length >= 8) r += "-" + d.substring(7, 9);
      return r;
    },
  },
  kg: {
    maxDigits: 9,
    placeholder: "(999)999-999",
    // (XXX)XXX-XXX  — 9 local digits after +996
    format: (d) => {
      let r = "";
      if (d.length > 0) r += "(" + d.substring(0, 3);
      if (d.length >= 4) r += ")" + d.substring(3, 6);
      if (d.length >= 7) r += "-" + d.substring(6, 9);
      return r;
    },
  },
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", message: "" });
  const [phoneBody, setPhoneBody] = useState("");
  const [country, setCountry] = useState(countries[0]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [consent, setConsent] = useState(false);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorStatus, setErrorStatus] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isNameValid = form.name.trim().length >= 2;
  const phoneFormat = PHONE_FORMATS[country.code] ?? PHONE_FORMATS.ru;
  const isPhoneValid = phoneBody.replace(/\D/g, "").length >= phoneFormat.maxDigits;
  const isMessageClean = !hasProfanity(form.message);
  const isFormValid = isNameValid && isPhoneValid && consent && isMessageClean;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Paste handler & fallback. Strip out bad chars.
    const sanitized = e.target.value.replace(/[^а-яёА-ЯЁa-zA-Z\s\-]/g, "");
    setForm((p) => ({ ...p, name: sanitized }));
  };

  const onNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Strict block during typing to prevent flashing
    if (e.key.length === 1 && /[^а-яёА-ЯЁa-zA-Z\s\-]/i.test(e.key)) {
      e.preventDefault();
    }
  };

  const onMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, message: e.target.value }));
    if (errorStatus) setErrorStatus("");
  };

  const onPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 1. Sanitize: digits only, capped to this country's max local digit count
    const fmt = PHONE_FORMATS[country.code] ?? PHONE_FORMATS.ru;
    const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, fmt.maxDigits);
    // 2. Apply country-specific formatting
    setPhoneBody(fmt.format(digitsOnly));
  };

  const onPhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Block non-digits natively on key press
    // Allow control keys (Ctrl, Alt, etc. having key length > 1) and digits
    if (e.key.length === 1 && /\D/.test(e.key)) {
       e.preventDefault();
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorStatus("");
    
    if (!isMessageClean) {
      setErrorStatus("Пожалуйста, используйте корректный текст без ненормативной лексики.");
      return;
    }
    
    if (!isFormValid || submitting) return;
    
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setSent(true);
    setForm({ name: "", message: "" });
    setPhoneBody("");
  };

  return (
    <section id="contact" className="scroll-mt-28 bg-brand-950 section-padding">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 xl:gap-28 items-center">

          {/* ── Left: contact info ── */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/70 mb-5">
              Контакты
            </p>
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold tracking-tight text-white leading-tight max-w-md">
              Готов ответить на&nbsp;ваши вопросы
            </h2>
            <p className="mt-5 text-lg text-white/80 leading-[1.8] max-w-sm">
              Оставьте заявку или позвоните — обсудим задачу, подберём подходящие варианты и договоримся о следующем шаге в удобное для вас время.
            </p>

            {/* Phone */}
            <a
              href="tel:+79288497980"
              className="group mt-10 inline-flex flex-col gap-1"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-white/50">
                Телефон
              </span>
              <span className="text-3xl sm:text-[2.2rem] font-bold text-white group-hover:text-accent transition-colors duration-200 tracking-tight">
                +7 928 849-79-80
              </span>
            </a>

            {/* Trust points */}
            <ul className="mt-10 space-y-4">
              {trustPoints.map((item) => (
                <li key={item} className="flex items-start gap-3.5">
                  <div className="mt-0.5 w-5 h-5 rounded-full border border-accent/30 bg-accent/10 flex items-center justify-center shrink-0">
                    <svg className="w-2.5 h-2.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-base text-white/80 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right: form card ── */}
          <div>
            <div className="bg-white rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.3)] p-7 sm:p-9">

              {sent ? (
                <div className="py-10 text-center">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-brand-900">Запрос отправлен</h3>
                  <p className="mt-2 text-sm text-brand-500 leading-relaxed max-w-[280px] mx-auto">
                    Форма пока работает в тестовом режиме. Отправка будет подключена позже.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-5 text-sm font-semibold text-accent hover:text-accent-dark underline underline-offset-4"
                  >
                    Отправить ещё раз
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-7">
                    <h3 className="text-xl font-semibold text-brand-900">Оставьте заявку</h3>
                    <p className="mt-1.5 text-base text-brand-600 leading-relaxed">
                      Ответим по&nbsp;делу и&nbsp;предложим следующий шаг
                    </p>
                  </div>

                  {errorStatus && (
                    <div className="mb-4 text-sm font-medium text-red-600 bg-red-50 p-3 rounded-lg border border-red-100">
                      {errorStatus}
                    </div>
                  )}

                  <form onSubmit={onSubmit} className="space-y-4">
                    <div>
                      <label
                        className="block text-xs font-bold uppercase tracking-[0.15em] text-brand-600 mb-2"
                        htmlFor="c-name"
                      >
                        Ваше имя
                      </label>
                      <input
                        id="c-name"
                        name="name"
                        value={form.name}
                        onChange={onNameChange}
                        onKeyDown={onNameKeyDown}
                        required
                        className="w-full px-4 py-3.5 text-base border border-brand-200 rounded-lg text-brand-900 bg-white placeholder:text-brand-300 focus:outline-none focus:ring-1 focus:ring-brand-500 focus:border-brand-500 transition-shadow"
                        placeholder="Как к вам обращаться"
                      />
                    </div>

                    <div>
                      <label
                        className="block text-xs font-bold uppercase tracking-[0.15em] text-brand-600 mb-2"
                        htmlFor="c-phone"
                      >
                        Телефон
                      </label>
                      <div className="relative flex items-stretch border border-brand-200 rounded-lg bg-white overflow-visible focus-within:border-brand-500 focus-within:ring-1 focus-within:ring-brand-500 transition-shadow">
                        
                        {/* Country Selector */}
                        <div ref={dropdownRef} className="relative flex items-center">
                          <button
                            type="button"
                            onClick={(e) => { e.preventDefault(); setShowDropdown(!showDropdown); }}
                            className="flex items-center gap-2 px-3 py-3.5 bg-brand-50 hover:bg-brand-100 transition-colors h-full border-r border-brand-200 focus:outline-none rounded-l-lg cursor-pointer"
                          >
                            <div className="pointer-events-none flex items-center justify-center">
                              {country.flag}
                            </div>
                            <svg className={`pointer-events-none w-3.5 h-3.5 text-brand-500 transition-transform ${showDropdown ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                          </button>
                          
                          {showDropdown && (
                            <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-brand-200 rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.15)] z-[100] overflow-hidden py-1">
                              {countries.map((c) => (
                                <button
                                  key={c.code}
                                  type="button"
                                  onClick={() => {
                                    setCountry(c);
                                    setPhoneBody("");
                                    setShowDropdown(false);
                                  }}
                                  className="w-full flex items-center gap-3 px-4 py-3 text-left text-sm hover:bg-brand-50 hover:text-brand-900 transition-colors cursor-pointer"
                                >
                                  <div className="pointer-events-none flex items-center justify-center shrink-0">
                                    {c.flag}
                                  </div>
                                  <span className="flex-1 font-medium text-brand-900 pointer-events-none">{c.name}</span>
                                  <span className="text-brand-500 font-medium pointer-events-none">{c.prefix}</span>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Prefix & Input */}
                        <div className="flex items-center bg-brand-50 px-3 font-semibold text-brand-900 border-r border-brand-100">
                          {country.prefix}
                        </div>
                        <input
                          id="c-phone"
                          name="phoneBody"
                          type="tel"
                          value={phoneBody}
                          onChange={onPhoneChange}
                          onKeyDown={onPhoneKeyDown}
                          required
                          className="flex-1 w-full rounded-r-lg bg-transparent px-3 py-3.5 text-base outline-none text-brand-900 placeholder:text-brand-300"
                          placeholder={phoneFormat.placeholder}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        className="block text-xs font-bold uppercase tracking-[0.15em] text-brand-600 mb-2"
                        htmlFor="c-message"
                      >
                        Ваш запрос
                      </label>
                      <textarea
                        id="c-message"
                        name="message"
                        value={form.message}
                        onChange={onMessageChange}
                        required
                        rows={3}
                        className="w-full px-4 py-3.5 text-base border border-brand-200 rounded-lg text-brand-900 bg-white placeholder:text-brand-300 focus:outline-none focus:ring-1 focus:ring-brand-500 focus:border-brand-500 transition-shadow resize-none"
                        placeholder="Город, бюджет, сроки..."
                      />
                    </div>

                    {/* Consent Checkbox */}
                    <div className="pt-2">
                      <label htmlFor="consent-check" className="flex items-start gap-3 cursor-pointer group">
                        {/* Visible, state-driven checkbox box */}
                        <div className="relative flex items-center justify-center mt-0.5 shrink-0">
                          <input
                            id="consent-check"
                            type="checkbox"
                            required
                            checked={consent}
                            onChange={(e) => setConsent(e.target.checked)}
                            style={{ position: "absolute", opacity: 0, width: "100%", height: "100%", cursor: "pointer", margin: 0 }}
                          />
                          <div
                            style={{
                              width: 20,
                              height: 20,
                              borderRadius: 4,
                              border: `2px solid ${consent ? "#1a2744" : "#c7d0e0"}`,
                              backgroundColor: consent ? "#1a2744" : "#fff",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              transition: "background-color 0.15s, border-color 0.15s",
                              pointerEvents: "none",
                              flexShrink: 0,
                            }}
                          >
                            {consent && (
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4.5 12.75l6 6 9-13.5" />
                              </svg>
                            )}
                          </div>
                        </div>
                        <span className="text-[13px] sm:text-sm text-brand-600 leading-snug select-none">
                          Я соглашаюсь с обработкой персональных данных и принимаю условия{" "}
                          <Link href="/privacy" target="_blank" onClick={(e) => e.stopPropagation()} className="text-brand-900 underline hover:text-accent transition-colors">
                            политики конфиденциальности
                          </Link>.
                        </span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={!isFormValid || submitting}
                      className="btn-solid w-full justify-center py-[14px] text-base mt-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-brand-400 group relative overflow-hidden"
                    >
                      <span className={`inline-flex items-center gap-2 transition-transform duration-300 ${submitting ? 'translate-y-[-150%]' : 'translate-y-0'}`}>
                        Отправить заявку
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                      {submitting && (
                        <span className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-5 h-5 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                        </span>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
