"use client";
import AutoHideHeader from "@/components/AutoHideHeader";
import Footer from "@/components/Footer";
import FloatingContactBar from "@/components/FloatingContactBar";
import AboutSection from "@/components/AboutSection";

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-brand-navy-900 text-foreground">
      <AutoHideHeader />

      <main className="relative">
        <AboutSection />
      </main>

      <Footer />
      <FloatingContactBar />
    </div>
  );
}
