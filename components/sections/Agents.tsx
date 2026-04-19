// About realtor section — Владимир Балашов
// TEMPORARY IMAGE — replace with real portrait photo when available

const PORTRAIT = "/images/agent/photo_agent.jpg";

const trustItems = [
  { value: "120+", label: "Закрытых сделок" },
  { value: "8 лет", label: "Опыт на рынке" },
  { value: "Под ключ", label: "Сопровождение" },
];

export default function Agents() {
  return (
    <section id="agents" className="scroll-mt-28 section-padding bg-cream-100">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.55fr] gap-12 lg:gap-16 xl:gap-20 items-center">

          {/* ── Left: portrait ── */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="protected-image relative aspect-[5/6] overflow-hidden rounded-2xl bg-cream-200 shadow-[0_20px_60px_rgba(17,24,39,0.15)]">
              {/* Portrait photo */}
              <div
                className="absolute inset-0 bg-cover bg-top"
                style={{ backgroundImage: `url(${PORTRAIT})` }}
                role="img"
                aria-label="Владимир Балашов, риэлтор"
              />
              {/* Subtle bottom gradient */}
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-ink-950/25 to-transparent" />
              {/* Gold corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold-DEFAULT/40 rounded-tr-2xl" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-white rounded-2xl shadow-[0_16px_48px_rgba(17,24,39,0.14)] p-4 sm:p-5 border border-cream-200">
              <div className="flex gap-5 sm:gap-6">
                {trustItems.map((t) => (
                  <div key={t.label} className="flex flex-col items-center text-center">
                    <span className="font-serif text-xl sm:text-2xl font-bold text-gold-DEFAULT leading-none">
                      {t.value}
                    </span>
                    <span className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-ink-500 whitespace-nowrap">
                      {t.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: bio ── */}
          <div className="pb-6 lg:pb-0">
            <p className="eyebrow mb-4">О риэлторе</p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3rem] font-semibold tracking-tight text-ink-900 leading-[1.1]">Владимир Балашов</h2>
            <p className="mt-3 text-base font-medium text-gold-DEFAULT">
              Специалист по недвижимости&nbsp;·&nbsp;Краснодар и Геленджик
            </p>

            {/* Thin gold rule */}
            <div className="mt-7 w-12 h-px bg-gold-DEFAULT/40" />

            {/* Bio text */}
            <p className="mt-7 text-base text-ink-500 leading-[1.9] max-w-lg">
              Я помогаю подобрать и купить недвижимость в Краснодаре и Геленджике, ориентируясь на ваши цели и бюджет. Предлагаю только проверенные объекты, хорошо знаю рынок и помогаю найти оптимальные варианты без переплат и лишних действий. Работаю спокойно, по делу и с фокусом на результат.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href="tel:+79288497980" className="btn-solid">
                +7 928 849-79-80
              </a>
              <a href="#contact" className="btn-outline">
                Оставить заявку
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
