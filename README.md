# Balashov Realty — Premium Real Estate Landing Page

**A production-grade, fully responsive one-page real estate website built with Next.js, TypeScript, and Tailwind CSS.**

Russian-language · Краснодар & Геленджик · Premium UI · Lead Generation · No backend required

---

## English

### What This Project Is

A complete, polished **premium real estate landing page** built for a professional realtor operating in Краснодар (Krasnodar) and Геленджик (Gelendzhik), Russia. The site is designed as a high-conversion, trust-first marketing presence — visually refined, fully responsive, and ready for real content drop-in once placeholder visuals are replaced with actual property photos.

This is not a starter template or a boilerplate. It is a finished, deployment-ready **realtor landing page** with a complete section architecture, custom design system, and production-quality code.

### Key Features

- **8 fully built sections** — Hero, Advantages, City Focus, Property Showcase, About the Realtor, How We Work, Contact, Footer
- **Premium visual system** — custom Tailwind color palette (gold, ink, cream), Cormorant Garamond serif headlines, Inter for body text
- **Sticky transparent header** that transitions to white on scroll, with a mobile hamburger menu
- **City-specific panels** for Краснодар and Геленджик with individual visual identities
- **Property showcase cards** with gradient placeholder visuals, room/area info, tags, pricing structure, and CTA
- **About section** with a portrait placeholder area, bio copy, and a 4-point fact grid
- **Step-by-step process section** (Как мы работаем) on a dark background
- **Static contact form** with client-side success state — no backend required
- **Fully in Russian** — all visible UI, microcopy, and content
- **Responsive layout** — desktop, tablet, and mobile breakpoints
- **SEO metadata** — title, description, Open Graph tags configured in Russian locale
- **Zero TypeScript errors**, clean ESLint, production build verified

### Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15.3 (App Router) |
| Language | TypeScript 5.7 (strict mode) |
| Styling | Tailwind CSS 3.4 |
| Fonts | Google Fonts via `next/font` — Cormorant Garamond + Inter |
| Rendering | Static (SSG) — fully prerendered |
| Environment | cross-env (Windows-compatible NODE_ENV handling) |

### Project Structure

```
real-estate-platform-lp/
├── app/
│   ├── globals.css          # Tailwind directives + all custom component classes
│   ├── layout.tsx           # Root layout, metadata, font loading
│   └── page.tsx             # Page composition — imports all sections
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Sticky nav, scroll effect, mobile menu
│   │   └── Footer.tsx       # Dark minimal footer
│   └── sections/
│       ├── Hero.tsx         # Full-height hero with animated entry and stats bar
│       ├── Advantages.tsx   # 6 benefit cards + CTA strip
│       ├── Cities.tsx       # Krasnodar / Gelendzhik visual panels
│       ├── Properties.tsx   # Property cards with gradient placeholders
│       ├── About.tsx        # Realtor bio, portrait area, key facts
│       ├── HowWeWork.tsx    # 5-step process on dark background
│       └── Contact.tsx      # Contact info + static frontend form
├── next.config.ts
├── tailwind.config.ts       # Custom gold, ink, cream color system
├── postcss.config.js
├── tsconfig.json
└── package.json
```

### Getting Started

**Prerequisites:** Node.js 18 or later, npm 9 or later.

```bash
# Clone the repository
git clone https://github.com/Saitama4722/real-estate-platform-lp.git
cd real-estate-platform-lp

# Install all dependencies (including devDependencies)
npm install --include=dev

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> **Note:** If your environment has `NODE_ENV=production` set globally, the `dev` script handles this automatically via `cross-env`. The production build (`npm run build`) works in any environment.

### Build & Run Commands

```bash
# Development server with hot reload
npm run dev

# Production build (static generation)
npm run build

# Serve the production build
npm run start

# Lint the project
npm run lint
```

### Customisation

The project is designed to receive real content with minimal effort:

**Replacing placeholder images:**
Find sections with gradient `div` backgrounds and swap them for a Next.js `<Image>` component pointing to your own photos. All placeholder areas are clearly labelled in Russian.

**Updating contact details:**
Search for `+7 928 849-79-80` and `Владимир Балашов` — these appear in `Header.tsx`, `About.tsx`, `Contact.tsx`, and `Footer.tsx`.

**Updating copy:**
All section text is co-located in the component file. No CMS or external data layer — just edit the string directly.

**Colour palette:**
The full design token system lives in `tailwind.config.ts`. The gold accent (`#B8832E`), ink neutrals, and cream backgrounds are all centralised there.

**Adding real property listings:**
Extend the `properties` array in `components/sections/Properties.tsx` with your own data structure, or connect it to any headless CMS or data source.

---

## Русский

### Что это за проект

Полноценный **лендинг для риэлтора** — премиальный одностраничный сайт, разработанный для работы с недвижимостью в Краснодаре и Геленджике. Сайт ориентирован на доверие и конверсию: визуально отточенный, полностью адаптивный, готовый к замене плейсхолдеров на реальные фото объектов.

Это не стартовый шаблон. Это **готовый к развёртыванию сайт недвижимости** с полной архитектурой секций, собственной дизайн-системой и кодом уровня продакшна.

### Основные возможности

- **8 полностью реализованных секций** — Герой, Преимущества, Города, Каталог объектов, О риэлторе, Как мы работаем, Контакты, Футер
- **Премиальная визуальная система** — кастомная палитра Tailwind (золото, ink, cream), засечный шрифт Cormorant Garamond для заголовков, Inter для текста
- **Фиксированная прозрачная шапка**, переходящая в белую при прокрутке, с мобильным меню
- **Отдельные блоки для Краснодара и Геленджика** с уникальной визуальной подачей каждого города
- **Карточки объектов** с градиентными плейсхолдерами, информацией о площади и комнатах, ценой и кнопкой действия
- **Секция «О риэлторе»** с областью для портретного фото, текстом-биографией и сеткой ключевых фактов
- **Пошаговый процесс работы** на тёмном фоне
- **Статичная контактная форма** с клиентским состоянием успеха — без бэкенда
- **Весь интерфейс на русском** — включая микрокопи и мета-описания
- **Адаптивная вёрстка** — десктоп, планшет, мобильные устройства
- **Нулевые ошибки TypeScript**, корректный ESLint, успешная production-сборка

### Технологии

| Слой | Технология |
|---|---|
| Фреймворк | Next.js 15.3 (App Router) |
| Язык | TypeScript 5.7 (строгий режим) |
| Стили | Tailwind CSS 3.4 |
| Шрифты | Google Fonts через `next/font` — Cormorant Garamond + Inter |
| Рендеринг | Статический (SSG) — полная пре-генерация |
| Окружение | cross-env (совместимость NODE_ENV для Windows) |

### Структура проекта

```
real-estate-platform-lp/
├── app/
│   ├── globals.css          # Tailwind + все кастомные компонентные классы
│   ├── layout.tsx           # Корневой layout, метаданные, загрузка шрифтов
│   └── page.tsx             # Страница — сборка всех секций
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Фиксированная шапка, эффект прокрутки, мобильное меню
│   │   └── Footer.tsx       # Минималистичный тёмный футер
│   └── sections/
│       ├── Hero.tsx         # Полноэкранный герой с анимацией и статистикой
│       ├── Advantages.tsx   # 6 карточек преимуществ + CTA-блок
│       ├── Cities.tsx       # Визуальные панели Краснодара и Геленджика
│       ├── Properties.tsx   # Карточки объектов с градиентными плейсхолдерами
│       ├── About.tsx        # Биография риэлтора, портрет, ключевые факты
│       ├── HowWeWork.tsx    # 5 шагов работы на тёмном фоне
│       └── Contact.tsx      # Контактная информация + статичная форма
├── next.config.ts
├── tailwind.config.ts       # Кастомная цветовая система
├── postcss.config.js
├── tsconfig.json
└── package.json
```

### Как запустить

**Требования:** Node.js 18+, npm 9+.

```bash
# Клонировать репозиторий
git clone https://github.com/Saitama4722/real-estate-platform-lp.git
cd real-estate-platform-lp

# Установить все зависимости (включая devDependencies)
npm install --include=dev

# Запустить сервер разработки
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

> **Важно:** Если в вашем окружении глобально установлена переменная `NODE_ENV=production`, скрипт `dev` обрабатывает это автоматически через `cross-env`. Сборка (`npm run build`) работает в любом окружении.

### Команды разработки и сборки

```bash
# Сервер разработки с горячей перезагрузкой
npm run dev

# Production-сборка (статическая генерация)
npm run build

# Запуск production-сборки
npm run start

# Линтинг проекта
npm run lint
```

### Как адаптировать под свой контент

**Замена плейсхолдеров изображений:**
Найдите в секциях блоки с градиентным фоном (`div` с `bg-gradient-*`) и замените на компонент `<Image>` из Next.js, указав путь к реальному фото. Все области для замены подписаны на русском языке прямо на странице.

**Обновление контактных данных:**
Найдите `+7 928 849-79-80` и `Владимир Балашов` — они упоминаются в `Header.tsx`, `About.tsx`, `Contact.tsx` и `Footer.tsx`.

**Редактирование текста:**
Все тексты секций находятся прямо в компонентных файлах — без CMS и внешних источников данных.

**Цветовая схема:**
Вся система дизайн-токенов описана в `tailwind.config.ts`. Золотой акцент (`#B8832E`), нейтральный ink и кремовый cream — всё централизовано.

**Добавление реальных объектов:**
Расширьте массив `properties` в `components/sections/Properties.tsx` своими данными или подключите любой headless CMS.

---

## Keywords

`premium real estate landing page` · `real estate website` · `Next.js real estate landing` · `realtor landing page` · `luxury property website` · `real estate website template` · `property marketing website` · `Next.js Tailwind landing page` · `сайт недвижимости` · `landing page для недвижимости` · `сайт риэлтора` · `недвижимость Краснодар` · `недвижимость Геленджик` · `премиальный сайт недвижимости` · `одностраничный сайт недвижимости` · `сайт для агентства недвижимости`

---

## Contact / Контакт

**Author / Автор:** [@VadikQA](https://t.me/VadikQA) on Telegram

Questions, feedback, or collaboration — reach out via Telegram.  
Вопросы, обратная связь или сотрудничество — пишите в Telegram.

---

## Repository

[github.com/Saitama4722/real-estate-platform-lp](https://github.com/Saitama4722/real-estate-platform-lp)
