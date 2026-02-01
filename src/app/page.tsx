"use client";
import { useEffect, useRef } from "react";
import HeroSection from "@/components/HeroSection";
import MetodoSoftwareAutoridadeSection from "@/components/MetodoSoftwareAutoridadeSection";
import QuemSomosSection from "@/components/QuemSomosSection";
import CEOSection from "@/components/CEOSection";
import QuemConfiaSection from "@/components/QuemConfiaSection";
import DepoimentosSection from "@/components/DepoimentosSection";
import ContactCTASection from "@/components/ContactCTASection";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";
import AutoHideHeader from "@/components/AutoHideHeader";
import FloatingContactBar from "@/components/FloatingContactBar";

export default function Home() {
  const scrollExecutedRef = useRef(false);

  useEffect(() => {
    // Primeiro: garantir que a página está no topo
    window.scrollTo(0, 0);
    
    // Verificar se há hash na URL (vindo de outra página)
    const hash = window.location.hash;
    
    if (hash && !scrollExecutedRef.current) {
      scrollExecutedRef.current = true;
      const targetHash = hash;
      
      // Limpar hash da URL imediatamente
      window.history.replaceState(null, "", window.location.pathname);
      
      // Aguardar a página carregar completamente antes de fazer scroll
      const scrollToSection = () => {
        // Aguardar um pouco mais para garantir que tudo carregou
        setTimeout(() => {
          const element = document.querySelector(targetHash);
          if (element) {
            const headerHeight = 80;
            const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
              top: elementTop - headerHeight,
              behavior: "smooth",
            });
          }
        }, 500); // Delay de 500ms após carregamento completo
      };
      
      // Aguardar carregamento completo da página
      if (document.readyState === "complete") {
        scrollToSection();
      } else {
        window.addEventListener("load", scrollToSection, { once: true });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-brand-navy-900 text-foreground">
      <AutoHideHeader />

      <InteractiveBackground>
        {/* Bloco 1 - HeroSection */}
        <HeroSection />

        {/* Bloco 2 - MÉTODO · SOFTWARE · AUTORIDADE */}
        <MetodoSoftwareAutoridadeSection />

        {/* Bloco 4 - Prova de valor = "Quem somos" números + cases + mapa */}
        <QuemSomosSection />

        {/* Bloco 5 - CEO e Founder */}
        <CEOSection />

        {/* Bloco 6 - Quem confia na QS */}
        <QuemConfiaSection />

        {/* Bloco 7 - Depoimentos */}
        <DepoimentosSection />

        {/* Bloco 8 - CTA final */}
        <ContactCTASection />
        <Footer />
      </InteractiveBackground>

      <FloatingContactBar />
    </div>
  );
}
