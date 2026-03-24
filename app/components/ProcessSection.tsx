"use client";
import { useEffect, useRef } from "react";

const PATH_D = "M 1080 40 C 900 170, 320 400, 100 580";

// Midpoint of bezier at t=0.5:
// P0=(1080,40) P1=(900,170) P2=(320,400) P3=(100,580)
// x = 0.125*1080 + 0.375*900 + 0.375*320 + 0.125*100 = 605
// y = 0.125*40  + 0.375*170 + 0.375*400 + 0.125*580 = 291

const STEPS = [
  {
    num: "01",
    title: "Aanvraag & gesprek",
    desc: "Stuur ons een bericht. We bespreken jouw wensen, stijl en doelen — snel en persoonlijk.",
  },
  {
    num: "02",
    title: "Ontwerp & productie",
    desc: "Wij gaan aan de slag. Je ontvangt ontwerpen ter goedkeuring voordat er iets geproduceerd wordt.",
  },
  {
    num: "03",
    title: "Levering & live!",
    desc: "Jouw kleding of website wordt afgeleverd — op tijd, precies zoals afgesproken.",
  },
];

export default function ProcessSection() {
  const pathRef = useRef<SVGPathElement>(null);
  const glowRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
      // Start drawing when section top is 80% into viewport, finish when fully scrolled
      const progress = Math.max(0, Math.min(1, (vh * 0.8 - rect.top) / rect.height));
      const offset = String(totalLength * (1 - progress));
      path.style.strokeDashoffset = offset;
      glow.style.strokeDashoffset = offset;
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24" data-reveal="up">
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

        {/* Desktop: diagonal layout with animated path */}
        <div
          ref={containerRef}
          className="relative hidden md:block"
          style={{ height: 620 }}
        >
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1200 620"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            aria-hidden="true"
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

            {/* Ghost track – always visible */}
            <path
              d={PATH_D}
              stroke="var(--blue-pale)"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Animated glow halo */}
            <path
              ref={glowRef}
              d={PATH_D}
              stroke="rgba(96,165,250,0.28)"
              strokeWidth="14"
              strokeLinecap="round"
            />

            {/* Animated main line */}
            <path
              ref={pathRef}
              d={PATH_D}
              stroke="var(--blue)"
              strokeWidth="2.5"
              strokeLinecap="round"
              filter="url(#line-glow)"
            />

            {/* Dots at each step */}
            <circle cx="1080" cy="40"  r="5.5" fill="white" stroke="var(--blue)" strokeWidth="2" />
            <circle cx="605"  cy="291" r="5.5" fill="white" stroke="var(--blue)" strokeWidth="2" />
            <circle cx="100"  cy="580" r="5.5" fill="white" stroke="var(--blue)" strokeWidth="2" />
          </svg>

          {/* Step 1 – top right (dot at ~90%, 6%) */}
          <div
            className="absolute"
            style={{ right: 0, top: 0, width: 300 }}
            data-reveal="up"
            data-delay="1"
          >
            <StepCard {...STEPS[0]} align="right" />
          </div>

          {/* Step 2 – center, placed above the midpoint dot (~50%, 47%) */}
          <div
            className="absolute"
            style={{ left: "calc(50% - 140px)", top: "26%", width: 280 }}
            data-reveal="up"
            data-delay="2"
          >
            <StepCard {...STEPS[1]} />
          </div>

          {/* Step 3 – bottom left (dot at ~8%, 94%) */}
          <div
            className="absolute"
            style={{ left: 0, bottom: 0, width: 280 }}
            data-reveal="up"
            data-delay="3"
          >
            <StepCard {...STEPS[2]} />
          </div>
        </div>

        {/* Mobile: stacked vertical */}
        <div className="md:hidden flex flex-col gap-10">
          {STEPS.map((step, i) => (
            <div key={step.num} data-reveal="up" data-delay={String(i + 1)}>
              <StepCard {...step} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type StepCardProps = {
  num: string;
  title: string;
  desc: string;
  align?: "left" | "right";
};

function StepCard({ num, title, desc, align = "left" }: StepCardProps) {
  return (
    <div
      className="flex flex-col gap-2"
      style={{ alignItems: align === "right" ? "flex-end" : "flex-start" }}
    >
      <span
        className="text-xs font-black uppercase tracking-widest"
        style={{ color: "var(--blue-light)" }}
      >
        {num}
      </span>
      <h3
        className="text-lg font-bold leading-snug"
        style={{
          color: "var(--gray-900)",
          textAlign: align === "right" ? "right" : "left",
        }}
      >
        {title}
      </h3>
      <p
        className="text-sm leading-relaxed"
        style={{
          color: "var(--gray-500)",
          textAlign: align === "right" ? "right" : "left",
        }}
      >
        {desc}
      </p>
    </div>
  );
}
