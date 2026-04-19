"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#hero",    label: "Главная" },
  { href: "#listings", label: "Объекты" },
  { href: "#process", label: "Процесс" },
  { href: "#agents",  label: "О нас" },
  { href: "#contact", label: "Контакты" },
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

  const transparent = !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        transparent
          ? "py-5 sm:py-6"
          : "py-3 shadow-[0_4px_40px_rgba(0,0,0,0.5)] bg-ink-950/95 backdrop-blur-xl border-b border-gold-DEFAULT/10"
      }`}
    >
      <div
        className={`container-site flex items-center justify-between gap-6 transition-all duration-500 ${
          transparent
            ? "bg-ink-950/70 backdrop-blur-md rounded-2xl px-5 py-3 border border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            : ""
        }`}
      >
        {/* Logo */}
        <a href="#hero" className="flex flex-col min-w-0 group cursor-pointer">
          <span className="font-serif text-base sm:text-lg font-semibold tracking-widest text-white group-hover:text-gold-300 transition-colors duration-300 truncate uppercase">
            Владимир Балашов
          </span>
          <span
            className="text-[9px] font-bold uppercase tracking-[0.4em] text-gold-400/70 mt-0.5"
            style={{ fontFamily: "var(--font-josefin)" }}
          >
            недвижимость на юге
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-4 py-2.5 text-xs font-semibold text-white/60 hover:text-white transition-colors duration-200 tracking-[0.12em] uppercase cursor-pointer group"
              style={{ fontFamily: "var(--font-josefin)" }}
            >
              {l.label}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-gold-400 group-hover:w-4 transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+79288497980"
            className="hidden md:inline-flex items-center gap-2 text-xs font-semibold text-white/70 hover:text-gold-300 transition-colors duration-200 tracking-[0.05em] cursor-pointer"
            style={{ fontFamily: "var(--font-josefin)" }}
          >
            <svg className="w-3.5 h-3.5 text-gold-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
            </svg>
            +7 928 849-79-80
          </a>
          <a href="#contact" className="btn-solid text-xs px-5 py-2.5">
            Запрос
          </a>
          <button
            type="button"
            className="lg:hidden rounded-xl p-2.5 text-white/70 hover:bg-white/[0.08] hover:text-white transition-all duration-200 cursor-pointer"
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
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="container-site mt-2 pb-4 bg-ink-950/95 backdrop-blur-xl rounded-2xl border border-gold-DEFAULT/10 shadow-[0_16px_60px_rgba(0,0,0,0.5)]">
          <div className="py-4 flex flex-col gap-0.5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-5 py-3.5 text-xs font-semibold text-white/65 hover:text-white hover:bg-white/[0.05] rounded-xl transition-all duration-200 tracking-[0.12em] uppercase cursor-pointer"
                style={{ fontFamily: "var(--font-josefin)" }}
              >
                {l.label}
              </a>
            ))}
            <div className="px-5 pt-4 border-t border-gold-DEFAULT/10 mt-3">
              <a href="tel:+79288497980" className="btn-solid w-full justify-center">
                +7 928 849-79-80
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
