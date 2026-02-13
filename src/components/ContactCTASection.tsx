"use client";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function ContactCTASection() {
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de agendar uma conversa estratégica para entender se — e como — a QS pode ser relevante para o meu negócio."
  );
  const whatsappUrl = `https://wa.me/5521976133377?text=${whatsappMessage}`;

  return (
    <section id="contato" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <RevealOnScroll direction="scale">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-brand-navy-800/80 to-brand-navy-700/60 backdrop-blur-xl p-10 md:p-16 shadow-2xl">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold [font-family:var(--font-display)] leading-tight text-white mb-4">
              Pronto para transformar desafios em resultados?
            </h3>
            <p className="mt-4 text-lg md:text-xl text-white/80 leading-relaxed mb-8">
              Agende uma conversa estratégica para entender se — e como — a QS pode ser relevante para o seu negócio.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium text-base md:text-lg px-8 py-4 inline-flex items-center gap-3 group"
              >
                <span>Agendar conversa estratégica</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <p className="mt-6 text-sm text-white/60">
              Resposta rápida e atendimento personalizado
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
