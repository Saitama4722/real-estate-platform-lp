const stats = [
  { value: "120+",      label: "Закрытых сделок" },
  { value: "8 лет",     label: "Опыта на рынке" },
  { value: "2",         label: "Ключевых города" },
  { value: "Под ключ",  label: "Сопровождение сделки" },
  { value: "1",         label: "Личный контакт" },
];

export default function TrustStrip() {
  return (
    /* Light warm gray bg — dark text on light bg ✓ */
    <section aria-label="Ключевые показатели" className="bg-stone-100 border-y border-stone-200">
      <div className="container-site py-14 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 sm:gap-y-12">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center ${
                i === stats.length - 1 && stats.length % 2 !== 0
                  ? "col-span-2 sm:col-span-1"
                  : ""
              }`}
            >
              {/* Value — charcoal on light gray ✓ contrast >7:1 */}
              <span className="font-serif text-[2.6rem] sm:text-[3rem] font-semibold text-stone-900 tracking-tight leading-none">
                {stat.value}
              </span>
              {/* Accent rule */}
              <div className="mt-3 mb-3 w-5 h-0.5 bg-accent-500/60" />
              {/* Label — stone-600 on stone-100 ✓ contrast >4.5:1 */}
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-stone-600">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
