const listings = [
  {
    id: 1,
    badge: "Рекомендуем",
    status: "В продаже",
    price: "8 200 000 ₽",
    title: "Трёхкомнатная квартира у делового ядра",
    beds: 3,
    baths: 2,
    area: "78 м²",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=600&h=740&q=80",
  },
  {
    id: 2,
    badge: "Рекомендуем",
    status: "В продаже",
    price: "12 500 000 ₽",
    title: "Апартаменты с видом на море",
    beds: 2,
    baths: 1,
    area: "52 м²",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&h=740&q=80",
  },
  {
    id: 3,
    badge: "Топ",
    status: "В продаже",
    price: "18 900 000 ₽",
    title: "Дом в охраняемом посёлке с садом",
    beds: 5,
    baths: 3,
    area: "180 м²",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&h=740&q=80",
  },
  {
    id: 4,
    badge: "Подбор",
    status: "В продаже",
    price: "6 800 000 ₽",
    title: "Студия у пляжной зоны Геленджика",
    beds: 1,
    baths: 1,
    area: "38 м²",
    image:
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=600&h=740&q=80",
  },
  {
    id: 5,
    badge: "Рекомендуем",
    status: "В продаже",
    price: "24 000 000 ₽",
    title: "Вилла с панорамной террасой",
    beds: 4,
    baths: 3,
    area: "210 м²",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&h=740&q=80",
  },
  {
    id: 6,
    badge: "Подбор",
    status: "В продаже",
    price: "9 400 000 ₽",
    title: "Двухкомнатная квартира в новом ЖК",
    beds: 2,
    baths: 1,
    area: "61 м²",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&h=740&q=80",
  },
];

function BedIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 19V9a2 2 0 012-2h16a2 2 0 012 2v10M2 19h20M2 19v2m20-2v2M6 7V5a1 1 0 011-1h4a1 1 0 011 1v2" />
    </svg>
  );
}
function BathIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16M4 12a2 2 0 01-2-2V6a2 2 0 012-2h3.5M4 12v5a2 2 0 002 2h12a2 2 0 002-2v-5" />
    </svg>
  );
}
function AreaIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
    </svg>
  );
}
function HeartIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  );
}

export default function PropertyCarousel() {
  return (
    <section id="listings" className="py-[90px] bg-white scroll-mt-28">
      {/* Section header */}
      <div className="container-site mb-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-[2.1rem] font-semibold tracking-tight text-brand-900">
              Избранные объекты
            </h2>
            <p className="mt-2 text-[15px] text-brand-400">
              Актуальные предложения в&nbsp;Краснодаре и&nbsp;Геленджике
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-accent hover:text-accent-dark transition shrink-0"
          >
            Все объекты
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Cards */}
      <div className="container-site">
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0">
          {listings.map((item) => (
            <article
              key={item.id}
              className="group min-w-[255px] w-[255px] sm:min-w-[270px] sm:w-[270px] flex-shrink-0 snap-start rounded-xl overflow-hidden bg-white shadow-[0_6px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.14)] transition-shadow duration-300"
            >
              {/* Portrait image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-brand-100">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${item.image})` }}
                  role="img"
                  aria-label={item.title}
                />
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  <span className="bg-accent text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 leading-none">
                    {item.badge}
                  </span>
                  <span className="bg-brand-900/90 text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 leading-none">
                    {item.status}
                  </span>
                </div>
                {/* Like */}
                <button
                  type="button"
                  aria-label="В избранное"
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-brand-400 hover:text-accent hover:bg-white transition shadow-sm"
                >
                  <HeartIcon />
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-[22px] font-bold text-brand-900 leading-none">{item.price}</p>
                <h3 className="mt-2 text-[13px] font-semibold text-brand-800 leading-snug group-hover:text-accent transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <div className="mt-3 flex items-center gap-3 text-[12px] text-brand-400 font-medium">
                  <span className="flex items-center gap-1">
                    <BedIcon /> {item.beds} спал.
                  </span>
                  <span className="flex items-center gap-1">
                    <BathIcon /> {item.baths} сан.
                  </span>
                  <span className="flex items-center gap-1">
                    <AreaIcon /> {item.area}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
