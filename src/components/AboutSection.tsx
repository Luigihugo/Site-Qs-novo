"use client";
import { useState, useEffect } from "react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const metrics = [
    { value: "11", label: "anos", detail: "de atuação" },
    { value: "+2 Bi", label: "em projetos", detail: "conduzidos" },
    { value: "+1800", label: "projetos", detail: "atendidos" },
    { value: "Zero", label: "autuação", detail: "em projetos fiscais" },
    { value: "+1 Bi", label: "em riqueza", detail: "protegida" },
    { value: "80%", label: "de redução", detail: "no risco de fiscalização" },
  ];

  const benefits = [
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
      description: "Especialistas com método e tecnologia de ponta",
    },
    {
      icon: "🎯",
      title: "Foco em resultados",
      description: "Entrega com ROI mensurável e velocidade",
    },
  ];

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
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
          <p className="text-lg md:text-xl text-brand-blue-100/80 max-w-3xl mx-auto">
            Atuamos com visão executiva para destravar eficiência tributária, fortalecer governança e sustentar decisões de alto impacto.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-all duration-500 hover:border-brand-gold-500/30 hover:bg-white/10 hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-gold-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {metric.value}
                </div>
                <div className="text-lg md:text-xl text-brand-gold-500 font-semibold">
                  {metric.label}
                </div>
                <div className="text-sm text-white/60 mt-1">{metric.detail}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-6 md:p-8 transition-all duration-500 hover:border-brand-gold-500/30 hover:bg-white/10 hover:scale-[1.02] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-start gap-4">
                <div className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
