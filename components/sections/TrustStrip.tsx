const stats = [
  { value: "120+", label: "Закрытых сделок" },
  { value: "8 лет", label: "Опыта на рынке" },
  { value: "2",    label: "Ключевых города" },
  { value: "Под ключ", label: "Сопровождение сделки" },
  { value: "1",    label: "Личный контакт" },
];

export default function TrustStrip() {
  return (
    <section aria-label="Ключевые показатели" className="bg-white border-b border-brand-100">
      <div className="container-site section-padding">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-9 sm:gap-y-10">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center ${
                i === stats.length - 1 && stats.length % 2 !== 0
                  ? "col-span-2 sm:col-span-1"
                  : ""
              }`}
            >
              <span className="text-[2.6rem] sm:text-[2.8rem] font-bold text-brand-900 tracking-tight leading-none">
                {stat.value}
              </span>
              <span className="mt-3 text-xs font-bold uppercase tracking-widest text-brand-600">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
