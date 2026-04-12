"use client";

const PLACEHOLDER_EMAIL = "zapros@vladimir-balashov.ru";

const popularSearch = [
  "Квартиры в Краснодаре",
  "Дома в пригороде",
  "Новостройки Геленджик",
  "Апартаменты у моря",
  "Участки под ИЖС",
];

const quickLinks = [
  { label: "Условия работы", href: "#" },
  { label: "Политика конфиденциальности", href: "#" },
  { label: "Услуги", href: "#services" },
  { label: "Контакты", href: "#contact" },
  { label: "Блог", href: "#" },
];

const discover = [
  { label: "Краснодар", href: "#contact" },
  { label: "Геленджик", href: "#contact" },
  { label: "Анапа", href: "#contact" },
  { label: "Новороссийск", href: "#contact" },
  { label: "Сочи", href: "#contact" },
];

function IconFb() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
function IconVk() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.523-2.049-1.714-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.566c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .643.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.49-.085.744-.576.744z" />
    </svg>
  );
}
function IconTg() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}
function IconIn() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

const socials = [
  { label: "Facebook", Icon: IconFb, href: "#" },
  { label: "ВКонтакте", Icon: IconVk, href: "#" },
  { label: "Telegram", Icon: IconTg, href: "#" },
  { label: "Instagram", Icon: IconIn, href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-950 text-white">
      <div className="container-site">

        {/* ── Top row: logo + social ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 py-7 border-b border-white/10">
          {/* Logo */}
          <a href="#hero" className="flex flex-col">
            <span className="text-base font-semibold tracking-tight">
              Владимир Балашов
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-white/40 mt-0.5">
              недвижимость на юге
            </span>
          </a>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socials.map(({ label, Icon, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/60 hover:bg-accent hover:border-accent hover:text-white transition"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* ── Main columns ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10 pt-12 pb-10">

          {/* Popular Search */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white mb-5">
              Популярные запросы
            </h4>
            <ul className="space-y-3">
              {popularSearch.map((item) => (
                <li key={item}>
                  <a href="#contact" className="text-[13px] text-white/55 hover:text-white transition leading-tight block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white mb-5">
              Быстрые ссылки
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[13px] text-white/55 hover:text-white transition leading-tight block">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Discover */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white mb-5">
              Районы
            </h4>
            <ul className="space-y-3">
              {discover.map((d) => (
                <li key={d.label}>
                  <a href={d.href} className="text-[13px] text-white/55 hover:text-white transition leading-tight block">
                    {d.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white mb-5">
              Контакты
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-white/35 mb-1">Телефон</p>
                <a
                  href="tel:+79288497980"
                  className="text-[15px] font-semibold text-white hover:text-accent transition"
                >
                  +7 928 849-79-80
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-white/35 mb-1">Почта</p>
                <a
                  href={`mailto:${PLACEHOLDER_EMAIL}`}
                  className="text-[13px] text-white/55 hover:text-white transition break-all"
                >
                  {PLACEHOLDER_EMAIL}
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-white/35 mb-2">Рассылка</p>
                <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Email"
                    className="flex-1 min-w-0 rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-[13px] text-white placeholder:text-white/30 outline-none focus:border-white/30"
                  />
                  <button
                    type="submit"
                    className="rounded-lg bg-accent px-4 py-2.5 text-[13px] font-semibold text-white hover:bg-accent-dark transition"
                  >
                    OK
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>

        {/* ── Copyright bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10 py-6">
          <p className="text-[12px] text-white/35">
            © {year} Владимир Балашов. Все права защищены.
          </p>
          <p className="text-[12px] text-white/25">
            Недвижимость в Краснодаре и Геленджике
          </p>
        </div>

      </div>
    </footer>
  );
}
