import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import QuemSomosSection from "@/components/QuemSomosSection";
import ServicesSection from "@/components/ServicesSection";

import ContactCTASection from "@/components/ContactCTASection";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";
import AutoHideHeader from "@/components/AutoHideHeader";
import CasesCarousel from "@/components/CasesCarousel";
import CultureSection from "@/components/CultureSection";
import FloatingContactBar from "@/components/FloatingContactBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-navy-900 text-foreground">
      <AutoHideHeader />

      <InteractiveBackground>
        <HeroSection />

        <AboutSection />
        <QuemSomosSection />
        <ServicesSection />
        <CasesCarousel />
        <CultureSection />
        <ContactCTASection />
        <Footer />
      </InteractiveBackground>

      <FloatingContactBar />
    </div>
  );
}
