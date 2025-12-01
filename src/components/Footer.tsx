export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-6 py-16 md:py-20 border-t border-white/10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-white/70">
          <div className="text-lg font-semibold [font-family:var(--font-display)] mb-1">QS Consultoria</div>
          <div className="text-sm">© {new Date().getFullYear()} Todos os direitos reservados.</div>
        </div>
        <nav className="flex gap-8">
          <a 
            href="#servicos" 
            className="text-white/70 hover:text-white hover:text-brand-gold-500 transition-colors duration-300 font-medium"
          >
            Serviços
          </a>
          <a 
            href="#contato" 
            className="text-white/70 hover:text-white hover:text-brand-gold-500 transition-colors duration-300 font-medium"
          >
            Contato
          </a>
        </nav>
      </div>
    </footer>
  );
}
