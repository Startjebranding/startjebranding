"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [dienst, setDienst] = useState<"kleding" | "website" | "beide" | "">("");
  const [verzonden, setVerzonden] = useState(false);
  const [form, setForm] = useState({ naam: "", email: "", telefoon: "", bericht: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setVerzonden(true);
  }

  const inputStyle: React.CSSProperties = {
    backgroundColor: "white",
    border: "1.5px solid var(--gray-200)",
    color: "var(--gray-900)",
  };

  function onFocus(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    e.currentTarget.style.borderColor = "var(--blue)";
    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.12)";
  }
  function onBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    e.currentTarget.style.borderColor = "var(--gray-200)";
    e.currentTarget.style.boxShadow = "none";
  }

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-20"
        style={{ background: "linear-gradient(160deg, #FFFFFF 0%, #F0F7FF 50%, #DBEAFE 100%)" }}
      >
        {/* Blobs */}
        <div
          className="absolute pointer-events-none morph-blob"
          style={{
            width: 440,
            height: 440,
            top: -130,
            right: -90,
            background: "radial-gradient(circle, rgba(191,219,254,0.55) 0%, transparent 65%)",
            animationDuration: "22s",
          }}
        />
        <div
          className="absolute pointer-events-none morph-blob"
          style={{
            width: 220,
            height: 220,
            bottom: -60,
            left: -40,
            background: "radial-gradient(circle, rgba(219,234,254,0.45) 0%, transparent 65%)",
            animationDuration: "28s",
            animationDelay: "-10s",
          }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in-up"
            style={{
              backgroundColor: "rgba(37,99,235,0.08)",
              border: "1.5px solid rgba(37,99,235,0.20)",
              color: "var(--blue)",
            }}
          >
            <span className="w-2 h-2 rounded-full status-dot" style={{ backgroundColor: "var(--blue)", flexShrink: 0 }} />
            Neem contact op
          </div>

          <h1
            className="text-5xl md:text-6xl font-black leading-tight mb-4 animate-fade-in-up animate-delay-100"
            style={{ color: "var(--gray-900)" }}
          >
            Laten we{" "}
            <span className="gradient-text-animated">praten</span>
          </h1>

          <p
            className="text-lg animate-fade-in-up animate-delay-200"
            style={{ color: "var(--gray-500)", maxWidth: 500, margin: "0 auto" }}
          >
            Vertel ons wat je nodig hebt. We sturen je binnen 24 uur een reactie.
          </p>
        </div>
      </section>

      {/* ─── FORM + INFO ──────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-5 gap-12">

          {/* ── Sidebar ── */}
          <div className="lg:col-span-2 flex flex-col gap-8" data-reveal="left">
            <div>
              <h2 className="text-2xl font-black mb-5" style={{ color: "var(--gray-900)" }}>
                Wat kun je van ons verwachten?
              </h2>
              <ul className="flex flex-col gap-4">
                {[
                  { icon: "⚡", label: "Reactie binnen 24 uur" },
                  { icon: "💬", label: "Persoonlijk gesprek mogelijk" },
                  { icon: "📋", label: "Gratis offerte op maat" },
                  { icon: "🎯", label: "Eerlijk advies, geen druk" },
                ].map((item) => (
                  <li key={item.label} className="flex items-center gap-3">
                    <span
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                      style={{
                        backgroundColor: "rgba(37,99,235,0.08)",
                        border: "1.5px solid rgba(37,99,235,0.12)",
                        boxShadow: "0 2px 8px rgba(37,99,235,0.08)",
                      }}
                    >
                      {item.icon}
                    </span>
                    <span className="text-sm font-medium" style={{ color: "var(--gray-700)" }}>
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct contact box */}
            <div
              className="p-6 rounded-2xl"
              style={{
                background: "var(--glass-bg)",
                border: "1.5px solid var(--glass-border-blue)",
                boxShadow: "var(--glass-shadow)",
                backdropFilter: "blur(8px)",
              }}
            >
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "var(--blue)" }}>
                Direct contact
              </p>
              <p className="text-sm font-semibold mb-2" style={{ color: "var(--gray-900)" }}>
                Liever direct mailen?
              </p>
              <a
                href="mailto:info@startjebranding.nl"
                className="email-link font-semibold"
              >
                info@startjebranding.nl
              </a>
            </div>

            {/* Quick links */}
            <div className="flex gap-3">
              <Link href="/kleding" className="contact-tab">
                👕 Kleding
              </Link>
              <Link href="/websites" className="contact-tab">
                💻 Websites
              </Link>
            </div>
          </div>

          {/* ── Form ── */}
          <div className="lg:col-span-3" data-reveal="right">
            {verzonden ? (
              <div
                className="rounded-2xl p-12 text-center"
                style={{
                  background: "var(--glass-bg)",
                  border: "1.5px solid var(--glass-border-blue)",
                  boxShadow: "var(--glass-shadow)",
                }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-5"
                  style={{
                    background: "linear-gradient(135deg, var(--blue-xpale), var(--blue-pale))",
                    border: "1.5px solid var(--blue-pale)",
                  }}
                >
                  🎉
                </div>
                <h3 className="text-2xl font-black mb-2" style={{ color: "var(--gray-900)" }}>
                  Bericht ontvangen!
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--gray-500)" }}>
                  Bedankt voor je bericht. We nemen binnen 24 uur contact met je op.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-8"
                style={{
                  backgroundColor: "var(--gray-50)",
                  border: "1.5px solid var(--gray-200)",
                }}
              >
                {/* Dienst selector */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-3" style={{ color: "var(--gray-900)" }}>
                    Waar heb je interesse in?
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: "kleding", label: "👕 Kleding" },
                      { value: "website", label: "💻 Website" },
                      { value: "beide",   label: "✨ Beide" },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setDienst(opt.value as typeof dienst)}
                        className="py-3 rounded-xl text-sm font-semibold transition-all"
                        style={{
                          backgroundColor: dienst === opt.value ? "var(--blue)" : "white",
                          color: dienst === opt.value ? "white" : "var(--gray-700)",
                          border: dienst === opt.value ? "1.5px solid var(--blue)" : "1.5px solid var(--gray-200)",
                          boxShadow: dienst === opt.value ? "0 4px 16px rgba(37,99,235,0.30)" : "none",
                          transform: dienst === opt.value ? "translateY(-1px)" : "none",
                        }}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "var(--gray-700)" }} htmlFor="naam">
                      Naam *
                    </label>
                    <input
                      id="naam"
                      type="text"
                      required
                      placeholder="Jouw naam"
                      value={form.naam}
                      onChange={(e) => setForm({ ...form, naam: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={inputStyle}
                      onFocus={onFocus}
                      onBlur={onBlur}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "var(--gray-700)" }} htmlFor="email">
                      E-mail *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="jouw@email.nl"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={inputStyle}
                      onFocus={onFocus}
                      onBlur={onBlur}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2" style={{ color: "var(--gray-700)" }} htmlFor="telefoon">
                    Telefoonnummer
                  </label>
                  <input
                    id="telefoon"
                    type="tel"
                    placeholder="06 12 34 56 78"
                    value={form.telefoon}
                    onChange={(e) => setForm({ ...form, telefoon: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                    style={inputStyle}
                    onFocus={onFocus}
                    onBlur={onBlur}
                  />
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2" style={{ color: "var(--gray-700)" }} htmlFor="bericht">
                    Jouw bericht *
                  </label>
                  <textarea
                    id="bericht"
                    required
                    rows={5}
                    placeholder="Vertel ons wat je nodig hebt, hoeveel stuks, deadlines, etc."
                    value={form.bericht}
                    onChange={(e) => setForm({ ...form, bericht: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                    style={inputStyle}
                    onFocus={onFocus}
                    onBlur={onBlur}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn-primary w-full justify-center"
                  style={{ display: "flex" }}
                >
                  Verstuur bericht →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
