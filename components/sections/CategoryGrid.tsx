"use client";

import { useRef } from "react";

const categories = [
  {
    title: "Квартиры",
    count: "48 объектов",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=500&h=600&q=80",
  },
  {
    title: "Дома и коттеджи",
    count: "27 объектов",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=500&h=600&q=80",
  },
  {
    title: "Новостройки",
    count: "19 объектов",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&h=600&q=80",
  },
  {
    title: "Виллы и резиденции",
    count: "14 объектов",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=500&h=600&q=80",
  },
  {
    title: "Участки",
    count: "31 объект",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=500&h=600&q=80",
  },
];

export default function CategoryGrid() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "prev" | "next") => {
    if (!scrollRef.current) return;
    const amount = 310;
    scrollRef.current.scrollBy({
      left: dir === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-[90px] bg-[#f7f7f7]">
      <div className="container-site">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-[2.1rem] font-semibold tracking-tight text-brand-900">
              Популярные категории
            </h2>
            <p className="mt-2 text-[15px] text-brand-400">
              Выберите тип недвижимости — найдём лучшие варианты
            </p>
          </div>

          {/* Nav buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => scroll("prev")}
              aria-label="Назад"
              className="w-10 h-10 rounded-full border border-brand-200 bg-white flex items-center justify-center text-brand-600 hover:bg-brand-900 hover:text-white hover:border-brand-900 transition"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll("next")}
              aria-label="Вперёд"
              className="w-10 h-10 rounded-full border border-brand-200 bg-white flex items-center justify-center text-brand-600 hover:bg-brand-900 hover:text-white hover:border-brand-900 transition"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {categories.map((cat) => (
            <a
              key={cat.title}
              href="#contact"
              className="group min-w-[210px] w-[210px] sm:min-w-[230px] sm:w-[230px] lg:min-w-0 lg:flex-1 flex-shrink-0 snap-start block rounded-xl overflow-hidden bg-white shadow-[0_4px_14px_rgba(0,0,0,0.07)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-shadow duration-300"
            >
              {/* Portrait image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-brand-100">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${cat.image})` }}
                  role="img"
                  aria-label={cat.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              {/* Content */}
              <div className="p-4 text-center">
                <h3 className="text-sm font-semibold text-brand-900 group-hover:text-accent transition-colors">
                  {cat.title}
                </h3>
                <p className="mt-1 text-xs text-brand-400">{cat.count}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
