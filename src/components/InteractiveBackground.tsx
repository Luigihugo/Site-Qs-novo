"use client";
import { useState } from "react";

export default function InteractiveBackground({ children }: { children: React.ReactNode }) {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  return (
    <div
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      style={{
        backgroundImage: `radial-gradient(600px circle at ${cursor.x}px ${cursor.y}px, rgba(204,153,3,0.10), transparent 45%)`,
      }}
    >
      {children}
    </div>
  );
}
