import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CompanyIntro from "@/components/CompanyIntro";
import CompanyStats from "@/components/CompanyStats";
import NaturalFarming from "@/components/NaturalFarming";
import ModernFarming from "@/components/ModernFarming";
import ProductSection from "@/components/ProductSection";
import Sustainability from "@/components/Sustainability";
import VisionSection from "@/components/VisionSection";
import InvestorSection from "@/components/InvestorSection";
import NewsSection from "@/components/NewsSection";
import Gallery from "@/components/Gallery";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CompanyIntro />
      <CompanyStats />
      <NaturalFarming />
      <ModernFarming />
      <ProductSection />
      <Sustainability />
      <VisionSection />
      <InvestorSection />
      <NewsSection />
      <Gallery />
      <ContactCTA />
      <Footer />
    </main>
  );
}
