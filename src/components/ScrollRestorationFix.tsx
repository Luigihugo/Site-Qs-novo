"use client";
import { useEffect } from "react";

export default function ScrollRestorationFix() {
  useEffect(() => {
    // Evita que o browser/SPA tente "restaurar" a posição de scroll depois da navegação,
    // o que pode causar o "puxão" (voltar pro topo alguns segundos após ir para uma âncora).
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return null;
}

