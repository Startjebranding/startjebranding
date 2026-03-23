import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--navy)", borderTop: "1px solid rgba(37,99,235,0.2)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-sm"
                style={{ background: "linear-gradient(135deg, #2563EB, #60A5FA)" }}
              >
                S
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                Startje<span style={{ color: "var(--blue-light)" }}>branding</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              Jouw merk, onze expertise. Wij bouwen aan sterke merken met professionele kleding
              en krachtige websites.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Diensten
            </p>
            <ul className="flex flex-col gap-2">
              {[
                { href: "/kleding", label: "Kleding & Merch" },
                { href: "/websites", label: "Website bouwen" },
                { href: "/contact", label: "Offerte aanvragen" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Contact
            </p>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="mailto:info@startjebranding.nl" className="email-link">
                  info@startjebranding.nl
                </a>
              </li>
              <li className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                Nederland
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            color: "rgba(255,255,255,0.3)",
          }}
        >
          <p>© {new Date().getFullYear()} Startjebranding. Alle rechten voorbehouden.</p>
          <p>Gemaakt met passie in Nederland</p>
        </div>
      </div>
    </footer>
  );
}
