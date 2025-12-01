import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CursorFollower from "@/components/CursorFollower";
import BackToTop from "@/components/BackToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});



export const metadata: Metadata = {
  title: "QS Consultoria — Consultoria estratégica personalizada",
  description:
    "Transformamos desafios em oportunidades com excelência tributária e jurídica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={`${inter.variable} antialiased font-sans`}>
        <CursorFollower />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
