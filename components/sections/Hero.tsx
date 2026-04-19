"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-ink-950"
    >
      {/* ── VISIBLE Architectural Premium Background ── */}
      <div className="absolute inset-0 overflow-hidden bg-[#0A0E1A] pointer-events-none z-0">

        {/* Layer 1: Ambient Light Glows — gold tones */}
        <div
          className="absolute top-[-10%] -left-[10%] w-[50vw] h-[50vw] max-w-[800px] rounded-full bg-gold-500/8 blur-[120px] will-change-transform motion-safe:animate-[heroDriftDark_45s_ease-in-out_infinite_alternate]"
          aria-hidden
        />
        <div
          className="absolute bottom-[-15%] right-[-5%] w-[60vw] h-[60vw] max-w-[900px] rounded-full bg-gold-300/10 blur-[140px] will-change-transform motion-safe:animate-[heroDriftLight_35s_ease-in-out_infinite_alternate]"
          aria-hidden
        />

        {/* Layer 2: Subtle Grid */}
        <div
          className="absolute inset-[0] opacity-[0.03] bg-[linear-gradient(to_right,#c9a84c_1px,transparent_1px),linear-gradient(to_bottom,#c9a84c_1px,transparent_1px)] bg-[size:3rem_3rem] motion-safe:animate-[parallaxSlow_50s_linear_infinite_alternate]"
          aria-hidden
        />

        {/* Layer 3: Architectural Skyline */}
        <div className="absolute bottom-0 right-[-5%] w-[85vw] h-[55vh] flex items-end justify-end opacity-100 motion-safe:animate-[parallaxMid_40s_ease-in-out_infinite_alternate]">

          {/* Building 1 */}
          <div className="w-[20%] h-[65%] bg-gradient-to-t from-transparent to-[#0f172a] border-t border-l border-gold-DEFAULT/20 rounded-tl-sm shadow-2xl relative z-0" aria-hidden />

          {/* Building 2 (Main Skyscraper) */}
          <div className="w-[25%] h-[95%] bg-gradient-to-t from-[#0A0E1A] to-[#1a2035] border-t border-l border-r border-gold-DEFAULT/30 rounded-t-lg shadow-2xl relative z-10 flex flex-col justify-start pt-12 px-6 gap-6" aria-hidden>
            <div className="absolute top-0 right-0 w-[40%] h-[30%] bg-gold-400/10 blur-[40px]" />
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={`b2-${i}`} className="w-full h-px bg-gold-DEFAULT/15" />
            ))}
          </div>

          {/* Building 3 (Premium Villa) */}
          <div className="w-[30%] h-[50%] bg-gradient-to-t from-[#0f172a] to-[#1e2d45] border-t border-l border-r border-gold-DEFAULT/20 rounded-t-2xl relative z-20 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]" aria-hidden>
            <div className="absolute top-0 left-0 w-full h-[15%] bg-gold-DEFAULT/10 rounded-t-2xl border-b border-gold-DEFAULT/20" />
            <div className="absolute top-[25%] left-0 w-full flex gap-5 px-8 h-[60%]">
              <div className="w-full h-full border border-gold-DEFAULT/10 rounded-sm bg-[#0a0e1a]/60 shadow-inner" />
              <div className="w-full h-full border border-gold-DEFAULT/10 rounded-sm bg-[#0a0e1a]/60 shadow-inner" />
            </div>
          </div>

        </div>

        {/* Layer 5: Bottom blend */}
        <div className="absolute inset-x-0 bottom-0 h-[30vh] bg-gradient-to-t from-[#0A0E1A] to-transparent z-30" aria-hidden />

        {/* Left text-protection gradient */}
        <div
          className="absolute inset-y-0 left-0 w-full lg:w-[80%] bg-gradient-to-r from-[#0A0E1A] via-[#0A0E1A]/90 to-transparent z-10"
          aria-hidden
        />
      </div>

      {/* Content */}
      <div className="relative z-20 pointer-events-auto container-site w-full py-28 sm:py-36 lg:py-0 lg:min-h-screen lg:flex lg:items-center">
        <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-10">

          {/* ── Left: text + mini-stats ── */}
          <div className="lg:w-[52%] xl:w-[50%]">

            {/* Eyebrow */}
            <p className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.3em] text-gold-300/80 mb-7">
              <span className="block w-6 h-px bg-gold-400/60" />
              Риэлтор Владимир Балашов
            </p>

            {/* H1 */}
            <h1 className="mt-4 font-serif text-[2.6rem] sm:text-[3.4rem] lg:text-[3.6rem] xl:text-[4rem] font-semibold tracking-tight text-white leading-[1.08] max-w-[18ch] text-balance opacity-0 animate-[fadeUp_600ms_ease-out_forwards]">
              Подберём недвижимость в Краснодаре и Геленджике под вашу задачу
            </h1>

            {/* Sub */}
            <p className="mt-6 text-lg tracking-wide text-white/75 max-w-[480px] leading-relaxed opacity-0 animate-[fadeUp_600ms_ease-out_150ms_both]">
              Без переплат, с полной проверкой и сопровождением сделки под ключ
            </p>

            {/* Micro-offer */}
            <p className="mt-4 text-sm font-medium tracking-wide text-white/45 max-w-[480px] leading-relaxed opacity-0 animate-[fadeIn_500ms_ease-out_300ms_both]">
              Бесплатная консультация · Работаем без навязывания · Только проверенные объекты
            </p>

            {/* Mini stats */}
            <div className="mt-12 flex items-center flex-wrap gap-y-5 gap-x-8">
              {[
                { value: "120+",      label: "сделок закрыто" },
                { value: "8 лет",    label: "на рынке" },
                { value: "Под ключ", label: "сопровождение" },
              ].map((s, i, arr) => (
                <div key={s.label} className="flex items-center gap-8">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-gold-300 leading-none">
                      {s.value}
                    </span>
                    <span className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                      {s.label}
                    </span>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="w-px h-7 bg-gold-DEFAULT/25" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: search card ── */}
          <div className="w-full lg:w-[42%] xl:w-[38%] opacity-0 animate-[fadeUp_600ms_ease-out_400ms_forwards]">
            <div className="bg-cream-50/98 backdrop-blur-xl rounded-3xl shadow-[0_32px_80px_-12px_rgba(0,0,0,0.6)] border border-gold-DEFAULT/20 overflow-hidden">

              {/* Card header */}
              <div className="px-7 pt-7 pb-5 border-b border-cream-200 bg-white/60">
                <h2 className="font-serif text-xl font-semibold text-ink-900 leading-none tracking-tight">
                  Подбор недвижимости
                </h2>
                <p className="mt-2 text-sm font-medium text-ink-500">
                  Краснодар и Геленджик
                </p>
              </div>

              {/* Form fields */}
              <div className="p-7 space-y-5 bg-cream-50">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.2em] text-gold-500 mb-2.5">
                    Тип объекта
                  </label>
                  <select className="input-field bg-white border-cream-200 text-ink-900 font-medium hover:border-gold-300 focus:bg-white transition-colors duration-200 cursor-pointer">
                    <option value="apartment">Квартира</option>
                    <option value="house">Дом / Коттедж</option>
                    <option value="townhouse">Таунхаус</option>
                    <option value="newbuild">Новостройка</option>
                    <option value="land">Участок</option>
                    <option value="commercial">Коммерческая</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.2em] text-gold-500 mb-2.5">
                    Бюджет
                  </label>
                  <select className="input-field bg-white border-cream-200 text-ink-900 font-medium hover:border-gold-300 focus:bg-white transition-colors duration-200 cursor-pointer">
                    <option value="">Любой бюджет</option>
                    <option value="5">До 5 млн ₽</option>
                    <option value="10">5–10 млн ₽</option>
                    <option value="20">10–20 млн ₽</option>
                    <option value="30">20–30 млн ₽</option>
                    <option value="30+">Свыше 30 млн ₽</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.2em] text-gold-500 mb-2.5">
                    Город
                  </label>
                  <select className="input-field bg-white border-cream-200 text-ink-900 font-medium hover:border-gold-300 focus:bg-white transition-colors duration-200 cursor-pointer">
                    <option value="krasnodar">Краснодар</option>
                    <option value="gelendzhik">Геленджик</option>
                  </select>
                </div>

                <a
                  href="#contact"
                  className="btn-solid w-full justify-center py-4 text-base rounded-full mt-2 group"
                >
                  Найти объект
                  <svg className="w-4 h-4 ml-1 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>

              {/* Card footer */}
              <div className="px-7 pb-6 bg-cream-100/60">
                <p className="text-xs font-semibold text-ink-400 text-center tracking-wide">
                  Бесплатная консультация · Без обязательств
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
