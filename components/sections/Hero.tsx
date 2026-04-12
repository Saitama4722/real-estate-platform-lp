"use client";

import { useState } from "react";

const HERO_BG =
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2200&q=80";

const tabs = ["Купить", "Снять", "Продать"] as const;

export default function Hero() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Купить");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-brand-950"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${HERO_BG})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-brand-950/65" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-r from-brand-950/80 via-brand-950/40 to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative z-10 container-site w-full py-28 sm:py-36 lg:py-0 lg:min-h-screen lg:flex lg:items-center">
        <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-8">

          {/* ── Left: text ── */}
          <div className="lg:w-[52%] xl:w-[50%]">
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-white/55 mb-5">
              Лучший способ на юге России
            </p>
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-[3.6rem] xl:text-[4rem] font-bold tracking-tight text-white leading-[1.07] max-w-2xl text-balance">
              Найдите свой&nbsp;идеальный дом
            </h1>
            <p className="mt-6 text-[15px] sm:text-base text-white/60 max-w-md leading-relaxed">
              Подбор и сопровождение покупки недвижимости в&nbsp;Краснодаре и&nbsp;Геленджике
            </p>
          </div>

          {/* ── Right: search card ── */}
          <div className="w-full lg:w-[42%] xl:w-[38%]">
            <div className="bg-white rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.28)] overflow-hidden">

              {/* Tabs */}
              <div className="flex border-b border-brand-100">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-4 text-sm font-semibold transition-colors relative ${
                      activeTab === tab
                        ? "text-accent"
                        : "text-brand-400 hover:text-brand-700"
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <span className="absolute bottom-0 inset-x-0 h-0.5 bg-accent" />
                    )}
                  </button>
                ))}
              </div>

              {/* Form */}
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-brand-400 mb-2">
                    Тип объекта
                  </label>
                  <select className="input-field bg-brand-50/60 text-brand-800 font-medium">
                    <option value="apartment">Квартира</option>
                    <option value="house">Дом / Коттедж</option>
                    <option value="townhouse">Таунхаус</option>
                    <option value="newbuild">Новостройка</option>
                    <option value="land">Участок</option>
                    <option value="commercial">Коммерческая</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-brand-400 mb-2">
                    Бюджет
                  </label>
                  <select className="input-field bg-brand-50/60 text-brand-800 font-medium">
                    <option value="">Любой бюджет</option>
                    <option value="5">До 5 млн ₽</option>
                    <option value="10">5–10 млн ₽</option>
                    <option value="20">10–20 млн ₽</option>
                    <option value="30">20–30 млн ₽</option>
                    <option value="30+">Свыше 30 млн ₽</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-brand-400 mb-2">
                    Город / Район
                  </label>
                  <select className="input-field bg-brand-50/60 text-brand-800 font-medium">
                    <option value="krasnodar">Краснодар</option>
                    <option value="gelendzhik">Геленджик</option>
                    <option value="anapa">Анапа</option>
                    <option value="novorossiysk">Новороссийск</option>
                  </select>
                </div>

                <a
                  href="#contact"
                  className="btn-solid w-full justify-center py-4 text-[15px] rounded-xl"
                >
                  Найти объекты
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
