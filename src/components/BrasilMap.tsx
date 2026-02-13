"use client";
import { useEffect, useState } from "react";

type BrasilMapProps = {
  className?: string;
};

export default function BrasilMap({ className = "" }: BrasilMapProps) {
  const [svgContent, setSvgContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Carregar o SVG
    fetch("/br.svg")
      .then((res) => res.text())
      .then((text) => {
        // Torna o SVG responsivo dentro do container
        // - remove width/height fixos (atributos) que “travavam” o tamanho
        // - adiciona uma class no <svg> para aplicar CSS
        const withClass = text.replace(
          /<svg\b([^>]*?)>/i,
          (_match, attrs: string) => {
            const cleaned = attrs
              .replace(/\swidth="[^"]*"/gi, "")
              .replace(/\sheight="[^"]*"/gi, "")
              .replace(/\sclass="[^"]*"/gi, (m) => m); // mantém se já existir

            const hasClass = /\sclass="/i.test(attrs);
            if (hasClass) {
              // injeta a classe mantendo a existente
              return `<svg${cleaned.replace(
                /\sclass="([^"]*)"/i,
                (_m, cls: string) => ` class="${cls} brasil-map-root"`
              )}>`;
            }
            return `<svg class="brasil-map-root"${cleaned}>`;
          }
        );

        setSvgContent(withClass);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar SVG:", err);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!svgContent) return;

    // Aplicar estilos CSS para colorir os estados específicos
    const style = document.createElement("style");
    style.id = "brasil-map-styles";
    style.textContent = `
      .brasil-map-root {
        width: 100%;
        height: auto;
        display: block;
      }

      /* Reduzir espaçamento dos textos em negrito */
      .brasil-map-root text[font-weight="bold"],
      .brasil-map-root text[font-weight="700"],
      .brasil-map-root text[style*="font-weight: bold"],
      .brasil-map-root text[style*="font-weight:700"] {
        line-height: 1.2 !important;
        letter-spacing: -0.02em !important;
      }

      /* Reduzir espaçamento geral dos textos */
      .brasil-map-root text {
        line-height: 1.3 !important;
      }

      /* Rio de Janeiro - MATRIZ (dourado) */
      #BRRJ {
        fill: #cc9903 !important;
        stroke: #ffffff !important;
        stroke-width: 2px !important;
        opacity: 0.9 !important;
      }
      
      /* Pará (Belém) - FILIAL (dourado) */
      #BRPA {
        fill: #cc9903 !important;
        stroke: #ffffff !important;
        stroke-width: 2px !important;
        opacity: 0.85 !important;
      }
      
      /* Ceará (Fortaleza) - FILIAL (dourado) */
      #BRCE {
        fill: #cc9903 !important;
        stroke: #ffffff !important;
        stroke-width: 2px !important;
        opacity: 0.85 !important;
      }

      /* São Paulo - Em expansão (2026) - mesma cor do quadrado "Em expansão" da legenda (gray-300 + opacity 50%) */
      #BRSP {
        fill: #d1d5db !important;
        stroke: #ffffff !important;
        stroke-width: 2px !important;
        opacity: 0.5 !important;
      }
    `;
    
    // Remover estilo anterior se existir
    const existingStyle = document.getElementById("brasil-map-styles");
    if (existingStyle) {
      existingStyle.remove();
    }
    
    document.head.appendChild(style);

    return () => {
      const styleToRemove = document.getElementById("brasil-map-styles");
      if (styleToRemove) {
        styleToRemove.remove();
      }
    };
  }, [svgContent]);

  if (isLoading) {
    return (
      <div className={`w-full h-auto ${className} flex items-center justify-center`}>
        <div className="text-white/60">Carregando mapa...</div>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      {/* Container do mapa (ocupa a metade da coluna, sem “estourar”) */}
      <div className={`relative mx-auto w-full max-w-[420px] ${className}`}>
        {/* SVG do Brasil com estilos aplicados */}
        <div className="w-full" dangerouslySetInnerHTML={{ __html: svgContent }} />
      </div>
    </div>
  );
}
