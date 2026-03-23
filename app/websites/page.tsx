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
        className="relative overflow-hidden py-24"
        style={{ background: "linear-gradient(160deg, #FFFFFF 0%, #F0F7FF 50%, #DBEAFE 100%)" }}
      >
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
              💻 Website Bouwen
            </div>
            <h1
              className="text-5xl md:text-6xl font-black leading-tight mb-6"
              style={{ color: "var(--gray-900)" }}
            >
              Websites die{" "}
              <span className="gradient-text-blue">echt werken</span>
            </h1>
            <p
              className="text-xl leading-relaxed mb-8"
              style={{ color: "var(--gray-500)" }}
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
        className="py-6"
        style={{ backgroundColor: "var(--blue-xpale)", borderBottom: "1.5px solid var(--blue-pale)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {features.map((f, i) => (
              <div key={f.label} className="flex items-center gap-2" data-reveal="up" data-delay={String(i + 1)}>
                <span className="text-lg">{f.icon}</span>
                <span className="text-sm font-semibold" style={{ color: "var(--gray-700)" }}>
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diensten */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14" data-reveal="up">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "var(--blue)" }}>
              Wat wij bouwen
            </p>
            <h2 className="text-3xl md:text-4xl font-black" style={{ color: "var(--gray-900)" }}>
              Welk type website past bij jou?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {diensten.map((d, i) => (
              <div key={d.naam} className="website-card" data-reveal={i % 2 === 0 ? "left" : "right"} data-delay={String(i + 1)}>
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5"
                  style={{ backgroundColor: "var(--blue-xpale)" }}
                >
                  {d.icon}
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "var(--gray-900)" }}>
                  {d.naam}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--gray-500)" }}>
                  {d.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {d.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        backgroundColor: "var(--blue-xpale)",
                        color: "var(--blue)",
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
      <section className="py-20" style={{ backgroundColor: "var(--gray-50)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14" data-reveal="up">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "var(--blue)" }}>
              Het proces
            </p>
            <h2 className="text-3xl md:text-4xl font-black" style={{ color: "var(--gray-900)" }}>
              Van idee naar live website
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stappen.map((s, i) => (
              <div key={s.nr} className="feature-card" data-reveal="scale" data-delay={String(i + 1)}>
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-lg mb-4"
                  style={{
                    background: "linear-gradient(135deg, var(--blue-xpale), var(--blue-pale))",
                    color: "var(--blue)",
                    border: "1.5px solid rgba(37,99,235,0.2)",
                  }}
                >
                  {s.nr}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "var(--gray-900)" }}>
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
            Tijd voor een website die voor jou werkt
          </h2>
          <p className="mb-8" style={{ color: "var(--gray-500)" }}>
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
