"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Static form — no backend. Shows a thank-you state.
    setSent(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="section-padding bg-cream">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — info */}
          <div>
            <div className="label-overline mb-4">Контакт</div>
            <h2 className="heading-section mb-5">
              Обсудим вашу{" "}
              <span className="text-gold">задачу</span>
            </h2>
            <div className="gold-line mb-7" />

            <p className="text-base text-ink-600 leading-relaxed mb-10 max-w-md">
              Если вы хотите купить, продать или арендовать недвижимость
              в Краснодаре или Геленджике — напишите или позвоните.
              Первая консультация бесплатна.
            </p>

            {/* Contact block */}
            <div className="space-y-5 mb-10">
              <a
                href="tel:+79288497980"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-ink-950 flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors duration-300">
                  <svg className="w-5 h-5 text-gold group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xs font-sans uppercase tracking-widest2 text-ink-400 mb-0.5">
                    Телефон
                  </div>
                  <div className="font-serif text-xl text-ink-900 group-hover:text-gold transition-colors duration-200">
                    +7 928 849-79-80
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-ink-50 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-ink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xs font-sans uppercase tracking-widest2 text-ink-400 mb-0.5">
                    Работаю в городах
                  </div>
                  <div className="text-base text-ink-800 font-sans font-medium">
                    Краснодар · Геленджик
                  </div>
                </div>
              </div>
            </div>

            {/* Tone strip */}
            <div className="border-l-4 border-gold/40 pl-5 py-1">
              <p className="text-sm text-ink-500 italic leading-relaxed">
                «Помогаю решить жилищный вопрос — без лишних
                нервов и с полным пониманием каждого шага.»
              </p>
              <p className="text-xs text-ink-400 mt-2 font-sans">
                — Владимир Балашов
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <div className="bg-white p-8 md:p-10 shadow-sm shadow-ink-900/5 border border-ink-100">
              {sent ? (
                <div className="py-10 text-center">
                  <div className="w-14 h-14 bg-gold/10 flex items-center justify-center mx-auto mb-5">
                    <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl text-ink-900 mb-3">
                    Сообщение отправлено
                  </h3>
                  <p className="text-sm text-ink-500">
                    Владимир свяжется с вами в ближайшее время.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 text-xs font-sans text-ink-400 hover:text-ink-600 underline underline-offset-2"
                  >
                    Отправить ещё одно сообщение
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-7">
                    <h3 className="font-serif text-xl text-ink-900 mb-1.5">
                      Оставьте заявку
                    </h3>
                    <p className="text-sm text-ink-400">
                      Опишите задачу — перезвоним и расскажем, чем можем помочь.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-2xs font-sans uppercase tracking-widest text-ink-500 mb-2">
                        Ваше имя
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Иван Иванов"
                        required
                        className="w-full border border-ink-200 bg-cream-50 px-4 py-3 text-sm font-sans text-ink-900 placeholder:text-ink-300
                                   focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label className="block text-2xs font-sans uppercase tracking-widest text-ink-500 mb-2">
                        Телефон
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+7 ___ ___-__-__"
                        required
                        className="w-full border border-ink-200 bg-cream-50 px-4 py-3 text-sm font-sans text-ink-900 placeholder:text-ink-300
                                   focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label className="block text-2xs font-sans uppercase tracking-widest text-ink-500 mb-2">
                        Ваша задача
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Ищу квартиру в Краснодаре, 2-3 комнаты, бюджет до …"
                        rows={4}
                        className="w-full border border-ink-200 bg-cream-50 px-4 py-3 text-sm font-sans text-ink-900 placeholder:text-ink-300 resize-none
                                   focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all duration-200"
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full justify-center mt-2">
                      Отправить заявку
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </button>

                    <p className="text-2xs text-ink-300 text-center font-sans">
                      Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                    </p>
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
