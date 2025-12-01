"use client";
import { useState } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";
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

function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function ServicesSection() {
  const [expanded, setExpanded] = useState<string | null>(null);
  return (
    <section id="servicos" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <RevealOnScroll>
        <div className="mb-12">
          <span className="text-brand-blue-600 uppercase tracking-wider text-sm font-semibold">Serviços</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 [font-family:var(--font-display)] leading-tight">
            Portfólio de Serviços
          </h2>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed">
            Soluções especializadas com excelência tributária, jurídica e de governança.
          </p>
        </div>
      </RevealOnScroll>
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3" style={{ gridAutoRows: "1fr" }}>
        {servicos.map((s, index) => (
          <RevealOnScroll key={s.titulo} delay={index * 50} direction="scale">
            <div
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col h-full transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-brand-gold-500/10"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight group-hover:text-brand-gold-500 transition-colors duration-300">
                {s.titulo}
              </h3>
              <p className="mt-2 text-white/80 leading-relaxed flex-grow">{s.descricao}</p>
              <div className="mt-auto pt-6 flex items-center gap-3 flex-wrap">
                <button
                  className="inline-flex rounded-full px-5 py-2.5 bg-brand-gold-500 text-brand-navy-900 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  onClick={() => setExpanded((prev) => (prev === slugify(s.titulo) ? null : slugify(s.titulo)))}
                  aria-expanded={expanded === slugify(s.titulo)}
                >
                  Saiba mais
                </button>
                <a
                  href={`/servicos/${slugify(s.titulo)}`}
                  className="inline-flex rounded-full px-5 py-2.5 bg-white/10 text-white hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-300 font-medium"
                >
                  Ver detalhes
                </a>
              </div>
              <div
                className={`mt-4 overflow-hidden transition-all duration-500 ease-in-out ${
                  expanded === slugify(s.titulo) ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-white/90 leading-relaxed">
                  {s.detalhes}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
