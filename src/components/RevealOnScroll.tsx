"use client";
import { useEffect, useRef, useState } from "react";

interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
}

export default function RevealOnScroll({ 
  children, 
  delay = 0,
  direction = "up" 
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => setVisible(true), delay);
          }
        });
      },
      { rootMargin: "0px", threshold: 0.1 }
    );
    
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  const getTransformClass = () => {
    if (!visible) {
      switch (direction) {
        case "left":
          return "opacity-[0.6] translate-x-[-12px]";
        case "right":
          return "opacity-[0.6] translate-x-[12px]";
        case "scale":
          return "opacity-[0.7] scale-[0.98]";
        default:
          return "opacity-[0.6] translate-y-2";
      }
    }
    return "opacity-100 translate-y-0 translate-x-0 scale-100";
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out will-change-transform ${getTransformClass()}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
