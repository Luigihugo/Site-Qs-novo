"use client";
import RevealOnScroll from "@/components/RevealOnScroll";

type Case = {
  titulo: string;
  segmento: string;
  desafio: string;
  solucao: string;
  resultado: string;
  metricas: string[];
};

const cases: Case[] = [
  {
    titulo: "Otimização Tributária",
    segmento: "Comércio",
    desafio: "Empresa de médio porte enfrentava alta carga tributária comprometendo margem e competitividade",
    solucao: "Implementamos análise completa do histórico fiscal, identificando créditos tributários não aproveitados e estruturas mais eficientes. Executamos nossa metodologia personalizada com foco em redução de carga e otimização de processos.",
    resultado: "✔ Redução relevante da carga tributária  ✔ Impacto imediato no fluxo de caixa ✔ Operação segura e em conformidade",
    metricas: ["Redução de carga tributária", "Fluxo de caixa positivo em curto prazo", "Zero autuação"],
  },
  {
    titulo: "Estruturação Patrimonial e Sucessória",
    segmento: "PF e PJ",
    desafio: "Risco patrimonial e sucessão sem estrutura definida.",
    solucao: "Implementamos análise completa do histórico fiscal, identificando créditos tributários não aproveitados e estruturas mais eficientes. Executamos nossa metodologia personalizada com foco em redução de carga e otimização de processos.",
    resultado: "✔ Patrimônio protegido  ✔ Sucessão planejada e eficiente ✔ Continuidade do negócio garantida",
    metricas: ["Redução de carga tributária", "Segurança patrimonial", "Zero autuações"],
  },
  {
    titulo: "Gestão de Passivos Tributários",
    segmento: "Indústria",
    desafio: "Passivos tributários elevados e risco operacionais",
    solucao: "Implementamos sistema de compliance fiscal digital com monitoramento em tempo real. Revisão periódica de obrigações, cruzamento de dados e alertas preventivos para evitar inconsistências.",
    resultado: "✔ Redução expressiva dos passivos. ✔ Condições de pagamento viáveis. ✔ Eliminação de riscos fiscais críticos.",
    metricas: ["Redução de risco de autuações", "Conformidade garantida", "Monitoramento contínuo"],
  },
  {
    titulo: "Compliance fiscal digital",
    segmento: "Serviços",
    desafio: "Risco constante de autuações pela RFB.",
    solucao: "Implementamos sistema de compliance fiscal digital com monitoramento das obrigações fiscais. Revisão dos últimos 5 anos, cruzamento de dados e alertas preventivos para evitar inconsistências.",
    resultado: "✔ Redução fiscal drasticamente reduzido. ✔ Conformidade fiscal. ✔ Monitoramento preventivo ativo",
    metricas: ["Redução de risco de autuações", "Conformidade garantida", "Monitoramento contínuo"],
  },
];

export default function CasesCarousel() {
  return (
    <section id="cases" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <RevealOnScroll>
        <div className="mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-blue-600/10 border border-brand-blue-600/20 text-brand-blue-600 uppercase tracking-wider text-sm font-semibold mb-4">
            Cases de Sucesso
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold [font-family:var(--font-display)] leading-tight text-white">
            Resultados que Transformam Negócios
          </h2>
          <p className="mt-6 text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed">
            Conheça alguns dos nossos cases de sucesso. Cada projeto é único, mas todos compartilham o mesmo objetivo: 
            transformar desafios em oportunidades reais de crescimento e eficiência.
          </p>
        </div>
      </RevealOnScroll>

      <div className="mt-16 space-y-8 md:space-y-12">
        {cases.map((caseItem, index) => (
          <RevealOnScroll key={index} delay={index * 100}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-12 relative overflow-hidden group hover:bg-white/[0.04] hover:border-brand-gold-500/30 transition-all duration-500">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-9xl font-serif text-brand-gold-500 leading-none select-none">
                {index + 1}
              </div>

              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="inline-block py-1 px-3 rounded-full bg-brand-gold-500/10 border border-brand-gold-500/20 text-brand-gold-500 text-xs font-semibold uppercase">
                    {caseItem.segmento}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-brand-gold-500 transition-colors">
                    {caseItem.titulo}
                  </h3>
                </div>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-8">
                  <div>
                    <h4 className="text-sm font-semibold text-brand-gold-500 uppercase tracking-wider mb-3">
                      Desafio
                    </h4>
                    <p className="text-white/70 leading-relaxed text-sm md:text-base">
                      {caseItem.desafio}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-brand-gold-500 uppercase tracking-wider mb-3">
                      Solução
                    </h4>
                    <p className="text-white/70 leading-relaxed text-sm md:text-base">
                      {caseItem.solucao}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-brand-gold-500 uppercase tracking-wider mb-3">
                      Resultado
                    </h4>
                    <p className="text-white/70 leading-relaxed text-sm md:text-base mb-4">
                      {caseItem.resultado}
                    </p>
                    <div className="space-y-2">
                      {caseItem.metricas.map((metrica, idx) => (
                        <div
                          key={idx}
                          className="inline-block mr-2 mb-2 px-3 py-1 rounded-full bg-brand-gold-500/10 border border-brand-gold-500/20 text-brand-gold-500 text-xs font-medium"
                        >
                          {metrica}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delay={400}>
        <div className="mt-16 text-center">
          <p className="text-white/60 text-base md:text-lg mb-6">
            Quer resultados como estes para sua empresa?
          </p>
          <a
            href="#contato"
            className="btn-premium inline-block"
          >
            Fale com um especialista da QS
          </a>
        </div>
      </RevealOnScroll>
    </section>
  );
}
