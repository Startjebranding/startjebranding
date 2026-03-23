import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden hero-grid"
        style={{ backgroundColor: "var(--navy)", minHeight: "90vh" }}
      >
        {/* Glow orbs */}
        <div
          className="absolute rounded-full pulse-glow pointer-events-none"
          style={{
            width: 600,
            height: 600,
            top: -150,
            right: -100,
            background: "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute rounded-full pulse-glow pointer-events-none"
          style={{
            width: 400,
            height: 400,
            bottom: -100,
            left: -80,
            background: "radial-gradient(circle, rgba(96,165,250,0.1) 0%, transparent 70%)",
            animationDelay: "1.5s",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 flex flex-col items-center text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in-up"
            style={{
              backgroundColor: "rgba(37,99,235,0.15)",
              border: "1px solid rgba(37,99,235,0.3)",
              color: "var(--blue-glow)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "var(--blue-light)" }}
            />
            Professionele branding voor jouw bedrijf
          </div>

          {/* Headline */}
          <h1
            className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6 animate-fade-in-up animate-delay-100"
            style={{ maxWidth: 900 }}
          >
            <span className="gradient-text">Jouw merk.</span>
            <br />
            <span className="text-white">Onze expertise.</span>
          </h1>

          {/* Sub */}
          <p
            className="text-lg md:text-xl leading-relaxed mb-10 animate-fade-in-up animate-delay-200"
            style={{ color: "rgba(255,255,255,0.6)", maxWidth: 600 }}
          >
            Van professionele merkkleding tot een krachtige website — Startjebranding
            zorgt dat jouw bedrijf er op elk vlak top uitziet.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-300">
            <Link href="/contact" className="btn-primary">
              Gratis offerte aanvragen →
            </Link>
            <Link href="/kleding" className="btn-ghost">
              Bekijk onze diensten
            </Link>
          </div>

          {/* Stats */}
          <div
            className="mt-20 grid grid-cols-3 gap-8 md:gap-16 animate-fade-in-up animate-delay-400"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
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
                  style={{ color: "var(--blue-light)" }}
                >
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─────────────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: "var(--gray-50)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--blue)" }}
            >
              Onze diensten
            </p>
            <h2 className="text-4xl md:text-5xl font-black" style={{ color: "var(--navy)" }}>
              Eén partner,{" "}
              <span className="gradient-text-blue">twee krachtige diensten</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1: Kleding */}
            <Link href="/kleding" className="service-card">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-2xl"
                style={{ backgroundColor: "rgba(37,99,235,0.2)" }}
              >
                👕
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Kleding & Merch</h3>
              <p className="leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
                Bedrukte t-shirts, hoodies, caps, tassen en meer. Professionele merkkleding
                die jouw bedrijf zichtbaar maakt bij elke gelegenheid.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["T-shirts", "Hoodies", "Caps", "Tassen", "Polo's"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: "rgba(37,99,235,0.15)",
                      color: "var(--blue-glow)",
                      border: "1px solid rgba(37,99,235,0.25)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span
                className="text-sm font-semibold"
                style={{ color: "var(--blue-light)" }}
              >
                Meer over kleding & merch →
              </span>
            </Link>

            {/* Card 2: Websites */}
            <Link href="/websites" className="service-card">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-2xl"
                style={{ backgroundColor: "rgba(37,99,235,0.2)" }}
              >
                💻
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Website Bouwen</h3>
              <p className="leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
                Strakke, snelle en professionele websites voor elk bedrijf. Van landingspagina
                tot volledige webshop — wij bouwen het voor jou.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Landingspagina", "Webshop", "Bedrijfswebsite", "Portfolio", "Maatwerk"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: "rgba(37,99,235,0.15)",
                        color: "var(--blue-glow)",
                        border: "1px solid rgba(37,99,235,0.25)",
                      }}
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
              <span
                className="text-sm font-semibold"
                style={{ color: "var(--blue-light)" }}
              >
                Meer over website bouwen →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY US ───────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--blue)" }}
            >
              Waarom Startjebranding
            </p>
            <h2 className="text-4xl md:text-5xl font-black" style={{ color: "var(--navy)" }}>
              Alles voor jouw merk, <br />
              <span className="gradient-text-blue">op één plek</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "⚡",
                title: "Snel geleverd",
                desc: "Geen weken wachten. Wij werken efficiënt en leveren op tijd.",
              },
              {
                icon: "🎯",
                title: "100% op maat",
                desc: "Alles wordt afgestemd op jouw merk, stijl en wensen.",
              },
              {
                icon: "💎",
                title: "Topkwaliteit",
                desc: "Van premium kledingmerken tot strakke code — alleen het beste.",
              },
              {
                icon: "🤝",
                title: "Persoonlijk contact",
                desc: "Geen grote bedrijven. Direct contact met de maker.",
              },
            ].map((item) => (
              <div key={item.title} className="feature-card">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-base font-bold mb-2" style={{ color: "var(--navy)" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--gray-500)" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ───────────────────────────────────────── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: "var(--navy)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(37,99,235,0.15) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Klaar om te beginnen?
          </h2>
          <p
            className="text-lg mb-8 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Vraag vandaag nog een gratis offerte aan. Geen verplichtingen, geen verrassingen.
          </p>
          <Link href="/contact" className="cta-btn-dark">
            Neem contact op →
          </Link>
        </div>
      </section>
    </>
  );
}
