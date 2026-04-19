import type { Metadata } from "next";
import { Cinzel, Josefin_Sans } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const josefinSans = Josefin_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-josefin",
  display: "swap",
});

export const metadata: Metadata = {
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
    <html lang="ru" className={`${cinzel.variable} ${josefinSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
