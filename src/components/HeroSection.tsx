"use client";
import { useEffect, useState } from "react";
import RollingTags from "@/components/RollingTags";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy-800/60 via-brand-navy-800/30 to-transparent" />
      
      {/* Conteúdo principal - usando toda a largura */}
      <div className="relative z-10 flex-1 flex items-center w-full">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-20 md:py-32">
          <div className="space-y-6 md:space-y-8 lg:space-y-10 w-full">
            {/* Título pequeno - hierarquia superior */}
            <div 
              className={`transition-all duration-1000 ease-out ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.1s' }}
            >
              <span className="text-sm md:text-base lg:text-lg uppercase tracking-[0.2em] text-brand-gold-500 font-semibold">
                Consultoria estratégica empresarial
              </span>
            </div>

            {/* Título principal - grande e impactante, usando toda a largura */}
            <h1 
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold leading-[1.1] tracking-[-0.03em] [font-family:var(--font-display)] transition-all duration-1000 ease-out w-full ${
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
              className={`text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/70 leading-relaxed max-w-4xl transition-all duration-1000 ease-out ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              Estratégia, governança e eficiência para diretoria e CFOs que exigem performance.
            </p>

            {/* CTAs */}
            <div 
              className={`flex flex-wrap gap-5 pt-6 md:pt-8 transition-all duration-1000 ease-out ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.6s' }}
            >
              <a href="#servicos" className="btn-outline-premium text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
                Conheça nossos serviços
              </a>
              <a href="#contato" className="btn-premium text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
                Agendar conversa estratégica
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Tags na parte inferior, separadas do conteúdo */}
      <div className="relative z-10 pb-8 md:pb-12">
        <RollingTags />
      </div>
    </section>
  );
}
