const services = [
  {
    icon: (
      <svg
        className="w-10 h-10 text-accent"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.4}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
    title: "Подбор недвижимости",
    text: "Анализирую рынок, формирую выборку под ваш запрос и организую показы удобным способом — без лишних звонков.",
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-accent"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.4}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
        />
      </svg>
    ),
    title: "Ипотечный подбор",
    text: "Помогаю выбрать программу и банк, готовлю пакет документов для заявки — работаю с ведущими банками юга.",
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-accent"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.4}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
        />
      </svg>
    ),
    title: "Оценка и аналитика",
    text: "Разбираю текущий рынок юга: цены, тренды, ликвидность объектов — чтобы вы приняли взвешенное решение.",
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-28 py-4 sm:py-0">
      {/* Inner container — gray bg with max-width and rounded sides on xl */}
      <div className="bg-[#f7f7f7] xl:mx-8 xl:rounded-3xl py-[90px] px-0">
        <div className="container-site">
          {/* Header */}
          <div className="max-w-xl mb-12">
            <h2 className="text-3xl sm:text-[2.1rem] font-semibold tracking-tight text-brand-900 leading-tight">
              Найдём подходящий формат&nbsp;сделки
            </h2>
            <p className="mt-3 text-[15px] text-brand-400 leading-relaxed">
              Спокойная работа в одном контакте — от&nbsp;запроса до&nbsp;ключей
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-xl p-10 shadow-[0_6px_20px_rgba(0,0,0,0.07)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.11)] transition-shadow duration-300 relative"
              >
                <div className="mb-5">{s.icon}</div>
                <h3 className="text-xl font-semibold text-brand-900 mb-3">{s.title}</h3>
                <p className="text-[14px] text-brand-500 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
