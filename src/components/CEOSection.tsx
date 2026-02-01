"use client";
import RevealOnScroll from "@/components/RevealOnScroll";
import Image from "next/image";

export default function CEOSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy-900 via-brand-navy-800/50 to-brand-navy-900" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <RevealOnScroll>
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-brand-blue-500/10 border border-brand-blue-500/20 text-xs md:text-sm uppercase tracking-[0.2em] text-brand-blue-500 font-semibold backdrop-blur-sm mb-4">
                Quem está por trás disso?
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
                CEO e Founder
              </h2>
            </div>

            {/* Conteúdo */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-stretch">
              {/* Foto - ajustada para corresponder à altura dos dois textos */}
              <div className="flex-shrink-0">
                <div className="relative w-full md:w-80 lg:w-96 h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] rounded-xl overflow-hidden border-2 border-white/20 bg-white/5 shadow-xl">
                  <Image
                    src="/Erick.PNG"
                    alt="CEO e Founder"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>

              {/* Texto e Currículo */}
              <div className="flex-1 space-y-6 flex flex-col justify-between">
                {/* Texto principal */}
                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 flex-1 flex items-center">
                  <p className="text-base md:text-lg text-white/90 leading-relaxed italic">
                    "A QS nasceu da inquietação com a forma superficial como empresas lidam com tributos e decisões estratégicas. Nosso papel é entrar onde dói, organizar o caos e transformar complexidade em clareza para quem decide."
                  </p>
                </div>

                {/* Currículo curto */}
                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 flex-1 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                    Conheça quem lidera a QS
                  </h3>
                  <div className="space-y-3 text-white/80">
                    {/* Adicione aqui o currículo curto do CEO */}
                    <p className="leading-relaxed">
                      {/* Exemplo de currículo - substitua pelos dados reais */}
                      Especialista em consultoria tributária e estratégica com mais de 15 anos de experiência. 
                      Fundador da QS Consultoria, transformou a empresa em referência nacional em eficiência empresarial.
                    </p>
                    {/* Adicione mais informações conforme necessário */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
