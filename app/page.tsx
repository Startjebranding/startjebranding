import Link from "next/link";
import ParallaxHero from "./components/ParallaxHero";
import ProcessSection from "./components/ProcessSection";

export default function Home() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <ParallaxHero />

      {/* ─── SERVICES ─────────────────────────────────────────────── */}
      <section className="py-28" style={{ backgroundColor: "var(--gray-50)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center mb-16" data-reveal="up">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "var(--blue)" }}>
              Onze diensten
            </p>
            <h2 className="text-4xl md:text-5xl font-black" style={{ color: "var(--gray-900)" }}>
              Eén partner,{" "}
              <span className="gradient-text-blue">twee krachtige diensten</span>
            </h2>
            <p className="mt-4 text-lg" style={{ color: "var(--gray-500)", maxWidth: 480, margin: "16px auto 0" }}>
              Alles wat jouw merk nodig heeft, op één plek.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1: Kleding */}
            <Link href="/kleding" className="service-card group" data-reveal="left">
              {/* Visual top */}
              <div
                className="w-full h-44 rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)" }}
              >
                {/* Background orbs */}
                <div className="absolute" style={{
                  width: 180, height: 180, right: -40, top: -40,
                  background: "radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)",
                  borderRadius: "50%",
                }} />
                <div className="absolute" style={{
                  width: 100, height: 100, left: -20, bottom: -20,
                  background: "radial-gradient(circle, rgba(96,165,250,0.20) 0%, transparent 70%)",
                  borderRadius: "50%",
                }} />
                {/* Floating pill labels */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="text-xs font-bold px-2 py-1 rounded-lg" style={{
                    background: "rgba(37,99,235,0.12)", color: "var(--blue)",
                  }}>T-shirts</span>
                  <span className="text-xs font-bold px-2 py-1 rounded-lg" style={{
                    background: "rgba(37,99,235,0.08)", color: "var(--blue)",
                  }}>Hoodies</span>
                </div>
                <div className="absolute bottom-4 right-4 flex flex-col gap-2 items-end">
                  <span className="text-xs font-bold px-2 py-1 rounded-lg" style={{
                    background: "rgba(37,99,235,0.10)", color: "var(--blue)",
                  }}>Caps</span>
                  <span className="text-xs font-bold px-2 py-1 rounded-lg" style={{
                    background: "rgba(37,99,235,0.07)", color: "var(--blue)",
                  }}>Tassen</span>
                </div>
                {/* Central icon */}
                <div
                  className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "white",
                    boxShadow: "0 8px 32px rgba(37,99,235,0.18), 0 2px 8px rgba(0,0,0,0.06)",
                    fontSize: 40,
                  }}
                >
                  👕
                </div>
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
                    style={{ backgroundColor: "var(--blue-xpale)", color: "var(--blue)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-sm font-bold transition-colors" style={{ color: "var(--blue)" }}>
                Meer over kleding & merch →
              </span>
            </Link>

            {/* Card 2: Websites */}
            <Link href="/websites" className="service-card group" data-reveal="right">
              {/* Visual top */}
              <div
                className="w-full h-44 rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)" }}
              >
                {/* Background orbs */}
                <div className="absolute" style={{
                  width: 180, height: 180, left: -40, top: -40,
                  background: "radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)",
                  borderRadius: "50%",
                }} />
                <div className="absolute" style={{
                  width: 100, height: 100, right: -20, bottom: -20,
                  background: "radial-gradient(circle, rgba(96,165,250,0.20) 0%, transparent 70%)",
                  borderRadius: "50%",
                }} />
                {/* Mini browser chrome mockup */}
                <div
                  className="relative z-10 rounded-xl overflow-hidden"
                  style={{
                    width: 180,
                    background: "white",
                    boxShadow: "0 8px 32px rgba(37,99,235,0.18), 0 2px 8px rgba(0,0,0,0.06)",
                  }}
                >
                  {/* Browser bar */}
                  <div className="flex items-center gap-1.5 px-3 py-2" style={{ background: "var(--gray-50)", borderBottom: "1px solid var(--gray-100)" }}>
                    <span className="w-2 h-2 rounded-full" style={{ background: "#FC5753" }} />
                    <span className="w-2 h-2 rounded-full" style={{ background: "#FDBC40" }} />
                    <span className="w-2 h-2 rounded-full" style={{ background: "#34C749" }} />
                    <div className="flex-1 mx-2 h-3 rounded-sm" style={{ background: "var(--gray-200)" }} />
                  </div>
                  {/* Content skeleton */}
                  <div className="p-3 flex flex-col gap-2">
                    <div className="h-2.5 rounded-sm" style={{ background: "var(--blue-pale)", width: "70%" }} />
                    <div className="h-2 rounded-sm" style={{ background: "var(--gray-100)", width: "100%" }} />
                    <div className="h-2 rounded-sm" style={{ background: "var(--gray-100)", width: "80%" }} />
                    <div className="mt-1 h-5 rounded-md" style={{ background: "linear-gradient(135deg, var(--blue), var(--blue-light))", width: "50%" }} />
                  </div>
                </div>
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
                    style={{ backgroundColor: "var(--blue-xpale)", color: "var(--blue)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-sm font-bold transition-colors" style={{ color: "var(--blue)" }}>
                Meer over website bouwen →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ──────────────────────────────────────────── */}
      <ProcessSection
        eyebrow="Hoe het werkt"
        heading={<>In 3 stappen <span className="gradient-text-blue">live</span></>}
        steps={[
          { num: "01", title: "Aanvraag & gesprek",   desc: "Stuur ons een bericht. We bespreken jouw wensen, stijl en doelen — snel en persoonlijk." },
          { num: "02", title: "Ontwerp & productie",  desc: "Wij gaan aan de slag. Je ontvangt ontwerpen ter goedkeuring voordat er iets geproduceerd wordt." },
          { num: "03", title: "Levering & live!",     desc: "Jouw kleding of website wordt afgeleverd — op tijd, precies zoals afgesproken." },
        ]}
      />

      {/* ─── WHY US ────────────────────────────────────────────────── */}
      <section className="py-28" style={{ backgroundColor: "var(--blue-xpale)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center mb-16" data-reveal="up">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "var(--blue)" }}>
              Waarom Startjebranding
            </p>
            <h2 className="text-4xl md:text-5xl font-black" style={{ color: "var(--gray-900)" }}>
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
                iconBg: "#FEF3C7",
                iconBorder: "rgba(245,158,11,0.25)",
              },
              {
                icon: "🎯",
                title: "100% op maat",
                desc: "Alles wordt afgestemd op jouw merk, stijl en wensen.",
                iconBg: "#EDE9FE",
                iconBorder: "rgba(139,92,246,0.2)",
              },
              {
                icon: "💎",
                title: "Topkwaliteit",
                desc: "Van premium kledingmerken tot strakke code — alleen het beste.",
                iconBg: "#DCFCE7",
                iconBorder: "rgba(34,197,94,0.2)",
              },
              {
                icon: "🤝",
                title: "Persoonlijk contact",
                desc: "Geen groot bedrijf. Direct contact met de maker.",
                iconBg: "var(--blue-pale)",
                iconBorder: "rgba(37,99,235,0.2)",
              },
            ].map((item, i) => (
              <div key={item.title} className="feature-card" data-reveal="scale" data-delay={String(i + 1)}>
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5"
                  style={{
                    backgroundColor: item.iconBg,
                    border: `1.5px solid ${item.iconBorder}`,
                    boxShadow: `0 4px 16px ${item.iconBorder}`,
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
        {/* Animated decorative orbs */}
        <div
          className="absolute pointer-events-none float-a"
          style={{
            width: 440,
            height: 440,
            top: -160,
            right: -120,
            background: "radial-gradient(circle, rgba(37,99,235,0.13) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          className="absolute pointer-events-none float-b"
          style={{
            width: 280,
            height: 280,
            bottom: -90,
            left: -70,
            background: "radial-gradient(circle, rgba(96,165,250,0.16) 0%, transparent 70%)",
            borderRadius: "50%",
            animationDelay: "-4s",
          }}
        />
        <div
          className="absolute pointer-events-none float-a"
          style={{
            width: 140,
            height: 140,
            bottom: "20%",
            right: "8%",
            background: "radial-gradient(circle, rgba(147,197,253,0.22) 0%, transparent 70%)",
            borderRadius: "50%",
            animationDelay: "-2s",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6 text-center" data-reveal="up">
          <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "var(--blue)" }}>
            Klaar om te starten?
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "var(--gray-900)" }}>
            Laten we samen iets{" "}
            <span className="gradient-text-animated">moois bouwen</span>
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
