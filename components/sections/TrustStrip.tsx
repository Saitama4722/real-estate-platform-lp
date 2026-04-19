const stats = [
  { value: "120+", label: "Закрытых сделок" },
  { value: "8 лет", label: "Опыта на рынке" },
  { value: "2",    label: "Ключевых города" },
  { value: "Под ключ", label: "Сопровождение сделки" },
  { value: "1",    label: "Личный контакт" },
];

export default function TrustStrip() {
  return (
    <section aria-label="Ключевые показатели" className="bg-ink-900 border-b border-gold-DEFAULT/15">
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
              <span className="font-serif text-[2.8rem] sm:text-[3rem] font-semibold text-gold-300 tracking-tight leading-none">
                {stat.value}
              </span>
              <span className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
