// Process section — how working with the realtor works, step by step
// Text content is structural placeholder — real copy to be added later

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
    <section id="process" className="scroll-mt-28 section-padding bg-[#f9f7f4]">
      <div className="container-site">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div className="max-w-lg">
            <p className="eyebrow mb-4">
              Процесс
            </p>
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold tracking-tight text-brand-900 leading-tight">
              Как мы работаем
            </h2>
          </div>
          <a href="#contact" className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-brand-500 hover:text-brand-900 transition-colors duration-200">
            Начать сейчас
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — visible on lg+ */}
          <div
            className="hidden lg:block absolute top-[28px] left-[calc(12.5%-1rem)] right-[calc(12.5%-1rem)] h-px bg-brand-200"
            aria-hidden
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col">
                {/* Step circle */}
                <div className="relative z-10 w-14 h-14 rounded-full border border-brand-200 bg-white shadow-sm flex items-center justify-center mb-7 shrink-0">
                  <span className="text-[15px] font-bold text-accent">{step.number}</span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-brand-900 mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-base text-brand-600 leading-[1.75] flex-1">
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
