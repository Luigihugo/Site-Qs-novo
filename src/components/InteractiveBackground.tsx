"use client";
import { useState, useEffect } from "react";

export default function InteractiveBackground({ children }: { children: React.ReactNode }) {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage: `
          radial-gradient(
            600px circle at ${cursor.x}px ${cursor.y}px, 
            rgba(204,153,3,0.16), 
            transparent 65%
          ),
          radial-gradient(
            900px circle at ${cursor.x}px ${cursor.y}px,
            rgba(204,153,3,0.07), 
            transparent 75%
          )
        `,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy-900 via-brand-navy-900 to-brand-navy-800/95 pointer-events-none" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
