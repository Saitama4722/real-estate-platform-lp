// TEMPORARY IMAGES — replace with real city photos when available
const cities = [
  {
    name: "Краснодар",
    desc: "Город для жизни и инвестиций",
    count: "Квартиры, дома, новостройки",
    image: "/images/cities/krd1.jfif",
  },
  {
    name: "Геленджик",
    desc: "Недвижимость у моря",
    count: "Апартаменты, дома, видовые объекты",
    image: "/images/cities/gelen1.jpg",
  },
];

export default function CityCarousel() {
  return (
    <section id="cities" className="scroll-mt-28 section-padding bg-ink-900">
      <div className="container-site">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 xl:gap-24 items-center">

          {/* ── Left: text ── */}
          <div className="lg:w-[38%] xl:w-[35%] shrink-0">
            <p className="eyebrow mb-6">Локации</p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.2rem] font-semibold tracking-tight text-white leading-[1.05] text-balance">
              Краснодар и Геленджик — два разных сценария покупки
            </h2>

            {/* Gold rule */}
            <div className="mt-8 w-14 h-px bg-gradient-to-r from-gold-400/70 to-transparent" />

            <p
              className="mt-6 text-base text-ink-300/80 leading-[1.9] max-w-md tracking-[0.02em]"
              style={{ fontFamily: "var(--font-josefin)", fontWeight: 300 }}
            >
              Подбираю объекты под вашу цель: для жизни, отдыха, переезда или инвестиций. Краснодар — для ритма города и инфраструктуры, Геленджик — для моря, статуса и курортного формата жизни.
            </p>
            <a
              href="#contact"
              className="btn-outline mt-10 w-fit cursor-pointer"
            >
              Подобрать объект
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* ── Right: city cards ── */}
          <div className="lg:flex-1 w-full">
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {cities.map((city) => (
                <a
                  key={city.name}
                  href="#contact"
                  className="group block cursor-pointer"
                >
                  <div className="protected-image relative aspect-[2/3] sm:aspect-[3/4] overflow-hidden rounded-2xl bg-ink-800 shadow-[0_8px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_24px_80px_rgba(0,0,0,0.7)] transition-all duration-500 hover:-translate-y-2">

                    {/* Photo */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.06]"
                      style={{ backgroundImage: `url(${city.image})` }}
                      role="img"
                      aria-label={city.name}
                    />

                    {/* Dark gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/30 to-ink-950/10" />

                    {/* Gold tint on hover */}
                    <div className="absolute inset-0 bg-gold-DEFAULT/0 group-hover:bg-gold-DEFAULT/6 transition-colors duration-500" />

                    {/* Top label */}
                    <div className="absolute top-4 left-4">
                      <span
                        className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/50"
                        style={{ fontFamily: "var(--font-josefin)" }}
                      >
                        {city.desc}
                      </span>
                    </div>

                    {/* City name bottom */}
                    <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6">
                      <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white leading-tight tracking-wide group-hover:text-gold-200 transition-colors duration-300">
                        {city.name}
                      </h3>
                      <div className="mt-2 flex items-center gap-2">
                        <div className="w-5 h-px bg-gold-400/60 group-hover:w-8 transition-all duration-300" />
                        <p
                          className="text-xs font-medium text-white/50 tracking-[0.08em] group-hover:text-white/70 transition-colors duration-300"
                          style={{ fontFamily: "var(--font-josefin)" }}
                        >
                          {city.count}
                        </p>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gold-DEFAULT/0 border border-gold-DEFAULT/0 group-hover:bg-ink-950/50 group-hover:border-gold-DEFAULT/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <svg className="w-4 h-4 text-gold-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
