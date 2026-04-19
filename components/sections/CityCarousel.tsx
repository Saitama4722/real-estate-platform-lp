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
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-16 xl:gap-20 items-center">

          {/* ── Left: text ── */}
          <div className="lg:w-[36%] xl:w-[33%] shrink-0">
            <p className="eyebrow mb-4">Локации</p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3rem] font-semibold tracking-tight text-white leading-[1.1] text-balance">
              Краснодар и Геленджик — два разных сценария покупки
            </h2>
            <p className="mt-5 text-base sm:text-lg text-white/55 leading-relaxed max-w-md">
              Подбираю объекты под вашу цель: для жизни, отдыха, переезда или инвестиций. Краснодар — для ритма города и инфраструктуры, Геленджик — для моря, статуса и курортного формата жизни.
            </p>
            <a href="#contact" className="btn-outline mt-10 w-fit border-gold-DEFAULT/50 text-gold-300 hover:bg-gold-DEFAULT hover:border-gold-DEFAULT hover:text-white">
              Подобрать объект
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* ── Right: city cards ── */}
          <div className="lg:flex-1 w-full">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {cities.map((city) => (
                <a
                  key={city.name}
                  href="#contact"
                  className="group block"
                >
                  <div className="protected-image relative aspect-[3/4] overflow-hidden rounded-2xl bg-ink-800 shadow-[0_8px_40px_rgba(0,0,0,0.35)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1">
                    {/* Photo */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.05]"
                      style={{ backgroundImage: `url(${city.image})` }}
                      role="img"
                      aria-label={city.name}
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/20 to-transparent" />
                    {/* Gold tint on hover */}
                    <div className="absolute inset-0 bg-gold-DEFAULT/0 group-hover:bg-gold-DEFAULT/5 transition-colors duration-500" />

                    {/* City name */}
                    <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6">
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold-300/80 mb-2">
                        {city.desc}
                      </p>
                      <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white leading-tight">
                        {city.name}
                      </h3>
                      <p className="mt-2 text-sm font-medium text-white/60">{city.count}</p>
                    </div>

                    {/* Arrow indicator */}
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gold-DEFAULT/0 border border-gold-DEFAULT/0 group-hover:bg-gold-DEFAULT/20 group-hover:border-gold-DEFAULT/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
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
