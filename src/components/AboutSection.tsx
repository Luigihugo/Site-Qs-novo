"use client";
import { useState, useEffect } from "react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Timeline data
  const timeline = [
    { year: "2014", event: "Início na garagem de casa em Nova Iguaçu-RJ" },
    { year: "2018", event: "Escritório no centro do RJ" },
    { year: "2020", event: "Pandemia - todo mundo em casa" },
    { year: "2022", event: "Abertura de filial em Belém" },
    { year: "2023", event: "Marca de 1500 clientes" },
    { year: "2024", event: "10 anos de QS" },
    { year: "2025", event: "Abertura de filial em Fortaleza" },
  ];

  // Missão, Visão, Valores
  const valores = {
    missao: "Transformar a realidade tributária de clientes, promovendo soluções eficientes e inovadoras.",
    visao: "Ser o principal parceiro de inteligência tributária de nossos clientes, tornando-se referência nacional em soluções inovadoras e de alto valor agregado.",
    valores: [
      "Excelência",
      "Inovação",
      "Transparência",
      "Ética",
      "Comprometimento",
      "Confiabilidade",
    ],
  };

  return (
    <section id="sobre" className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy-900 via-brand-navy-800/50 to-brand-navy-900" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-gold-500/10 border border-brand-gold-500/20 text-xs md:text-sm uppercase tracking-[0.2em] text-brand-gold-500 font-semibold backdrop-blur-sm mb-4">
            Sobre
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Por que escolher a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-300 via-brand-gold-200 to-white">
              QS
            </span>
          </h2>
          <p className="text-lg md:text-xl text-brand-blue-100/80 max-w-3xl mx-auto mb-6">
            Atuamos com visão executiva para destravar eficiência empresarial, fortalecer governança e sustentar decisões de alto impacto.
          </p>
          {/* Texto introdutório sobre a QS */}
          <p className="text-base md:text-lg text-white/70 max-w-4xl mx-auto leading-relaxed">
            A QS Consultoria é uma empresa especializada em eficiência empresarial, fundada em 03/11/2014. 
            Com mais de uma década de experiência, transformamos desafios complexos em oportunidades estratégicas, 
            oferecendo soluções personalizadas que geram eficiência, reduzem riscos e maximizam resultados para nossos clientes.
          </p>
        </div>

        {/* Linha Temporal */}
        <div className="mb-16 md:mb-24">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Nossa História
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-gold-500 via-brand-teal-500 to-brand-gold-500 transform md:-translate-x-1/2" />
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-start gap-6 md:gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-brand-gold-500 border-4 border-brand-navy-900 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-brand-navy-900" />
                  </div>
                  
                  {/* Content card */}
                  <div className={`flex-1 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 transition-all duration-500 hover:border-brand-gold-500/30 hover:bg-white/10 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    } ${index % 2 === 0 ? "text-left" : "text-right"
                    }`}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <div className={`text-2xl md:text-3xl font-bold text-brand-gold-500 mb-2 ${index % 2 === 0 ? "text-left" : "text-right"}`}>
                      {item.year}
                    </div>
                    <p className={`text-white/80 text-lg ${index % 2 === 0 ? "text-left" : "text-right"}`}>
                      {item.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Missão, Visão, Valores */}
        <div className="mb-16 md:mb-24">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Nossos Princípios
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 transition-all duration-500 hover:border-brand-gold-500/30 hover:bg-white/10">
              <h4 className="text-xl font-bold text-brand-gold-500 mb-4">Missão</h4>
              <p className="text-white/70 leading-relaxed">{valores.missao}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 transition-all duration-500 hover:border-brand-gold-500/30 hover:bg-white/10">
              <h4 className="text-xl font-bold text-brand-gold-500 mb-4">Visão</h4>
              <p className="text-white/70 leading-relaxed">{valores.visao}</p>
            </div>
          </div>
          
          {/* Valores */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 transition-all duration-500 hover:border-brand-gold-500/30 hover:bg-white/10">
            <h4 className="text-xl font-bold text-brand-gold-500 mb-6 text-center">Valores</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {valores.valores.map((valor, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-white/5 border border-white/10 hover:border-brand-gold-500/30 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <p className="text-white/80 font-medium">{valor}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vídeo QS */}
        <div className="mb-16 md:mb-24">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Conheça a QS
          </h3>
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm aspect-video max-w-4xl mx-auto">
            {/* Placeholder para vídeo - substitua [VIDEO_QS_LINK] pelo link real */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-navy-800 to-brand-navy-900">
              <div className="text-center p-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 text-brand-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-white/60 mb-2">Vídeo QS</p>
                <p className="text-sm text-white/40">Substitua [VIDEO_QS_LINK] pelo link do vídeo</p>
                {/* Quando tiver o link, descomente e ajuste: */}
                {/* <iframe
                  src="[VIDEO_QS_LINK]"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                /> */}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
