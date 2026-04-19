// Process section — how working with the realtor works, step by step

const steps = [
  {
    number: "01",
    title: "Консультация",
    text: "Обсуждаем ваши цели, бюджет и пожелания, чтобы точно понять задачу и сразу двигаться в правильном направлении.",
  },
  {
    number: "02",
    title: "Подбор объектов",
    text: "Подбираю подходящие варианты по вашим критериям, отсеивая лишнее и экономя ваше время.",
  },
  {
    number: "03",
    title: "Просмотры",
    text: "Организую показы, помогаю оценить объекты и выбрать оптимальный вариант без лишних поездок.",
  },
  {
    number: "04",
    title: "Сделка",
    text: "Сопровождаю процесс покупки, координирую все этапы и помогаю довести сделку до результата.",
  },
];

export default function Process() {
  return (
    <section id="process" className="scroll-mt-28 section-padding bg-ink-900 relative overflow-hidden">

      {/* Subtle background dots */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle,#c9a84c_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" aria-hidden />

      <div className="container-site relative z-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-20 sm:mb-24">
          <div className="max-w-lg">
            <p className="eyebrow mb-6">Процесс</p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.2rem] font-semibold tracking-tight text-white leading-[1.05]">
              Как мы работаем
            </h2>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 text-xs font-semibold text-gold-400 hover:text-gold-300 transition-colors duration-200 tracking-[0.15em] uppercase cursor-pointer"
            style={{ fontFamily: "var(--font-josefin)" }}
          >
            Начать сейчас
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Horizontal connector line */}
          <div
            className="hidden lg:block absolute top-[1.6rem] left-[12.5%] right-[12.5%] h-px"
            style={{ background: "linear-gradient(to right, transparent, rgba(184,131,46,0.25) 20%, rgba(184,131,46,0.25) 80%, transparent)" }}
            aria-hidden
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className="flex flex-col group">

                {/* Step number circle */}
                <div className="relative z-10 w-14 h-14 rounded-full border border-gold-DEFAULT/25 bg-ink-900 shadow-[0_0_0_5px_rgba(184,131,46,0.05)] flex items-center justify-center mb-8 shrink-0 group-hover:border-gold-DEFAULT group-hover:shadow-[0_0_30px_-4px_rgba(184,131,46,0.3)] transition-all duration-400">
                  <span className="font-serif text-sm font-bold text-gold-400 tracking-[0.05em] group-hover:text-gold-300 transition-colors duration-200">
                    {step.number}
                  </span>
                </div>

                {/* Teal accent line on hover */}
                <div className="w-6 h-px bg-teal-DEFAULT/0 group-hover:bg-teal-400/60 group-hover:w-8 transition-all duration-300 mb-5" />

                {/* Title */}
                <h3 className="font-serif text-xl font-semibold text-white mb-4 leading-snug tracking-wide group-hover:text-gold-200 transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Text */}
                <p
                  className="text-sm text-ink-400/90 leading-[1.9] flex-1 tracking-[0.02em]"
                  style={{ fontFamily: "var(--font-josefin)", fontWeight: 300 }}
                >
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
