import RollingTags from "@/components/RollingTags";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col">
      {/* Conteúdo principal - Flex-1 para ocupar o espaço disponível */}
      <div className="relative z-10 flex-1 flex flex-col justify-center w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-20 md:py-32">
        <div className="mx-auto max-w-7xl space-y-6 md:space-y-8 flex flex-col items-center text-center">

          {/* Label */}
          <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
            <span className="inline-block py-1 px-3 rounded-full bg-brand-gold-500/10 border border-brand-gold-500/20 text-xs md:text-sm uppercase tracking-[0.2em] text-brand-gold-500 font-semibold backdrop-blur-sm">
              Consultoria Estratégica
            </span>
          </div>

          {/* Título */}
          <h1 className="animate-fade-in-up opacity-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight text-white max-w-5xl" style={{ animationDelay: '0.2s' }}>
          Transformamos complexidade tributária <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
            em vantagem competitiva
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="animate-fade-in-up opacity-0 text-lg md:text-xl lg:text-2xl text-brand-blue-100/80 max-w-2xl leading-relaxed" style={{ animationDelay: '0.3s' }}>
          Eficiência é extrair valor das oportunidades enquanto os riscos são estrategicamente mitigados.          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up opacity-0 flex flex-wrap justify-center gap-4 pt-4" style={{ animationDelay: '0.4s' }}>
            <a href="#contato" className="group relative btn-premium text-base md:text-lg px-8 py-4 overflow-hidden">
              <span className="relative z-10">Agendar Conversa</span>
              <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent z-0" />
            </a>
            <a href="#servicos" className="btn-outline-premium text-base md:text-lg px-8 py-4 hover:bg-white/5">
              Nossa expertise
            </a>
          </div>

        </div>
      </div>

      {/* Tags na parte inferior - Relativo ao fluxo, sem sobreposição */}
      <div className="relative z-10 pb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
        <RollingTags />
      </div>
    </section>
  );
}
