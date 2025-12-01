"use client";
import { useState, useEffect } from "react";

export default function InteractiveBackground({ children }: { children: React.ReactNode }) {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
      // Suavizar o movimento com um pequeno delay
      setTimeout(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }, 50);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage: `
          radial-gradient(800px circle at ${cursor.x}px ${cursor.y}px, rgba(204,153,3,0.12), transparent 50%),
          radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,102,204,0.08), transparent 40%)
        `,
        backgroundAttachment: "fixed",
        transition: "background-position 0.1s ease-out",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy-900 via-brand-navy-900 to-brand-navy-800/95 pointer-events-none" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
