import Link from "next/link";
import ProcessSection from "../components/ProcessSection";

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
        className="relative overflow-hidden py-24"
        style={{ background: "linear-gradient(160deg, #FFFFFF 0%, #F0F7FF 50%, #DBEAFE 100%)" }}
      >
        {/* Decorative blobs */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: 500,
            height: 500,
            top: -150,
            right: -100,
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

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{
                backgroundColor: "rgba(37,99,235,0.08)",
                border: "1.5px solid rgba(37,99,235,0.2)",
                color: "var(--blue)",
              }}
            >
              👕 Merkkleding & Merch
            </div>
            <h1
              className="text-5xl md:text-6xl font-black leading-tight mb-6"
              style={{ color: "var(--gray-900)" }}
            >
              Jouw merk op{" "}
              <span className="gradient-text-blue">elk kledingstuk</span>
            </h1>
            <p
              className="text-xl leading-relaxed mb-8"
              style={{ color: "var(--gray-500)" }}
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14" data-reveal="up">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "var(--blue)" }}>
              Ons assortiment
            </p>
            <h2 className="text-3xl md:text-4xl font-black" style={{ color: "var(--gray-900)" }}>
              Wat kunnen wij voor jou maken?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {producten.map((p, i) => (
              <div key={p.naam} className="product-card" data-reveal="up" data-delay={String(i + 1)}>
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4"
                  style={{ backgroundColor: "var(--blue-xpale)" }}
                >
                  {p.icon}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "var(--gray-900)" }}>
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
      <ProcessSection
        eyebrow="Het proces"
        heading={<>Van idee naar <span className="gradient-text-blue">kledingstuk</span></>}
        steps={stappen.map((s) => ({ num: s.nr, title: s.titel, desc: s.desc }))}
        bg="var(--gray-50)"
      />

      {/* CTA */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 50%, #BFDBFE 100%)" }}
      >
        <div
          className="absolute pointer-events-none"
          style={{
            width: 350,
            height: 350,
            top: -100,
            right: -80,
            background: "radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center" data-reveal="up">
          <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: "var(--gray-900)" }}>
            Klaar om jouw merk zichtbaar te maken?
          </h2>
          <p className="mb-8" style={{ color: "var(--gray-500)" }}>
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
