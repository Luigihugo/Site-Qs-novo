import RollingTags from "@/components/RollingTags";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy-800/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-12">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
            Consultoria empresarial que transforma complexidade tributária em vantagem competitiva
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl">
            Estratégia, governança e eficiência para diretoria e CFOs que exigem performance.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#servicos" className="btn-outline-premium font-medium">
              Conheça nossos serviços
            </a>
            <a href="#contato" className="btn-premium font-medium">
              Agendar conversa estratégica
            </a>
          </div>
        </div>
      </div>
      <RollingTags />
    </section>
  );
}
