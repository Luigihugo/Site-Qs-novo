export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-6 py-10 text-white/70">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>© QS Consultoria</div>
        <div className="flex gap-6">
          <a href="#servicos" className="hover:text-white">Serviços</a>
          <a href="#contato" className="hover:text-white">Contato</a>
        </div>
      </div>
    </footer>
  );
}
