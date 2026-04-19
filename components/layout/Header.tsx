"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#hero", label: "Главная" },
  { href: "#listings", label: "Объекты" },
  { href: "#process", label: "Процесс" },
  { href: "#agents", label: "О нас" },
  { href: "#contact", label: "Контакты" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-ink-950/80 backdrop-blur-md border-b border-gold-DEFAULT/10 py-4 sm:py-5"
          : "bg-ink-900/98 backdrop-blur-md border-b border-gold-DEFAULT/15 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
      }`}
    >
      <div className="container-site flex items-center justify-between gap-6">
        <a href="#hero" className="flex flex-col min-w-0">
          <span className="font-serif text-lg sm:text-xl font-semibold tracking-tight text-white truncate">
            Владимир Балашов
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold-400/80">
            недвижимость на юге
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm font-medium text-white/75 hover:text-white hover:bg-white/[0.07] rounded-lg transition-all duration-200 tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+79288497980"
            className="hidden md:inline-flex text-sm font-semibold text-white/80 hover:text-gold-300 transition-colors duration-200"
          >
            +7 928 849-79-80
          </a>
          <a href="#contact" className="btn-solid text-sm px-5 py-2.5">
            Запрос
          </a>
          <button
            type="button"
            className="lg:hidden rounded-lg p-2 text-white/80 hover:bg-white/10 transition"
            aria-label="Меню"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden bg-ink-900 border-t border-gold-DEFAULT/10 transition-all duration-300 ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="container-site py-4 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/[0.07] rounded-lg transition-all duration-200"
            >
              {l.label}
            </a>
          ))}
          <a href="tel:+79288497980" className="btn-solid justify-center mt-3">
            +7 928 849-79-80
          </a>
        </div>
      </div>
    </header>
  );
}
