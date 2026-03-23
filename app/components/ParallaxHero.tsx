"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function ParallaxHero() {
  const blob1 = useRef<HTMLDivElement>(null);
  const blob2 = useRef<HTMLDivElement>(null);
  const blob3 = useRef<HTMLDivElement>(null);
  const blob4 = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (blob1.current) blob1.current.style.transform = `translateY(${y * 0.35}px)`;
      if (blob2.current) blob2.current.style.transform = `translateY(${y * 0.18}px)`;
      if (blob3.current) blob3.current.style.transform = `translateY(${y * 0.5}px)`;
      if (blob4.current) blob4.current.style.transform = `translateY(${y * 0.25}px)`;
      if (dotsRef.current) dotsRef.current.style.transform = `translateY(${y * 0.12}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #FFFFFF 0%, #F0F7FF 45%, #DBEAFE 100%)",
      }}
    >
      {/* ── Parallax blobs ── */}
      <div
        ref={blob1}
        className="absolute pointer-events-none"
        style={{
          width: 700,
          height: 700,
          top: -200,
          right: -200,
          background: "radial-gradient(circle, rgba(191,219,254,0.65) 0%, transparent 65%)",
          borderRadius: "50%",
          willChange: "transform",
        }}
      />
      <div
        ref={blob2}
        className="absolute pointer-events-none"
        style={{
          width: 500,
          height: 500,
          bottom: -80,
          left: -120,
          background: "radial-gradient(circle, rgba(219,234,254,0.55) 0%, transparent 65%)",
          borderRadius: "50%",
          willChange: "transform",
        }}
      />
      <div
        ref={blob3}
        className="absolute pointer-events-none"
        style={{
          width: 260,
          height: 260,
          top: "28%",
          right: "12%",
          background: "radial-gradient(circle, rgba(147,197,253,0.45) 0%, transparent 65%)",
          borderRadius: "50%",
          willChange: "transform",
        }}
      />
      <div
        ref={blob4}
        className="absolute pointer-events-none"
        style={{
          width: 160,
          height: 160,
          top: "60%",
          left: "8%",
          background: "radial-gradient(circle, rgba(96,165,250,0.3) 0%, transparent 65%)",
          borderRadius: "50%",
          willChange: "transform",
        }}
      />

      {/* ── Dot grid ── */}
      <div
        ref={dotsRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.12) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          willChange: "transform",
        }}
      />

      {/* ── Floating decorative shapes ── */}
      <div
        className="absolute pointer-events-none float-a"
        style={{
          width: 80,
          height: 80,
          top: "20%",
          left: "7%",
          background: "linear-gradient(135deg, rgba(37,99,235,0.15), rgba(96,165,250,0.25))",
          borderRadius: "24px",
          transform: "rotate(15deg)",
        }}
      />
      <div
        className="absolute pointer-events-none float-b"
        style={{
          width: 50,
          height: 50,
          top: "35%",
          right: "8%",
          background: "linear-gradient(135deg, rgba(96,165,250,0.2), rgba(147,197,253,0.3))",
          borderRadius: "50%",
        }}
      />
      <div
        className="absolute pointer-events-none float-a"
        style={{
          width: 36,
          height: 36,
          top: "65%",
          right: "14%",
          background: "rgba(37,99,235,0.12)",
          borderRadius: "10px",
          transform: "rotate(-10deg)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center justify-center" style={{ minHeight: "100vh", paddingTop: "120px", paddingBottom: "80px" }}>

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8 animate-fade-in-up"
          style={{
            backgroundColor: "rgba(37,99,235,0.08)",
            border: "1.5px solid rgba(37,99,235,0.2)",
            color: "var(--blue)",
          }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: "var(--blue)", flexShrink: 0 }}
          />
          Professionele branding voor jouw bedrijf
        </div>

        {/* Headline */}
        <h1
          className="font-black leading-tight tracking-tight mb-6 animate-fade-in-up animate-delay-100"
          style={{ fontSize: "clamp(3rem, 8vw, 6rem)", maxWidth: 900, color: "var(--gray-900)" }}
        >
          Jouw merk.{" "}
          <span className="gradient-text">Onze kracht.</span>
        </h1>

        {/* Sub */}
        <p
          className="text-lg md:text-xl leading-relaxed mb-10 animate-fade-in-up animate-delay-200"
          style={{ color: "var(--gray-500)", maxWidth: 560 }}
        >
          Van professionele merkkleding tot een krachtige website — Startjebranding
          zorgt dat jouw bedrijf er op elk vlak top uitziet.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-300">
          <Link href="/contact" className="btn-primary text-base">
            Gratis offerte aanvragen →
          </Link>
          <Link href="/kleding" className="btn-ghost text-base">
            Bekijk onze diensten
          </Link>
        </div>

        {/* Stats */}
        <div
          className="mt-20 grid grid-cols-3 gap-8 md:gap-20 animate-fade-in-up animate-delay-400"
          style={{
            borderTop: "1.5px solid rgba(37,99,235,0.12)",
            paddingTop: "48px",
          }}
        >
          {[
            { value: "100+", label: "Tevreden klanten" },
            { value: "2", label: "Krachtige diensten" },
            { value: "100%", label: "Op maat gemaakt" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span
                className="text-3xl md:text-4xl font-black"
                style={{ color: "var(--blue)" }}
              >
                {stat.value}
              </span>
              <span className="text-xs md:text-sm font-medium" style={{ color: "var(--gray-500)" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Wave bottom ── */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: "100%", height: 60 }}>
          <path d="M0 60V30C240 0 480 0 720 20C960 40 1200 40 1440 20V60H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
