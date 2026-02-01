"use client";
import { useEffect, useState } from "react";
import ScrollProgress from "@/components/ScrollProgress";
import { useRouter } from "next/navigation";

export default function AutoHideHeader() {
  const router = useRouter();
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      if (!mobileMenuOpen) {
        setHidden(y > lastY && y > 100);
      } else {
        setHidden(false);
      }
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY, mobileMenuOpen]);

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
    { label: "Sobre nós", href: "/sobre", type: "link" },
    { label: "Nossa expertise", href: "/expertise", type: "link" },
    { label: "Quem confia em nós", href: "/clientes", type: "link" },
    { label: "Contato", href: "#contato", type: "anchor" },
    { label: "Seja Parceiro QS", href: "https://www.qspartners.com.br/", type: "external" },
  ];

  const handleNavClick = (href: string, type: string) => {
    if (type === "external") {
      window.open(href, "_blank", "noopener,noreferrer");
      setMobileMenuOpen(false);
      return;
    }
    if (type === "link") {
      // Navegação SPA (evita reload e possíveis "puxões" de scroll restoration do browser)
      router.push(href);
      setMobileMenuOpen(false);
      return;
    }
    if (type === "anchor") {
      if (window.location.pathname !== "/") {
        // Vindo de outra rota: navegar para "/#secao" sem o scroll automático do Next
        // (o scroll suave é tratado na Home).
        router.push(`/${href}`, { scroll: false });
        setMobileMenuOpen(false);
        return;
      }
      
      setMobileMenuOpen(false);
      
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          const headerHeight = 80;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - headerHeight,
            behavior: "smooth",
          });
        }
      }, 100);
      return;
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-[10000] transition-all duration-500 ease-out ${
          hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        } ${
          scrolled ? "bg-brand-navy-900 border-b border-white/10" : "bg-brand-navy-900"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 md:py-4 flex items-center justify-between gap-4">
          {/* Logo */}
          <a 
            href="/" 
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.history.replaceState(null, "", "/");
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                e.preventDefault();
                router.push("/");
              }
            }}
            className="flex items-center flex-shrink-0"
          >
            <img
              src="/logo.png"
              alt="QS Consultoria"
              className="h-5 md:h-7 w-auto object-contain brightness-0 invert"
            />
          </a>

          {/* Desktop Menu - Visível apenas em telas grandes */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2 flex-wrap justify-end flex-1 min-w-0">
            {menuItems.slice(0, 3).map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (item.type === "anchor" || item.type === "external" || item.type === "link") {
                    e.preventDefault();
                    handleNavClick(item.href, item.type);
                  }
                }}
                className="rounded-full px-3 xl:px-4 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-xs font-medium transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
            <a
              href={menuItems[3].href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(menuItems[3].href, menuItems[3].type);
              }}
              className="rounded-full px-3 xl:px-4 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-xs font-medium transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              {menuItems[3].label}
            </a>
            <a
              href={menuItems[4].href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(menuItems[4].href, menuItems[4].type);
              }}
              className="rounded-full px-3 xl:px-4 py-1.5 bg-brand-gold-500 text-brand-navy-900 font-semibold text-xs hover:bg-brand-gold-400 hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
            >
              {menuItems[4].label}
            </a>
          </nav>

          {/* Botão Hambúrguer - Visível apenas em telas pequenas */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-[48px] h-[48px] text-white hover:bg-white/10 rounded-full transition-all duration-300 flex items-center justify-center hover:scale-105"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        <ScrollProgress />
      </header>

      {/* Menu Mobile - Drawer lateral pela direita - Fora do header para sobrepor todo conteúdo */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop escuro com blur */}
          <div
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[99998] transition-opacity duration-300 animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Drawer lateral pela direita */}
          <div className="lg:hidden fixed top-0 right-0 h-full w-[85vw] max-w-[360px] bg-brand-navy-900/95 backdrop-blur-xl border-l border-white/10 z-[99999] shadow-2xl shadow-black/50 transform transition-transform duration-300 ease-out overflow-y-auto animate-slide-in-right">
            <div className="flex flex-col h-full">
              {/* Header do Drawer */}
              <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-white/10">
                <img
                  src="/logo.png"
                  alt="QS Consultoria"
                  className="h-6 w-auto object-contain brightness-0 invert"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white transition-all duration-300 hover:scale-110 flex items-center justify-center"
                  aria-label="Fechar menu"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Menu Items */}
              <nav className="flex flex-col px-6 py-6 space-y-3 flex-1">
                {menuItems.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      if (item.type === "anchor" || item.type === "external" || item.type === "link") {
                        e.preventDefault();
                        handleNavClick(item.href, item.type);
                      } else {
                        setMobileMenuOpen(false);
                      }
                    }}
                    className={`group relative rounded-full px-5 py-3.5 text-sm font-medium transition-all duration-300 hover:scale-105 whitespace-nowrap flex items-center justify-center animate-fade-in-up opacity-0 ${
                      index === 4
                        ? "bg-brand-gold-500 text-brand-navy-900 hover:bg-brand-gold-400 shadow-lg hover:shadow-xl hover:shadow-brand-gold-500/30 font-semibold"
                        : "bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white"
                    }`}
                    style={{ animationDelay: `${index * 50 + 100}ms` }}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {index === 4 && (
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                  </a>
                ))}
              </nav>

              {/* Footer do Drawer */}
              <div className="px-6 pb-6 pt-4 border-t border-white/10">
                <p className="text-xs text-white/50 text-center">
                  QS Consultoria
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
