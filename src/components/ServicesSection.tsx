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
    descricao: "Conflitos societários custam caro e travam o crescimento da empresa.",
    detalhes:
      "Criamos acordos e regras de governança que eliminam ambiguidades, protegem os sócios e aceleram decisões estratégicas, aumentando a eficiência e a competitividade do negócio.",
  },
  {
    titulo: "Compliance Fiscal Digital",
    descricao: "Antecipe riscos fiscais e evite multas antes que elas aconteçam.",
    detalhes:
      "Sistema de monitoramento que identificam inconsistências e riscos fiscais antes que se tornem problemas. Protegemos sua empresa de autuações fiscais caras e trabalhosas, mantendo você sempre em conformidade. Economia de tempo, dinheiro e preocupações.",
  },
  {
    titulo: "Assessoria Fiscal de Rotina",
    descricao: "Tenha especialistas cuidando do fiscal da sua empresa todos os dias, sem sobrecarregar o time.",
    detalhes:
      "Atuamos de forma contínua na revisão de apurações, apoio em fiscalizações e orientação estratégica ao seu time. Você ganha segurança, agilidade e previsibilidade fiscal, enquanto foca no crescimento do seu negócio.",
  },
  {
    titulo: "Gestão de Passivos Tributários | GPT",
    descricao: "Reduza significativamente o valor das suas dívidas fiscais e negocie condições favoráveis.",
    detalhes:
      "Estruturamos estratégias legais para reduzir passivos tributários e negociar condições que realmente caibam no fluxo de caixa. Transformamos dívidas fiscais em soluções viáveis, previsíveis e sustentáveis com foco na redução de custo, risco e pressão financeira.",
  },
  {
    titulo: "Transição da Reforma Tributária",
    descricao: "Prepare sua empresa para a nova realidade fiscal sem perder margem nem competitividade.",
    detalhes:
      "Antecipamos os impactos da Reforma Tributária no seu negócio, simulamos cenários e ajustamos processos para evitar aumento de carga e riscos fiscais. Transformamos a transição em vantagem competitiva, com decisões estratégicas tomadas antes do mercado.",
  },
  {
    titulo: "Controladoria, Consultoria e Assessoria Jurídica | CCA",
    descricao: "Decisões estratégicas mais seguras com visão integrada jurídica.",
    detalhes:
      "Atuamos como suporte executivo integrando controladoria, consultoria e assessoria jurídica para apoiar decisões críticas, estruturar contratos mais vantajosos e implementar governança eficiente. O resultado é menos risco, mais performance e decisões que sustentam o crescimento do negócio.",
  },
  {
    titulo: "Fusões e Aquisições | M&A",
    descricao: "Realize operações de M&A com segurança, preservando valor e evitando riscos ocultos.",
    detalhes:
      "Atuamos em todas as etapas da operação: due diligence completa, estruturação inteligente e suporte na integração pós-transação. Garantimos decisões mais seguras, riscos controlados e maximização de valor em cada movimento estratégico.",
  },
  {
    titulo: "Planejamento Tributário",
    descricao: "Reduza impostos de forma estratégica, legal e com impacto direto no caixa.",
    detalhes:
      "Modelamos cenários e estruturamos estratégias tributárias personalizadas para otimizar a carga fiscal do seu negócio. Cada planejamento é construído com segurança jurídica, previsibilidade e retorno financeiro mensurável, gerando economia real e sustentável.",
  },
  {
    titulo: "Operações Estruturadas e Negociações de Dívidas",
    descricao: "Reestruture dívidas e conduza operações financeiras complexas com condições que cabem no seu caixa.",
    detalhes:
      "Estruturamos operações financeiras inteligentes e conduzimos negociações estratégicas alinhadas aos objetivos do seu negócio. Reduzimos custos financeiros, melhoramos prazos e taxas e criamos estruturas sustentáveis que fortalecem a saúde financeira da empresa."
  },
  {
    titulo: "Advocacia Empresarial",
    descricao: "Proteja sua empresa, reduza riscos e tome decisões jurídicas alinhadas à estratégia do negócio.",
    detalhes:
      "Atuamos na defesa e na prevenção de disputas com foco em resultados empresariais. Nossa atuação jurídica é integrada às decisões da diretoria, reduzindo exposição a riscos e garantindo segurança, previsibilidade e continuidade operacional.",
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
