"use client";
import { useEffect, useState } from "react";

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        // Prevenir scroll automático durante animação
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };


    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-40 p-3 rounded-full bg-brand-gold-500 text-brand-navy-900 shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-brand-gold-500/50 focus:outline-none ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
                }`}
            aria-label="Voltar ao topo"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
        </button>
    );
}
