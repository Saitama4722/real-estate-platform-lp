export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-white">
      <div className="container-site py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="font-serif text-xl font-light tracking-tight mb-1">
              Владимир Балашов
            </div>
            <div className="text-2xs font-sans uppercase tracking-widest2 text-gold-400 mb-5">
              Риэлтор
            </div>
            <p className="text-sm text-ink-400 leading-relaxed max-w-xs">
              Надёжный партнёр в сфере недвижимости Краснодара и Геленджика.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-2xs font-sans uppercase tracking-widest2 text-ink-500 mb-5">
              Навигация
            </div>
            <ul className="space-y-2.5">
              {[
                ["#advantages", "Услуги"],
                ["#cities", "Города"],
                ["#properties", "Объекты"],
                ["#about", "О риэлторе"],
                ["#contact", "Контакт"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-ink-400 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-2xs font-sans uppercase tracking-widest2 text-ink-500 mb-5">
              Контакты
            </div>
            <div className="space-y-3">
              <a
                href="tel:+79288497980"
                className="flex items-center gap-3 text-sm text-ink-300 hover:text-white transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </span>
                +7 928 849-79-80
              </a>
              <div className="flex items-center gap-3 text-sm text-ink-400">
                <span className="w-8 h-8 rounded-full bg-ink-800 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-ink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </span>
                Краснодар · Геленджик
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-ink-800 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ink-600">
            © {year} Владимир Балашов. Все права защищены.
          </p>
          <p className="text-xs text-ink-700">
            Краснодар · Геленджик · Краснодарский край
          </p>
        </div>
      </div>
    </footer>
  );
}
