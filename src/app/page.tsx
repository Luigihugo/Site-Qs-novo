import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CredibilitySection from "@/components/CredibilitySection";
import ContactCTASection from "@/components/ContactCTASection";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";
import AutoHideHeader from "@/components/AutoHideHeader";
import RevealOnScroll from "@/components/RevealOnScroll";
import CasesCarousel from "@/components/CasesCarousel";
import CultureSection from "@/components/CultureSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-navy-900 text-foreground">
      <AutoHideHeader />

      <InteractiveBackground>
        <RevealOnScroll><HeroSection /></RevealOnScroll>
        <RevealOnScroll><CredibilitySection /></RevealOnScroll>
        <RevealOnScroll><ServicesSection /></RevealOnScroll>
        <RevealOnScroll><AboutSection /></RevealOnScroll>
        <RevealOnScroll><CasesCarousel /></RevealOnScroll>
        <RevealOnScroll><CultureSection /></RevealOnScroll>
        <RevealOnScroll><ContactCTASection /></RevealOnScroll>
        <Footer />
      </InteractiveBackground>
    </div>
  );
}
