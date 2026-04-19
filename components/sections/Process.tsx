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
    <section id="process" className="scroll-mt-28 section-padding bg-cream-50">
      <div className="container-site">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div className="max-w-lg">
            <p className="eyebrow mb-4">
              Процесс
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3rem] font-semibold tracking-tight text-ink-900 leading-[1.1]">
              Как мы работаем
            </h2>
          </div>
          <a href="#contact" className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-gold-DEFAULT hover:text-gold-500 transition-colors duration-200">
            Начать сейчас
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div
            className="hidden lg:block absolute top-[28px] left-[calc(12.5%-1rem)] right-[calc(12.5%-1rem)] h-px bg-gold-DEFAULT/20"
            aria-hidden
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col group">
                {/* Step circle */}
                <div className="relative z-10 w-14 h-14 rounded-full border border-gold-DEFAULT/30 bg-cream-50 shadow-[0_0_0_4px_rgba(201,164,76,0.07)] flex items-center justify-center mb-8 shrink-0 group-hover:border-gold-DEFAULT group-hover:shadow-[0_0_0_6px_rgba(201,164,76,0.10)] transition-all duration-300">
                  <span className="font-serif text-base font-bold text-gold-DEFAULT">{step.number}</span>
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-semibold text-ink-900 mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-base text-ink-500 leading-[1.8] flex-1">
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
