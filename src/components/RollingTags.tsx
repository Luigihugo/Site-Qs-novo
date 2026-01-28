const TAGS = [
  "Consultoria",
  "Tributária",
  "Governança",
  "Tecnologia",
  "IA",
  "Compliance",
  "Gestão de Passivos",
  "Planejamento Sucessório",
  "M&A",
  "Eficiência",
  "Pessoa física",
  "Pessoa jurídica",
  "Transparência",
  "Segurança",
  "Inovação",
  "Estratégia",

];

export default function RollingTags() {
  const sequence = [...TAGS, ...TAGS];
  return (
    <div className="ticker-mask overflow-hidden w-full py-4">
      <div className="inline-flex items-center gap-4 whitespace-nowrap animate-marquee will-change-transform">
        {sequence.map((r, i) => (
          <span
            key={`${r}-${i}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-5 py-2.5 text-sm md:text-base uppercase tracking-wide font-medium"
          >
            {r}
          </span>
        ))}
      </div>
    </div>
  );
}
