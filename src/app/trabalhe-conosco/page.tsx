"use client";
import { useState } from "react";
import AutoHideHeader from "@/components/AutoHideHeader";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function TrabalheConoscoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cargo: "",
    mensagem: "",
  });

  const [arquivo, setArquivo] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setArquivo(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Montar email com dados do formulário
    const rhEmail = "[RH_EMAIL]"; // Placeholder - substitua pelo email real
    const subject = encodeURIComponent(`Candidatura - ${formData.nome} - ${formData.cargo}`);
    const body = encodeURIComponent(
      `Nome: ${formData.nome}\n` +
      `Email: ${formData.email}\n` +
      `Telefone: ${formData.telefone}\n` +
      `Cargo de Interesse: ${formData.cargo}\n\n` +
      `Mensagem:\n${formData.mensagem}\n\n` +
      `Currículo anexado: ${arquivo ? arquivo.name : "Nenhum arquivo anexado"}`
    );

    // Abrir cliente de email
    window.location.href = `mailto:${rhEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-brand-navy-900 text-foreground">
      <AutoHideHeader />

      <InteractiveBackground>
        <main className="relative">
          {/* Hero Section */}
          <section className="relative overflow-hidden py-20 md:py-32">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-navy-900 via-brand-navy-800/50 to-brand-navy-900" />
            
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
              <RevealOnScroll>
                <div className="text-center mb-12 md:mb-16">
                  <span className="inline-block py-1 px-3 rounded-full bg-brand-gold-500/10 border border-brand-gold-500/20 text-xs md:text-sm uppercase tracking-[0.2em] text-brand-gold-500 font-semibold backdrop-blur-sm mb-4">
                    Carreiras
                  </span>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6">
                    Faça parte do{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-500 to-brand-teal-500">
                      time QS
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                    Junte-se a uma equipe de especialistas que transforma desafios em oportunidades. 
                    Trabalhamos com excelência, inovação e foco em resultados.
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </section>

          {/* Form Section */}
          <section className="relative py-12 md:py-20">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 md:px-8">
              <RevealOnScroll>
                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    Envie seu currículo
                  </h2>
                  <p className="text-white/70 mb-8">
                    Preencha o formulário abaixo e anexe seu currículo. Nossa equipe de RH entrará em contato.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-medium text-white/80 mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        required
                        value={formData.nome}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:border-brand-gold-500/50 focus:bg-white/10 transition-all"
                        placeholder="Seu nome completo"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:border-brand-gold-500/50 focus:bg-white/10 transition-all"
                          placeholder="seu@email.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="telefone" className="block text-sm font-medium text-white/80 mb-2">
                          Telefone *
                        </label>
                        <input
                          type="tel"
                          id="telefone"
                          name="telefone"
                          required
                          value={formData.telefone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:border-brand-gold-500/50 focus:bg-white/10 transition-all"
                          placeholder="(00) 00000-0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="cargo" className="block text-sm font-medium text-white/80 mb-2">
                        Cargo de Interesse *
                      </label>
                      <select
                        id="cargo"
                        name="cargo"
                        required
                        value={formData.cargo}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white focus:outline-none focus:border-brand-gold-500/50 focus:bg-white/10 transition-all"
                      >
                        <option value="">Selecione uma área</option>
                        <option value="Consultor Tributário">Consultor Tributário</option>
                        <option value="Consultor Jurídico">Consultor Jurídico</option>
                        <option value="Analista Fiscal">Analista Fiscal</option>
                        <option value="Advogado">Advogado</option>
                        <option value="Contador">Contador</option>
                        <option value="Analista de Compliance">Analista de Compliance</option>
                        <option value="Business Development">Business Development</option>
                        <option value="Outro">Outro</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="mensagem" className="block text-sm font-medium text-white/80 mb-2">
                        Mensagem (opcional)
                      </label>
                      <textarea
                        id="mensagem"
                        name="mensagem"
                        rows={4}
                        value={formData.mensagem}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:border-brand-gold-500/50 focus:bg-white/10 transition-all resize-none"
                        placeholder="Conte-nos um pouco sobre você e sua experiência..."
                      />
                    </div>

                    <div>
                      <label htmlFor="curriculo" className="block text-sm font-medium text-white/80 mb-2">
                        Anexar Currículo *
                      </label>
                      <div className="mt-2">
                        <input
                          type="file"
                          id="curriculo"
                          name="curriculo"
                          accept=".pdf,.doc,.docx"
                          required
                          onChange={handleFileChange}
                          className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-brand-gold-500 file:text-brand-navy-900 hover:file:bg-brand-gold-400 focus:outline-none focus:border-brand-gold-500/50 transition-all"
                        />
                        {arquivo && (
                          <p className="mt-2 text-sm text-white/60">
                            Arquivo selecionado: {arquivo.name}
                          </p>
                        )}
                        <p className="mt-2 text-xs text-white/50">
                          Formatos aceitos: PDF, DOC, DOCX (máx. 5MB)
                        </p>
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="btn-premium w-full text-base md:text-lg px-8 py-4"
                      >
                        Enviar Candidatura
                      </button>
                      <p className="mt-4 text-xs text-white/50 text-center">
                        * Campos obrigatórios. Ao enviar, seu currículo será encaminhado para nosso RH.
                      </p>
                    </div>
                  </form>
                </div>
              </RevealOnScroll>
            </div>
          </section>
        </main>

        <Footer />
      </InteractiveBackground>
    </div>
  );
}
