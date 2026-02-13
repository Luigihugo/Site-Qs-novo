"use client";
import RevealOnScroll from "@/components/RevealOnScroll";

type Depoimento = {
  texto: string;
  autor: string;
  cargo: string;
  empresa: string;
};

const depoimentos: Depoimento[] = [
  {
    texto: "A QS transformou completamente nossa gestão tributária. Os resultados foram além das expectativas, com redução significativa da carga tributária e aumento da eficiência operacional.",
    autor: "Nome do Cliente",
    cargo: "Cargo",
    empresa: "Nome da Empresa",
  },
  {
    texto: "O trabalho da QS foi fundamental para estruturarmos nossa sucessão familiar. Profissionalismo, conhecimento técnico e entrega de resultados mensuráveis.",
    autor: "Nome do Cliente",
    cargo: "Cargo",
    empresa: "Nome da Empresa",
  },
];

export default function DepoimentosSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy-900 via-brand-navy-800/50 to-brand-navy-900" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <RevealOnScroll>
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brand-blue-500/10 border border-brand-blue-500/20 text-xs md:text-sm uppercase tracking-[0.2em] text-brand-blue-500 font-semibold backdrop-blur-sm mb-4">
              Depoimentos
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
              O que nossos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/85">
                clientes dizem
              </span>
            </h2>
          </div>
        </RevealOnScroll>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {depoimentos.map((depoimento, index) => (
            <RevealOnScroll key={index} delay={index * 150}>
              <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-10 transition-all duration-500 hover:border-brand-blue-500/30 hover:bg-white/10">
                {/* Aspas decorativas */}
                <div className="absolute top-6 left-6 text-6xl text-brand-blue-500/20 font-serif leading-none">
                  "
                </div>

                {/* Texto do depoimento */}
                <div className="relative z-10 mb-6">
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed italic text-justify">
                    {depoimento.texto}
                  </p>
                </div>

                {/* Informações do autor com avatar */}
                <div className="relative z-10 pt-6 border-t border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 border-2 border-white/20 flex-shrink-0 flex items-center justify-center text-white font-bold text-lg sm:text-xl">
                    {depoimento.autor.split(/\s+/).map((n) => n[0]).join("").slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg mb-0.5">
                      {depoimento.autor}
                    </p>
                    <p className="text-brand-blue-500 text-sm mb-0.5">
                      {depoimento.cargo}
                    </p>
                    <p className="text-white/60 text-sm">
                      {depoimento.empresa}
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
