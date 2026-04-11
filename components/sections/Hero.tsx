"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [headingRef.current, subRef.current, ctaRef.current, statsRef.current];
    const timers = els.map((el, i) => {
      if (!el) return;
      return setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, i * 160);
    });
    return () => timers.forEach((t) => t && clearTimeout(t));
  }, []);

  const animStyle = {
    opacity: 0,
    transform: "translateY(28px)",
    transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
  };

  return (
    <section className="relative min-h-screen flex flex-col" id="hero">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient" />

      {/* Decorative pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Gold accent line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Main content */}
      <div className="relative flex-1 flex items-center pt-28 pb-20">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">
            {/* Text column */}
            <div className="lg:col-span-6 xl:col-span-5">
              <div style={animStyle} ref={headingRef}>
                <div className="label-overline text-gold-300 mb-6">
                  Риэлтор · Краснодар · Геленджик
                </div>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.1] tracking-tight mb-6 text-balance">
                  Недвижимость,{" "}
                  <span className="text-gold-300">которой можно</span>{" "}
                  доверять
                </h1>
              </div>

              <p
                ref={subRef}
                className="text-base sm:text-lg text-white/65 leading-relaxed mb-8 max-w-lg text-balance"
                style={animStyle}
              >
                Помогаю найти, купить и продать жильё в Краснодаре и Геленджике.
                Полное сопровождение сделки от первого звонка до подписания документов.
              </p>

              <div
                ref={ctaRef}
                className="flex flex-col sm:flex-row gap-3"
                style={animStyle}
              >
                <a href="#contact" className="btn-primary">
                  Подобрать объект
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a href="tel:+79288497980" className="btn-ghost">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  +7 928 849-79-80
                </a>
              </div>
            </div>

            {/* Visual column */}
            <div className="lg:col-span-6 xl:col-span-7 lg:pl-8">
              <div className="relative">
                {/* Main placeholder image */}
                <div className="relative aspect-[4/3] lg:aspect-[3/2] overflow-hidden bg-city-krasnodar">
                  {/* Decorative grid lines */}
                  <div className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                      `,
                      backgroundSize: "60px 60px",
                    }}
                  />
                  {/* City silhouette placeholder */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-white/10 font-serif text-6xl lg:text-8xl font-light tracking-widest select-none">
                      КРАСНОДАР
                    </div>
                  </div>
                  {/* Placeholder label */}
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-2">
                      <p className="text-2xs text-white/50 uppercase tracking-widest font-sans">
                        Здесь будет ваш ключевой визуальный материал
                      </p>
                    </div>
                  </div>
                  {/* Gold corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold/60" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold/60" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold/60" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold/60" />
                </div>

                {/* Floating info card */}
                <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white shadow-2xl shadow-ink-900/15 p-5 w-56">
                  <div className="text-2xs font-sans uppercase tracking-widest2 text-gold mb-2">
                    Прямо сейчас
                  </div>
                  <div className="font-serif text-2xl font-medium text-ink-900 mb-0.5">
                    Краснодар
                  </div>
                  <div className="text-xs text-ink-500 font-sans">
                    и Геленджик
                  </div>
                  <div className="mt-3 pt-3 border-t border-ink-100 text-2xs text-ink-400 font-sans">
                    Актуальные предложения в обоих городах
                  </div>
                </div>

                {/* Small accent card */}
                <div className="absolute -top-4 -right-4 md:-right-6 bg-ink-950 text-white p-4 w-40 shadow-xl shadow-ink-900/30">
                  <div className="text-2xs font-sans uppercase tracking-widest2 text-gold-400 mb-2">
                    Подход
                  </div>
                  <div className="text-sm font-sans font-light text-white/80 leading-snug">
                    Личное сопровождение каждой сделки
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div
        ref={statsRef}
        className="relative border-t border-white/10"
        style={animStyle}
      >
        <div className="container-site py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "2", suf: " города", label: "Краснодар и Геленджик" },
              { num: "100", suf: "%", label: "Личное ведение сделки" },
              { num: "1", suf: " звонок", label: "До начала работы" },
              { num: "Полная", suf: "", label: "Юридическая поддержка" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col">
                <div className="text-xl sm:text-2xl font-serif font-light text-white mb-1">
                  {s.num}
                  <span className="text-gold-300">{s.suf}</span>
                </div>
                <div className="text-xs text-white/45 font-sans">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent pointer-events-none" />
    </section>
  );
}
