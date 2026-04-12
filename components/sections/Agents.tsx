const agents = [
  {
    name: "Владимир Балашов",
    role: "Ведущий специалист",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=460&q=80",
  },
  {
    name: "Екатерина Морозова",
    role: "Ипотечный консультант",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=460&q=80",
  },
  {
    name: "Дмитрий Кузнецов",
    role: "Специалист по переговорам",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=460&q=80",
  },
  {
    name: "Анна Петрова",
    role: "Менеджер показов",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=460&q=80",
  },
];

export default function Agents() {
  return (
    <section id="agents" className="py-[90px] bg-[#f7f7f7] scroll-mt-28">
      <div className="container-site">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-20">

          {/* ── Left: text + CTA ── */}
          <div className="lg:w-[38%] xl:w-[35%] flex flex-col justify-center">
            <h2 className="text-3xl sm:text-[2.1rem] font-semibold tracking-tight text-brand-900 leading-tight">
              Наши специалисты
            </h2>
            <p className="mt-4 text-[15px] text-brand-500 leading-relaxed">
              Работаем как единая команда — каждый отвечает за свой участок сделки. Консультация, показы, переговоры и оформление без суеты.
            </p>
            <a
              href="#contact"
              className="btn-outline mt-8 w-fit"
            >
              Связаться с&nbsp;нами
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* ── Right: agent carousel ── */}
          <div className="lg:w-[62%] xl:w-[65%]">
            <div className="flex gap-5 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0">
              {agents.map((agent) => (
                <div
                  key={agent.name}
                  className="group min-w-[190px] w-[190px] sm:min-w-[205px] sm:w-[205px] lg:min-w-0 lg:flex-1 flex-shrink-0 snap-start"
                >
                  {/* Portrait photo */}
                  <div className="relative aspect-[7/8] overflow-hidden rounded-xl bg-brand-100 shadow-[0_4px_14px_rgba(0,0,0,0.07)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.12)] transition-shadow duration-300">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${agent.image})` }}
                      role="img"
                      aria-label={agent.name}
                    />
                  </div>
                  {/* Info */}
                  <div className="mt-4 px-1">
                    <h3 className="text-[14px] font-semibold text-brand-900">{agent.name}</h3>
                    <p className="mt-0.5 text-[13px] text-brand-400">{agent.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
