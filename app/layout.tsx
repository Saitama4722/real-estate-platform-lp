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
  metadataBase: new URL('https://www.ieya.ru'),
  title: "Владимир Балашов — недвижимость в Краснодаре и Геленджике",
  description:
    "Подбор и покупка жилой недвижимости в Краснодаре и Геленджике. Владимир Балашов: сопровождение сделки от запроса до ключей, спокойный разбор рынка юга без лишнего шума.",
  keywords:
    "Владимир Балашов, недвижимость Краснодар, недвижимость Геленджик, подбор квартиры, купить недвижимость Краснодар, купить недвижимость Геленджик, риэлтор Краснодар, риэлтор Геленджик",
  openGraph: {
    title: "Владимир Балашов — недвижимость в Краснодаре и Геленджике",
    description:
      "Подбор и сопровождение покупки в Краснодаре и Геленджике. Один контакт — от запроса до сделки.",
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
