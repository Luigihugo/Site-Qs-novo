"use client";
import { useEffect, useState } from "react";
import ScrollProgress from "@/components/ScrollProgress";

export default function AutoHideHeader() {
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY && y > 64);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <header className={`sticky top-0 z-40 backdrop-blur bg-brand-navy-900/60 transition-transform duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"}`}>
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <div className="text-2xl font-semibold tracking-tight">QS Consultoria</div>
        <div className="flex items-center gap-3">
          <a href="#servicos" className="rounded-full px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors">
            Serviços
          </a>
          <a href="#contato" className="rounded-full px-4 py-2 bg-brand-gold-500 text-brand-navy-900 hover:brightness-110 transition">
            WhatsApp
          </a>
        </div>
      </div>
      <ScrollProgress />
    </header>
  );
}
