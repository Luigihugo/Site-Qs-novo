"use client";
import { useEffect, useState } from "react";
import ScrollProgress from "@/components/ScrollProgress";

export default function AutoHideHeader() {
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > lastY && y > 100);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const menuItems = [
    { label: "Sobre", href: "#sobre", type: "anchor" },
    { label: "Quem somos", href: "#quem-somos", type: "anchor" },
    { label: "Nossa expertise", href: "#servicos", type: "anchor" },
    { label: "Quem confia em nós", href: "/clientes", type: "link" },
    { label: "Cases", href: "#cases", type: "anchor" },
    { label: "Contato", href: "#contato", type: "anchor" },
    { label: "Faça parte do time QS", href: "/trabalhe-conosco", type: "link" },
  ];

  const handleNavClick = (href: string, type: string) => {
    if (type === "anchor") {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ease-out ${hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        } ${scrolled ? "backdrop-blur-xl bg-brand-navy-900/80 border-b border-white/10" : "backdrop-blur-md bg-brand-navy-900/40"
        }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 md:py-5 flex items-center justify-between">
        <a href="/" className="flex items-center">
          {/* Logo Image */}
          <img
            src="/logo.png"
            alt="QS Consultoria"
            className="h-5 md:h-7 w-auto object-contain brightness-0 invert"
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-2 xl:gap-3">
          {menuItems.slice(0, 5).map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                if (item.type === "anchor") {
                  e.preventDefault();
                  handleNavClick(item.href, item.type);
                }
              }}
              className="rounded-full px-4 xl:px-5 py-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-xs xl:text-sm font-medium transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
          <a
            href={menuItems[5].href}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(menuItems[5].href, menuItems[5].type);
            }}
            className="rounded-full px-4 xl:px-5 py-2 bg-brand-gold-500 text-brand-navy-900 font-semibold text-xs xl:text-sm hover:bg-brand-gold-400 hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
          >
            {menuItems[5].label}
          </a>
          <a
            href={menuItems[6].href}
            className="rounded-full px-4 xl:px-5 py-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-xs xl:text-sm font-medium transition-all duration-300 hover:scale-105 whitespace-nowrap"
          >
            {menuItems[6].label}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-[73px] bg-brand-navy-900/95 backdrop-blur-xl z-40 transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <nav className="flex flex-col p-6 space-y-4">
          {menuItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                if (item.type === "anchor") {
                  e.preventDefault();
                  handleNavClick(item.href, item.type);
                } else {
                  setMobileMenuOpen(false);
                }
              }}
              className={`rounded-lg px-6 py-4 text-base font-medium transition-all duration-300 ${
                index === 5
                  ? "bg-brand-gold-500 text-brand-navy-900 hover:bg-brand-gold-400"
                  : "bg-white/10 hover:bg-white/20 border border-white/20 text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <ScrollProgress />
    </header>
  );
}
