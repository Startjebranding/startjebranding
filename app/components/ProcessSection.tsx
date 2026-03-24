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

// Layout lookup by step count.
// Dots: calculated bezier positions at evenly spaced t values.
// Cards: centered on each dot, with white bg sitting above the SVG.
const LAYOUTS = {
  3: {
    viewBox: "0 0 1200 560",
    height: 560,
    path: "M 1060 30 C 900 150, 300 380, 100 530",
    // t=0: (1060,30)  t=0.5: (595,269)  t=1: (100,530)
    dots: [[1060, 30], [595, 269], [100, 530]] as [number, number][],
    // Card centered on each dot (280px wide, ~120px tall)
    cards: [
      { right: 0, top: 0 } as React.CSSProperties,
      { left: "calc(50% - 140px)", top: "37%" } as React.CSSProperties,
      { left: 0, bottom: 0 } as React.CSSProperties,
    ],
  },
  4: {
    viewBox: "0 0 1200 680",
    height: 680,
    path: "M 1060 30 C 900 150, 300 500, 100 650",
    // t=0:(1060,30) t=1/3:(784,211) t=2/3:(402,449) t=1:(100,650)
    dots: [[1060, 30], [784, 211], [402, 449], [100, 650]] as [number, number][],
    cards: [
      { right: 0, top: 0 } as React.CSSProperties,
      { left: "calc(65% - 140px)", top: "21%" } as React.CSSProperties,
      { left: "calc(33% - 140px)", top: "56%" } as React.CSSProperties,
      { left: 0, bottom: 0 } as React.CSSProperties,
    ],
  },
};

export default function ProcessSection({ eyebrow, heading, steps, bg = "white" }: Props) {
  const pathRef = useRef<SVGPathElement>(null);
  const glowRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const layout = LAYOUTS[steps.length as keyof typeof LAYOUTS] ?? LAYOUTS[4];

  useEffect(() => {
    const path = pathRef.current;
    const glow = glowRef.current;
    const container = containerRef.current;
    if (!path || !glow || !container) return;

    const totalLength = path.getTotalLength();
    [path, glow].forEach((el) => {
      el.style.strokeDasharray = String(totalLength);
      el.style.strokeDashoffset = String(totalLength);
    });

    const update = () => {
      const rect = container.getBoundingClientRect();
      const vh = window.innerHeight;
      // Draw the full line while scrolling ~70% of the viewport height
      const progress = Math.max(0, Math.min(1,
        (vh * 0.85 - rect.top) / (vh * 0.7)
      ));
      const offset = String(totalLength * (1 - progress));
      path.style.strokeDashoffset = offset;
      glow.style.strokeDashoffset = offset;
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <section className="py-32 overflow-hidden" style={{ backgroundColor: bg }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20" data-reveal="up">
          <p
            className="text-sm font-bold uppercase tracking-widest mb-3"
            style={{ color: "var(--blue)" }}
          >
            {eyebrow}
          </p>
          <h2
            className="text-4xl md:text-5xl font-black"
            style={{ color: "var(--gray-900)" }}
          >
            {heading}
          </h2>
        </div>

        {/* Desktop: diagonal layout */}
        <div
          ref={containerRef}
          className="relative hidden md:block"
          style={{ height: layout.height }}
        >
          {/* SVG line — sits behind cards */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox={layout.viewBox}
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            aria-hidden="true"
            style={{ zIndex: 0 }}
          >
            <defs>
              <filter id="line-glow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Ghost track */}
            <path
              d={layout.path}
              stroke="var(--blue-pale)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Animated glow halo */}
            <path
              ref={glowRef}
              d={layout.path}
              stroke="rgba(96,165,250,0.22)"
              strokeWidth="16"
              strokeLinecap="round"
            />
            {/* Animated main line */}
            <path
              ref={pathRef}
              d={layout.path}
              stroke="var(--blue)"
              strokeWidth="2.5"
              strokeLinecap="round"
              filter="url(#line-glow)"
            />
            {/* Dots at each step (visible in gaps between cards) */}
            {layout.dots.map(([cx, cy], i) => (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r="5"
                fill="white"
                stroke="var(--blue)"
                strokeWidth="2"
              />
            ))}
          </svg>

          {/* Step cards — sit above SVG line */}
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="absolute"
              style={{ ...layout.cards[i], width: 280, zIndex: 10 }}
              data-reveal="up"
              data-delay={String(i + 1)}
            >
              <StepCard step={step} />
            </div>
          ))}
        </div>

        {/* Mobile: stacked */}
        <div className="md:hidden flex flex-col gap-8">
          {steps.map((step, i) => (
            <div key={step.num} data-reveal="up" data-delay={String(i + 1)}>
              <StepCard step={step} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ step }: { step: ProcessStep }) {
  return (
    <div
      className="rounded-2xl p-5"
      style={{
        background: "white",
        border: "1.5px solid var(--blue-pale)",
        boxShadow: "0 4px 24px rgba(37,99,235,0.07)",
      }}
    >
      <span
        className="text-xs font-black uppercase tracking-widest block mb-2"
        style={{ color: "var(--blue-light)" }}
      >
        {step.num}
      </span>
      <h3
        className="text-base font-bold mb-1.5"
        style={{ color: "var(--gray-900)" }}
      >
        {step.title}
      </h3>
      <p
        className="text-sm leading-relaxed"
        style={{ color: "var(--gray-500)" }}
      >
        {step.desc}
      </p>
    </div>
  );
}
