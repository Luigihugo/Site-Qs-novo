import RollingTags from "@/components/RollingTags";

"use client";
import { useEffect, useState } from "react";
import RollingTags from "@/components/RollingTags";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy-800/60 via-brand-navy-800/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-32 w-full">
        <div className="space-y-10 max-w-4xl">
          <h1 
            className={`text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight [font-family:var(--font-display)] transition-all duration-1000 ease-out ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            Consultoria empresarial que transforma complexidade tributária em vantagem competitiva
          </h1>
          <p 
            className={`text-xl md:text-2xl lg:text-3xl text-white/80 max-w-3xl leading-relaxed transition-all duration-1000 ease-out ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            Estratégia, governança e eficiência para diretoria e CFOs que exigem performance.
          </p>
          <div 
            className={`flex flex-wrap gap-5 pt-4 transition-all duration-1000 ease-out ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.5s' }}
          >
            <a href="#servicos" className="btn-outline-premium">
              Conheça nossos serviços
            </a>
            <a href="#contato" className="btn-premium">
              Agendar conversa estratégica
            </a>
          </div>
        </div>
      </div>
      <RollingTags />
    </section>
  );
}
