export default function CasesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-8 lg:grid-cols-2 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">Resultados que geram vantagem</h2>
          <p className="text-white/80">
            Seleção de casos com ganhos em eficiência, redução de risco e impacto estratégico mensurável.
          </p>
          <a href="#contato" className="inline-flex rounded-full px-6 py-3 bg-white text-brand-navy-900 font-medium">
            Solicitar overview executivo
          </a>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 aspect-video flex items-center justify-center">
          <span className="text-white/70">Vídeo institucional ou case destaque</span>
        </div>
      </div>
    </section>
  );
}
