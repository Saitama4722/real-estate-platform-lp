// TEMPORARY IMAGES — replace with real property photos when available
// TEMPORARY PRICES / TITLES — replace with real listings data

const listings = [
  {
    id: 1,
    badge: "Рекомендуем",
    city: "Краснодар",
    title: "Трёхкомнатная в Центральном районе",
    rooms: "3 комн.",
    area: "78 м²",
    price: "от 8 500 000 ₽",
    image: "/images/properties/kvartira-1.jpg",
  },
  {
    id: 2,
    badge: "Рекомендуем",
    city: "Геленджик",
    title: "Апартаменты с видом на море",
    rooms: "2 комн.",
    area: "52 м²",
    price: "от 12 900 000 ₽",
    image: "/images/properties/dom_1.jpg",
  },
  {
    id: 3,
    badge: "Топ",
    city: "Краснодар",
    title: "Дом в закрытом посёлке с садом",
    rooms: "5 комн.",
    area: "180 м²",
    price: "от 19 500 000 ₽",
    image: "/images/properties/dom_2.jpg",
  },
  {
    id: 4,
    badge: "Подбор",
    city: "Геленджик",
    title: "Студия у пляжной зоны",
    rooms: "1 комн.",
    area: "38 м²",
    price: "от 6 700 000 ₽",
    image: "/images/properties/zhk-akvatoriya.jpg",
  },
];

function HeartIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  );
}

export default function PropertyCarousel() {
  return (
    <section id="listings" className="scroll-mt-28 section-padding bg-white">
      {/* Section header */}
      <div className="container-site mb-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="eyebrow mb-3">Объекты</p>
            <h2 className="title-section">Избранные объекты</h2>
            <p className="mt-3 text-base text-brand-600">
              Актуальные предложения в&nbsp;Краснодаре и&nbsp;Геленджике
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dark transition-colors duration-200 shrink-0 pb-1"
          >
            Запросить всё
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Cards scroll */}
      <div className="container-site">
        <div className="flex gap-5 overflow-x-auto pb-5 scrollbar-hide snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0">
          {listings.map((item) => (
            <article
              key={item.id}
              className="group min-w-[260px] w-[260px] sm:min-w-[280px] sm:w-[280px] flex-shrink-0 snap-start rounded-2xl overflow-hidden bg-white border border-brand-100 shadow-[0_4px_20px_rgba(0,0,0,0.07)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.13)] transition-all duration-300"
            >
              {/* Image */}
              <div className="protected-image relative aspect-[4/5] overflow-hidden bg-brand-100">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04]"
                  style={{ backgroundImage: `url(${item.image})` }}
                  role="img"
                  aria-label={item.title}
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />

                {/* Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="inline-flex bg-accent text-white text-xs font-bold uppercase tracking-[0.1em] px-2.5 py-1 leading-none rounded">
                    {item.badge}
                  </span>
                </div>

                {/* Favourite */}
                <button
                  type="button"
                  aria-label="В избранное"
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-brand-400 hover:text-accent hover:bg-white transition-all duration-200 shadow-sm"
                >
                  <HeartIcon />
                </button>

                {/* City tag bottom */}
                <div className="absolute bottom-3.5 left-3.5">
                  <span className="text-xs font-bold text-white/90 uppercase tracking-wider drop-shadow-md">
                    {item.city}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-4 sm:p-5">
                <h3 className="text-base font-semibold text-brand-900 leading-snug group-hover:text-accent transition-colors duration-200 line-clamp-2">
                  {item.title}
                </h3>
                <div className="mt-2.5 flex items-center gap-3 text-sm text-brand-600 font-medium">
                  <span>{item.rooms}</span>
                  <span className="w-1 h-1 rounded-full bg-brand-200" />
                  <span>{item.area}</span>
                </div>
                <div className="mt-3 pt-3 border-t border-brand-100 flex items-center justify-between">
                  <span className="text-lg font-bold text-brand-900">{item.price}</span>
                  <a
                    href="#contact"
                    className="text-sm font-semibold text-accent hover:text-accent-dark transition-colors duration-200"
                  >
                    Подробнее →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
