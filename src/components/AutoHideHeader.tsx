"use client";
import { useEffect, useState } from "react";
import ScrollProgress from "@/components/ScrollProgress";

export default function AutoHideHeader() {
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > lastY && y > 100);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-500 ease-out ${
        hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      } ${
        scrolled ? "backdrop-blur-xl bg-brand-navy-900/80 border-b border-white/10" : "backdrop-blur-md bg-brand-navy-900/40"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 md:py-5 flex items-center justify-between">
        <a href="#" className="text-2xl md:text-3xl font-bold tracking-tight [font-family:var(--font-display)] text-white hover:text-brand-gold-500 transition-colors duration-300">
          QS Consultoria
        </a>
        <nav className="flex items-center gap-3 md:gap-4">
          <a 
            href="#servicos" 
            className="rounded-full px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-sm md:text-base font-medium transition-all duration-300 hover:scale-105"
          >
            Serviços
          </a>
          <a 
            href="#contato" 
            className="rounded-full px-5 py-2.5 bg-brand-gold-500 text-brand-navy-900 font-semibold text-sm md:text-base hover:bg-brand-gold-400 hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            WhatsApp
          </a>
        </nav>
      </div>
      <ScrollProgress />
    </header>
  );
}
