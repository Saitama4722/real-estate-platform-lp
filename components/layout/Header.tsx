"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#hero",     label: "Главная" },
  { href: "#listings", label: "Объекты" },
  { href: "#process",  label: "Процесс" },
  { href: "#agents",   label: "О нас" },
  { href: "#contact",  label: "Контакты" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white transition-all duration-300 ${
        scrolled || open
          ? "border-b border-stone-200 shadow-[0_1px_8px_rgba(28,28,30,0.08)]"
          : "border-b border-stone-100"
      }`}
    >
      <div className="container-site flex items-center justify-between gap-4 lg:gap-8 py-4 sm:py-5 min-w-0">

        {/* Logo */}
        <a href="#hero" className="flex flex-col shrink-0 cursor-pointer group">
          <span className="font-serif text-lg sm:text-xl font-semibold tracking-tight text-stone-900 group-hover:text-accent-500 transition-colors duration-200 leading-tight whitespace-nowrap">
            Владимир Балашов
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-stone-500 mt-0.5">
            недвижимость на юге
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-4 py-2 text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors duration-200 rounded-md hover:bg-stone-100 cursor-pointer"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="tel:+79288497980"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium text-stone-600 hover:text-accent-500 transition-colors duration-200 cursor-pointer"
          >
            <svg className="w-3.5 h-3.5 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
            </svg>
            +7 928 849-79-80
          </a>
          <a href="#contact" className="btn-solid text-sm px-5 py-2.5">
            Запрос
          </a>
          <button
            type="button"
            className="lg:hidden rounded-lg p-2 text-stone-600 hover:bg-stone-100 hover:text-stone-900 transition-all duration-200 cursor-pointer"
            aria-label="Меню"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 border-t border-stone-100 ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="container-site py-3 flex flex-col gap-0.5 bg-white">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 text-sm font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-50 rounded-lg transition-all duration-200 cursor-pointer"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-3 pb-1 border-t border-stone-100 mt-2">
            <a href="tel:+79288497980" className="btn-solid w-full justify-center">
              +7 928 849-79-80
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
