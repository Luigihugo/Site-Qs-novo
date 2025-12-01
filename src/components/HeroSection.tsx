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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-32 w-full">
        <div className="space-y-6 md:space-y-8 max-w-5xl">
          {/* Título pequeno - hierarquia superior */}
          <div 
            className={`transition-all duration-1000 ease-out ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            <span className="text-sm md:text-base uppercase tracking-[0.2em] text-brand-gold-500 font-semibold letter-spacing-wider">
              Consultoria estratégica empresarial
            </span>
          </div>

          {/* Título principal - grande e impactante */}
          <h1 
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-[1.2] tracking-tight [font-family:var(--font-display)] transition-all duration-1000 ease-out ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <span className="block">Transformamos</span>
            <span className="block text-brand-gold-500">
              complexidade do seu
            </span>
            <span className="block">
              negócio em vantagem
            </span>
            <span className="block text-brand-gold-500">competitiva</span>
          </h1>

          {/* Descrição */}
          <p 
            className={`text-lg md:text-xl lg:text-2xl text-white/70 max-w-3xl leading-relaxed transition-all duration-1000 ease-out ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            Estratégia, governança e eficiência para diretoria e CFOs que exigem performance.
          </p>

          {/* CTAs */}
          <div 
            className={`flex flex-wrap gap-5 pt-6 transition-all duration-1000 ease-out ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.6s' }}
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
