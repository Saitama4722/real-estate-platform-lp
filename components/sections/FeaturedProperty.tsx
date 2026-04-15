const features = [
  { icon: "🛏", value: "5 спален" },
  { icon: "🚿", value: "4 санузла" },
  { icon: "📐", value: "210 м²" },
  { icon: "🅿", value: "2 машиноместа" },
];

export default function FeaturedProperty() {
  return (
    <section className="py-[90px] bg-white">
      <div className="container-site">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-[2.1rem] font-semibold tracking-tight text-brand-900">
              Объект в фокусе
            </h2>
            <p className="mt-2 text-[15px] text-brand-400">
              Флагманское предложение — детальный разбор
            </p>
          </div>
          <a
            href="#listings"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-accent hover:text-accent-dark transition shrink-0"
          >
            Все объекты
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        {/* Large feature card */}
        <article className="group grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.1)] bg-white">
          {/* Image — 60% width */}
          <div className="protected-image relative min-h-[320px] lg:min-h-[480px] overflow-hidden bg-brand-100">
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?auto=format&fit=crop&w=1400&q=80)`,
              }}
              role="img"
              aria-label="Вилла с террасой и садом"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Badges */}
            <div className="absolute top-5 left-5 flex gap-2">
              <span className="bg-accent text-white text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 leading-none">
                Рекомендуем
              </span>
              <span className="bg-brand-900/90 text-white text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 leading-none">
                В продаже
              </span>
            </div>

            {/* Feature chips */}
            <div className="absolute bottom-5 left-5 flex flex-wrap gap-2">
              {features.map((f) => (
                <span
                  key={f.value}
                  className="bg-white/90 backdrop-blur-sm text-brand-900 text-[11px] font-semibold px-3 py-1.5 rounded-full leading-none"
                >
                  {f.value}
                </span>
              ))}
            </div>
          </div>

          {/* Details — 40% width */}
          <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12 xl:p-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-400">
              Краснодарский край, пригород
            </p>
            <h3 className="mt-3 text-2xl sm:text-3xl font-semibold text-brand-900 leading-snug">
              Вилла с террасой и садом
            </h3>
            <p className="mt-4 text-[14px] text-brand-500 leading-relaxed">
              Просторная вилла в&nbsp;закрытом посёлке. Открытая терраса с&nbsp;видом на&nbsp;зелёный сад, бассейн, гараж на&nbsp;2 авто. Премиальная отделка, автоматизация.
            </p>

            {/* Price */}
            <div className="mt-7 flex items-end gap-6">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-400 mb-1">
                  Бюджет
                </p>
                <p className="text-2xl font-bold text-brand-900">По запросу</p>
              </div>
            </div>

            {/* Feature list */}
            <div className="mt-7 grid grid-cols-2 gap-y-3 gap-x-6 pb-7 border-b border-brand-100">
              {features.map((f) => (
                <div key={f.value} className="flex items-center gap-2">
                  <span className="text-base">{f.icon}</span>
                  <span className="text-[13px] text-brand-600 font-medium">{f.value}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="btn-solid">
                Запросить информацию
              </a>
              <a href="#listings" className="btn-outline">
                Все объекты
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
