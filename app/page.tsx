import Link from "next/link";
import ParallaxHero from "./components/ParallaxHero";

export default function Home() {
  return (
    <>
      {/* ─── HERO (parallax, light) ─────────────────────────────── */}
      <ParallaxHero />

      {/* ─── SERVICES ─────────────────────────────────────────────── */}
      <section className="py-28" style={{ backgroundColor: "var(--gray-50)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p
              className="text-sm font-bold uppercase tracking-widest mb-3"
              style={{ color: "var(--blue)" }}
            >
              Onze diensten
            </p>
            <h2
              className="text-4xl md:text-5xl font-black"
              style={{ color: "var(--gray-900)" }}
            >
              Eén partner,{" "}
              <span className="gradient-text-blue">twee krachtige diensten</span>
            </h2>
            <p className="mt-4 text-lg" style={{ color: "var(--gray-500)", maxWidth: 480, margin: "16px auto 0" }}>
              Alles wat jouw merk nodig heeft, op één plek.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1: Kleding */}
            <Link href="/kleding" className="service-card group">
              {/* Visual top */}
              <div
                className="w-full h-40 rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)" }}
              >
                <div
                  className="absolute"
                  style={{
                    width: 120,
                    height: 120,
                    right: -20,
                    top: -20,
                    background: "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)",
                    borderRadius: "50%",
                  }}
                />
                <span style={{ fontSize: 56 }}>👕</span>
              </div>

              <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--gray-900)" }}>
                Kleding & Merch
              </h3>
              <p className="leading-relaxed mb-6" style={{ color: "var(--gray-500)" }}>
                Bedrukte t-shirts, hoodies, caps, tassen en meer. Professionele merkkleding
                die jouw bedrijf zichtbaar maakt bij elke gelegenheid.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["T-shirts", "Hoodies", "Caps", "Tassen", "Polo's"].map((tag) => (
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
              <span
                className="text-sm font-bold transition-colors"
                style={{ color: "var(--blue)" }}
              >
                Meer over kleding & merch →
              </span>
            </Link>

            {/* Card 2: Websites */}
            <Link href="/websites" className="service-card group">
              {/* Visual top */}
              <div
                className="w-full h-40 rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)" }}
              >
                <div
                  className="absolute"
                  style={{
                    width: 120,
                    height: 120,
                    right: -20,
                    top: -20,
                    background: "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)",
                    borderRadius: "50%",
                  }}
                />
                <span style={{ fontSize: 56 }}>💻</span>
              </div>

              <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--gray-900)" }}>
                Website Bouwen
              </h3>
              <p className="leading-relaxed mb-6" style={{ color: "var(--gray-500)" }}>
                Strakke, snelle en professionele websites voor elk bedrijf. Van landingspagina
                tot volledige webshop — wij bouwen het voor jou.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Landingspagina", "Webshop", "Bedrijfswebsite", "Portfolio", "Maatwerk"].map((tag) => (
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
              <span
                className="text-sm font-bold transition-colors"
                style={{ color: "var(--blue)" }}
              >
                Meer over website bouwen →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── VISUAL STRIP / HOW IT WORKS ──────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p
              className="text-sm font-bold uppercase tracking-widest mb-3"
              style={{ color: "var(--blue)" }}
            >
              Hoe het werkt
            </p>
            <h2
              className="text-4xl md:text-5xl font-black"
              style={{ color: "var(--gray-900)" }}
            >
              In 3 stappen{" "}
              <span className="gradient-text-blue">live</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector line (desktop only) */}
            <div
              className="absolute hidden md:block pointer-events-none"
              style={{
                top: 36,
                left: "calc(33.33% - 12px)",
                right: "calc(33.33% - 12px)",
                height: 2,
                background: "linear-gradient(90deg, var(--blue-pale), var(--blue-light))",
              }}
            />

            {[
              {
                num: "01",
                title: "Aanvraag & gesprek",
                desc: "Stuur ons een bericht. We bespreken jouw wensen, stijl en doelen — snel en persoonlijk.",
                icon: "💬",
              },
              {
                num: "02",
                title: "Ontwerp & productie",
                desc: "Wij gaan aan de slag. Je ontvangt ontwerpen ter goedkeuring voordat er iets geproduceerd wordt.",
                icon: "✏️",
              },
              {
                num: "03",
                title: "Levering & live!",
                desc: "Jouw kleding of website wordt afgeleverd — op tijd, precies zoals afgesproken.",
                icon: "🚀",
              },
            ].map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-6 relative z-10"
                  style={{
                    background: "linear-gradient(135deg, var(--blue-xpale), var(--blue-pale))",
                    border: "2px solid rgba(37,99,235,0.2)",
                  }}
                >
                  {step.icon}
                </div>
                <span
                  className="text-xs font-black uppercase tracking-widest mb-2"
                  style={{ color: "var(--blue-light)" }}
                >
                  {step.num}
                </span>
                <h3 className="text-lg font-bold mb-3" style={{ color: "var(--gray-900)" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--gray-500)" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY US ────────────────────────────────────────────────── */}
      <section className="py-28" style={{ backgroundColor: "var(--blue-xpale)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p
              className="text-sm font-bold uppercase tracking-widest mb-3"
              style={{ color: "var(--blue)" }}
            >
              Waarom Startjebranding
            </p>
            <h2
              className="text-4xl md:text-5xl font-black"
              style={{ color: "var(--gray-900)" }}
            >
              Alles voor jouw merk,{" "}
              <span className="gradient-text-blue">op één plek</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "⚡",
                title: "Snel geleverd",
                desc: "Geen weken wachten. Wij werken efficiënt en leveren op tijd.",
                color: "#FEF3C7",
                borderColor: "rgba(245,158,11,0.25)",
              },
              {
                icon: "🎯",
                title: "100% op maat",
                desc: "Alles wordt afgestemd op jouw merk, stijl en wensen.",
                color: "#EDE9FE",
                borderColor: "rgba(139,92,246,0.2)",
              },
              {
                icon: "💎",
                title: "Topkwaliteit",
                desc: "Van premium kledingmerken tot strakke code — alleen het beste.",
                color: "#DCFCE7",
                borderColor: "rgba(34,197,94,0.2)",
              },
              {
                icon: "🤝",
                title: "Persoonlijk contact",
                desc: "Geen groot bedrijf. Direct contact met de maker.",
                color: "var(--blue-pale)",
                borderColor: "rgba(37,99,235,0.2)",
              },
            ].map((item) => (
              <div key={item.title} className="feature-card">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5"
                  style={{
                    backgroundColor: item.color,
                    border: `1.5px solid ${item.borderColor}`,
                  }}
                >
                  {item.icon}
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: "var(--gray-900)" }}>
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

      {/* ─── CTA BANNER ─────────────────────────────────────────────── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 50%, #BFDBFE 100%)",
        }}
      >
        {/* Decorative shapes */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: 400,
            height: 400,
            top: -150,
            right: -100,
            background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            width: 250,
            height: 250,
            bottom: -80,
            left: -60,
            background: "radial-gradient(circle, rgba(96,165,250,0.15) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p
            className="text-sm font-bold uppercase tracking-widest mb-4"
            style={{ color: "var(--blue)" }}
          >
            Klaar om te starten?
          </p>
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ color: "var(--gray-900)" }}
          >
            Laten we samen iets{" "}
            <span className="gradient-text-blue">moois bouwen</span>
          </h2>
          <p
            className="text-lg mb-10 leading-relaxed"
            style={{ color: "var(--gray-500)", maxWidth: 480, margin: "0 auto 40px" }}
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
