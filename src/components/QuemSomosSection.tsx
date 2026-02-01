"use client";
import { useState, useEffect } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";
import BrasilMap from "@/components/BrasilMap";

type Case = {
  titulo: string;
  segmento: string;
  desafio: string;
  solucao: string;
  resultado: string[];
  metricas: string[];
};

const cases: Case[] = [
  {
    titulo: "Otimização Tributária",
    segmento: "Comércio",
    desafio: "Empresa de médio porte enfrentava alta carga tributária comprometendo margem e competitividade",
    solucao: "Implementamos análise completa do histórico fiscal, identificando créditos tributários não aproveitados e estruturas mais eficientes. Executamos nossa metodologia personalizada com foco em redução de carga e otimização de processos.",
    resultado: "Redução relevante da carga tributária Impacto imediato no fluxo de caixa Operação segura e em conformidade",
    metricas: ["Redução de carga tributária", "Fluxo de caixa positivo em curto prazo", "Zero autuação"],
  },
  {
    titulo: "Estruturação Patrimonial e Sucessória",
    segmento: "PF e PJ",
    desafio: "Risco patrimonial e sucessão sem estrutura definida.",
    solucao: "Implementamos análise completa do histórico fiscal, identificando créditos tributários não aproveitados e estruturas mais eficientes. Executamos nossa metodologia personalizada com foco em redução de carga e otimização de processos.",
    resultado: "Patrimônio protegido Sucessão planejada e eficiente Continuidade do negócio garantida",
    metricas: ["Redução de carga tributária", "Segurança patrimonial", "Sem necessidade de inventário"],
  },
  {
    titulo: "Gestão de Passivos Tributários",
    segmento: "Indústria",
    desafio: "Passivos tributários elevados e risco operacionais",
    solucao: "Implementamos sistema de compliance fiscal digital com monitoramento em tempo real. Revisão periódica de obrigações, cruzamento de dados e alertas preventivos para evitar inconsistências.",
    resultado: "Redução expressiva dos passivos. Condições de pagamento viáveis. Eliminação de riscos fiscais críticos.",
    metricas: ["Melhoria na CAPAG", "Transação Individual com PGFN", "Fluxo de caixa aliviado"],
  },
  {
    titulo: "Compliance fiscal digital",
    segmento: "Serviços",
    desafio: "Risco constante de autuações pela RFB.",
    solucao: "Implementamos sistema de compliance fiscal digital com monitoramento das obrigações fiscais. Revisão dos últimos 5 anos, cruzamento de dados e alertas preventivos para evitar inconsistências.",
    resultado: "Redução fiscal drasticamente reduzido. Conformidade fiscal. Monitoramento preventivo ativo",
    metricas: ["Redução em risco de autuações", "Conformidade fiscal", "Redução de autuações pela RFB"],
  },
];

export default function QuemSomosSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const metrics = [
    { value: "11", label: "anos", detail: "de atuação" },
    { value: "+1800", label: "projetos", detail: "atendidos" },
    { value: "+ R$2 Bi", label: "mapeados", detail: "em projetos" },
    { value: "Zero", label: "autuação", detail: "em projetos fiscais" },
    { value: "+ R$1 Bi", label: "em riqueza", detail: "protegida" },
    { value: "80%", label: "de redução", detail: "no risco de fiscalização" },
    { value: "+ de 15", label: "segmentos", detail: "atendidos" },
    { value: "Todos os", label: "estados", detail: "da federação" },
  ];

  return (
    <section id="quem-somos" className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy-900 via-brand-navy-800/50 to-brand-navy-900" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <RevealOnScroll>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
              Nossos Números
            </h2>
          </div>
        </RevealOnScroll>

        {/* Metrics Grid - Números nas caixas com design da foto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16 md:mb-20">
          {metrics.map((metric, index) => {
            return (
              <RevealOnScroll key={index} delay={index * 50}>
                <div
                  className={`group relative rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 sm:p-5 md:p-6 transition-all duration-500 hover:border-brand-blue-500/30 hover:bg-white/10 hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-brand-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    {/* Número em branco (todos os números) */}
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 text-white leading-tight">
                      {metric.value}
                    </div>
                    {/* Subheadline em amarelo/dourado */}
                    <div className="text-base sm:text-lg md:text-xl text-brand-gold-500 font-semibold leading-tight">
                      {metric.label}
                    </div>
                    {/* Texto descritivo em branco simples */}
                    <div className="text-xs sm:text-sm text-white mt-1 leading-tight">{metric.detail}</div>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Benefits Grid - Eficiência, Governança, etc. */}
        <RevealOnScroll delay={150}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-12 sm:mb-16 md:mb-20">
            {[
              {
                icon: "⚡",
                title: "Eficiência comprovada",
                description: "Projetos complexos entregues com excelência e agilidade",
              },
              {
                icon: "🛡️",
                title: "Governança sólida",
                description: "Redução de risco e aumento de previsibilidade",
              },
              {
                icon: "👥",
                title: "Time sênior",
                description: "Especialistas com método e tecnologia",
              },
              {
                icon: "🎯",
                title: "Foco em resultados",
                description: "Entrega mensurável e velocidade",
              },
            ].map((benefit, index) => (
              <RevealOnScroll key={benefit.title} delay={200 + index * 100}>
                <div className="group relative rounded-xl sm:rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-4 sm:p-5 md:p-6 lg:p-8 transition-all duration-500 hover:border-brand-blue-500/30 hover:bg-white/10 hover:scale-[1.02] h-full flex flex-col">
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-brand-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 md:gap-5 flex-1">
                    {/* Ícone - centralizado no mobile, alinhado à esquerda no desktop */}
                    <div className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300 w-full sm:w-auto flex justify-center sm:justify-start">
                      {benefit.icon}
                    </div>
                    {/* Conteúdo de texto */}
                    <div className="flex-1 w-full sm:w-auto text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1.5 sm:mb-2 md:mb-3 leading-tight">
                        {benefit.title}
                      </h3>
                      <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </RevealOnScroll>

        {/* Cases de Sucesso - usando estrutura completa do CasesCarousel */}
        <RevealOnScroll delay={200}>
          <div className="mb-16 md:mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              Cases de Sucesso
            </h3>
            <div className="space-y-8 md:space-y-12">
              {cases.map((caseItem, index) => (
                <RevealOnScroll key={index} delay={300 + index * 100}>
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
          </div>
        </RevealOnScroll>

        {/* Mapa do Brasil - Atuação Nacional */}
        <RevealOnScroll delay={400}>
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              Atuação Nacional
            </h3>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Mapa do Brasil SVG - Componente separado */}
                <div className="w-full flex justify-center lg:justify-start">
                  <BrasilMap />
                </div>
                
                {/* Caixa de informações - centralizada e alinhada com o mapa */}
                <div className="space-y-6 flex flex-col justify-center">
                <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
                <p className="text-white/90 text-lg leading-relaxed text-center lg:text-left">
                Desde 2014, já realizamos mais de{" "}
                <span className="font-bold text-brand-blue-300 whitespace-nowrap">
                1.800 projetos
                </span>{" "}
                para empresários de todo o Brasil, gerando uma economia superior a{" "}
                <span className="font-bold text-brand-blue-300 whitespace-nowrap">
                R$ 2 bilhões
                </span>
                !
                    </p>
                  </div>
                  
                  {/* Legenda */}
                  <div className="space-y-3 flex flex-col items-center lg:items-start">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded bg-[#1e7e34] border-2 border-white" />
                      <span className="text-white/80 text-sm">Estados com clientes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded bg-brand-gold-500 border-2 border-white" />
                      <span className="text-white/80 text-sm">Filiais e representação comercial</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded bg-gray-300 border-2 border-white opacity-50" />
                      <span className="text-white/60 text-sm">Em expansão</span>
                    </div>
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
