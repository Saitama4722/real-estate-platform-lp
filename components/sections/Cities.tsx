const cities = [
  {
    id: "krasnodar",
    name: "Краснодар",
    subtitle: "Деловая столица юга России",
    desc: "Один из самых динамично растущих городов страны. Развитая инфраструктура, активный рынок новостроек, стабильный спрос на вторичное жильё. Краснодар — выгодная точка для жизни и инвестиций.",
    points: [
      "Квартиры в новостройках и на вторичном рынке",
      "Коттеджные посёлки и загородная недвижимость",
      "Коммерческие площади и инвестиционные объекты",
    ],
    bgClass: "bg-city-krasnodar",
    label: "Краснодар",
    watermark: "КРД",
  },
  {
    id: "gelendzhik",
    name: "Геленджик",
    subtitle: "Курортная жемчужина Черноморья",
    desc: "Элитный курортный город с развитой туристической инфраструктурой. Идеален для приобретения курортного жилья, апартаментов под аренду и премиального жилья у моря.",
    points: [
      "Апартаменты и квартиры с видом на море",
      "Частные дома и коттеджи в тихих районах",
      "Объекты для курортной аренды",
    ],
    bgClass: "bg-city-gelendzhik",
    label: "Геленджик",
    watermark: "ГЛД",
  },
];

export default function Cities() {
  return (
    <section id="cities" className="section-padding bg-cream-100">
      <div className="container-site">
        {/* Header */}
        <div className="max-w-xl mb-14">
          <div className="label-overline mb-4">Моя география</div>
          <h2 className="heading-section mb-5">
            Два города —{" "}
            <span className="text-gold">один специалист</span>
          </h2>
          <div className="gold-line mb-5" />
          <p className="text-sm text-ink-500 leading-relaxed">
            Работаю в Краснодаре и Геленджике: знаю особенности каждого рынка,
            актуальные районы и объекты, которых нет в открытом доступе.
          </p>
        </div>

        {/* City panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {cities.map((city) => (
            <div key={city.id} className="group relative overflow-hidden">
              {/* Placeholder background */}
              <div className={`relative aspect-[4/3] ${city.bgClass} overflow-hidden`}>
                {/* Grid overlay */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                  }}
                />

                {/* Watermark text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-8xl md:text-9xl font-light text-white/[0.06] select-none tracking-widest">
                    {city.watermark}
                  </span>
                </div>

                {/* Gradient overlay for content */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent" />

                {/* Placeholder label */}
                <div className="absolute top-4 left-4">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/10 px-3 py-1.5">
                    <span className="text-2xs font-sans uppercase tracking-widest2 text-white/50">
                      Место для фото города
                    </span>
                  </div>
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="text-2xs font-sans uppercase tracking-widest2 text-gold-300 mb-2">
                    {city.subtitle}
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl font-light text-white mb-3">
                    {city.name}
                  </h3>
                  <p className="text-sm text-white/65 leading-relaxed mb-5 max-w-md text-balance">
                    {city.desc}
                  </p>
                  <ul className="space-y-1.5 mb-6">
                    {city.points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-gold-300 flex-shrink-0" />
                        <span className="text-xs text-white/60 font-sans">{p}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-sans text-white/80 hover:text-white group-hover:text-gold-200 transition-colors duration-200"
                  >
                    Объекты в {city.name === "Краснодар" ? "Краснодаре" : "Геленджике"}
                    <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
