import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

export const metadata: Metadata = {
  title: "Startjebranding – Merch & Websites voor Bedrijven",
  description:
    "Startjebranding helpt bedrijven groeien met professionele merkkleding, merch en op maat gemaakte websites. Eén partner, twee krachtige diensten.",
  keywords: "merkkleding, bedrijfskleding, website bouwen, branding, merch, zakelijk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased flex flex-col min-h-screen">
        <ScrollReveal />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
