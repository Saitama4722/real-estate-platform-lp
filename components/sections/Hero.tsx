"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-ink-950"
    >
      {/* ── Premium Dark Background ── */}
      <div className="absolute inset-0 overflow-hidden bg-[#070A14] pointer-events-none z-0">

        {/* Ambient gold glow — top left */}
        <div
          className="absolute top-[-15%] -left-[15%] w-[55vw] h-[55vw] max-w-[900px] rounded-full bg-gold-400/6 blur-[140px] will-change-transform motion-safe:animate-[heroDriftDark_45s_ease-in-out_infinite_alternate]"
          aria-hidden
        />
        {/* Ambient teal glow — bottom right */}
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[65vw] h-[65vw] max-w-[1000px] rounded-full bg-teal-600/7 blur-[160px] will-change-transform motion-safe:animate-[heroDriftLight_38s_ease-in-out_infinite_alternate]"
          aria-hidden
        />

        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(circle,#c9a84c_1px,transparent_1px)] bg-[size:40px_40px] motion-safe:animate-[parallaxSlow_60s_linear_infinite_alternate]"
          aria-hidden
        />

        {/* Architectural Skyline */}
        <div className="absolute bottom-0 right-[-2%] w-[80vw] h-[60vh] flex items-end justify-end opacity-100 motion-safe:animate-[parallaxMid_45s_ease-in-out_infinite_alternate]">
          {/* Building 1 — left background */}
          <div className="w-[18%] h-[55%] bg-gradient-to-t from-[#070A14] to-[#0f172a]/60 border-t border-l border-gold-DEFAULT/15 rounded-tl-sm relative z-0" aria-hidden />
          {/* Building 2 — main tower */}
          <div className="w-[22%] h-[90%] bg-gradient-to-t from-[#070A14] to-[#131c35] border-t border-l border-r border-gold-DEFAULT/25 rounded-t-lg relative z-10 flex flex-col justify-start pt-10 px-5 gap-5 shadow-[0_-20px_60px_rgba(0,0,0,0.4)]" aria-hidden>
            <div className="absolute top-4 right-3 w-1.5 h-1.5 rounded-full bg-gold-300/50" />
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={`b2-${i}`} className="w-full h-px bg-gold-DEFAULT/10" />
            ))}
          </div>
          {/* Building 3 — villa */}
          <div className="w-[28%] h-[48%] bg-gradient-to-t from-[#0a0f1e] to-[#1a2540] border-t border-l border-r border-gold-DEFAULT/18 rounded-t-2xl relative z-20 shadow-[0_-8px_40px_rgba(0,0,0,0.5)]" aria-hidden>
            <div className="absolute top-0 left-0 w-full h-[12%] bg-gold-DEFAULT/8 rounded-t-2xl border-b border-gold-DEFAULT/15" />
            <div className="absolute top-[24%] left-0 w-full flex gap-4 px-6 h-[55%]">
              <div className="w-full h-full border border-gold-DEFAULT/8 rounded-sm bg-[#070a14]/70" />
              <div className="w-full h-full border border-gold-DEFAULT/8 rounded-sm bg-[#070a14]/70" />
            </div>
          </div>
          {/* Building 4 — far right accent */}
          <div className="w-[15%] h-[35%] bg-gradient-to-t from-[#070A14] to-[#101828]/50 border-t border-l border-gold-DEFAULT/10 rounded-tl-sm relative z-0 ml-1" aria-hidden />
        </div>

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-[35vh] bg-gradient-to-t from-[#070A14] to-transparent z-30" aria-hidden />

        {/* Left text-protection gradient */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[75%] bg-gradient-to-r from-[#070A14] via-[#070A14]/92 to-transparent z-10" aria-hidden />
      </div>

      {/* ── Content ── */}
      <div className="relative z-20 pointer-events-auto container-site w-full py-32 sm:py-40 lg:py-0 lg:min-h-screen lg:flex lg:items-center">
        <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-14 lg:gap-10">

          {/* ── Left: headline + stats ── */}
          <div className="lg:w-[54%] xl:w-[52%]">

            {/* Eyebrow — exaggerated tracking */}
            <p
              className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.4em] text-gold-400/80 mb-8"
              style={{ fontFamily: "var(--font-josefin)" }}
            >
              <span className="block w-8 h-px bg-gold-400/50" />
              Риэлтор Владимир Балашов
            </p>

            {/* H1 — massive Cinzel, exaggerated minimalism */}
            <h1 className="font-serif text-[2.8rem] sm:text-[3.8rem] lg:text-[4.2rem] xl:text-[4.8rem] font-semibold tracking-tight text-white leading-[1.04] max-w-[16ch] text-balance opacity-0 animate-[fadeUp_700ms_cubic-bezier(0.16,1,0.3,1)_forwards]">
              Подберём недвижимость в Краснодаре и Геленджике под вашу задачу
            </h1>

            {/* Decorative gold line */}
            <div className="mt-8 w-16 h-px bg-gradient-to-r from-gold-400/80 to-transparent opacity-0 animate-[fadeIn_500ms_ease-out_300ms_both]" />

            {/* Sub */}
            <p
              className="mt-6 text-lg text-white/65 max-w-[500px] leading-[1.8] tracking-[0.03em] opacity-0 animate-[fadeUp_700ms_cubic-bezier(0.16,1,0.3,1)_200ms_both]"
              style={{ fontFamily: "var(--font-josefin)", fontWeight: 300 }}
            >
              Без переплат, с полной проверкой и сопровождением сделки под ключ
            </p>

            {/* Micro-offer */}
            <p
              className="mt-3 text-sm text-white/35 max-w-[500px] leading-relaxed tracking-[0.06em] opacity-0 animate-[fadeIn_500ms_ease-out_400ms_both]"
              style={{ fontFamily: "var(--font-josefin)" }}
            >
              Бесплатная консультация · Работаем без навязывания · Только проверенные объекты
            </p>

            {/* Stats — large Cinzel numbers */}
            <div className="mt-14 flex items-stretch flex-wrap gap-y-6 gap-x-0">
              {[
                { value: "120+",      label: "сделок закрыто" },
                { value: "8 лет",    label: "на рынке" },
                { value: "Под ключ", label: "сопровождение" },
              ].map((s, i, arr) => (
                <div key={s.label} className="flex items-stretch gap-0">
                  <div className="flex flex-col justify-center pr-8">
                    <span className="font-serif text-3xl sm:text-[2.2rem] font-semibold text-gold-300 leading-none gold-pulse">
                      {s.value}
                    </span>
                    <span
                      className="mt-2 text-[9px] font-bold uppercase tracking-[0.25em] text-white/40"
                      style={{ fontFamily: "var(--font-josefin)" }}
                    >
                      {s.label}
                    </span>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="w-px self-stretch bg-gradient-to-b from-transparent via-gold-DEFAULT/30 to-transparent mr-8" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: search card ── */}
          <div className="w-full lg:w-[40%] xl:w-[37%] opacity-0 animate-[fadeUp_700ms_cubic-bezier(0.16,1,0.3,1)_500ms_forwards]">
            <div className="relative bg-ink-900/90 backdrop-blur-2xl rounded-3xl shadow-[0_40px_100px_-12px_rgba(0,0,0,0.7)] border border-gold-DEFAULT/15 overflow-hidden">

              {/* Top accent line */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />

              {/* Card header */}
              <div className="px-7 pt-8 pb-5 border-b border-gold-DEFAULT/10">
                <h2 className="font-serif text-xl font-semibold text-white leading-none tracking-wide">
                  Подбор недвижимости
                </h2>
                <p
                  className="mt-2 text-xs text-gold-400/70 tracking-[0.2em] uppercase"
                  style={{ fontFamily: "var(--font-josefin)" }}
                >
                  Краснодар и Геленджик
                </p>
              </div>

              {/* Form fields */}
              <div className="p-7 space-y-5">
                <div>
                  <label
                    className="block text-[9px] font-bold uppercase tracking-[0.3em] text-gold-400/80 mb-3"
                    style={{ fontFamily: "var(--font-josefin)" }}
                  >
                    Тип объекта
                  </label>
                  <select className="input-field cursor-pointer">
                    <option value="apartment">Квартира</option>
                    <option value="house">Дом / Коттедж</option>
                    <option value="townhouse">Таунхаус</option>
                    <option value="newbuild">Новостройка</option>
                    <option value="land">Участок</option>
                    <option value="commercial">Коммерческая</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-[9px] font-bold uppercase tracking-[0.3em] text-gold-400/80 mb-3"
                    style={{ fontFamily: "var(--font-josefin)" }}
                  >
                    Бюджет
                  </label>
                  <select className="input-field cursor-pointer">
                    <option value="">Любой бюджет</option>
                    <option value="5">До 5 млн ₽</option>
                    <option value="10">5–10 млн ₽</option>
                    <option value="20">10–20 млн ₽</option>
                    <option value="30">20–30 млн ₽</option>
                    <option value="30+">Свыше 30 млн ₽</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-[9px] font-bold uppercase tracking-[0.3em] text-gold-400/80 mb-3"
                    style={{ fontFamily: "var(--font-josefin)" }}
                  >
                    Город
                  </label>
                  <select className="input-field cursor-pointer">
                    <option value="krasnodar">Краснодар</option>
                    <option value="gelendzhik">Геленджик</option>
                  </select>
                </div>

                <a
                  href="#contact"
                  className="btn-solid w-full justify-center py-4 text-xs rounded-full mt-1 group cursor-pointer"
                >
                  Найти объект
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>

              {/* Card footer */}
              <div className="px-7 pb-7 border-t border-gold-DEFAULT/10 pt-4">
                <p
                  className="text-[9px] font-semibold text-white/30 text-center tracking-[0.2em] uppercase"
                  style={{ fontFamily: "var(--font-josefin)" }}
                >
                  Бесплатная консультация · Без обязательств
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-teal-DEFAULT/30 to-transparent" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
