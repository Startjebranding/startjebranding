import Link from "next/link";

export const metadata = {
  title: "Websites Bouwen – Startjebranding",
  description:
    "Professionele websites voor bedrijven. Landingspagina's, webshops en bedrijfssites op maat gebouwd. Snel, strak en SEO-vriendelijk.",
};

const diensten = [
  {
    icon: "🚀",
    naam: "Landingspagina",
    desc: "Een scherpe, conversiegerichte pagina om leads en klanten aan te trekken. Snel online.",
    tags: ["1 pagina", "Snel live", "Hoge conversie"],
  },
  {
    icon: "🏢",
    naam: "Bedrijfswebsite",
    desc: "Een complete website met meerdere pagina's. Jouw bedrijf professioneel online presenteren.",
    tags: ["Meerdere pagina's", "CMS optioneel", "Op maat"],
  },
  {
    icon: "🛍️",
    naam: "Webshop",
    desc: "Een volledige online winkel om jouw producten of diensten te verkopen. Veilig en gebruiksvriendelijk.",
    tags: ["Betalingen", "Productbeheer", "Mobiel geoptimaliseerd"],
  },
  {
    icon: "🎨",
    naam: "Portfolio website",
    desc: "Laat je werk spreken. Een prachtig portfolio dat klanten overtuigt.",
    tags: ["Galerij", "Cases", "Strak design"],
  },
];

const features = [
  { icon: "📱", label: "Mobiel geoptimaliseerd" },
  { icon: "⚡", label: "Razendsnelle laadtijd" },
  { icon: "🔍", label: "SEO-vriendelijk" },
  { icon: "🔒", label: "Veilig & betrouwbaar" },
  { icon: "🎨", label: "Volledig op maat" },
  { icon: "📊", label: "Analytics integratie" },
];

const stappen = [
  { nr: "01", titel: "Intake gesprek", desc: "We bespreken jouw wensen, doelen en doelgroep. Gratis en vrijblijvend." },
  { nr: "02", titel: "Ontwerp", desc: "We maken een strak design voorstel afgestemd op jouw merk en stijl." },
  { nr: "03", titel: "Ontwikkeling", desc: "Je website wordt gebouwd met de nieuwste technologieën. Snel en veilig." },
  { nr: "04", titel: "Live & support", desc: "We zetten de site live en staan klaar voor vragen en aanpassingen." },
];

export default function WebsitesPage() {
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
            background: "radial-gradient(ellipse at 70% 50%, rgba(37,99,235,0.12) 0%, transparent 60%)",
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
              💻 Website Bouwen
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Websites die{" "}
              <span className="gradient-text">echt werken</span>
            </h1>
            <p
              className="text-xl leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Geen templates, geen compromissen. Wij bouwen websites die er niet alleen geweldig
              uitzien, maar ook resultaat leveren voor jouw bedrijf.
            </p>
            <Link href="/contact" className="btn-primary">
              Vraag een offerte aan →
            </Link>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section
        className="py-8"
        style={{ backgroundColor: "var(--navy-mid)", borderBottom: "1px solid rgba(37,99,235,0.15)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {features.map((f) => (
              <div key={f.label} className="flex items-center gap-2">
                <span className="text-lg">{f.icon}</span>
                <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diensten */}
      <section className="py-20" style={{ backgroundColor: "var(--gray-50)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--blue)" }}>
              Wat wij bouwen
            </p>
            <h2 className="text-3xl md:text-4xl font-black" style={{ color: "var(--navy)" }}>
              Welk type website past bij jou?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {diensten.map((d) => (
              <div key={d.naam} className="website-card">
                <div className="text-3xl mb-4">{d.icon}</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "var(--navy)" }}>
                  {d.naam}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--gray-500)" }}>
                  {d.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {d.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: "rgba(37,99,235,0.08)",
                        color: "var(--blue)",
                        border: "1px solid rgba(37,99,235,0.2)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
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
              Van idee naar live website
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
            Tijd voor een website die voor jou werkt
          </h2>
          <p className="mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
            We maken vrijblijvend een ontwerp voorstel. Geen verplichtingen.
          </p>
          <Link href="/contact" className="cta-btn-dark">
            Start jouw project →
          </Link>
        </div>
      </section>
    </>
  );
}
