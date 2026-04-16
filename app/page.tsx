import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProtectedMain from "@/components/layout/ProtectedMain";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import CityCarousel from "@/components/sections/CityCarousel";
import PropertyCarousel from "@/components/sections/PropertyCarousel";
import Agents from "@/components/sections/Agents";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <ProtectedMain>
        {/* 1. Hero */}
        <Hero />
        {/* 2. Advantages */}
        <TrustStrip />
        {/* 3. Cities */}
        <CityCarousel />
        {/* 4. Property showcase */}
        <PropertyCarousel />
        {/* 5. About realtor */}
        <Agents />
        {/* 6. Process */}
        <Process />
        {/* 7. Contact */}
        <Contact />
      </ProtectedMain>
      {/* 8. Footer */}
      <Footer />

      {/* Envybox callback widget — homepage only */}
      <Script
        src="https://cdn.envybox.io/widget/cbk.js?wcb_code=fd4c8cb90c73babb288d0fe0bd5889b1"
        strategy="afterInteractive"
      />
      <link
        rel="stylesheet"
        href="https://cdn.envybox.io/widget/cbk.css"
      />
    </>
  );
}

