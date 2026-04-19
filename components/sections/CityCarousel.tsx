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
    /* Dark section — ALL text must be white/light ✓ */
    <section id="cities" className="scroll-mt-28 section-padding bg-stone-900">
      <div className="container-site">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 xl:gap-24 items-center">

          {/* ── Left: text — white text on dark bg ✓ ── */}
          <div className="lg:w-[38%] xl:w-[35%] shrink-0">
            {/* Eyebrow — light on dark ✓ */}
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-accent-200 mb-5">
              Локации
            </p>
            {/* Heading — white on dark charcoal ✓ */}
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3rem] font-semibold tracking-tight text-white leading-[1.08] text-balance">
              Краснодар и Геленджик — два разных сценария покупки
            </h2>

            {/* Accent rule */}
            <div className="mt-7 w-14 h-0.5 bg-accent-300/60" />

            {/* Body — white/80 on dark ✓ */}
            <p className="mt-6 text-base text-white/75 leading-relaxed max-w-md">
              Подбираю объекты под вашу цель: для жизни, отдыха, переезда или инвестиций. Краснодар — для ритма города и инфраструктуры, Геленджик — для моря, статуса и курортного формата жизни.
            </p>
            {/* Ghost white button — on dark bg ✓ */}
            <a href="#contact" className="btn-ghost-white mt-10 w-fit">
              Подобрать объект
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
                  <div className="protected-image relative aspect-[2/3] sm:aspect-[3/4] overflow-hidden rounded-xl bg-stone-800 shadow-[0_8px_32px_rgba(28,28,30,0.4)] hover:shadow-[0_20px_60px_rgba(28,28,30,0.5)] transition-all duration-400 hover:-translate-y-1.5">

                    {/* Photo */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.05]"
                      style={{ backgroundImage: `url(${city.image})` }}
                      role="img"
                      aria-label={city.name}
                    />

                    {/* Strong dark gradient — ensures white text contrast ✓ */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-900/40 to-stone-900/10" />

                    {/* Accent tint on hover */}
                    <div className="absolute inset-0 bg-accent-900/0 group-hover:bg-accent-900/15 transition-colors duration-500" />

                    {/* Top label — white/65 on dark overlay ✓ */}
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/60">
                        {city.desc}
                      </span>
                    </div>

                    {/* City name — white on dark gradient ✓ */}
                    <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6">
                      <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white leading-tight group-hover:text-stone-100 transition-colors duration-300">
                        {city.name}
                      </h3>
                      <div className="mt-2.5 flex items-center gap-2">
                        <div className="w-5 h-px bg-accent-300/70 group-hover:w-8 transition-all duration-300" />
                        {/* white/60 on dark gradient ✓ */}
                        <p className="text-xs text-white/60 group-hover:text-white/80 transition-colors duration-300">
                          {city.count}
                        </p>
                      </div>
                    </div>

                    {/* Arrow indicator — white/dark overlay ✓ */}
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/0 border border-white/0 group-hover:bg-white/15 group-hover:border-white/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
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
