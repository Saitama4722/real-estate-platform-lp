const posts = [
  {
    month: "Апр",
    day: "10",
    category: "Рынок",
    title: "Тренды рынка недвижимости Краснодарского края в 2025 году",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&h=560&q=80",
  },
  {
    month: "Мар",
    day: "28",
    category: "Советы",
    title: "На что обратить внимание при покупке квартиры в новостройке",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&h=560&q=80",
  },
  {
    month: "Мар",
    day: "14",
    category: "Аналитика",
    title: "Геленджик как инвестиция: перспективы курортной недвижимости",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&h=560&q=80",
  },
];

export default function Blog() {
  return (
    <section className="py-[90px] bg-white">
      <div className="container-site">
        {/* Centered header */}
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-[2.1rem] font-semibold tracking-tight text-brand-900">
            Полезные материалы
          </h2>
          <p className="mt-3 text-[15px] text-brand-400 leading-relaxed">
            Разбираем рынок юга — без воды и лишнего шума
          </p>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-xl bg-white shadow-[0_4px_14px_rgba(0,0,0,0.07)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.12)] transition-shadow duration-300"
            >
              {/* Image with date badge */}
              <div className="relative aspect-[16/10] overflow-hidden bg-brand-100">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${post.image})` }}
                  role="img"
                  aria-label={post.title}
                />
                {/* Date badge */}
                <div className="absolute top-4 left-4 flex flex-col items-center bg-white rounded-lg px-3 py-2 shadow-sm min-w-[44px]">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-400 leading-none">
                    {post.month}
                  </span>
                  <span className="text-xl font-bold text-brand-900 leading-none mt-0.5">
                    {post.day}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <a
                  href="#contact"
                  className="text-[11px] font-semibold uppercase tracking-wider text-accent hover:text-accent-dark transition"
                >
                  {post.category}
                </a>
                <h3 className="mt-2 text-[15px] font-semibold text-brand-900 leading-snug group-hover:text-accent transition-colors line-clamp-3">
                  {post.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
