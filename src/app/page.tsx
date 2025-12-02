import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";

import ContactCTASection from "@/components/ContactCTASection";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";
import AutoHideHeader from "@/components/AutoHideHeader";
import CasesCarousel from "@/components/CasesCarousel";
import CultureSection from "@/components/CultureSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-navy-900 text-foreground">
      <AutoHideHeader />

      <InteractiveBackground>
        <HeroSection />

        <AboutSection />
        <ServicesSection />
        <CasesCarousel />
        <CultureSection />
        <ContactCTASection />
        <Footer />
      </InteractiveBackground>
    </div>
  );
}
