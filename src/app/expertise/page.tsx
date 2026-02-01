"use client";
import AutoHideHeader from "@/components/AutoHideHeader";
import Footer from "@/components/Footer";
import FloatingContactBar from "@/components/FloatingContactBar";
import ServicesSection from "@/components/ServicesSection";

export default function ExpertisePage() {
  return (
    <div className="min-h-screen bg-brand-navy-900 text-foreground">
      <AutoHideHeader />

      <main className="relative">
        <ServicesSection />
      </main>

      <Footer />
      <FloatingContactBar />
    </div>
  );
}
