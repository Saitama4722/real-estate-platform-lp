import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import PropertyCarousel from "@/components/sections/PropertyCarousel";
import CategoryGrid from "@/components/sections/CategoryGrid";
import Services from "@/components/sections/Services";
import CityCarousel from "@/components/sections/CityCarousel";
import CTABlock from "@/components/sections/CTABlock";
import FeaturedProperty from "@/components/sections/FeaturedProperty";
import Agents from "@/components/sections/Agents";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <PropertyCarousel />
        <CategoryGrid />
        <Services />
        <CityCarousel />
        <CTABlock />
        <FeaturedProperty />
        <Agents />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
