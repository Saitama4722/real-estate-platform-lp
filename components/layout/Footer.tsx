"use client";

const CONTACT_EMAIL = "info@centreal.ru";

const popularSearch = [
  "Квартиры в Краснодаре",
  "Дома в пригороде",
  "Новостройки Геленджик",
  "Апартаменты у моря",
  "Участки под ИЖС",
];

const quickLinks = [
  { label: "Главная",                        href: "/" },
  { label: "Политика конфиденциальности",    href: "/privacy" },
  { label: "Пользовательское соглашение",    href: "/terms" },
  { label: "Процесс",                        href: "/#process" },
  { label: "Контакты",                       href: "/#contact" },
];

const discover = [
  { label: "Краснодар",  href: "#contact" },
  { label: "Геленджик",  href: "#contact" },
];

function IconTg() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function IconWa() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.298-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

const socials = [
  { label: "Telegram",  Icon: IconTg, href: "#" },
  { label: "WhatsApp",  Icon: IconWa, href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-white border-t border-gold-DEFAULT/10">

      {/* ── Top brand bar ── */}
      <div className="container-site">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-10 border-b border-white/[0.05]">

          {/* Logo */}
          <a href="#hero" className="flex flex-col cursor-pointer group">
            <span className="font-serif text-lg sm:text-xl font-semibold tracking-[0.12em] uppercase text-white group-hover:text-gold-300 transition-colors duration-300">
              Владимир Балашов
            </span>
            <span
              className="text-[9px] font-bold uppercase tracking-[0.4em] text-gold-400/60 mt-1.5"
              style={{ fontFamily: "var(--font-josefin)" }}
            >
              недвижимость на юге
            </span>
          </a>

          {/* Gold separator */}
          <div className="hidden sm:flex items-center gap-6">
            <div className="w-px h-10 bg-gradient-to-b from-transparent via-gold-DEFAULT/30 to-transparent" />
            <p
              className="text-xs text-white/35 tracking-[0.1em] uppercase max-w-[200px] leading-relaxed"
              style={{ fontFamily: "var(--font-josefin)" }}
            >
              Краснодар · Геленджик
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-2.5">
            {socials.map(({ label, Icon, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-full border border-gold-DEFAULT/20 bg-white/[0.03] flex items-center justify-center text-white/40 hover:bg-teal-DEFAULT hover:border-teal-DEFAULT hover:text-white transition-all duration-300 cursor-pointer"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* ── Main columns ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 pt-12 pb-10">

          {/* Popular Search */}
          <div>
            <h4
              className="text-[9px] font-bold uppercase tracking-[0.35em] text-gold-400/70 mb-7"
              style={{ fontFamily: "var(--font-josefin)" }}
            >
              Популярные запросы
            </h4>
            <ul className="space-y-4">
              {popularSearch.map((item) => (
                <li key={item}>
                  <a
                    href="#contact"
                    className="text-xs text-white/40 hover:text-gold-300 transition-colors duration-200 leading-tight block tracking-[0.04em] cursor-pointer"
                    style={{ fontFamily: "var(--font-josefin)" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-[9px] font-bold uppercase tracking-[0.35em] text-gold-400/70 mb-7"
              style={{ fontFamily: "var(--font-josefin)" }}
            >
              Быстрые ссылки
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-white/40 hover:text-gold-300 transition-colors duration-200 leading-tight block tracking-[0.04em] cursor-pointer"
                    style={{ fontFamily: "var(--font-josefin)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Discover */}
          <div>
            <h4
              className="text-[9px] font-bold uppercase tracking-[0.35em] text-gold-400/70 mb-7"
              style={{ fontFamily: "var(--font-josefin)" }}
            >
              Районы
            </h4>
            <ul className="space-y-4">
              {discover.map((d) => (
                <li key={d.label}>
                  <a
                    href={d.href}
                    className="text-xs text-white/40 hover:text-gold-300 transition-colors duration-200 leading-tight block tracking-[0.04em] cursor-pointer"
                    style={{ fontFamily: "var(--font-josefin)" }}
                  >
                    {d.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-[9px] font-bold uppercase tracking-[0.35em] text-gold-400/70 mb-7"
              style={{ fontFamily: "var(--font-josefin)" }}
            >
              Контакты
            </h4>
            <div className="space-y-6">
              <div>
                <p
                  className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/25 mb-2"
                  style={{ fontFamily: "var(--font-josefin)" }}
                >
                  Телефон
                </p>
                <a
                  href="tel:+79288497980"
                  className="font-serif text-base font-semibold text-white/80 hover:text-gold-300 transition-colors duration-200 tracking-wide cursor-pointer"
                >
                  +7 928 849-79-80
                </a>
              </div>
              <div>
                <p
                  className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/25 mb-2"
                  style={{ fontFamily: "var(--font-josefin)" }}
                >
                  Почта
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-xs text-white/40 hover:text-gold-300 transition-colors duration-200 break-all cursor-pointer"
                  style={{ fontFamily: "var(--font-josefin)" }}
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ── Copyright bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/[0.05] py-6">
          <p
            className="text-[10px] text-white/25 tracking-[0.1em] uppercase"
            style={{ fontFamily: "var(--font-josefin)" }}
          >
            © {year} Владимир Балашов. Все права защищены.
          </p>
          <p
            className="text-[10px] text-white/18 tracking-[0.1em] uppercase"
            style={{ fontFamily: "var(--font-josefin)" }}
          >
            Недвижимость в Краснодаре и Геленджике
          </p>
        </div>
      </div>
    </footer>
  );
}
