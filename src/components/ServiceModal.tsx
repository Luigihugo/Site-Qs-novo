"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ServiceModalProps = {
    isOpen: boolean;
    onClose: () => void;
    service: {
        titulo: string;
        descricao: string;
        detalhes: string;
    } | null;
};

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
    const [mounted, setMounted] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            setTimeout(() => setVisible(true), 10);
        } else {
            setVisible(false);
            const timer = setTimeout(() => {
                document.body.style.overflow = "";
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!mounted) return null;

    const modalContent = (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${isOpen ? "pointer-events-auto" : "pointer-events-none delay-300"
                }`}
        >
            {/* Backdrop */}
            <div
                className={`absolute inset-0 bg-brand-navy-900/80 backdrop-blur-sm transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"
                    }`}
                onClick={onClose}
            />

            {/* Modal Panel */}
            <div
                className={`relative w-full max-w-2xl bg-brand-navy-800 border border-white/10 rounded-2xl shadow-2xl transform transition-all duration-300 ease-out ${visible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-8"
                    }`}
            >
                {service && (
                    <div className="p-6 md:p-8 lg:p-10">
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 text-white/50 hover:text-white transition-colors rounded-full hover:bg-white/10"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 pr-8 [font-family:var(--font-display)]">
                            {service.titulo}
                        </h3>

                        <div className="w-16 h-1 bg-brand-gold-500 mb-6" />

                        <p className="text-lg text-brand-blue-100/90 leading-relaxed mb-6 font-medium">
                            {service.descricao}
                        </p>

                        <div className="prose prose-invert max-w-none">
                            <p className="text-white/70 leading-relaxed text-base md:text-lg">
                                {service.detalhes}
                            </p>
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
                            <button
                                onClick={onClose}
                                className="btn-outline-premium px-6 py-2 text-sm"
                            >
                                Fechar
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
}
