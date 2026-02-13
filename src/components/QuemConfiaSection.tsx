"use client";
import RevealOnScroll from "@/components/RevealOnScroll";
import Image from "next/image";
import Link from "next/link";

// Top 4 logos para destacar na homepage
const logosDestaque = [
  {
    nome: "Amaggi",
    logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_amaggi_2.png",
  },
  {
    nome: "Banco Opportunity",
    logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Banco Opportunity.png",
  },
  {
    nome: "Falconi",
    logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Falconi.png",
  },
  {
    nome: "Vicunha",
    logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Vicunha.png",
  },
];

export default function QuemConfiaSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy-900 via-brand-navy-800/50 to-brand-navy-900" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <RevealOnScroll>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
              Empresas que{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/85">
                confiam em nós
              </span>
            </h2>
            <p className="text-lg md:text-xl text-brand-blue-100/80 max-w-3xl mx-auto leading-relaxed">
              Mais de 1.800 projetos entregues para empresas de médio e grande porte de todos os segmentos.
            </p>
          </div>
        </RevealOnScroll>

        {/* Grid de 4 logos maiores */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {logosDestaque.map((cliente, index) => (
            <RevealOnScroll key={cliente.nome} delay={index * 100}>
              <div className="group flex items-center justify-center">
                <div className="relative w-full h-32 md:h-40 flex items-center justify-center p-6 transition-all duration-500 hover:scale-110">
                  <Image
                    src={cliente.logo.replace(/ /g, "%20")}
                    alt={cliente.nome}
                    width={200}
                    height={120}
                    className="object-contain max-w-full w-auto h-auto max-h-full grayscale group-hover:grayscale-0 transition-all duration-500 filter"
                    unoptimized
                    onError={(e) => {
                      console.error(`Erro ao carregar logo: ${cliente.logo}`, e);
                    }}
                  />
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Link para ver mais */}
        <RevealOnScroll delay={400}>
          <div className="text-center">
            <Link
              href="/clientes"
              className="inline-flex items-center gap-2 text-brand-gold-500 font-semibold text-lg hover:text-white transition-colors group"
            >
              Ver todos os clientes
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
