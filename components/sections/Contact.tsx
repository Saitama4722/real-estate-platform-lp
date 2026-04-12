"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-28 min-h-[560px] sm:min-h-[600px]"
    >
      {/* ── Map iframe as full-section background ── */}
      <iframe
        className="absolute inset-0 w-full h-full border-0"
        loading="lazy"
        src="https://maps.google.com/maps?q=Krasnodar,Russia&t=m&z=12&output=embed&iwloc=near"
        title="Краснодар, Россия"
        aria-label="Карта Краснодара"
      />
      {/* Overlay to soften the map */}
      <div className="absolute inset-0 bg-white/20" aria-hidden />

      {/* ── Form card — right half ── */}
      <div className="relative z-10 container-site py-[70px]">
        <div className="flex justify-end">
          <div className="w-full md:w-[52%] lg:w-[45%] xl:w-[42%]">
            <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.18)] p-7 sm:p-9">
              <div className="mb-7">
                <h2 className="text-2xl sm:text-[1.75rem] font-semibold tracking-tight text-brand-900">
                  Свяжитесь с нами
                </h2>
                <p className="mt-2 text-[14px] text-brand-400 leading-relaxed">
                  Оставьте запрос — ответим по&nbsp;делу и&nbsp;предложим следующий шаг
                </p>
              </div>

              {sent ? (
                <div className="py-10 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft text-accent">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-brand-900">Запрос отправлен</h3>
                  <p className="mt-2 text-sm text-brand-400">
                    Свяжусь удобным способом и уточню детали.
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
                <form onSubmit={onSubmit} className="space-y-4">
                  <div>
                    <label
                      className="block text-xs font-semibold uppercase tracking-wider text-brand-400 mb-2"
                      htmlFor="c-name"
                    >
                      Ваше имя
                    </label>
                    <input
                      id="c-name"
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      required
                      className="input-field"
                      placeholder="Как к вам обращаться"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-xs font-semibold uppercase tracking-wider text-brand-400 mb-2"
                      htmlFor="c-phone"
                    >
                      Телефон
                    </label>
                    <input
                      id="c-phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={onChange}
                      className="input-field"
                      placeholder="+7 900 000-00-00"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-xs font-semibold uppercase tracking-wider text-brand-400 mb-2"
                      htmlFor="c-email"
                    >
                      Email
                    </label>
                    <input
                      id="c-email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={onChange}
                      className="input-field"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-xs font-semibold uppercase tracking-wider text-brand-400 mb-2"
                      htmlFor="c-message"
                    >
                      Ваш запрос
                    </label>
                    <textarea
                      id="c-message"
                      name="message"
                      value={form.message}
                      onChange={onChange}
                      required
                      rows={4}
                      className="input-field resize-none"
                      placeholder="Город, бюджет, сроки, что важно в объекте"
                    />
                  </div>

                  <button type="submit" className="btn-solid w-full justify-center py-4 text-[15px]">
                    Отправить заявку
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
