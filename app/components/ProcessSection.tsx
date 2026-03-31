"use client";
import { useEffect, useRef } from "react";

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

interface Props {
  eyebrow: string;
  heading: React.ReactNode;
  steps: ProcessStep[];
  bg?: string;
}

// Steps alternate left / right (zigzag).
// Cards are absolutely positioned with white bg so the SVG line runs behind them.
// Nodes are the bezier points where the path "lands" at each step.
// Card positions are centered on each node (card is 300×~130px).
// SVG viewBox: 0 0 1100 [height]  — matches max-w-7xl content width closely.

const LAYOUTS = {
  3: {
    viewBox: "0 0 1100 600",
    height: 600,
    // L(150,90) → R(950,310) → L(150,510)
    // S-curve: segment 1 sweeps right, segment 2 sweeps back left
    path: "M 150 90 C 560 90, 560 310, 950 310 C 1340 310, -240 510, 150 510",
    nodes: [[150, 90], [950, 310], [150, 510]] as [number, number][],
    // left:0 or right:0; top/bottom in px; rotate in deg
    cards: [
      { side: "left" as const,  top: 0,   bottom: undefined, rotate: -1.5 },
      { side: "right" as const, top: 245, bottom: undefined, rotate:  1.2 },
      { side: "left" as const,  top: undefined, bottom: 0,   rotate: -1   },
    ],
  },
  4: {
    viewBox: "0 0 1100 720",
    height: 720,
    // L(150,90) → R(950,260) → L(150,430) → R(950,620)
    path: "M 150 90 C 560 90, 560 260, 950 260 C 1340 260, -240 430, 150 430 C 560 430, 560 620, 950 620",
    nodes: [[150, 90], [950, 260], [150, 430], [950, 620]] as [number, number][],
    cards: [
      { side: "left" as const,  top: 0,   bottom: undefined, rotate: -1.5 },
      { side: "right" as const, top: 195, bottom: undefined, rotate:  1.2 },
      { side: "left" as const,  top: 365, bottom: undefined, rotate: -1   },
      { side: "right" as const, top: undefined, bottom: 0,   rotate:  1.5 },
    ],
  },
};

const CARD_W = 300;

export default function ProcessSection({ eyebrow, heading, steps, bg = "white" }: Props) {
  const pathRef   = useRef<SVGPathElement>(null);
  const glowRef   = useRef<SVGPathElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const layout = LAYOUTS[steps.length as keyof typeof LAYOUTS] ?? LAYOUTS[4];

  useEffect(() => {
    const path = pathRef.current;
    const glow = glowRef.current;
    const section = sectionRef.current;
    if (!path || !glow || !section) return;

    const len = path.getTotalLength();
    [path, glow].forEach((el) => {
      el.style.strokeDasharray = String(len);
      el.style.strokeDashoffset = String(len);
    });

    const update = () => {
      const rect = section.getBoundingClientRect();
      const vh   = window.innerHeight;
      // Starts drawing when section enters viewport; fully drawn in ~65% of vh of scrolling
      const progress = Math.max(0, Math.min(1, (vh * 0.9 - rect.top) / (vh * 0.65)));
      const off = String(len * (1 - progress));
      path.style.strokeDashoffset = off;
      glow.style.strokeDashoffset = off;
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <section className="py-28 overflow-hidden" style={{ backgroundColor: bg }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16" data-reveal="up">
          <p
            className="text-xs font-black uppercase tracking-widest mb-3"
            style={{ color: "var(--blue)" }}
          >
            {eyebrow}
          </p>
          <h2
            className="text-4xl md:text-5xl font-black"
            style={{ color: "var(--gray-900)", lineHeight: 1.15 }}
          >
            {heading}
          </h2>
        </div>

        {/* ── Desktop zigzag ──────────────────────────────────────── */}
        <div
          ref={sectionRef}
          className="relative hidden md:block"
          style={{ height: layout.height }}
        >
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox={layout.viewBox}
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            aria-hidden="true"
            style={{ zIndex: 0 }}
          >
            <defs>
              <filter id="ps-glow" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Ghost track — dashed */}
            <path
              d={layout.path}
              stroke="var(--blue-pale)"
              strokeWidth="2"
              strokeDasharray="6 10"
              strokeLinecap="round"
            />
            {/* Wide soft glow (animates with line) */}
            <path
              ref={glowRef}
              d={layout.path}
              stroke="rgba(96,165,250,0.18)"
              strokeWidth="20"
              strokeLinecap="round"
            />
            {/* Main animated line */}
            <path
              ref={pathRef}
              d={layout.path}
              stroke="var(--blue)"
              strokeWidth="2.5"
              strokeLinecap="round"
              filter="url(#ps-glow)"
            />
            {/* Node dots — sit in gaps between cards */}
            {layout.nodes.map(([cx, cy], i) => (
              <g key={i}>
                <circle cx={cx} cy={cy} r="8" fill="rgba(37,99,235,0.1)" />
                <circle cx={cx} cy={cy} r="4.5" fill="white" stroke="var(--blue)" strokeWidth="2" />
              </g>
            ))}
          </svg>

          {/* Cards */}
          {steps.map((step, i) => {
            const c = layout.cards[i];
            if (!c) return null;
            const style: React.CSSProperties = {
              position: "absolute",
              width: CARD_W,
              zIndex: 10,
              transform: `rotate(${c.rotate}deg)`,
            };
            if (c.side === "left")  style.left  = 0;
            else                    style.right  = 0;
            if (c.top    !== undefined) style.top    = c.top;
            if (c.bottom !== undefined) style.bottom = c.bottom;

            return (
              <div key={step.num} style={style} data-reveal="up" data-delay={String(i + 1)}>
                <StepCard step={step} index={i} />
              </div>
            );
          })}
        </div>

        {/* ── Mobile vertical timeline ────────────────────────────── */}
        <div className="md:hidden">
          <div className="relative pl-10">
            {/* Vertical line */}
            <div
              className="absolute left-4 top-3 bottom-3 w-px"
              style={{ background: "linear-gradient(to bottom, var(--blue), var(--blue-pale))" }}
            />
            <div className="flex flex-col gap-10">
              {steps.map((step, i) => (
                <div key={step.num} className="relative" data-reveal="up" data-delay={String(i + 1)}>
                  {/* Dot on line */}
                  <div
                    className="absolute -left-6 top-4 w-4 h-4 rounded-full border-2 border-blue-600"
                    style={{ background: "white", borderColor: "var(--blue)" }}
                  />
                  <StepCard step={step} index={i} />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function StepCard({ step, index }: { step: ProcessStep; index: number }) {
  // Slight shade variation so adjacent cards feel distinct
  const accentOpacity = 0.06 + index * 0.015;

  return (
    <div
      style={{
        background: "white",
        border: "1.5px solid var(--blue-pale)",
        borderRadius: 18,
        padding: "20px 22px 22px",
        boxShadow: "0 2px 20px rgba(37,99,235,0.07), 0 8px 32px rgba(37,99,235,0.04)",
      }}
    >
      {/* Number badge + title row */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
        <div
          style={{
            flexShrink: 0,
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: `rgba(37,99,235,${accentOpacity + 0.08})`,
            border: "1.5px solid var(--blue-pale)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 11,
            fontWeight: 900,
            color: "var(--blue)",
            letterSpacing: "0.04em",
          }}
        >
          {step.num}
        </div>
        <h3
          style={{
            color: "var(--gray-900)",
            fontWeight: 800,
            fontSize: 15,
            lineHeight: 1.3,
            margin: 0,
          }}
        >
          {step.title}
        </h3>
      </div>
      <p
        style={{
          color: "var(--gray-500)",
          fontSize: 13,
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        {step.desc}
      </p>
    </div>
  );
}
