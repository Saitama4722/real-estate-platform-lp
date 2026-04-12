const stats = [
  { value: "120+", label: "Закрытых сделок" },
  { value: "8 лет", label: "Опыта на рынке" },
  { value: "2", label: "Ключевых города" },
  { value: "0%", label: "Комиссии с покупателя" },
  { value: "1", label: "Личный контакт" },
];

export default function TrustStrip() {
  return (
    <section aria-label="Статистика" className="bg-white border-b border-brand-100">
      <div className="container-site py-7 sm:py-9">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center ${
                i === stats.length - 1 && stats.length % 2 !== 0
                  ? "col-span-2 sm:col-span-1"
                  : ""
              }`}
            >
              <span className="text-3xl sm:text-[2rem] font-bold text-brand-900 tracking-tight leading-none">
                {stat.value}
              </span>
              <span className="mt-2 text-[12px] text-brand-400 font-medium leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
