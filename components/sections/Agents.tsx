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
    <section id="agents" className="scroll-mt-28 section-padding bg-ink-950 relative overflow-hidden">

      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-teal-DEFAULT/[0.03] to-transparent pointer-events-none" aria-hidden />

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-14 lg:gap-20 xl:gap-24 items-center">

          {/* ── Left: portrait ── */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">

            {/* Decorative corner frame */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-l-2 border-t-2 border-gold-DEFAULT/30 rounded-tl-2xl z-10 pointer-events-none" aria-hidden />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r-2 border-b-2 border-teal-DEFAULT/20 rounded-br-2xl z-10 pointer-events-none" aria-hidden />

            <div className="protected-image relative aspect-[5/6] overflow-hidden rounded-2xl bg-ink-800 shadow-[0_24px_80px_rgba(0,0,0,0.6)]">
              {/* Portrait photo */}
              <div
                className="absolute inset-0 bg-cover bg-top"
                style={{ backgroundImage: `url(${PORTRAIT})` }}
                role="img"
                aria-label="Владимир Балашов, риэлтор"
              />
              {/* Bottom gradient */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-950/50 to-transparent" />
              {/* Top gold line */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-3 sm:-right-8 bg-ink-900 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] p-4 sm:p-5 border border-gold-DEFAULT/15">
              <div className="flex gap-5 sm:gap-7">
                {trustItems.map((t, i) => (
                  <div key={t.label} className="flex items-stretch gap-5 sm:gap-7">
                    <div className="flex flex-col items-center text-center">
                      <span className="font-serif text-xl sm:text-2xl font-bold text-gold-300 leading-none">
                        {t.value}
                      </span>
                      <span
                        className="mt-2 text-[8px] font-bold uppercase tracking-[0.2em] text-white/40 whitespace-nowrap"
                        style={{ fontFamily: "var(--font-josefin)" }}
                      >
                        {t.label}
                      </span>
                    </div>
                    {i < trustItems.length - 1 && (
                      <div className="w-px self-stretch bg-gradient-to-b from-transparent via-gold-DEFAULT/25 to-transparent" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: bio ── */}
          <div className="pb-8 lg:pb-0">
            <p className="eyebrow mb-6">О риэлторе</p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold tracking-tight text-white leading-[1.05]">
              Владимир Балашов
            </h2>
            <p
              className="mt-3 text-xs font-semibold text-teal-400 tracking-[0.25em] uppercase"
              style={{ fontFamily: "var(--font-josefin)" }}
            >
              Специалист по недвижимости&nbsp;·&nbsp;Краснодар и Геленджик
            </p>

            {/* Gold rule */}
            <div className="mt-8 w-12 h-px bg-gradient-to-r from-gold-DEFAULT/60 to-transparent" />

            {/* Bio text */}
            <p
              className="mt-8 text-base text-ink-300/80 leading-[2] max-w-lg tracking-[0.02em]"
              style={{ fontFamily: "var(--font-josefin)", fontWeight: 300 }}
            >
              Я помогаю подобрать и купить недвижимость в Краснодаре и Геленджике, ориентируясь на ваши цели и бюджет. Предлагаю только проверенные объекты, хорошо знаю рынок и помогаю найти оптимальные варианты без переплат и лишних действий. Работаю спокойно, по делу и с фокусом на результат.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
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
