"use client";
import { useEffect, useState } from "react";

export default function CursorFollower() {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let rafId: number;

        const updatePosition = (e: MouseEvent) => {
            // Use requestAnimationFrame for smoother updates
            rafId = requestAnimationFrame(() => {
                setPosition({ x: e.clientX, y: e.clientY });
                if (!isVisible) setIsVisible(true);
            });
        };

        window.addEventListener("mousemove", updatePosition, { passive: true });

        return () => {
            window.removeEventListener("mousemove", updatePosition);
            cancelAnimationFrame(rafId);
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div
            className="fixed top-0 left-0 w-[150px] h-[150px] bg-brand-gold-500/[0.08] rounded-full pointer-events-none z-[99999] blur-[60px] mix-blend-screen transition-transform duration-75 ease-out will-change-transform"
            style={{
                transform: `translate3d(${position.x - 75}px, ${position.y - 75}px, 0)`,
            }}
        />
    );
}
