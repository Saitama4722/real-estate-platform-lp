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
    <section id="listings" className="scroll-mt-28 section-padding bg-ink-950">

      {/* Section header */}
      <div className="container-site mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5">
          <div>
            <p className="eyebrow mb-5">Объекты</p>
            <h2 className="title-section">Избранные объекты</h2>
            <p
              className="mt-4 text-sm text-ink-400 tracking-[0.04em]"
              style={{ fontFamily: "var(--font-josefin)", fontWeight: 300 }}
            >
              Актуальные предложения в&nbsp;Краснодаре и&nbsp;Геленджике
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-semibold text-gold-400 hover:text-gold-300 transition-colors duration-200 shrink-0 tracking-[0.15em] uppercase cursor-pointer pb-1"
            style={{ fontFamily: "var(--font-josefin)" }}
          >
            Запросить всё
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Cards scroll */}
      <div className="container-site">
        <div className="flex gap-5 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory -mx-5 px-5 sm:mx-0 sm:px-0">
          {listings.map((item) => (
            <article
              key={item.id}
              className="group min-w-[272px] w-[272px] sm:min-w-[300px] sm:w-[300px] flex-shrink-0 snap-start rounded-2xl overflow-hidden bg-ink-900 border border-gold-DEFAULT/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_24px_80px_-8px_rgba(0,0,0,0.7)] hover:-translate-y-2 transition-all duration-400 cursor-pointer"
            >
              {/* Image */}
              <div className="protected-image relative aspect-[4/5] overflow-hidden bg-ink-800">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.06]"
                  style={{ backgroundImage: `url(${item.image})` }}
                  role="img"
                  aria-label={item.title}
                />
                {/* Dark gradient */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink-950/90 via-ink-950/30 to-transparent" />

                {/* Gold badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span
                    className="inline-flex bg-gold-gradient text-white text-[9px] font-bold uppercase tracking-[0.18em] px-3.5 py-1.5 leading-none rounded-full shadow-lg"
                    style={{ fontFamily: "var(--font-josefin)" }}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Favourite */}
                <button
                  type="button"
                  aria-label="В избранное"
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-ink-950/70 backdrop-blur-sm flex items-center justify-center text-white/50 hover:text-gold-300 hover:bg-ink-950 transition-all duration-200 shadow-sm cursor-pointer"
                >
                  <HeartIcon />
                </button>

                {/* City tag */}
                <div className="absolute bottom-4 left-4">
                  <span
                    className="text-[9px] font-bold text-white/70 uppercase tracking-[0.3em] drop-shadow-md"
                    style={{ fontFamily: "var(--font-josefin)" }}
                  >
                    {item.city}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5">
                <h3 className="font-serif text-base font-semibold text-white leading-snug group-hover:text-gold-300 transition-colors duration-300 line-clamp-2 tracking-wide">
                  {item.title}
                </h3>
                <div
                  className="mt-2.5 flex items-center gap-3 text-xs text-ink-400 font-medium tracking-[0.06em]"
                  style={{ fontFamily: "var(--font-josefin)" }}
                >
                  <span>{item.rooms}</span>
                  <span className="w-1 h-1 rounded-full bg-gold-DEFAULT/40" />
                  <span>{item.area}</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gold-DEFAULT/10 flex items-center justify-between">
                  <span className="font-serif text-lg font-bold text-teal-400 tracking-tight">{item.price}</span>
                  <a
                    href="#contact"
                    className="text-[9px] font-bold text-gold-400 hover:text-gold-300 transition-colors duration-200 tracking-[0.18em] uppercase cursor-pointer"
                    style={{ fontFamily: "var(--font-josefin)" }}
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
