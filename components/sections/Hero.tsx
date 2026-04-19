"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* ── Background: warm architectural texture ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Warm gradient base — light on left fading to off-white */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-stone-100/80 to-stone-200/60" />
        {/* Architectural line grid — very subtle */}
        <div
          className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#1B3A5C_1px,transparent_1px),linear-gradient(to_bottom,#1B3A5C_1px,transparent_1px)] bg-[size:4rem_4rem]"
          aria-hidden
        />
        {/* Right-side accent wash */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-50/60 to-transparent" aria-hidden />
        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" aria-hidden />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 container-site w-full pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-0 lg:min-h-screen lg:flex lg:items-center">
        <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-14 lg:gap-12">

          {/* ── Left: headline + stats ── */}
          <div className="lg:w-[54%] xl:w-[52%]">

            {/* Eyebrow */}
            <p className="eyebrow mb-6 flex items-center gap-2.5">
              <span className="block w-8 h-px bg-accent-500" />
              Риэлтор Владимир Балашов
            </p>

            {/* H1 — large Cormorant Garamond, dark charcoal on white */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-semibold tracking-tight text-stone-900 leading-[1.05] max-w-[18ch] text-balance opacity-0 animate-[fadeUp_600ms_cubic-bezier(0.16,1,0.3,1)_forwards]">
              Подберём недвижимость в Краснодаре и Геленджике под вашу задачу
            </h1>

            {/* Accent rule */}
            <div className="mt-8 w-16 h-0.5 bg-accent-500 opacity-0 animate-[fadeIn_400ms_ease-out_300ms_both]" />

            {/* Sub */}
            <p className="mt-6 text-lg text-stone-600 max-w-[480px] leading-relaxed opacity-0 animate-[fadeUp_600ms_cubic-bezier(0.16,1,0.3,1)_200ms_both]">
              Без переплат, с полной проверкой и сопровождением сделки под ключ
            </p>

            {/* Micro-offer */}
            <p className="mt-3 text-sm text-stone-500 max-w-[480px] leading-relaxed opacity-0 animate-[fadeIn_400ms_ease-out_400ms_both]">
              Бесплатная консультация · Работаем без навязывания · Только проверенные объекты
            </p>

            {/* Stats */}
            <div className="mt-12 flex items-stretch flex-wrap gap-y-6">
              {[
                { value: "120+",      label: "сделок закрыто" },
                { value: "8 лет",    label: "на рынке" },
                { value: "Под ключ", label: "сопровождение" },
              ].map((s, i, arr) => (
                <div key={s.label} className="flex items-stretch">
                  <div className="flex flex-col justify-center pr-8">
                    <span className="font-serif text-3xl sm:text-[2.2rem] font-semibold text-stone-900 leading-none">
                      {s.value}
                    </span>
                    <span className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-stone-500">
                      {s.label}
                    </span>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="w-px self-stretch bg-stone-200 mr-8" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: search card ── */}
          <div className="w-full lg:w-[40%] xl:w-[38%] opacity-0 animate-[fadeUp_600ms_cubic-bezier(0.16,1,0.3,1)_450ms_forwards]">
            <div className="bg-white rounded-2xl shadow-panel border border-stone-200 overflow-hidden">

              {/* Card header */}
              <div className="px-7 pt-7 pb-5 border-b border-stone-100 bg-stone-50">
                <h2 className="font-serif text-xl font-semibold text-stone-900 leading-none tracking-tight">
                  Подбор недвижимости
                </h2>
                <p className="mt-2 text-sm text-stone-500">
                  Краснодар и Геленджик
                </p>
              </div>

              {/* Form fields */}
              <div className="p-7 space-y-5 bg-white">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500 mb-2.5">
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
                  <label className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500 mb-2.5">
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
                  <label className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500 mb-2.5">
                    Город
                  </label>
                  <select className="input-field cursor-pointer">
                    <option value="krasnodar">Краснодар</option>
                    <option value="gelendzhik">Геленджик</option>
                  </select>
                </div>

                <a
                  href="#contact"
                  className="btn-solid w-full justify-center py-4 text-sm mt-2 group cursor-pointer"
                >
                  Найти объект
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>

              {/* Card footer */}
              <div className="px-7 pb-6 bg-stone-50 border-t border-stone-100">
                <p className="text-xs text-stone-500 text-center">
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
