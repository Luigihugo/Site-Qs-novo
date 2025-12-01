"use client";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = Math.min(1, Math.max(0, window.scrollY / (h || 1)));
      setProgress(p);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="h-[2px] w-full bg-white/10">
      <div
        className="h-full bg-brand-gold-500"
        style={{ transform: `scaleX(${progress})`, transformOrigin: "0 0" }}
      />
    </div>
  );
}
