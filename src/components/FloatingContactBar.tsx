"use client";
import { useState } from "react";

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
    // Aqui você pode integrar com sua API ou sistema de CRM
    console.log("Dados do formulário:", formData);
    alert("Obrigado! Entraremos em contato em breve.");
    setFormData({ nome: "", telefone: "" });
    setShowForm(false);
  };

  return (
    <>
      {/* Floating Bar */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[85%] max-w-xl bg-brand-navy-900/95 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
        <div className="px-3 sm:px-4">
          <div className="flex items-center justify-between py-1.5 md:py-2 gap-3">
            {/* Logo QS */}
            <div className="flex items-center">
              <span className="text-white text-sm md:text-base font-bold">
                QS
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-1.5 md:gap-2">
              {/* Fale com um consultor */}
              <button
                onClick={() => setShowForm(true)}
                className="flex items-center gap-1 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white text-xs font-medium transition-all duration-300 hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span className="hidden sm:inline">Fale com um consultor</span>
                <span className="sm:hidden">Consultor</span>
              </button>

              {/* Nós te ligamos */}
              <button
                onClick={() => setShowForm(true)}
                className="flex items-center gap-1 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white text-xs font-medium transition-all duration-300 hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
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
                <span className="hidden sm:inline">Nós te ligamos</span>
                <span className="sm:hidden">Ligamos</span>
              </button>

              {/* WhatsApp - menos comercial */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span className="hidden sm:inline">Conversar no WhatsApp</span>
                <span className="sm:hidden">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      </>
  );
}
