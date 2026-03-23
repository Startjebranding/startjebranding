"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [dienst, setDienst] = useState<"kleding" | "website" | "beide" | "">("");
  const [verzonden, setVerzonden] = useState(false);
  const [form, setForm] = useState({ naam: "", email: "", telefoon: "", bericht: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In productie: hier een API call of mailto
    setVerzonden(true);
  }

  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden py-20"
        style={{ background: "linear-gradient(160deg, #FFFFFF 0%, #F0F7FF 50%, #DBEAFE 100%)" }}
      >
        <div
          className="absolute pointer-events-none"
          style={{
            width: 400,
            height: 400,
            top: -120,
            right: -80,
            background: "radial-gradient(circle, rgba(191,219,254,0.5) 0%, transparent 65%)",
            borderRadius: "50%",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{
              backgroundColor: "rgba(37,99,235,0.08)",
              border: "1.5px solid rgba(37,99,235,0.2)",
              color: "var(--blue)",
            }}
          >
            ✉️ Neem contact op
          </div>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-4" style={{ color: "var(--gray-900)" }}>
            Laten we <span className="gradient-text-blue">praten</span>
          </h1>
          <p className="text-lg" style={{ color: "var(--gray-500)", maxWidth: 500, margin: "0 auto" }}>
            Vertel ons wat je nodig hebt. We sturen je binnen 24 uur een reactie.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-5 gap-12">

          {/* Sidebar info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div>
              <h2 className="text-2xl font-black mb-4" style={{ color: "var(--gray-900)" }}>
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
                      style={{ backgroundColor: "rgba(37,99,235,0.08)" }}
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

            <div
              className="p-6 rounded-2xl"
              style={{ backgroundColor: "var(--gray-50)", border: "1px solid var(--gray-200)" }}
            >
              <p className="text-sm font-semibold mb-2" style={{ color: "var(--gray-900)" }}>
                Direct contact
              </p>
              <a
                href="mailto:info@startjebranding.nl"
                className="text-sm transition-colors"
                style={{ color: "var(--blue)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--blue-mid)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--blue)")}
              >
                info@startjebranding.nl
              </a>
            </div>

            <div className="flex gap-3">
              <Link
                href="/kleding"
                className="flex-1 text-center py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                style={{
                  backgroundColor: "rgba(37,99,235,0.08)",
                  color: "var(--blue)",
                  border: "1px solid rgba(37,99,235,0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(37,99,235,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(37,99,235,0.08)";
                }}
              >
                👕 Kleding
              </Link>
              <Link
                href="/websites"
                className="flex-1 text-center py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                style={{
                  backgroundColor: "rgba(37,99,235,0.08)",
                  color: "var(--blue)",
                  border: "1px solid rgba(37,99,235,0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(37,99,235,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(37,99,235,0.08)";
                }}
              >
                💻 Websites
              </Link>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {verzonden ? (
              <div
                className="rounded-2xl p-12 text-center"
                style={{ backgroundColor: "var(--gray-50)", border: "1px solid var(--gray-200)" }}
              >
                <div className="text-5xl mb-4">🎉</div>
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
                style={{ backgroundColor: "var(--gray-50)", border: "1px solid var(--gray-200)" }}
              >
                {/* Dienst selector */}
                <div className="mb-6">
                  <label
                    className="block text-sm font-semibold mb-3"
                    style={{ color: "var(--gray-900)" }}
                  >
                    Waar heb je interesse in?
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: "kleding", label: "👕 Kleding" },
                      { value: "website", label: "💻 Website" },
                      { value: "beide", label: "✨ Beide" },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setDienst(opt.value as typeof dienst)}
                        className="py-3 rounded-xl text-sm font-semibold transition-all duration-150"
                        style={{
                          backgroundColor:
                            dienst === opt.value ? "var(--blue)" : "white",
                          color: dienst === opt.value ? "white" : "var(--gray-700)",
                          border:
                            dienst === opt.value
                              ? "1px solid var(--blue)"
                              : "1px solid var(--gray-200)",
                        }}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Fields */}
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: "var(--gray-700)" }}
                      htmlFor="naam"
                    >
                      Naam *
                    </label>
                    <input
                      id="naam"
                      type="text"
                      required
                      placeholder="Jouw naam"
                      value={form.naam}
                      onChange={(e) => setForm({ ...form, naam: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-150"
                      style={{
                        backgroundColor: "white",
                        border: "1px solid var(--gray-200)",
                        color: "var(--gray-900)",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--blue)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "var(--gray-200)")}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: "var(--gray-700)" }}
                      htmlFor="email"
                    >
                      E-mail *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="jouw@email.nl"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-150"
                      style={{
                        backgroundColor: "white",
                        border: "1px solid var(--gray-200)",
                        color: "var(--gray-900)",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--blue)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "var(--gray-200)")}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--gray-700)" }}
                    htmlFor="telefoon"
                  >
                    Telefoonnummer
                  </label>
                  <input
                    id="telefoon"
                    type="tel"
                    placeholder="06 12 34 56 78"
                    value={form.telefoon}
                    onChange={(e) => setForm({ ...form, telefoon: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-150"
                    style={{
                      backgroundColor: "white",
                      border: "1px solid var(--gray-200)",
                      color: "var(--gray-900)",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--blue)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "var(--gray-200)")}
                  />
                </div>

                <div className="mb-6">
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--gray-700)" }}
                    htmlFor="bericht"
                  >
                    Jouw bericht *
                  </label>
                  <textarea
                    id="bericht"
                    required
                    rows={5}
                    placeholder="Vertel ons wat je nodig hebt, hoeveel stuks, deadlines, etc."
                    value={form.bericht}
                    onChange={(e) => setForm({ ...form, bericht: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-150 resize-none"
                    style={{
                      backgroundColor: "white",
                      border: "1px solid var(--gray-200)",
                      color: "var(--gray-900)",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--blue)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "var(--gray-200)")}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-white transition-all duration-200 blue-glow-sm"
                  style={{ backgroundColor: "var(--blue)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--blue-mid)";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--blue)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
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
