"use client";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function MetodoSoftwareAutoridadeSection() {
  const destaques = [
    {
      texto: "Metodologia única validada em cenários de altíssima complexidade",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      texto: "Software próprio aplicado em +1.800 projetos",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      texto: "Atuação estratégica para empresas e pessoas físicas",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      texto: "Software de IA contextual para dilemas críticos",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background limpo - sem textura */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy-900 via-brand-navy-800/30 to-brand-navy-900" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Grid de Destaques - 4 caixas do mesmo tamanho com design elegante */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {destaques.map((destaque, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-white/[0.02] backdrop-blur-md p-6 md:p-8 h-full flex flex-col transition-all duration-500 hover:border-brand-gold-500/40 hover:bg-gradient-to-br hover:from-white/[0.12] hover:via-white/[0.08] hover:to-white/[0.04] hover:scale-[1.03] hover:shadow-2xl hover:shadow-brand-gold-500/20">
                {/* Gradiente de brilho no hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-gold-500/10 via-brand-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Borda brilhante no hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-brand-gold-500/30 transition-all duration-500" />
                
                {/* Ícone */}
                <div className="relative z-10 mb-4 flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-brand-gold-500/20 to-brand-blue-500/20 border border-brand-gold-500/30 group-hover:from-brand-gold-500/30 group-hover:to-brand-blue-500/30 group-hover:border-brand-gold-500/50 transition-all duration-500 group-hover:scale-110">
                    <div className="text-brand-gold-400 group-hover:text-brand-gold-300 transition-colors duration-500">
                      {destaque.icon}
                    </div>
                  </div>
                </div>
                
                {/* Texto */}
                <p className="text-white/95 leading-relaxed text-base md:text-lg relative z-10 font-medium group-hover:text-white transition-colors duration-500">
                  {destaque.texto}
                </p>
                
                {/* Efeito de brilho sutil */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
