type Numero = { value: string; subtitle: string; detail: string };
export default function CredibilitySection() {
  const items: Numero[] = [
    { value: "Zero", subtitle: "autuação", detail: "em projetos fiscais." },
    { value: "+1800", subtitle: "projetos", detail: "atendidos em todo o país." },
    { value: "+2 Bi", subtitle: "em projetos", detail: "conduzidos." },
    { value: "11", subtitle: "anos", detail: "de operação." },
    { value: "+1 Bi", subtitle: "em riqueza", detail: "protegida." },
    { value: "80%", subtitle: "de redução", detail: "no risco de fiscalização." },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="space-y-4">
        <span className="text-brand-blue-600 uppercase tracking-wide text-sm">Credibilidade</span>
        <h2 className="text-3xl font-semibold">Nossos números</h2>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" style={{ gridAutoRows: "1fr" }}>
        {items.map((n) => (
          <div key={`${n.value}-${n.subtitle}`} className="rounded-2xl border border-white/20 bg-white/5 p-6 min-h-32 h-full flex flex-col justify-center">
            <div className="text-3xl md:text-4xl font-bold text-white">{n.value}</div>
            <div className="text-2xl md:text-3xl text-white">{n.subtitle}</div>
            <div className="text-sm text-white/70">{n.detail}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
