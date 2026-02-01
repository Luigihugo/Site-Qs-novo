"use client";
import AutoHideHeader from "@/components/AutoHideHeader";
import Footer from "@/components/Footer";
import FloatingContactBar from "@/components/FloatingContactBar";
import QuemSomosPageSection from "@/components/QuemSomosPageSection";

export default function QuemSomosPage() {
  return (
    <div className="min-h-screen bg-brand-navy-900 text-foreground">
      <AutoHideHeader />

      <main className="relative">
        <QuemSomosPageSection />
      </main>

      <Footer />
      <FloatingContactBar />
    </div>
  );
}
