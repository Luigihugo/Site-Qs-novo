"use client";
import { useState } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";
import ServiceModal from "@/components/ServiceModal";
type Servico = { titulo: string; descricao: string; detalhes: string };

const servicos: Servico[] = [
  {
    titulo: "Programa de Eficiência Tributária | PET",
    descricao: "Métodos inovadores de otimização tributária.",
    detalhes:
      "Mapeamos créditos e estruturas de eficiência com tecnologia e análise sênior, reduzindo carga tributária com segurança jurídica e impacto direto no caixa.",
  },
  {
    titulo: "Programa Sucessório e Patrimonial",
    descricao: "Preservação e ampliação do patrimônio familiar.",
    detalhes:
      "Desenhamos estruturas societárias e patrimoniais resilientes, protegendo riqueza e garantindo continuidade com governança e compliance.",
  },
  {
    titulo: "Programa de Alinhamento Societário",
    descricao: "Relações societárias adequadas para o futuro.",
    detalhes:
      "Ajustamos acordos e mecanismos de governança para reduzir conflitos e aumentar previsibilidade nas decisões estratégicas.",
  },
  {
    titulo: "Compliance Fiscal Digital",
    descricao: "Análise detalhada para identificar riscos fiscais.",
    detalhes:
      "Monitoramos obrigações e cruzamentos fiscais com visão integrada, mitigando autuações e fortalecendo controles internos.",
  },
  {
    titulo: "Assessoria Fiscal de Rotina",
    descricao: "Suporte contínuo para garantir conformidade fiscal.",
    detalhes:
      "Atuação recorrente com revisão de apurações, respostas a fiscalizações e orientação técnica ao time interno.",
  },
  {
    titulo: "Gestão de Passivos Tributários | GPT",
    descricao: "Estratégias para otimizar a gestão dos passivos.",
    detalhes:
      "Tratamos autos de infração, execuções e passivos com estratégia jurídica e fiscal integrada, priorizando redução de risco e custo.",
  },
  {
    titulo: "Transição da Reforma Tributária",
    descricao: "Preparação estratégica ao novo cenário fiscal.",
    detalhes:
      "Simulamos impactos, redesenhamos processos e políticas para uma migração segura e eficiente ao novo modelo tributário.",
  },
  {
    titulo: "Controladoria, Consultoria e Assessoria Jurídica | CCA",
    descricao: "Integração de serviços jurídicos personalizados.",
    detalhes:
      "Integramos visão jurídica e financeira para suportar decisões executivas, contratos e governança com foco em performance.",
  },
  {
    titulo: "Fusões e Aquisições | M&A",
    descricao: "Assessoria em operações de M&A.",
    detalhes:
      "Suporte em due diligence, estruturação e integração pós‑deal, preservando valor e mitigando riscos fiscais e societários.",
  },
  {
    titulo: "Planejamento Tributário",
    descricao: "Estratégias sobre a carga tributária.",
    detalhes:
      "Modelagem de cenários e estruturas para otimizar a carga com segurança, aderência e ROI mensurável.",
  },
  {
    titulo: "Operações Estruturadas e Negociações de Dívidas",
    descricao: "Modelagens complexas e negociação estratégica.",
    detalhes:
      "Desenvolvemos operações financeiras e negociações com credores, alinhadas à estratégia e à governança.",
  },
  {
    titulo: "Advocacia Empresarial",
    descricao: "Representação especializada em demandas corporativas.",
    detalhes:
      "Atuação contenciosa e consultiva com foco em negócios, reduzindo exposição e sustentando decisões da diretoria.",
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
            Soluções especializadas com excelência tributária, jurídica e de governança para impulsionar seu negócio.
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
