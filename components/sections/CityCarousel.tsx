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
    <section id="cities" className="scroll-mt-28 section-padding bg-[#f9f7f4]">
      <div className="container-site">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-16 xl:gap-20 items-center">

          {/* ── Left: text ── */}
          <div className="lg:w-[36%] xl:w-[33%] shrink-0">
            <p className="eyebrow mb-4">Локации</p>
            <h2 className="title-section text-balance">
              Краснодар и Геленджик — два разных сценария покупки
            </h2>
            <p className="subtitle-section">
              Подбираю объекты под вашу цель: для жизни, отдыха, переезда или инвестиций. Краснодар — для ритма города и инфраструктуры, Геленджик — для моря, статуса и курортного формата жизни.
            </p>
            <a href="#contact" className="btn-outline mt-9 w-fit">
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
                  {/* Card with overlaid label */}
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-brand-200 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_18px_48px_rgba(0,0,0,0.18)] transition-shadow duration-300">
                    {/* Photo */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04]"
                      style={{ backgroundImage: `url(${city.image})` }}
                      role="img"
                      aria-label={city.name}
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-950/75 via-brand-950/15 to-transparent" />

                    {/* City name overlaid */}
                    <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 mb-1.5">
                        {city.desc}
                      </p>
                      <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                        {city.name}
                      </h3>
                      <p className="mt-1.5 text-sm font-medium text-white/80">{city.count}</p>
                    </div>

                    {/* Arrow indicator */}
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
