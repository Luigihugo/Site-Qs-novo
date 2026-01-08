"use client";
import { useState } from "react";
import AutoHideHeader from "@/components/AutoHideHeader";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";

type Cliente = {
  id: number;
  nome: string;
  logo: string; // placeholder - será substituído por imagem
  categoria: string;
};

// Placeholder para logos - você substituirá por imagens reais
const clientes: Cliente[] = [
  // Comércio
  { id: 1, nome: "Cliente Comércio 1", logo: "/placeholder-logo.png", categoria: "Comércio" },
  { id: 2, nome: "Cliente Comércio 2", logo: "/placeholder-logo.png", categoria: "Comércio" },
  { id: 3, nome: "Cliente Comércio 3", logo: "/placeholder-logo.png", categoria: "Comércio" },
  { id: 4, nome: "Cliente Comércio 4", logo: "/placeholder-logo.png", categoria: "Comércio" },
  { id: 5, nome: "Cliente Comércio 5", logo: "/placeholder-logo.png", categoria: "Comércio" },
  { id: 6, nome: "Cliente Comércio 6", logo: "/placeholder-logo.png", categoria: "Comércio" },
  
  // Indústria
  { id: 7, nome: "Cliente Indústria 1", logo: "/placeholder-logo.png", categoria: "Indústria" },
  { id: 8, nome: "Cliente Indústria 2", logo: "/placeholder-logo.png", categoria: "Indústria" },
  { id: 9, nome: "Cliente Indústria 3", logo: "/placeholder-logo.png", categoria: "Indústria" },
  { id: 10, nome: "Cliente Indústria 4", logo: "/placeholder-logo.png", categoria: "Indústria" },
  { id: 11, nome: "Cliente Indústria 5", logo: "/placeholder-logo.png", categoria: "Indústria" },
  { id: 12, nome: "Cliente Indústria 6", logo: "/placeholder-logo.png", categoria: "Indústria" },
  
  // Moda
  { id: 13, nome: "Cliente Moda 1", logo: "/placeholder-logo.png", categoria: "Moda" },
  { id: 14, nome: "Cliente Moda 2", logo: "/placeholder-logo.png", categoria: "Moda" },
  { id: 15, nome: "Cliente Moda 3", logo: "/placeholder-logo.png", categoria: "Moda" },
  { id: 16, nome: "Cliente Moda 4", logo: "/placeholder-logo.png", categoria: "Moda" },
  
  // Serviços
  { id: 17, nome: "Cliente Serviços 1", logo: "/placeholder-logo.png", categoria: "Serviços" },
  { id: 18, nome: "Cliente Serviços 2", logo: "/placeholder-logo.png", categoria: "Serviços" },
  { id: 19, nome: "Cliente Serviços 3", logo: "/placeholder-logo.png", categoria: "Serviços" },
  { id: 20, nome: "Cliente Serviços 4", logo: "/placeholder-logo.png", categoria: "Serviços" },
  { id: 21, nome: "Cliente Serviços 5", logo: "/placeholder-logo.png", categoria: "Serviços" },
];

const categorias = ["Todos", "Comércio", "Indústria", "Moda", "Serviços"];

export default function ClientesPage() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");

  const clientesFiltrados =
    categoriaSelecionada === "Todos"
      ? clientes
      : clientes.filter((cliente) => cliente.categoria === categoriaSelecionada);

  return (
    <div className="min-h-screen bg-brand-navy-900 text-foreground">
      <AutoHideHeader />

      <InteractiveBackground>
        <main className="relative">
          {/* Hero Section */}
          <section className="relative overflow-hidden py-20 md:py-32">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-navy-900 via-brand-navy-800/50 to-brand-navy-900" />
            
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
              <div className="text-center mb-12 md:mb-16">
                <span className="inline-block py-1 px-3 rounded-full bg-brand-gold-500/10 border border-brand-gold-500/20 text-xs md:text-sm uppercase tracking-[0.2em] text-brand-gold-500 font-semibold backdrop-blur-sm mb-4">
                  Quem Confia em Nós
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6">
                  Conheça alguns dos nossos{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-500 to-brand-teal-500">
                    +1800 projetos
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                  Empresas de todos os segmentos confiam na QS para transformar desafios fiscais em vantagens competitivas.
                </p>
              </div>
            </div>
          </section>

          {/* Filtros por Categoria */}
          <section className="relative py-8 md:py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {categorias.map((categoria) => (
                  <button
                    key={categoria}
                    onClick={() => setCategoriaSelecionada(categoria)}
                    className={`px-6 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ${
                      categoriaSelecionada === categoria
                        ? "bg-brand-gold-500 text-brand-navy-900 shadow-lg shadow-brand-gold-500/30 scale-105"
                        : "bg-white/10 text-white/80 hover:bg-white/20 border border-white/20"
                    }`}
                  >
                    {categoria}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Grid de Logos */}
          <section className="relative py-12 md:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
              {clientesFiltrados.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
                  {clientesFiltrados.map((cliente) => (
                    <div
                      key={cliente.id}
                      className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 transition-all duration-500 hover:border-brand-gold-500/30 hover:bg-white/10 hover:scale-105 hover:shadow-2xl hover:shadow-brand-gold-500/10"
                    >
                      <div className="aspect-square flex items-center justify-center">
                        {/* Placeholder para logo - substitua por <Image> quando tiver as imagens */}
                        <div className="w-full h-full flex items-center justify-center bg-white/5 rounded-lg border border-white/10 group-hover:border-brand-gold-500/30 transition-colors">
                          <span className="text-white/30 text-xs text-center px-2">
                            {cliente.nome}
                          </span>
                          {/* Quando tiver a imagem, descomente e ajuste: */}
                          {/* <Image
                            src={cliente.logo}
                            alt={cliente.nome}
                            width={200}
                            height={200}
                            className="object-contain max-w-full max-h-full"
                          /> */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-white/60 text-lg">
                    Nenhum cliente encontrado nesta categoria.
                  </p>
                </div>
              )}

              {/* Contador de projetos */}
              <div className="mt-16 text-center">
                <div className="inline-block rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-8 py-6">
                  <p className="text-white/80 text-sm md:text-base mb-2">
                    Total de projetos realizados
                  </p>
                  <p className="text-4xl md:text-5xl font-bold text-brand-gold-500">
                    +1800
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </InteractiveBackground>
    </div>
  );
}
