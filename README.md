# Balashov Realty — Premium Real Estate Landing Page

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![License](https://img.shields.io/badge/License-Private-red)](https://github.com/Saitama4722/real-estate-platform-lp)

---

## 🇬🇧 Description

A **production-grade, single-page real estate landing** built for a private realtor operating in Krasnodar and Gelendzhik, Russia. Designed to replicate the structure and visual quality of premium real estate UI templates — without third-party component libraries. Every section is hand-crafted in Tailwind CSS with a clean, conversion-focused layout.

## 🇷🇺 Описание

**Профессиональный лендинг для частного риэлтора**, работающего в Краснодаре и Геленджике. Проект воспроизводит структу��у и качество премиальных шаблонов для недвижимости — без сторонних UI-библиотек. Каждая секция написана вручную на Tailwind CSS с чистым, конверсионным дизайном.

---

## ✨ Features

| Feature | Details |
| --- | --- |
| **Hero section** | Split layout — headline left, search form right with Buy / Rent / Sell tabs |
| **Trust strip** | Stat counters — deals closed, years of experience, zero commission |
| **Property carousel** | Horizontal-scroll portrait cards with badges, price, and property meta |
| **Category grid** | Scrollable category carousel with prev / next navigation |
| **Services section** | Gray-background section with 3 icon cards and hover shadows |
| **City / District carousel** | Split layout — copy left, city cards right |
| **CTA block** | Centered 3-column cards with per-card action buttons |
| **Featured property** | Large showcase card — image 60% / details 40% with feature chips |
| **Agent block** | Split layout — team intro left, portrait agent carousel right |
| **Blog** | 3-card grid with date badges and category tags |
| **Contact form** | Google Maps iframe as background, white form card right-aligned |
| **Footer** | Logo + social icons row, 4-column link grid, copyright bar |
| **Responsive** | Mobile-first, fully responsive from 320 px to 1920 px |
| **Smooth scroll** | Anchor-based single-page navigation |

---

## 🛠 Tech Stack

```text
Framework     Next.js 16.2  (App Router, Turbopack)
Language      TypeScript 5.7
Styling       Tailwind CSS 3.4
UI Library    React 19
Fonts         Inter + Cormorant Garamond (Google Fonts)
Images        Unsplash CDN
Maps          Google Maps Embed API
Linting       ESLint (next/core-web-vitals)
Build tool    Turbopack (Next.js built-in)
Deployment    Vercel
```

---

## 📸 Preview

> Add screenshots to `public/screenshots/` and uncomment the lines below.

```text
Hero section          — Dark full-screen image, split text + search card
Property Carousel     — Tall portrait listing cards with price overlay
Featured Property     — Large split showcase with specs grid
Contact / Map         — Google Maps background + floating form card
```

<!-- ![Hero](public/screenshots/hero.png) -->
<!-- ![Listings](public/screenshots/listings.png) -->
<!-- ![Contact](public/screenshots/contact.png) -->

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18.17
- npm ≥ 9

### Install & Run

```bash
# Clone the repository
git clone https://github.com/Saitama4722/real-estate-platform-lp.git
cd real-estate-platform-lp

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```text
real-estate-platform-lp/
├── app/
│   ├── layout.tsx              # Root layout — fonts, metadata, lang="ru"
│   ├── page.tsx                # Single-page composition
│   └── globals.css             # Tailwind base + component utilities
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Fixed nav — transparent → solid on scroll
│   │   └── Footer.tsx          # 4-column footer with social icons
│   └── sections/
│       ├── Hero.tsx            # Split hero + tabbed search form
│       ├── TrustStrip.tsx      # Stat counters bar
│       ├── PropertyCarousel.tsx  # Portrait listing cards carousel
│       ├── CategoryGrid.tsx    # Category carousel with nav buttons
│       ├── Services.tsx        # 3-card services on gray background
│       ├── CityCarousel.tsx    # Split city/district section
│       ├── CTABlock.tsx        # 3-column CTA icon cards
│       ├── FeaturedProperty.tsx  # Hero property showcase
│       ├── Agents.tsx          # Split agent team carousel
│       ├── Blog.tsx            # Blog cards with date badge
│       └── Contact.tsx         # Google Maps bg + contact form
├── tailwind.config.ts          # Design tokens — brand / accent / gold
├── next.config.ts
└── tsconfig.json
```

---

## ☁️ Deployment

The project is deployed on **[Vercel](https://vercel.com/)** — zero-config, automatic builds on every push to `main`.

### One-click deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Saitama4722/real-estate-platform-lp)

### Via Vercel CLI

```bash
npm i -g vercel
vercel --prod
```

---

## 🎨 Design System

| Token | Value | Usage |
| --- | --- | --- |
| `brand-900` | `#2b394c` | Primary text |
| `brand-950` | `#1b2433` | Dark backgrounds |
| `accent` | `#2563eb` | CTAs, links, active badges |
| `[#f7f7f7]` | `#f7f7f7` | Alternating section backgrounds |
| Section padding | `90 px` vertical | Consistent vertical rhythm |
| Card radius | `12 px` (`rounded-xl`) | All card elements |
| Button radius | `60 px` (`rounded-full`) | Pill-style CTA buttons |

---

## 🔍 Keywords

`real estate website` · `property listing platform` · `real estate landing page` · `real estate UI` · `real estate Next.js` · `Next.js real estate template` · `TypeScript property site` · `Tailwind real estate` · `premium real estate template` · `single page real estate` · `Krasnodar real estate` · `Gelendzhik property` · `Russian real estate platform` · `риэлтор лендинг` · `недвижимость Next.js`

---

## 📬 Contact

**Vladimir Balashov** — private realtor, Krasnodar & Gelendzhik

- Telegram: [@VadikQA](https://t.me/VadikQA)
- Phone: +7 928 849-79-80

---

Built with [Next.js](https://nextjs.org/) · Styled with [Tailwind CSS](https://tailwindcss.com/) · Deployed on [Vercel](https://vercel.com/)
