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
          <div className="space-y-5 md:space-y-8 lg:space-y-10 w-full">
            {/* Label superior pequena */}
            <div
              className={`transition-all duration-1000 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '0.1s' }}
            >
              <span className="text-sm md:text-base uppercase tracking-[0.22em] text-brand-gold-500 font-semibold">
                Consultoria estratégica personalizada
              </span>
            </div>

            {/* Título grande chamativo */}
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold leading-tight tracking-tight [font-family:var(--font-display)] text-white transition-all duration-1000 ease-out w-full ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '0.2s' }}
            >
              Obtenha visão estratégica<br className="hidden md:inline" /> e alcance todo o potencial da sua empresa
            </h1>

            {/* Subtítulo */}
            <h2
              className={`text-lg md:text-2xl lg:text-3xl font-semibold leading-relaxed text-brand-gold-500 lg:pb-2 transition-all duration-1000 ease-out w-full ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '0.3s' }}
            >
              Transforme desafios em oportunidades
            </h2>
            {/* CTAs mantidas na sequência */}
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
