import Link from "next/link";

export const metadata = {
  title: "Kleding & Merch – Startjebranding",
  description:
    "Professionele merkkleding en merch voor bedrijven. Bedrukte t-shirts, hoodies, caps en meer. Op maat, snel geleverd.",
};

const producten = [
  {
    icon: "👕",
    naam: "T-shirts",
    desc: "Klassieke unisex en fitted tees in elke kleur, bedrukt of geborduurd met jouw logo.",
  },
  {
    icon: "🧥",
    naam: "Hoodies & Sweaters",
    desc: "Comfort en stijl in één. Premium kwaliteit sweaters met jouw branding.",
  },
  {
    icon: "🧢",
    naam: "Caps & Petjes",
    desc: "Gestructureerde caps en dad-hats met geborduurde logo's. Altijd opvallend.",
  },
  {
    icon: "👜",
    naam: "Tassen & Rugzakken",
    desc: "Tote bags, sporttas of rugzak — alles voorzien van jouw merk.",
  },
  {
    icon: "👔",
    naam: "Polo's & Shirts",
    desc: "Professionele werkkleding voor een strak en eenheidsuitstraling op de werkvloer.",
  },
  {
    icon: "🧣",
    naam: "Accessoires",
    desc: "Sokken, bivakmutsen, sjals en meer. Kleine items, grote merkimpact.",
  },
];

const stappen = [
  { nr: "01", titel: "Aanvraag", desc: "Stuur ons jouw wensen, logo en ideeën via het contactformulier." },
  { nr: "02", titel: "Ontwerp", desc: "Wij maken een digitaal ontwerp en sturen je een preview ter goedkeuring." },
  { nr: "03", titel: "Productie", desc: "Na goedkeuring gaan we direct in productie met premium materialen." },
  { nr: "04", titel: "Levering", desc: "Jouw bestelling wordt netjes verpakt en snel bezorgd." },
];

export default function KledingPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden hero-grid py-24"
        style={{ backgroundColor: "var(--navy)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 30% 50%, rgba(37,99,235,0.12) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/" className="back-link">
              ← Terug naar home
            </Link>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{
                backgroundColor: "rgba(37,99,235,0.15)",
                border: "1px solid rgba(37,99,235,0.3)",
                color: "var(--blue-glow)",
              }}
            >
              👕 Merkkleding & Merch
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Jouw merk op{" "}
              <span className="gradient-text">elk kledingstuk</span>
            </h1>
            <p
              className="text-xl leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Professionele bedrijfskleding en merch die jouw merk zichtbaar maakt. Van losse
              stuks tot grote bestellingen — altijd op maat en topkwaliteit.
            </p>
            <Link href="/contact" className="btn-primary">
              Vraag een offerte aan →
            </Link>
          </div>
        </div>
      </section>

      {/* Producten */}
      <section className="py-20" style={{ backgroundColor: "var(--gray-50)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--blue)" }}>
              Ons assortiment
            </p>
            <h2 className="text-3xl md:text-4xl font-black" style={{ color: "var(--navy)" }}>
              Wat kunnen wij voor jou maken?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {producten.map((p) => (
              <div key={p.naam} className="product-card">
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "var(--navy)" }}>
                  {p.naam}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--gray-500)" }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hoe het werkt */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--blue)" }}>
              Het proces
            </p>
            <h2 className="text-3xl md:text-4xl font-black" style={{ color: "var(--navy)" }}>
              Van idee naar kledingstuk
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stappen.map((s) => (
              <div key={s.nr}>
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center font-black text-xl mb-4 text-white"
                  style={{
                    background: "linear-gradient(135deg, var(--blue), var(--blue-light))",
                  }}
                >
                  {s.nr}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "var(--navy)" }}>
                  {s.titel}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--gray-500)" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "var(--navy)" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Klaar om jouw merk zichtbaar te maken?
          </h2>
          <p className="mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
            Stuur ons een berichtje en we sturen je binnen 24 uur een offerte op maat.
          </p>
          <Link href="/contact" className="cta-btn-dark">
            Offerte aanvragen →
          </Link>
        </div>
      </section>
    </>
  );
}
