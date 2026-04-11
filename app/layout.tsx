import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Владимир Балашов — Недвижимость в Краснодаре и Геленджике",
  description:
    "Профессиональные услуги по купле-продаже недвижимости в Краснодаре и Геленджике. Личный подход, полное сопровождение сделки, надёжный результат.",
  keywords: "недвижимость Краснодар, недвижимость Геленджик, риэлтор, купить квартиру, продать квартиру",
  openGraph: {
    title: "Владимир Балашов — Недвижимость в Краснодаре и Геленджике",
    description:
      "Профессиональные услуги по купле-продаже недвижимости. Краснодар и Геленджик.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
