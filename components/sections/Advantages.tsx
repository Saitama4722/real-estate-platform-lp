const advantages = [
  {
    icon: "local",
    title: "Знание рынка изнутри",
    text: "Работаю в Краснодаре и Геленджике. Знаю каждый район, актуальные цены и реальный спрос — без домыслов.",
  },
  {
    icon: "person",
    title: "Один риэлтор — весь путь",
    text: "Вы работаете только со мной. Без делегирования менеджерам и постоянной смены контактных лиц.",
  },
  {
    icon: "shield",
    title: "Юридическая безопасность",
    text: "Полная проверка документов и истории объекта. Сопровождение у нотариуса и в МФЦ под ключ.",
  },
  {
    icon: "clock",
    title: "Сроки и обязательства",
    text: "Фиксирую договорённости. Соблюдаю сроки. Вы знаете, что происходит на каждом этапе сделки.",
  },
  {
    icon: "deal",
    title: "Работа по реальной цене",
    text: "Объективная оценка объекта на основе текущего рынка. Помогаю продать выгодно или купить без переплат.",
  },
  {
    icon: "support",
    title: "На связи до результата",
    text: "Отвечаю на вопросы и выхожу на показы в удобное для вас время. Задача закрыта только когда вы довольны.",
  },
];

function Icon({ type }: { type: string }) {
  const cls = "w-6 h-6 text-gold";
  if (type === "local")
    return (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    );
  if (type === "person")
    return (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    );
  if (type === "shield")
    return (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    );
  if (type === "clock")
    return (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    );
  if (type === "deal")
    return (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    );
  return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
    </svg>
  );
}

export default function Advantages() {
  return (
    <section id="advantages" className="section-padding bg-white">
      <div className="container-site">
        {/* Header */}
        <div className="max-w-xl mb-14">
          <div className="label-overline mb-4">Почему выбирают меня</div>
          <h2 className="heading-section mb-5">
            Работа с недвижимостью —<br />
            <span className="text-gold">это доверие и результат</span>
          </h2>
          <div className="gold-line" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, i) => (
            <div
              key={adv.title}
              className="group p-7 border border-ink-100 hover:border-gold/30 hover:shadow-lg hover:shadow-ink-900/5 transition-all duration-400 relative overflow-hidden"
            >
              {/* Number watermark */}
              <div className="absolute top-4 right-5 font-serif text-5xl font-light text-ink-50 select-none group-hover:text-gold/5 transition-colors duration-300">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="relative">
                <div className="w-11 h-11 bg-gold/8 flex items-center justify-center mb-5 group-hover:bg-gold/12 transition-colors duration-300">
                  <Icon type={adv.icon} />
                </div>
                <h3 className="font-serif text-lg font-medium text-ink-900 mb-3 leading-snug">
                  {adv.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed">{adv.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-12 p-7 bg-ink-950 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div>
            <div className="font-serif text-lg font-light text-white mb-1">
              Готовы обсудить вашу задачу?
            </div>
            <div className="text-sm text-ink-400">
              Первая консультация бесплатно — разберём ваш вопрос вместе.
            </div>
          </div>
          <a href="tel:+79288497980" className="btn-primary flex-shrink-0">
            Позвонить сейчас
          </a>
        </div>
      </div>
    </section>
  );
}
