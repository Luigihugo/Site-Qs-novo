"use client";
import { useState, useEffect } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";
import BrasilMap from "@/components/BrasilMap";

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
                  className={`group relative rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 sm:p-5 md:p-6 transition-all duration-500 hover:border-brand-blue-500/30 hover:bg-white/10 hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-[0.6] translate-y-3"
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
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Eficiência comprovada",
                description: "Projetos complexos entregues com excelência e agilidade",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Governança sólida",
                description: "Redução de risco e aumento de previsibilidade",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Time sênior",
                description: "Especialistas com método e tecnologia",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: "Foco em resultados",
                description: "Entrega mensurável e velocidade",
              },
            ].map((benefit, index) => (
              <RevealOnScroll key={benefit.title} delay={200 + index * 100}>
                <div className="group relative rounded-xl sm:rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-4 sm:p-5 md:p-6 lg:p-8 transition-all duration-500 hover:border-brand-blue-500/30 hover:bg-white/10 hover:scale-[1.02] h-full flex flex-col">
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-brand-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 md:gap-5 flex-1">
                    {/* Ícone - centralizado no mobile, alinhado à esquerda no desktop */}
                    <div className="text-brand-blue-400 group-hover:text-brand-blue-300 flex-shrink-0 group-hover:scale-110 transition-all duration-300 w-full sm:w-auto flex justify-center sm:justify-start">
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
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 text-center">
              Cases de Sucesso
            </h3>
            <div className="space-y-10 md:space-y-14">
              {cases.map((caseItem, index) => (
                <RevealOnScroll key={index} delay={300 + index * 100}>
                  <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] shadow-xl shadow-black/20 group hover:border-brand-gold-500/25 hover:shadow-brand-gold-500/5 transition-all duration-500">
                    {/* Número de fundo - afastado do conteúdo */}
                    <div className="absolute top-4 right-4 md:top-6 md:right-6 text-7xl sm:text-8xl md:text-9xl font-serif text-brand-gold-500/[0.07] leading-none select-none pointer-events-none">
                      {index + 1}
                    </div>

                    {/* Faixa de destaque lateral */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-gold-500/40 via-brand-gold-500/20 to-transparent rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 pt-10 md:pt-14 pb-6 md:pb-8 pl-6 pr-12 md:pl-10 md:pr-20 lg:pl-12 lg:pr-24">
                      {/* Cabeçalho */}
                      <header className="mb-6 md:mb-8">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-brand-gold-500/10 border border-brand-gold-500/25 text-brand-gold-500 text-xs font-semibold uppercase tracking-wider mb-3">
                          {caseItem.segmento}
                        </span>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white group-hover:text-brand-gold-400/90 transition-colors max-w-2xl">
                          {caseItem.titulo}
                        </h3>
                      </header>

                      {/* Desafio e Resultado - só texto nos balões */}
                      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                        <div className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-5 md:p-6 shadow-inner">
                          <h4 className="text-xs font-semibold text-brand-gold-500 uppercase tracking-widest mb-3">
                            Desafio
                          </h4>
                          <p className="text-white/85 leading-relaxed text-sm md:text-base">
                            {caseItem.desafio}
                          </p>
                        </div>
                        <div className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-5 md:p-6 shadow-inner">
                          <h4 className="text-xs font-semibold text-brand-gold-500 uppercase tracking-widest mb-3">
                            Resultado
                          </h4>
                          <p className="text-white/85 leading-relaxed text-sm md:text-base">
                            {caseItem.resultado}
                          </p>
                        </div>
                      </div>

                      {/* Tags fora do balão - faixa dedicada abaixo */}
                      <div className="mt-6 pt-5 border-t border-white/10">
                        <div className="flex flex-wrap items-center gap-2">
                          {caseItem.metricas.map((metrica, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/80 text-xs font-medium hover:border-brand-gold-500/30 hover:text-brand-gold-400/90 transition-colors"
                            >
                              {metrica}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Mapa do Brasil - Atuação Nacional */}
        <RevealOnScroll delay={400}>
          <div className="mb-8">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 text-center">
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
                      <div className="w-6 h-6 rounded bg-[#2d8b6e] border-2 border-white" />
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
