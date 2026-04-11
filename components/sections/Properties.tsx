const properties = [
  {
    id: 1,
    city: "Краснодар",
    type: "Квартира",
    title: "Просторная квартира в центре",
    area: "78 м²",
    rooms: "3-комн.",
    floor: "7 из 16",
    priceLabel: "от",
    price: "8 200 000 ₽",
    tag: "Новостройка",
    gradient: "from-[#1A2744] via-[#243460] to-[#1E2D55]",
    accent: "#C9943A",
  },
  {
    id: 2,
    city: "Геленджик",
    type: "Апартаменты",
    title: "Апартаменты с видом на море",
    area: "52 м²",
    rooms: "2-комн.",
    floor: "5 из 9",
    priceLabel: "от",
    price: "12 500 000 ₽",
    tag: "Вид на море",
    gradient: "from-[#0D3B52] via-[#145C7A] to-[#0F4D6B]",
    accent: "#4FB8D1",
  },
  {
    id: 3,
    city: "Краснодар",
    type: "Дом",
    title: "Коттедж в закрытом посёлке",
    area: "180 м²",
    rooms: "5-комн.",
    floor: "2 этажа",
    priceLabel: "от",
    price: "18 900 000 ₽",
    tag: "Закрытый КП",
    gradient: "from-[#1E2D1A] via-[#243A20] to-[#1A2D18]",
    accent: "#7FB86A",
  },
  {
    id: 4,
    city: "Геленджик",
    type: "Квартира",
    title: "Студия у набережной",
    area: "38 м²",
    rooms: "Студия",
    floor: "3 из 7",
    priceLabel: "от",
    price: "6 800 000 ₽",
    tag: "Вторичное",
    gradient: "from-[#2D1E0D] via-[#3A2914] to-[#2D2010]",
    accent: "#E2AE4F",
  },
];

function PropertyCard({ p }: { p: typeof properties[0] }) {
  return (
    <div className="card-property">
      {/* Image area */}
      <div className={`relative aspect-[3/2] bg-gradient-to-br ${p.gradient} overflow-hidden`}>
        {/* Pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px",
          }}
        />

        {/* Room/area placeholder visual */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white/[0.06] font-serif text-5xl font-light select-none text-center leading-tight">
            {p.rooms}<br />
            <span className="text-3xl">{p.area}</span>
          </div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-card-gradient" />

        {/* Tag badge */}
        <div className="absolute top-3 left-3">
          <span
            className="text-2xs font-sans uppercase tracking-widest px-2.5 py-1 font-medium"
            style={{
              backgroundColor: p.accent + "22",
              color: p.accent,
              border: `1px solid ${p.accent}44`,
            }}
          >
            {p.tag}
          </span>
        </div>

        {/* Placeholder badge */}
        <div className="absolute top-3 right-3">
          <span className="text-2xs font-sans bg-white/10 backdrop-blur-sm text-white/40 px-2 py-1 border border-white/10">
            Фото появятся позже
          </span>
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <div>
            <div className="text-2xs font-sans text-white/50 mb-0.5">{p.type}</div>
            <div className="font-serif text-base text-white font-light">{p.city}</div>
          </div>
          <div className="text-right">
            <div className="text-2xs text-white/50 font-sans">{p.floor}</div>
            <div className="text-sm font-sans text-white/80">{p.area}</div>
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5 bg-white border border-ink-100 border-t-0">
        <h3 className="font-serif text-base font-medium text-ink-900 mb-1 leading-snug group-hover:text-gold transition-colors">
          {p.title}
        </h3>
        <div className="flex items-center gap-2 mb-4">
          <svg className="w-3.5 h-3.5 text-ink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
          <span className="text-xs text-ink-400 font-sans">{p.city}</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xs font-sans text-ink-400 mb-0.5">{p.priceLabel}</div>
            <div className="font-serif text-lg text-ink-900 font-medium">{p.price}</div>
          </div>
          <a
            href="#contact"
            className="text-xs font-sans text-gold border border-gold/30 px-3.5 py-2 hover:bg-gold hover:text-white transition-all duration-200 font-medium tracking-wide"
          >
            Узнать подробнее
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Properties() {
  return (
    <section id="properties" className="section-padding bg-white">
      <div className="container-site">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-lg">
            <div className="label-overline mb-4">Объекты</div>
            <h2 className="heading-section mb-5">
              Актуальные предложения
            </h2>
            <div className="gold-line" />
          </div>
          <p className="text-sm text-ink-500 max-w-sm leading-relaxed md:text-right">
            Ниже — примеры типовых категорий объектов. Для получения актуального списка — свяжитесь со мной напрямую.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {properties.map((p) => (
            <PropertyCard key={p.id} p={p} />
          ))}
        </div>

        {/* More CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm text-ink-400 mb-4">
            Нужен объект с конкретными параметрами?
          </p>
          <a href="#contact" className="btn-outline">
            Обсудить подбор объекта
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
