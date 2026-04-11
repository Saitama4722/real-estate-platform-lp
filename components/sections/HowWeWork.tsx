const steps = [
  {
    num: "01",
    title: "Первый звонок",
    text: "Вы звоните или оставляете заявку. Я выслушиваю вашу задачу — что именно ищете, в каком городе, какой бюджет и сроки. Без давления и лишних вопросов.",
  },
  {
    num: "02",
    title: "Подбор и анализ",
    text: "Формирую актуальный список подходящих объектов. Проверяю юридическую чистоту и рыночную стоимость каждого варианта, которые вы рассматриваете.",
  },
  {
    num: "03",
    title: "Показы и выбор",
    text: "Организую просмотры в удобное для вас время. На показе нахожусь рядом, помогаю оценить состояние объекта и задать продавцу правильные вопросы.",
  },
  {
    num: "04",
    title: "Переговоры и договор",
    text: "Веду переговоры о цене и условиях. Помогаю зафиксировать договорённости в предварительном договоре, проверяю юридические документы перед подписанием.",
  },
  {
    num: "05",
    title: "Сделка под ключ",
    text: "Сопровождаю вас на всех этапах финальной сделки — нотариус, МФЦ, регистрация. До момента, когда ключи у вас в руках.",
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="section-padding bg-ink-950 text-white">
      <div className="container-site">
        {/* Header */}
        <div className="max-w-xl mb-14">
          <div className="label-overline text-gold-400 mb-4">Процесс</div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight mb-5">
            Как мы работаем
          </h2>
          <div className="gold-line mb-5" />
          <p className="text-sm text-ink-400 leading-relaxed">
            Прозрачный процесс от первого звонка до получения ключей.
            Вы всегда знаете, на каком этапе находится ваша сделка.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line desktop */}
          <div className="hidden lg:block absolute left-[39px] top-12 bottom-12 w-px bg-ink-800" />

          <div className="space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="relative flex flex-col lg:flex-row gap-6 lg:gap-10 pb-10 last:pb-0 group"
              >
                {/* Step number bubble */}
                <div className="flex-shrink-0 flex items-start lg:items-start">
                  <div className="relative w-20 h-20 flex-shrink-0 flex items-center justify-center bg-ink-900 border border-ink-700 group-hover:border-gold/40 transition-colors duration-300">
                    <span className="font-serif text-xl font-light text-gold-400 group-hover:text-gold transition-colors duration-300">
                      {step.num}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 lg:pt-5 pb-8 lg:pb-10 border-b border-ink-800 last:border-0">
                  <h3 className="font-serif text-xl font-medium text-white mb-3 group-hover:text-gold-200 transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-sm text-ink-400 leading-relaxed max-w-2xl">
                    {step.text}
                  </p>
                </div>

                {/* Step indicator line for mobile */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden absolute left-10 bottom-0 w-px h-8 bg-ink-800" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 border border-ink-800">
          <div className="flex-1">
            <div className="font-serif text-xl font-light text-white mb-1.5">
              Готовы сделать первый шаг?
            </div>
            <div className="text-sm text-ink-400">
              Звоните — обсудим вашу задачу без обязательств.
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+79288497980" className="btn-primary">
              Позвонить
            </a>
            <a href="#contact" className="btn-ghost">
              Написать
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
