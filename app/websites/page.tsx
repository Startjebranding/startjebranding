import Link from "next/link";
import ProcessSection from "../components/ProcessSection";

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
  { nr: "01", titel: "Intake gesprek",  desc: "We bespreken jouw wensen, doelen en doelgroep. Gratis en vrijblijvend." },
  { nr: "02", titel: "Ontwerp",         desc: "We maken een strak design voorstel afgestemd op jouw merk en stijl." },
  { nr: "03", titel: "Ontwikkeling",    desc: "Je website wordt gebouwd met de nieuwste technologieën. Snel en veilig." },
  { nr: "04", titel: "Live & support",  desc: "We zetten de site live en staan klaar voor vragen en aanpassingen." },
];

export default function WebsitesPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-24"
        style={{ background: "linear-gradient(160deg, #FFFFFF 0%, #F0F7FF 50%, #DBEAFE 100%)" }}
      >
        {/* Decorative blobs */}
        <div
          className="absolute pointer-events-none morph-blob"
          style={{
            width: 520,
            height: 520,
            top: -160,
            right: -110,
            background: "radial-gradient(circle, rgba(191,219,254,0.55) 0%, transparent 65%)",
            animationDuration: "20s",
          }}
        />
        <div
          className="absolute pointer-events-none morph-blob"
          style={{
            width: 260,
            height: 260,
            bottom: -70,
            left: -50,
            background: "radial-gradient(circle, rgba(219,234,254,0.45) 0%, transparent 65%)",
            animationDuration: "26s",
            animationDelay: "-9s",
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

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
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
              Website Bouwen
            </div>

            <h1
              className="text-5xl md:text-6xl font-black leading-tight mb-6 animate-fade-in-up animate-delay-100"
              style={{ color: "var(--gray-900)" }}
            >
              Websites die{" "}
              <span className="gradient-text-animated">echt werken</span>
            </h1>

            <p
              className="text-xl leading-relaxed mb-8 animate-fade-in-up animate-delay-200"
              style={{ color: "var(--gray-500)" }}
            >
              Geen templates, geen compromissen. Wij bouwen websites die er niet alleen geweldig
              uitzien, maar ook resultaat leveren voor jouw bedrijf.
            </p>

            <div className="animate-fade-in-up animate-delay-300">
              <Link href="/contact" className="btn-primary">
                Vraag een offerte aan →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES STRIP ───────────────────────────────────────── */}
      <section
        className="py-5"
        style={{ backgroundColor: "var(--blue-xpale)", borderBottom: "1.5px solid var(--blue-pale)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {features.map((f, i) => (
              <div key={f.label} className="flex items-center gap-2.5" data-reveal="fade" data-delay={String(i + 1)}>
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-base"
                  style={{
                    backgroundColor: "rgba(37,99,235,0.10)",
                    border: "1px solid rgba(37,99,235,0.15)",
                  }}
                >
                  {f.icon}
                </span>
                <span className="text-sm font-semibold" style={{ color: "var(--gray-700)" }}>
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DIENSTEN ─────────────────────────────────────────────── */}
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
              <div
                key={d.naam}
                className="website-card"
                data-reveal={i % 2 === 0 ? "left" : "right"}
                data-delay={String(i + 1)}
              >
                <div
                  className="icon-box w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5"
                  style={{
                    backgroundColor: "var(--blue-xpale)",
                    border: "1.5px solid var(--blue-pale)",
                    boxShadow: "0 4px 16px rgba(37,99,235,0.10)",
                  }}
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
                      style={{ backgroundColor: "var(--blue-xpale)", color: "var(--blue)" }}
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

      {/* ─── HOE HET WERKT ────────────────────────────────────────── */}
      <ProcessSection
        eyebrow="Het proces"
        heading={<>Van idee naar <span className="gradient-text-blue">live website</span></>}
        steps={stappen.map((s) => ({ num: s.nr, title: s.titel, desc: s.desc }))}
        bg="var(--gray-50)"
      />

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 50%, #BFDBFE 100%)" }}
      >
        {/* Animated orbs */}
        <div
          className="absolute pointer-events-none float-a"
          style={{
            width: 380,
            height: 380,
            top: -110,
            right: -90,
            background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          className="absolute pointer-events-none float-b"
          style={{
            width: 200,
            height: 200,
            bottom: -60,
            left: -40,
            background: "radial-gradient(circle, rgba(96,165,250,0.15) 0%, transparent 70%)",
            borderRadius: "50%",
            animationDelay: "-5s",
          }}
        />

        <div className="relative max-w-3xl mx-auto px-6 text-center" data-reveal="up">
          <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: "var(--gray-900)" }}>
            Tijd voor een website die{" "}
            <span className="gradient-text-animated">voor jou werkt</span>
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
