"use client";
import { useState, useEffect } from "react";

export default function FloatingContactBar() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
  });

  const whatsappUrl = "https://wa.me/5521976133377";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Criar mensagem para WhatsApp
    const mensagem = `Olá! Meu nome é ${formData.nome} e meu telefone é ${formData.telefone}. Gostaria que vocês entrassem em contato comigo.`;
    const mensagemEncoded = encodeURIComponent(mensagem);
    const whatsappUrlComMensagem = `https://wa.me/5521976133377?text=${mensagemEncoded}`;
    
    // Abrir WhatsApp com a mensagem
    window.open(whatsappUrlComMensagem, '_blank');
    
    // Limpar formulário e fechar modal
    setFormData({ nome: "", telefone: "" });
    setShowForm(false);
  };

  // Fechar modal ao pressionar ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showForm) {
        setShowForm(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [showForm]);

  return (
    <>
      {/* Floating Bar */}
      <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 w-[90%] sm:w-[85%] md:w-[80%] max-w-xl bg-brand-navy-900/95 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
        <div className="px-2.5 sm:px-3 md:px-4">
          <div className="flex items-center gap-1.5 sm:gap-2 py-1.5 sm:py-2">
            {/* Logo QS */}
            <div className="flex items-center flex-shrink-0 pr-0.5 sm:pr-1">
              <span className="text-white text-xs sm:text-sm font-bold">QS</span>
            </div>

            {/* Action Buttons (guiados) */}
            <div className="grid grid-cols-2 gap-1.5 sm:gap-2 flex-1 min-w-0">
              {/* Nós te ligamos */}
              <button
                onClick={() => setShowForm(true)}
                className="w-full flex items-center justify-center gap-1 px-2 sm:px-3 py-1.5 sm:py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white text-[10px] sm:text-xs font-medium transition-all duration-300 hover:scale-[1.02] min-w-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 sm:h-3.5 sm:w-3.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-center leading-tight whitespace-normal sm:whitespace-nowrap">
                  Nós te ligamos
                </span>
              </button>

              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-1 px-2 sm:px-3 py-1.5 sm:py-1.5 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-[10px] sm:text-xs font-semibold transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl min-w-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 sm:h-3.5 sm:w-3.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span className="text-center leading-tight whitespace-normal sm:whitespace-nowrap">
                  Conversar no WhatsApp
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showForm && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] animate-fade-in"
            onClick={() => setShowForm(false)}
          />
          
          {/* Modal Content */}
          <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[70] w-[90%] max-w-md bg-brand-navy-900/98 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6 md:p-8 animate-scale-in">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Nós te ligamos
              </h3>
              <button
                onClick={() => setShowForm(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white transition-all duration-300 hover:scale-110 flex items-center justify-center"
                aria-label="Fechar"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="nome"
                  className="block text-sm font-medium text-white/80 mb-2"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-gold-500 focus:border-transparent transition-all duration-300"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label
                  htmlFor="telefone"
                  className="block text-sm font-medium text-white/80 mb-2"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-gold-500 focus:border-transparent transition-all duration-300"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-xl bg-brand-gold-500 hover:bg-brand-gold-400 text-brand-navy-900 font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Solicitar ligação
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
}
