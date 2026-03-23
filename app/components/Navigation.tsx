"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/kleding", label: "Kleding & Merch" },
  { href: "/websites", label: "Websites" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{ backgroundColor: "var(--navy)", borderBottom: "1px solid rgba(37,99,235,0.2)" }}
      className="sticky top-0 z-50 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-sm"
              style={{ background: "linear-gradient(135deg, #2563EB, #60A5FA)" }}
            >
              S
            </div>
            <span className="font-bold text-white text-lg tracking-tight">
              Startje<span style={{ color: "var(--blue-light)" }}>branding</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{
                    color: isActive ? "var(--blue-light)" : "rgba(255,255,255,0.7)",
                    backgroundColor: isActive ? "rgba(37,99,235,0.15)" : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                      e.currentTarget.style.backgroundColor = "transparent";
                    }
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="px-5 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200"
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
              Gratis offerte
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu openen"
            style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              {menuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden pb-4 flex flex-col gap-1"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "12px" }}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                  style={{
                    color: isActive ? "var(--blue-light)" : "rgba(255,255,255,0.8)",
                    backgroundColor: isActive ? "rgba(37,99,235,0.15)" : "transparent",
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-2 px-4 py-3 rounded-lg text-sm font-semibold text-white text-center"
              style={{ backgroundColor: "var(--blue)" }}
              onClick={() => setMenuOpen(false)}
            >
              Gratis offerte
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
