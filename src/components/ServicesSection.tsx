"use client";
import { useState } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";
import ServiceModal from "@/components/ServiceModal";
type Servico = { titulo: string; descricao: string; detalhes: string };

const servicos: Servico[] = [
  {
    titulo: "Programa de Eficiência Tributária | PET",
    descricao: "Reduza sua carga tributária de forma segura e legal, aumentando o caixa da sua empresa.",
    detalhes:
      "Identificamos créditos tributários e oportunidades de economia que você não sabia que existiam. Com tecnologia avançada e análise especializada, transformamos impostos em recursos para investir no crescimento do seu negócio. Resultado: economia real e impacto imediato no seu fluxo de caixa.",
  },
  {
    titulo: "Programa Sucessório e Patrimonial",
    descricao: "Proteja e multiplique o patrimônio da sua família para as próximas gerações.",
    detalhes:
      "Estruturas inteligentes que preservam seu patrimônio de forma segura e legal. Planejamos a sucessão familiar evitando perdas tributárias e garantindo que sua riqueza seja transmitida de forma eficiente. Tranquilidade hoje, segurança para o futuro da sua família.",
  },
  {
    titulo: "Programa de Alinhamento Societário",
    descricao: "Elimine conflitos entre sócios e torne sua empresa mais ágil nas decisões estratégicas.",
    detalhes:
      "Acordos societários claros e mecanismos de governança que previnem disputas e aceleram decisões importantes. Transformamos relacionamentos societários complexos em parcerias estratégicas produtivas, aumentando a competitividade do seu negócio.",
  },
  {
    titulo: "Compliance Fiscal Digital",
    descricao: "Evite multas e autuações fiscais com monitoramento inteligente e preventivo.",
    detalhes:
      "Sistema de monitoramento que identifica riscos antes que se tornem problemas. Protegemos sua empresa de autuações fiscais caras e trabalhosas, mantendo você sempre em conformidade. Economia de tempo, dinheiro e preocupações.",
  },
  {
    titulo: "Assessoria Fiscal de Rotina",
    descricao: "Tenha um time de especialistas cuidando da sua empresa todos os dias.",
    detalhes:
      "Suporte contínuo de especialistas que revisam suas apurações, respondem fiscalizações e orientam seu time. Você foca no que faz melhor: crescer seu negócio. Nós cuidamos de toda a complexidade fiscal para você.",
  },
  {
    titulo: "Gestão de Passivos Tributários | GPT",
    descricao: "Reduza significativamente o valor das suas dívidas fiscais e negocie condições favoráveis.",
    detalhes:
      "Estratégias comprovadas para reduzir passivos tributários e negociar condições que cabem no seu orçamento. Transformamos dívidas fiscais pesadas em soluções viáveis, priorizando sempre a redução de custos e riscos para sua empresa.",
  },
  {
    titulo: "Transição da Reforma Tributária",
    descricao: "Prepare-se para a nova realidade fiscal sem perder competitividade ou pagar mais impostos.",
    detalhes:
      "Antecipe-se às mudanças e transforme a Reforma Tributária em oportunidade. Simulamos impactos, ajustamos processos e criamos estratégias para que sua empresa não só se adapte, mas se beneficie do novo cenário fiscal.",
  },
  {
    titulo: "Controladoria, Consultoria e Assessoria Jurídica | CCA",
    descricao: "Decisões estratégicas mais inteligentes com visão integrada jurídica e financeira.",
    detalhes:
      "Suporte executivo completo que integra aspectos jurídicos e financeiros. Tomamos decisões mais seguras, estruturamos contratos mais vantajosos e implementamos governança que aumenta a performance do seu negócio.",
  },
  {
    titulo: "Fusões e Aquisições | M&A",
    descricao: "Realize operações de M&A com segurança, preservando valor e evitando surpresas desagradáveis.",
    detalhes:
      "Due diligence completa, estruturação inteligente e integração eficiente. Garantimos que sua operação de M&A preserve valor, minimize riscos e maximize oportunidades. Sua transação segura e bem-sucedida.",
  },
  {
    titulo: "Planejamento Tributário",
    descricao: "Otimize sua carga tributária com estratégias personalizadas e resultados mensuráveis.",
    detalhes:
      "Planejamento estratégico que modela cenários e cria estruturas tributárias otimizadas. Cada estratégia é personalizada para seu negócio, com segurança jurídica e ROI comprovado. Economia real e sustentável.",
  },
  {
    titulo: "Operações Estruturadas e Negociações de Dívidas",
    descricao: "Negocie dívidas e estruture operações financeiras complexas com condições favoráveis.",
    detalhes:
      "Operações financeiras inteligentes e negociações estratégicas que alinham soluções com seus objetivos de negócio. Reduzimos custos, melhoramos condições e criamos estruturas que fortalecem sua empresa financeiramente.",
  },
  {
    titulo: "Advocacia Empresarial",
    descricao: "Proteja sua empresa em disputas e tenha suporte jurídico especializado quando precisar.",
    detalhes:
      "Representação jurídica focada em resultados empresariais. Atuamos preventivamente para reduzir exposição a riscos e defensivamente quando necessário, sempre alinhados com as decisões estratégicas da sua diretoria.",
  },
];



export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Servico | null>(null);

  return (
    <section id="servicos" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <RevealOnScroll>
        <div className="mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-blue-600/10 border border-brand-blue-600/20 text-brand-blue-600 uppercase tracking-wider text-sm font-semibold mb-4">
            Nossa Expertise
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold [font-family:var(--font-display)] leading-tight text-white">
            Portfólio de Serviços
          </h2>
          <p className="mt-6 text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed">
            Transforme desafios fiscais em vantagens competitivas. Nossas soluções personalizadas geram economia real, 
            reduzem riscos e maximizam resultados financeiros para sua empresa crescer com segurança e eficiência.
          </p>
        </div>
      </RevealOnScroll>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {servicos.map((s, index) => (
          <RevealOnScroll key={s.titulo} delay={index * 50} direction="scale">
            <div
              className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-6 h-full flex flex-col transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.05] hover:border-brand-gold-500/30 hover:shadow-2xl hover:shadow-brand-gold-500/10"
            >
              <div className="mb-4 w-12 h-12 rounded-lg bg-brand-gold-500/10 flex items-center justify-center text-brand-gold-500 group-hover:scale-110 transition-transform duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-brand-gold-500 transition-colors duration-300">
                {s.titulo}
              </h3>

              <p className="text-white/60 leading-relaxed mb-6 flex-grow text-sm">
                {s.descricao}
              </p>

              <div className="mt-auto pt-4 border-t border-white/5">
                <button
                  className="group/btn inline-flex items-center gap-2 text-brand-gold-500 font-semibold text-sm hover:text-white transition-colors"
                  onClick={() => setSelectedService(s)}
                >
                  Ver detalhes
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <ServiceModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </section>
  );
}
