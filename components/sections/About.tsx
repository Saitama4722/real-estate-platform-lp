const facts = [
  { label: "Специализация", value: "Жилая и курортная недвижимость" },
  { label: "География", value: "Краснодар и Геленджик" },
  { label: "Подход", value: "Один риэлтор — весь путь" },
  { label: "Формат", value: "Полное сопровождение сделки" },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image column */}
          <div className="relative order-2 lg:order-1">
            {/* Main photo placeholder */}
            <div className="relative aspect-[3/4] bg-ink-950 overflow-hidden">
              {/* Decorative pattern */}
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 30% 30%, rgba(201,148,58,0.4) 0%, transparent 60%),
                    radial-gradient(circle at 70% 70%, rgba(30,45,85,0.6) 0%, transparent 60%)
                  `,
                }}
              />

              {/* Silhouette placeholder */}
              <div className="absolute inset-0 flex items-end justify-center pb-8">
                <div className="flex flex-col items-center gap-4">
                  {/* Simple person silhouette */}
                  <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center">
                    <svg className="w-14 h-14 text-white/20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                    </svg>
                  </div>
                  <div className="text-white/20 font-serif text-base font-light tracking-wide text-center">
                    Владимир Балашов
                  </div>
                </div>
              </div>

              {/* Placeholder label */}
              <div className="absolute top-4 left-4 right-4 text-center">
                <div className="inline-block bg-white/5 border border-white/10 px-4 py-2">
                  <p className="text-2xs text-white/30 uppercase tracking-widest font-sans">
                    Место для вашей фотографии
                  </p>
                </div>
              </div>

              {/* Gold corner accents */}
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-gold/50" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-gold/50" />
            </div>

            {/* Small accent card */}
            <div className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 bg-white shadow-xl shadow-ink-900/10 p-5 w-44">
              <div className="font-serif text-3xl font-light text-ink-900 mb-1">
                Лично
              </div>
              <div className="text-xs text-ink-500 font-sans leading-relaxed">
                Веду каждую сделку сам — без передачи другим сотрудникам
              </div>
            </div>
          </div>

          {/* Content column */}
          <div className="order-1 lg:order-2">
            <div className="label-overline mb-4">Риэлтор</div>
            <h2 className="heading-section mb-2">
              Владимир Балашов
            </h2>
            <div className="flex items-center gap-3 mb-8">
              <div className="gold-line" />
              <span className="text-sm text-gold font-sans font-medium">Недвижимость в Краснодаре и Геленджике</span>
            </div>

            <div className="space-y-4 mb-8">
              <p className="text-base text-ink-700 leading-relaxed">
                Работаю в сфере недвижимости, специализируясь на рынках Краснодара и Геленджика.
                Помогаю клиентам выбрать, купить или продать жильё — с полным юридическим сопровождением
                и личным присутствием на каждом этапе.
              </p>
              <p className="text-base text-ink-600 leading-relaxed">
                Мой подход — это прямой диалог, честная оценка объектов и максимальная защита интересов
                клиента. Я не передаю клиентов менеджерам и не работаю по шаблону.
              </p>
              <p className="text-base text-ink-600 leading-relaxed">
                Если вы ищете квартиру в Краснодаре, апартаменты у моря в Геленджике или дом в пригороде —
                давайте обсудим именно вашу задачу.
              </p>
            </div>

            {/* Facts grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {facts.map((f) => (
                <div key={f.label} className="border-l-2 border-gold/30 pl-4">
                  <div className="text-2xs font-sans uppercase tracking-widest2 text-ink-400 mb-1">
                    {f.label}
                  </div>
                  <div className="text-sm font-sans font-medium text-ink-800">
                    {f.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:+79288497980" className="btn-primary">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                +7 928 849-79-80
              </a>
              <a href="#contact" className="btn-outline">
                Написать сообщение
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
