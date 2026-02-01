"use client";
import { useState } from "react";
import Image from "next/image";
import AutoHideHeader from "@/components/AutoHideHeader";
import Footer from "@/components/Footer";
import FloatingContactBar from "@/components/FloatingContactBar";

type Cliente = {
  id: number;
  nome: string;
  logo: string;
  categoria: string;
  top10?: boolean;
  ordemTop?: number; // Ordem específica no Top 17 (1-17)
};

// ============================================
// MODELO PARA ADICIONAR CLIENTES
// ============================================
// Copie e cole o modelo abaixo, substituindo:
// - id: número único (1, 2, 3, ... até 54)
// - nome: nome da empresa
// - logo: caminho da imagem em /logos-clientes/ (ex: "/logos-clientes/empresa-abc.png")
// - categoria: "Comércio", "Indústria", "Moda" ou "Serviços"
//
// MODELO:
// { id: X, nome: "Nome da Empresa", logo: "/logos-clientes/nome-arquivo.png", categoria: "Comércio" },
//
// IMPORTANTE:
// 1. Coloque as imagens PNG/JPEG na pasta: public/logos-clientes/
// 2. Use nomes sem espaços (ex: empresa-abc.png, não "empresa abc.png")
// 3. Mantenha os IDs em sequência (1, 2, 3, ...)
// ============================================

const clientes: Cliente[] = [
  // ========== TOP 17 (na ordem específica) ==========
  { id: 1, nome: "Amaggi", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Amaggi.jpg", categoria: "Comércio", top10: true, ordemTop: 1 },
  { id: 2, nome: "Banco Opportunity", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Banco Opportunity.png", categoria: "Comércio", top10: true, ordemTop: 2 },
  { id: 35, nome: "Falconi", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Falconi.png", categoria: "Serviços", top10: true, ordemTop: 3 },
  { id: 15, nome: "Vicunha", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Vicunha.png", categoria: "Indústria", top10: true, ordemTop: 4 },
  { id: 16, nome: "Grupo Trigo", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Grupo_Trigo.png", categoria: "Indústria", top10: true, ordemTop: 5 },
  { id: 29, nome: "Rede Inspira", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Rede_Inspira.png", categoria: "Serviços", top10: true, ordemTop: 6 },
  { id: 30, nome: "Santos Brasil", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Santos_Brasil.png", categoria: "Serviços", top10: true, ordemTop: 7 },
  { id: 31, nome: "Telemont", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_telemont 2.png", categoria: "Serviços", top10: true, ordemTop: 8 },
  { id: 61, nome: "Bemisa", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Bemisa.jpeg", categoria: "Indústria", top10: true, ordemTop: 9 },
  { id: 17, nome: "Sooro Renner", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Sooro.png", categoria: "Indústria", top10: true, ordemTop: 10 },
  { id: 62, nome: "Unimed", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_unimed.png", categoria: "Serviços", top10: true, ordemTop: 11 },
  { id: 33, nome: "Wilhelmsen Ship Management", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Wilhelmsem_ship_management_WSS.jpg", categoria: "Serviços", top10: true, ordemTop: 12 },
  { id: 32, nome: "Nasajon", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Nasajon.png", categoria: "Serviços", top10: true, ordemTop: 13 },
  { id: 3, nome: "Supermercado Rede Economia", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Supermercado_Rede_Economia.jpg", categoria: "Comércio", top10: true, ordemTop: 14 },
  { id: 59, nome: "Rede JB", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Rede_JB_postos.jpeg", categoria: "Comércio", top10: true, ordemTop: 15 },
  { id: 60, nome: "MegaMatte", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_megamatte.jpg", categoria: "Comércio", top10: true, ordemTop: 16 },
  { id: 4, nome: "Arm & Hammer", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Arm&hammer.png", categoria: "Comércio", top10: true, ordemTop: 17 },
  
  // ========== COMÉRCIO (demais) ==========
  { id: 5, nome: "Supermercado Líder", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Supermercado_Lider.png", categoria: "Comércio" },
  { id: 6, nome: "Supermercado Unidos", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Supermercado_Unidos.jpg", categoria: "Comércio" },
  { id: 7, nome: "Supermercado Rede Avistão", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Supermercado_Rede_Avistao.jpg", categoria: "Comércio" },
  { id: 8, nome: "CityFarma", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_CityFarma.jpg", categoria: "Comércio" },
  { id: 9, nome: "Sindilojas RJ", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Sindilojas_RJ.png", categoria: "Comércio" },
  { id: 10, nome: "Spoleto", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Spoleto.jpg", categoria: "Comércio" },
  { id: 11, nome: "Supergiro Distribuidora", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Supergiro_Distribuidora.png", categoria: "Comércio" },
  { id: 12, nome: "Brasil Tropical", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Hotel_Brasil_Tropical.jpeg", categoria: "Comércio" },
  { id: 13, nome: "Frutas Lessa", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Frutas_Lessa.png", categoria: "Comércio" },
  { id: 14, nome: "Lecca Financeira", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Lecca_financeira.png", categoria: "Comércio" },
  
  // ========== INDÚSTRIA (demais) ==========
  { id: 18, nome: "Indústria Bandeirante", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Industria_Bandeirante.png", categoria: "Indústria" },
  { id: 19, nome: "Petromix", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Petromix.jpg", categoria: "Indústria" },
  { id: 20, nome: "Petronect", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Petronect.jpg", categoria: "Indústria" },
  { id: 21, nome: "Mariza Foods", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Mariza_Foods.png", categoria: "Indústria" },
  { id: 22, nome: "Frigorífico Novo Meriti", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Frigorifico_Novo_Meriti.png", categoria: "Indústria" },
  { id: 23, nome: "Fripai", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Fripai.png", categoria: "Indústria" },
  { id: 24, nome: "Citropar", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Citropar.png", categoria: "Indústria" },
  { id: 25, nome: "Callenberg", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Callenberg.png", categoria: "Indústria" },
  { id: 26, nome: "Mucuripe", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Mucuripe.webp", categoria: "Indústria" },
  { id: 27, nome: "Acciona", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Acciona.jpg", categoria: "Indústria" },
  { id: 28, nome: "AtacFire", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_AtacFire.jpg", categoria: "Indústria" },
  
  // ========== SERVIÇOS (demais) ==========
  { id: 34, nome: "Grupo Fama", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Grupo_fama.png", categoria: "Serviços" },
  { id: 36, nome: "Abramides ADV", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Abramides_ADV.png", categoria: "Serviços" },
  { id: 37, nome: "Hospital Calren", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Hospital_Calren.png", categoria: "Serviços" },
  { id: 38, nome: "Hospital Dicamp", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Hospital_Dicamp.png", categoria: "Serviços" },
  { id: 39, nome: "Centro da Imagem Diagnóstico", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Centro_da_Imagem_Diagnostico.jpg", categoria: "Serviços" },
  { id: 40, nome: "Urmes Emergência Médicas", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Urmes_Emergência_Medicas.png", categoria: "Serviços" },
  { id: 41, nome: "Uniodonto", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Uniodonto.jpg", categoria: "Serviços" },
  { id: 42, nome: "Escola Canto dos Pássaros", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Escola_Canto_dos_Passaros.png", categoria: "Serviços" },
  { id: 43, nome: "Inspired Education", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Inspired_Education.png", categoria: "Serviços" },
  { id: 44, nome: "Raiz Educação", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Raiz_Educacao.png", categoria: "Serviços" },
  { id: 45, nome: "Giga Transportes", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Giga_Transportes.png", categoria: "Serviços" },
  { id: 46, nome: "Trem Corcovado", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_trem_corcovado.png", categoria: "Serviços" },
  { id: 47, nome: "Veneza Serviços Terceirizados", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Veneza_servicos_terceirizados.png", categoria: "Serviços" },
  { id: 48, nome: "Construjet Engenharia", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Construjet_Engenharia.png", categoria: "Serviços" },
  { id: 49, nome: "Sig Engenharia", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_SIG_engenharia.png", categoria: "Serviços" },
  { id: 50, nome: "Inace Iates", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Inace_iates2.png", categoria: "Serviços" },
  { id: 51, nome: "Águas Passa Quatro", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Aguas_Passa_Quatro.png", categoria: "Serviços" },
  { id: 52, nome: "Organização das Cooperativas Brasileiras", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Organização_das_Cooperativas_Brasileiras.jpg", categoria: "Serviços" },
  { id: 53, nome: "Grupo Memorial", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Grupo_Memorial.png", categoria: "Serviços" },
  { id: 54, nome: "Impax", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Impax.png", categoria: "Serviços" },
  { id: 55, nome: "RGI", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_RGI.png", categoria: "Serviços" },
  { id: 56, nome: "Keeggo", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Keeggo.webp", categoria: "Serviços" },
  { id: 57, nome: "HLRH", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_HLRH.png", categoria: "Serviços" },
  { id: 58, nome: "Olinda", logo: "/logos-clientes/Logos Clientes (Atualizados 2025)/Empresa_Olinda.png", categoria: "Serviços" },
];

export default function ClientesPage() {
  // Ordenar: Top 17 na ordem específica, depois os demais aleatoriamente
  const clientesOrdenados = [...clientes].sort((a, b) => {
    // Se ambos são Top 17, ordenar pela ordemTop
    if (a.top10 && b.top10) {
      return (a.ordemTop || 999) - (b.ordemTop || 999);
    }
    // Top 17 sempre primeiro
    if (a.top10 && !b.top10) return -1;
    if (!a.top10 && b.top10) return 1;
    // Demais em ordem aleatória (ou manter ordem original)
    return 0;
  });

  return (
    <div className="min-h-screen bg-white text-foreground">
      <AutoHideHeader />

      <main className="relative">
          {/* Hero Section - Reduzido */}
          <section className="relative overflow-hidden py-8 md:py-12 bg-brand-navy-900">
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
              <div className="text-center mb-6">
                <span className="inline-block py-1 px-3 rounded-full bg-brand-gold-500/10 border border-brand-gold-500/20 text-xs md:text-sm uppercase tracking-[0.2em] text-brand-gold-500 font-semibold backdrop-blur-sm mb-3">
                  Quem Confia em Nós
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3">
                  Conheça alguns dos nossos{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-300 via-brand-gold-200 to-white">
                    +1800 projetos
                  </span>
                </h1>
                <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto">
                  Empresas de todos os segmentos confiam na QS para transformar desafios fiscais em vantagens competitivas.
                </p>
              </div>
            </div>
          </section>

          {/* Grid de Logos - Estrutura Visual Premium */}
          <section className="relative py-16 md:py-20 lg:py-24 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {clientesOrdenados.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-12 md:gap-y-16 lg:gap-y-20 gap-x-8 md:gap-x-10 lg:gap-x-12">
                  {clientesOrdenados.map((cliente) => (
                    <div
                      key={cliente.id}
                      className="group flex items-center justify-center"
                    >
                      {/* Caixa padrão transparente com altura fixa */}
                      <div className="relative w-full h-24 flex items-center justify-center p-4 transition-all duration-500 hover:scale-105">
                        <Image
                          src={cliente.logo.replace(/ /g, '%20')}
                          alt={cliente.nome}
                          width={140}
                          height={96}
                          className="object-contain max-w-[140px] w-auto h-auto max-h-full grayscale group-hover:grayscale-0 transition-all duration-500 filter"
                          unoptimized
                          onError={(e) => {
                            console.error(`Erro ao carregar logo: ${cliente.logo}`, e);
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-brand-navy-900/60 text-lg">
                    Nenhum cliente encontrado.
                  </p>
                </div>
              )}

              {/* Contador de projetos - Reduzido */}
              <div className="mt-8 text-center">
                <div className="inline-block rounded-xl border border-brand-navy-900/10 bg-brand-navy-900/5 backdrop-blur-sm px-6 py-4">
                  <p className="text-brand-navy-900/80 text-xs md:text-sm mb-1">
                    Total de projetos realizados
                  </p>
                  <p className="text-3xl md:text-4xl font-bold text-brand-gold-500">
                    +1800
                  </p>
                </div>
              </div>
            </div>
          </section>
      </main>

      <Footer />

      <FloatingContactBar />
    </div>
  );
}
