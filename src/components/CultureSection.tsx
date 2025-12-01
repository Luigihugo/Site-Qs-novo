export default function CultureSection() {
  const items = [
    { title: "Cultura", desc: "Disciplina, clareza e responsabilidade executiva." },
    { title: "Filosofia", desc: "Estratégia baseada em dados e governança." },
    { title: "Princípios", desc: "Eficiência, segurança jurídica e foco em ROI." },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <span className="text-brand-blue-600 uppercase tracking-wide text-sm">Por trás da estratégia</span>
      <h2 className="text-3xl font-semibold">Nossa cultura e forma de trabalhar</h2>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((i) => (
          <div key={i.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-700 ease-out">
            <div className="text-xl font-semibold text-white">{i.title}</div>
            <div className="mt-2 text-white/80">{i.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
