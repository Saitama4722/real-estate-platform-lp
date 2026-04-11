"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#advantages", label: "Услуги" },
    { href: "#cities", label: "Города" },
    { href: "#properties", label: "Объекты" },
    { href: "#about", label: "О риэлторе" },
    { href: "#contact", label: "Контакт" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm shadow-ink-900/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-site flex items-center justify-between">
        {/* Logo / Name */}
        <a href="#" className="flex flex-col leading-none group">
          <span
            className={`font-serif text-lg font-medium tracking-tight transition-colors duration-300 ${
              scrolled ? "text-ink-900" : "text-white"
            }`}
          >
            Владимир Балашов
          </span>
          <span
            className={`text-2xs font-sans uppercase tracking-widest2 transition-colors duration-300 ${
              scrolled ? "text-gold" : "text-gold-300"
            }`}
          >
            Недвижимость
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-sans tracking-wide transition-colors duration-200 ${
                scrolled
                  ? "text-ink-600 hover:text-ink-900"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Phone CTA */}
        <a
          href="tel:+79288497980"
          className={`hidden lg:inline-flex items-center gap-2 text-sm font-sans font-medium tracking-wide transition-all duration-300 ${
            scrolled
              ? "text-ink-900 hover:text-gold"
              : "text-white hover:text-gold-200"
          }`}
        >
          <PhoneIcon
            className={`w-4 h-4 ${scrolled ? "text-gold" : "text-gold-300"}`}
          />
          +7 928 849-79-80
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className={`lg:hidden p-2 transition-colors ${
            scrolled ? "text-ink-900" : "text-white"
          }`}
          aria-label="Меню"
        >
          {menuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-ink-100 px-4 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-sans text-ink-700 hover:text-ink-900 py-2.5 border-b border-ink-50 last:border-0 tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+79288497980"
            className="mt-2 btn-primary text-center justify-center"
          >
            +7 928 849-79-80
          </a>
        </div>
      </div>
    </header>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  );
}
