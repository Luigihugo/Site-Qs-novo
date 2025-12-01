import RevealOnScroll from "@/components/RevealOnScroll";

export default function ContactCTASection() {
  return (
    <section id="contato" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <RevealOnScroll direction="scale">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-brand-navy-800/80 to-brand-navy-700/60 backdrop-blur-xl p-10 md:p-16 shadow-2xl">
          <div className="max-w-3xl">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold [font-family:var(--font-display)] leading-tight">
              Pronto para começar?
            </h3>
            <p className="mt-4 text-lg md:text-xl text-white/80 leading-relaxed">
              Agende uma conversa estratégica com nosso time sênior.
            </p>
            <div className="mt-8 flex flex-wrap gap-5">
              <a href="#" className="btn-premium text-base md:text-lg px-8 py-4">
                Agendar conversa estratégica
              </a>
              <a href="#" className="btn-outline-premium text-base md:text-lg px-8 py-4">
                Baixar overview executivo (PDF)
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
