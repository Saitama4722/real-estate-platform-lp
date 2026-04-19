// About realtor section — Владимир Балашов
// TEMPORARY IMAGE — replace with real portrait photo when available

const PORTRAIT = "/images/agent/photo_agent.jpg";

const trustItems = [
  { value: "120+",      label: "Закрытых сделок" },
  { value: "8 лет",     label: "Опыт на рынке" },
  { value: "Под ключ",  label: "Сопровождение" },
];

export default function Agents() {
  return (
    /* White bg — dark text ✓ */
    <section id="agents" className="scroll-mt-28 section-padding bg-white">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.55fr] gap-12 lg:gap-16 xl:gap-20 items-center">

          {/* ── Left: portrait ── */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">

            {/* Corner frame — accent color */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-accent-500/30 rounded-tl-xl z-10 pointer-events-none" aria-hidden />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-r-2 border-b-2 border-stone-300 rounded-br-xl z-10 pointer-events-none" aria-hidden />

            <div className="protected-image relative aspect-[5/6] overflow-hidden rounded-xl bg-stone-100 shadow-elevated">
              {/* Portrait photo */}
              <div
                className="absolute inset-0 bg-cover bg-top"
                style={{ backgroundImage: `url(${PORTRAIT})` }}
                role="img"
                aria-label="Владимир Балашов, риэлтор"
              />
              {/* Subtle bottom gradient for legibility */}
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-stone-900/20 to-transparent" />
            </div>

            {/* Floating stat card — white bg, charcoal text ✓ */}
            <div className="absolute -bottom-5 -right-3 sm:-right-6 bg-white rounded-xl shadow-panel p-4 sm:p-5 border border-stone-200">
              <div className="flex gap-5 sm:gap-6">
                {trustItems.map((t, i) => (
                  <div key={t.label} className="flex items-stretch gap-5 sm:gap-6">
                    <div className="flex flex-col items-center text-center">
                      {/* Accent value — accent-500 on white ✓ */}
                      <span className="font-serif text-xl sm:text-2xl font-bold text-accent-500 leading-none">
                        {t.value}
                      </span>
                      {/* stone-600 on white ✓ */}
                      <span className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-stone-600 whitespace-nowrap">
                        {t.label}
                      </span>
                    </div>
                    {i < trustItems.length - 1 && (
                      <div className="w-px self-stretch bg-stone-200" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: bio — charcoal on white ✓ ── */}
          <div className="pb-6 lg:pb-0">
            <p className="eyebrow mb-4">О риэлторе</p>
            {/* stone-900 on white ✓ */}
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3rem] font-semibold tracking-tight text-stone-900 leading-[1.08]">
              Владимир Балашов
            </h2>
            {/* Accent subtitle — accent-500 on white ✓ */}
            <p className="mt-3 text-sm font-medium text-accent-500">
              Специалист по недвижимости&nbsp;·&nbsp;Краснодар и Геленджик
            </p>

            {/* Accent rule */}
            <div className="mt-7 w-12 h-0.5 bg-accent-500/40" />

            {/* Bio text — stone-600 on white ✓ */}
            <p className="mt-7 text-base text-stone-600 leading-[1.85] max-w-lg">
              Я помогаю подобрать и купить недвижимость в Краснодаре и Геленджике, ориентируясь на ваши цели и бюджет. Предлагаю только проверенные объекты, хорошо знаю рынок и помогаю найти оптимальные варианты без переплат и лишних действий. Работаю спокойно, по делу и с фокусом на результат.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href="tel:+79288497980" className="btn-solid cursor-pointer">
                +7 928 849-79-80
              </a>
              <a href="#contact" className="btn-outline cursor-pointer">
                Оставить заявку
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
