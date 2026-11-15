import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Centreal — недвижимость Краснодара и Геленджика",
    short_name: "Centreal",
    description:
      "Риэлтор Владимир Балашов: подбор и покупка недвижимости в Краснодаре и Геленджике с сопровождением сделки.",
    start_url: "/",
    display: "standalone",
    lang: "ru",
    background_color: "#FFFFFF",
    theme_color: "#2563EB",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-512-maskable.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
