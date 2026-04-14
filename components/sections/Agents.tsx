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
    <section id="agents" className="scroll-mt-28 section-padding bg-white">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.55fr] gap-12 lg:gap-16 xl:gap-20 items-center">

          {/* ── Left: portrait ── */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="relative aspect-[5/6] overflow-hidden rounded-2xl bg-brand-100 shadow-[0_12px_48px_rgba(0,0,0,0.12)]">
              {/* Portrait photo */}
              <div
                className="absolute inset-0 bg-cover bg-top"
                style={{ backgroundImage: `url(${PORTRAIT})` }}
                role="img"
                aria-label="Владимир Балашов, риэлтор"
              />
              {/* Subtle bottom gradient */}
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-brand-950/30 to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-white rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] p-4 sm:p-5 border border-brand-100">
              <div className="flex gap-5 sm:gap-6">
                {trustItems.map((t) => (
                  <div key={t.label} className="flex flex-col items-center text-center">
                    <span className="text-xl sm:text-2xl font-bold text-brand-900 leading-none">
                      {t.value}
                    </span>
                    <span className="mt-1 text-xs font-bold uppercase tracking-widest text-brand-600 whitespace-nowrap">
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
            <h2 className="title-section">Владимир Балашов</h2>
            <p className="mt-2 text-base font-medium text-brand-600">
              Специалист по недвижимости&nbsp;·&nbsp;Краснодар и Геленджик
            </p>

            {/* Bio text */}
            <p className="mt-7 text-base text-brand-600 leading-[1.85] max-w-lg">
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
