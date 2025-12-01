export default function ContactCTASection() {
  return (
    <section id="contato" className="mx-auto max-w-7xl px-6 py-16">
      <div className="rounded-2xl border border-white/10 bg-brand-navy-800 p-8">
        <h3 className="text-2xl font-semibold">Pronto para começar?</h3>
        <p className="mt-2 text-white/80">
          Agende uma conversa estratégica com nosso time sênior.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href="#" className="btn-premium">
            Agendar conversa estratégica
          </a>
          <a href="#" className="btn-outline-premium">
            Baixar overview executivo (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
