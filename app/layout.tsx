import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/layout/CookieBanner";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const SITE_URL = "https://ieya.ru";
const SITE_NAME = "Владимир Балашов — Centreal";
const PHONE = "+7 928 333-08-37";
const TITLE = "Риэлтор в Краснодаре и Геленджике — Владимир Балашов";
const DESCRIPTION =
  "Подбор и покупка квартир, домов и новостроек в Краснодаре и Геленджике. Проверка объектов и сопровождение сделки под ключ. Тел. " +
  PHONE;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Владимир Балашов",
  },
  description: DESCRIPTION,
  keywords: [
    "риэлтор Краснодар",
    "риэлтор Геленджик",
    "недвижимость Краснодар",
    "недвижимость Геленджик",
    "купить квартиру Краснодар",
    "купить квартиру Геленджик",
    "купить дом Краснодар",
    "новостройки Геленджик",
    "подбор недвижимости",
    "агент по недвижимости Краснодар",
    "Владимир Балашов",
    "Centreal",
  ],
  applicationName: "Centreal",
  authors: [{ name: "Владимир Балашов" }],
  creator: "Владимир Балашов",
  publisher: "Centreal",
  category: "Недвижимость",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "/",
    siteName: SITE_NAME,
    title: TITLE,
    description:
      "Подбор и сопровождение покупки недвижимости в Краснодаре и Геленджике. Один контакт — от запроса до ключей.",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "Подбор и сопровождение покупки недвижимости в Краснодаре и Геленджике.",
  },
  formatDetection: {
    telephone: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#2563EB",
};

// Structured data for Yandex / Google: who the realtor is, where he works, how to reach him
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateAgent",
      "@id": `${SITE_URL}/#agent`,
      name: SITE_NAME,
      alternateName: ["Владимир Балашов", "Centreal"],
      description: DESCRIPTION,
      url: SITE_URL,
      logo: `${SITE_URL}/icon-512.png`,
      image: `${SITE_URL}/og-image.png`,
      telephone: "+79283330837",
      email: "info@centreal.ru",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Краснодар",
        addressRegion: "Краснодарский край",
        addressCountry: "RU",
      },
      areaServed: [
        { "@type": "City", name: "Краснодар" },
        { "@type": "City", name: "Геленджик" },
      ],
      knowsLanguage: "ru",
      founder: {
        "@type": "Person",
        name: "Владимир Балашов",
        jobTitle: "Риэлтор",
        image: `${SITE_URL}/images/agent/photo_agent.webp`,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+79283330837",
        contactType: "customer service",
        areaServed: "RU",
        availableLanguage: "Russian",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "ru-RU",
      publisher: { "@id": `${SITE_URL}/#agent` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
