"use client";
import { useState, useEffect } from "react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Timeline data
  const timeline = [
    { year: "2014", event: "Início na garagem de casa em Nova Iguaçu" },
    { year: "2018", event: "Escritório no centro do RJ" },
    { year: "2020", event: "Pandemia - todo mundo em casa" },
    { year: "2022", event: "Abertura de filial em Belém" },
    { year: "2023", event: "Marca de 1500 clientes" },
    { year: "2024", event: "10 anos de QS" },
    { year: "2025", event: "Abertura de filial em Fortaleza" },
  ];

  // Missão, Visão, Valores - placeholders
  const valores = {
    proposito: "[PROPÓSITO: Texto sobre o propósito da QS]",
    filosofia: "[FILOSOFIA: Texto sobre a filosofia da empresa]",
    missao: "[MISSÃO: Texto da missão da QS]",
    visao: "[VISÃO: Texto da visão da QS]",
    valores: [
      "[Valor 1]",
      "[Valor 2]",
      "[Valor 3]",
      "[Valor 4]",
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-500 to-brand-teal-500">
              QS
            </span>
          </h2>
          <p className="text-lg md:text-xl text-brand-blue-100/80 max-w-3xl mx-auto mb-6">
            Atuamos com visão executiva para destravar eficiência tributária, fortalecer governança e sustentar decisões de alto impacto.
          </p>
          {/* Texto introdutório sobre a QS */}
          <p className="text-base md:text-lg text-white/70 max-w-4xl mx-auto leading-relaxed">
            A QS Consultoria é uma empresa especializada em consultoria tributária e jurídica, fundada em 03/11/2014. 
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

        {/* Propósito, Filosofia, Missão, Visão, Valores */}
        <div className="mb-16 md:mb-24">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Nossos Princípios
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8">
              <h4 className="text-xl font-bold text-brand-gold-500 mb-4">Propósito</h4>
              <p className="text-white/70 leading-relaxed">{valores.proposito}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8">
              <h4 className="text-xl font-bold text-brand-gold-500 mb-4">Filosofia</h4>
              <p className="text-white/70 leading-relaxed">{valores.filosofia}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8">
              <h4 className="text-xl font-bold text-brand-gold-500 mb-4">Missão</h4>
              <p className="text-white/70 leading-relaxed">{valores.missao}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8">
              <h4 className="text-xl font-bold text-brand-gold-500 mb-4">Visão</h4>
              <p className="text-white/70 leading-relaxed">{valores.visao}</p>
            </div>
          </div>
          
          {/* Valores */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8">
            <h4 className="text-xl font-bold text-brand-gold-500 mb-6">Valores</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {valores.valores.map((valor, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
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

        {/* Parceiros */}
        <div className="mb-16 md:mb-24">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Parceiros
          </h3>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-12 text-center">
            <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
              Trabalhamos em parceria com empresas que compartilham nossos valores de excelência e inovação.
            </p>
            <a
              href="#contato"
              className="btn-premium inline-block mr-4"
            >
              Solicite uma proposta de parceria
            </a>
            <a
              href="/qspartners"
              className="btn-outline-premium inline-block"
            >
              QS Partners
            </a>
          </div>
        </div>

        {/* Filiais - Mapa do Brasil */}
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Nossas Filiais
          </h3>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8">
            <div className="relative w-full max-w-4xl mx-auto">
              {/* Mapa do Brasil SVG - formato realista similar à referência */}
              <svg
                viewBox="0 0 1000 1100"
                className="w-full h-auto"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Contorno principal do Brasil - formato realista */}
                <path
                  d="M 100 150 
                     C 150 140, 250 130, 350 125
                     C 450 120, 550 125, 650 135
                     C 750 145, 820 170, 870 210
                     C 920 250, 950 320, 960 400
                     C 970 480, 960 560, 940 640
                     C 920 720, 880 780, 820 820
                     C 760 860, 680 880, 600 890
                     C 520 900, 440 895, 360 880
                     C 280 865, 200 830, 140 780
                     C 80 730, 40 660, 20 580
                     C 0 500, 10 420, 40 340
                     C 70 260, 120 200, 100 150 Z"
                  fill="rgba(255, 255, 255, 0.1)"
                  stroke="rgba(255, 255, 255, 0.4)"
                  strokeWidth="4"
                  strokeLinejoin="round"
                />
                
                {/* Estados/Regiões destacados - similar à referência */}
                
                {/* Pará (Belém) - Norte */}
                <path
                  d="M 100 150 
                     C 150 140, 250 130, 350 125
                     C 420 122, 480 130, 520 160
                     C 560 190, 580 240, 570 300
                     C 560 360, 530 410, 480 440
                     C 430 470, 360 480, 300 470
                     C 240 460, 180 430, 140 380
                     C 100 330, 90 270, 100 220
                     Z"
                  fill="rgba(90, 136, 150, 0.2)"
                  stroke="rgba(90, 136, 150, 0.5)"
                  strokeWidth="1.5"
                />
                
                {/* Ceará (Fortaleza) - Nordeste */}
                <path
                  d="M 520 160 
                     C 580 165, 650 180, 720 210
                     C 790 240, 850 300, 880 370
                     C 910 440, 920 510, 900 570
                     C 880 630, 830 680, 760 710
                     C 690 740, 610 750, 540 740
                     C 470 730, 410 700, 370 650
                     C 330 600, 320 540, 340 480
                     C 360 420, 400 370, 450 340
                     C 500 310, 520 280, 520 250
                     Z"
                  fill="rgba(90, 136, 150, 0.2)"
                  stroke="rgba(90, 136, 150, 0.5)"
                  strokeWidth="1.5"
                />
                
                {/* Rio de Janeiro - Sudeste */}
                <path
                  d="M 540 740 
                     C 610 750, 690 760, 760 780
                     C 830 800, 880 840, 900 890
                     C 920 940, 910 990, 880 1020
                     C 850 1050, 800 1060, 750 1050
                     C 700 1040, 650 1020, 610 990
                     C 570 960, 550 920, 550 880
                     C 550 840, 570 800, 600 770
                     Z"
                  fill="rgba(90, 136, 150, 0.2)"
                  stroke="rgba(90, 136, 150, 0.5)"
                  strokeWidth="1.5"
                />
                
                {/* Centro-Oeste/Sudeste - área central */}
                <path
                  d="M 300 470 
                     C 360 480, 430 490, 500 500
                     C 570 510, 640 530, 700 560
                     C 760 590, 810 630, 840 680
                     C 870 730, 880 780, 870 830
                     C 860 880, 830 920, 790 950
                     C 750 980, 700 990, 650 985
                     C 600 980, 550 965, 510 940
                     C 470 915, 440 880, 420 840
                     C 400 800, 390 750, 390 700
                     C 390 650, 400 600, 420 560
                     C 440 520, 470 490, 500 470
                     Z"
                  fill="rgba(90, 136, 150, 0.2)"
                  stroke="rgba(90, 136, 150, 0.5)"
                  strokeWidth="1.5"
                />
                
                {/* Sul - região sul */}
                <path
                  d="M 650 985 
                     C 700 990, 750 995, 790 1000
                     C 830 1005, 860 1020, 870 1050
                     C 880 1080, 870 1100, 840 1100
                     C 810 1100, 770 1090, 730 1070
                     C 690 1050, 650 1020, 620 990
                     C 590 960, 580 930, 590 900
                     C 600 870, 620 850, 650 840
                     Z"
                  fill="rgba(90, 136, 150, 0.2)"
                  stroke="rgba(90, 136, 150, 0.5)"
                  strokeWidth="1.5"
                />
                
                {/* Pins/Marcadores para as filiais */}
                
                {/* Pin Belém - Norte */}
                <g>
                  <circle
                    cx="350"
                    cy="300"
                    r="20"
                    fill="#cc9903"
                    className="animate-pulse"
                    stroke="#ffffff"
                    strokeWidth="3"
                    filter="drop-shadow(0 0 10px rgba(204, 153, 3, 0.8))"
                  />
                  <path
                    d="M 350 320 L 340 340 L 360 340 Z"
                    fill="#cc9903"
                    stroke="#ffffff"
                    strokeWidth="2"
                  />
                  <title>Belém - Filial</title>
                </g>
                <text
                  x="350"
                  y="360"
                  textAnchor="middle"
                  fill="#cc9903"
                  fontSize="18"
                  fontWeight="bold"
                  className="drop-shadow-lg"
                >
                  Belém
                </text>
                
                {/* Pin Fortaleza - Nordeste */}
                <g>
                  <circle
                    cx="750"
                    cy="400"
                    r="20"
                    fill="#cc9903"
                    className="animate-pulse"
                    stroke="#ffffff"
                    strokeWidth="3"
                    filter="drop-shadow(0 0 10px rgba(204, 153, 3, 0.8))"
                  />
                  <path
                    d="M 750 420 L 740 440 L 760 440 Z"
                    fill="#cc9903"
                    stroke="#ffffff"
                    strokeWidth="2"
                  />
                  <title>Fortaleza - Filial</title>
                </g>
                <text
                  x="750"
                  y="460"
                  textAnchor="middle"
                  fill="#cc9903"
                  fontSize="18"
                  fontWeight="bold"
                  className="drop-shadow-lg"
                >
                  Fortaleza
                </text>
                
                {/* Pin Rio de Janeiro - Sudeste */}
                <g>
                  <circle
                    cx="680"
                    cy="750"
                    r="20"
                    fill="#cc9903"
                    className="animate-pulse"
                    stroke="#ffffff"
                    strokeWidth="3"
                    filter="drop-shadow(0 0 10px rgba(204, 153, 3, 0.8))"
                  />
                  <path
                    d="M 680 770 L 670 790 L 690 790 Z"
                    fill="#cc9903"
                    stroke="#ffffff"
                    strokeWidth="2"
                  />
                  <title>Rio de Janeiro - Sede</title>
                </g>
                <text
                  x="680"
                  y="820"
                  textAnchor="middle"
                  fill="#cc9903"
                  fontSize="18"
                  fontWeight="bold"
                  className="drop-shadow-lg"
                >
                  Rio de Janeiro
                </text>
                
                {/* Placeholder para pins de estados com clientes */}
                {/* Descomente e ajuste quando quiser destacar mais estados */}
                {/* 
                <g>
                  <circle
                    cx="[X]"
                    cy="[Y]"
                    r="12"
                    fill="#5a8896"
                    opacity="0.7"
                  />
                  <path
                    d="M [X] [Y+20] L [X-10] [Y+40] L [X+10] [Y+40] Z"
                    fill="#5a8896"
                    opacity="0.7"
                  />
                  <title>[NOME_ESTADO] - Clientes</title>
                </g>
                */}
              </svg>
              
              <div className="mt-6 text-center">
                <p className="text-white/70 mb-4">
                  Atendemos clientes em todos os estados do Brasil
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-brand-gold-500 animate-pulse border-2 border-white" />
                    <span className="text-white/80 text-sm font-medium">Filiais</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-brand-teal-500 opacity-60" />
                    <span className="text-white/80 text-sm font-medium">Estados com clientes</span>
                  </div>
                </div>
                <p className="text-white/50 text-xs mt-4 italic">
                  * Mapa interativo - estados com clientes podem ser ajustados conforme necessário
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
