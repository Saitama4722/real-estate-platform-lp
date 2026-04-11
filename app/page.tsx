import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Advantages from "@/components/sections/Advantages";
import Cities from "@/components/sections/Cities";
import Properties from "@/components/sections/Properties";
import About from "@/components/sections/About";
import HowWeWork from "@/components/sections/HowWeWork";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Advantages />
        <Cities />
        <Properties />
        <About />
        <HowWeWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
