const actions = [
  {
    title: "Купить недвижимость",
    text: "Подбираю объекты под ваши критерии, организую показы и веду переговоры. Сопровождаю сделку от первого звонка до передачи ключей.",
    btnLabel: "Найти объект",
    icon: (
      <svg
        className="w-16 h-16 text-accent"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
  },
  {
    title: "Продать объект",
    text: "Готовлю объект к продаже, размещаю на ключевых площадках, веду переговоры с покупателями и помогаю с организацией расчётов.",
    btnLabel: "Продать объект",
    icon: (
      <svg
        className="w-16 h-16 text-accent"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
      </svg>
    ),
  },
  {
    title: "Арендовать жильё",
    text: "Подбираю арендные варианты с учётом ваших требований. Помогаю с переговорами и безопасным оформлением договора найма.",
    btnLabel: "Подобрать аренду",
    icon: (
      <svg
        className="w-16 h-16 text-accent"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
        />
      </svg>
    ),
  },
];

export default function CTABlock() {
  return (
    <section className="py-[90px] bg-[#f7f7f7]">
      <div className="container-site">
        {/* Centered header */}
        <div className="max-w-xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-[2.1rem] font-semibold tracking-tight text-brand-900">
            Чем могу быть полезен
          </h2>
          <p className="mt-3 text-[15px] text-brand-400 leading-relaxed">
            Три основных сценария работы — выберите свой и начнём без обязательств
          </p>
        </div>

        {/* 3 icon cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {actions.map((a) => (
            <div
              key={a.title}
              className="group bg-white rounded-xl p-8 text-center shadow-[0_4px_14px_rgba(0,0,0,0.07)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.11)] transition-shadow duration-300 flex flex-col items-center"
            >
              {/* Large icon */}
              <div className="mb-5 opacity-90 group-hover:opacity-100 transition-opacity">
                {a.icon}
              </div>

              <h3 className="text-xl font-semibold text-brand-900 mb-3">{a.title}</h3>
              <p className="text-[14px] text-brand-500 leading-relaxed mb-7 flex-1">{a.text}</p>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 w-full rounded-full border border-brand-200 bg-white px-6 py-3 text-[13px] font-semibold text-brand-800 hover:bg-brand-900 hover:text-white hover:border-brand-900 transition duration-200"
              >
                {a.btnLabel}
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
