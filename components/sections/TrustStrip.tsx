const stats = [
  { value: "120+",      label: "Закрытых сделок" },
  { value: "8 лет",     label: "Опыта на рынке" },
  { value: "2",         label: "Ключевых города" },
  { value: "Под ключ",  label: "Сопровождение сделки" },
  { value: "1",         label: "Личный контакт" },
];

export default function TrustStrip() {
  return (
    <section aria-label="Ключевые показатели" className="relative bg-ink-950 border-y border-gold-DEFAULT/10 overflow-hidden">

      {/* Subtle gold gradient sweep */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-DEFAULT/[0.03] to-transparent pointer-events-none" aria-hidden />

      <div className="container-site py-16 sm:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-12 sm:gap-y-14">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center group ${
                i === stats.length - 1 && stats.length % 2 !== 0
                  ? "col-span-2 sm:col-span-1"
                  : ""
              }`}
            >
              {/* Value */}
              <span className="font-serif text-[2.6rem] sm:text-[3rem] lg:text-[3.2rem] font-semibold text-gold-300 tracking-tight leading-none gold-pulse">
                {stat.value}
              </span>
              {/* Gold micro-rule */}
              <div className="mt-4 mb-3 w-6 h-px bg-gold-DEFAULT/40" />
              {/* Label */}
              <span
                className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/40 leading-relaxed"
                style={{ fontFamily: "var(--font-josefin)" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
