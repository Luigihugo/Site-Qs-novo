export default function AboutSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          <span className="text-brand-blue-600 uppercase tracking-wide text-sm">Sobre</span>
          <h2 className="text-3xl font-semibold">Por que a QS</h2>
          <p className="text-white/80 text-lg">
            Atuamos com visão executiva para destravar eficiência tributária, fortalecer governança e sustentar decisões de alto impacto.
          </p>
        </div>
        <ul className="grid gap-4">
          {[
            "Eficiência comprovada em projetos complexos",
            "Governança que reduz risco e aumenta previsibilidade",
            "Time sênior com método e tecnologia",
            "Entrega com foco em ROI e velocidade",
          ].map((b) => (
            <li key={b} className="flex items-start gap-3 transition-all duration-700 ease-out will-change-transform opacity-100">
              <span className="inline-block h-2 w-2 rounded-full bg-brand-gold-500" />
              <span className="text-white/85">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
