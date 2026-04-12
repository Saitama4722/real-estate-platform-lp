const cities = [
  {
    name: "Краснодар",
    count: "48 объектов",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=600&h=600&q=80",
  },
  {
    name: "Геленджик",
    count: "31 объект",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&h=600&q=80",
  },
  {
    name: "Анапа",
    count: "22 объекта",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&h=600&q=80",
  },
  {
    name: "Новороссийск",
    count: "17 объектов",
    image:
      "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=600&h=600&q=80",
  },
];

export default function CityCarousel() {
  return (
    <section className="py-[90px] bg-white">
      <div className="container-site">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-20">

          {/* ── Left: text + CTA ── */}
          <div className="lg:w-[38%] xl:w-[35%] flex flex-col justify-center">
            <h2 className="text-3xl sm:text-[2.1rem] font-semibold tracking-tight text-brand-900 leading-tight">
              Города и районы
            </h2>
            <p className="mt-4 text-[15px] text-brand-500 leading-relaxed">
              Работаем в ключевых локациях юга России — от делового Краснодара до курортного Геленджика. Знаем каждый район и готовы подобрать лучшее.
            </p>
            <a
              href="#contact"
              className="btn-outline mt-8 w-fit"
            >
              Все районы
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* ── Right: city cards ── */}
          <div className="lg:w-[62%] xl:w-[65%]">
            <div className="flex gap-5 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0">
              {cities.map((city) => (
                <a
                  key={city.name}
                  href="#contact"
                  className="group min-w-[200px] w-[200px] sm:min-w-[220px] sm:w-[220px] lg:min-w-0 lg:flex-1 flex-shrink-0 snap-start block"
                >
                  {/* Square image */}
                  <div className="relative aspect-square overflow-hidden rounded-xl bg-brand-100 shadow-[0_4px_14px_rgba(0,0,0,0.07)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.12)] transition-shadow duration-300">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${city.image})` }}
                      role="img"
                      aria-label={city.name}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>
                  {/* Label */}
                  <div className="mt-4 px-1">
                    <h3 className="text-[15px] font-semibold text-brand-900 group-hover:text-accent transition-colors">
                      {city.name}
                    </h3>
                    <p className="mt-0.5 text-[13px] text-brand-400">{city.count}</p>
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
