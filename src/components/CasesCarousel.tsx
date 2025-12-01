"use client";
import { useState } from "react";

const CASES = [
  { result: "Redução de 18% na carga efetiva", quote: "A QS nos trouxe previsibilidade e ROI", metric: "ROI 3x" },
  { result: "Mitigação de autuações em 80%", quote: "Governança que dá tranquilidade ao board", metric: "80%" },
  { result: "Estrutura sucessória com proteção de 1 Bi", quote: "Patrimônio protegido e continuidade", metric: "1 Bi" },
];

export default function CasesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % CASES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + CASES.length) % CASES.length);
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="inline-block py-1 px-3 rounded-full bg-brand-blue-600/10 border border-brand-blue-600/20 text-brand-blue-600 uppercase tracking-wider text-sm font-semibold mb-4">
            Resultados Comprovados
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white [font-family:var(--font-display)]">
            Galeria de Sucesso
          </h2>
        </div>

        {/* Controls */}
        <div className="flex gap-3">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-brand-gold-500/50 transition-all group"
            aria-label="Anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white group-hover:text-brand-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-brand-gold-500/50 transition-all group"
            aria-label="Próximo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white group-hover:text-brand-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {CASES.map((c, i) => (
            <div key={i} className="min-w-full px-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-12 relative overflow-hidden group hover:bg-white/[0.04] transition-colors">
                <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl font-serif text-brand-gold-500 leading-none select-none">
                  "
                </div>

                <div className="relative z-10">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    {c.result}
                  </div>
                  <blockquote className="text-lg md:text-xl text-white/70 italic mb-8 border-l-4 border-brand-gold-500 pl-6">
                    "{c.quote}"
                  </blockquote>
                  <div className="inline-flex items-center gap-3 rounded-full px-5 py-2 bg-brand-gold-500/10 border border-brand-gold-500/20 text-brand-gold-500 font-bold">
                    <span>Impacto:</span>
                    <span className="text-white">{c.metric}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {CASES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? "w-8 bg-brand-gold-500" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
