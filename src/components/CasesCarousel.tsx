const CASES = [
  { result: "Redução de 18% na carga efetiva", quote: "A QS nos trouxe previsibilidade e ROI", metric: "ROI 3x" },
  { result: "Mitigação de autuações em 80%", quote: "Governança que dá tranquilidade ao board", metric: "80%" },
  { result: "Estrutura sucessória com proteção de 1 Bi", quote: "Patrimônio protegido e continuidade", metric: "1 Bi" },
];

export default function CasesCarousel() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <span className="text-brand-blue-600 uppercase tracking-wide text-sm">Cases</span>
      <h2 className="text-3xl font-semibold">Galeria de resultados</h2>
      <div className="mt-8 overflow-x-auto pb-4 snap-x snap-mandatory flex gap-6">
        {CASES.map((c, i) => (
          <div key={i} className="min-w-[320px] sm:min-w-[420px] lg:min-w-[520px] snap-start rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-700 ease-out">
            <div className="text-xl font-semibold text-white">{c.result}</div>
            <div className="mt-2 text-white/80">{c.quote}</div>
            <div className="mt-4 inline-flex rounded-full px-4 py-2 bg-brand-gold-500 text-brand-navy-900">{c.metric}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
