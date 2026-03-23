"use client";

import { useEffect } from "react";

const TRANSFORMS: Record<string, string> = {
  left: "translateX(-48px)",
  right: "translateX(48px)",
  scale: "scale(0.92) translateY(20px)",
  up: "translateY(40px)",
};
const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

export default function ScrollReveal() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    const vh = window.innerHeight;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "none";
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    );

    elements.forEach((el) => {
      const type = el.dataset.reveal || "up";
      const delay = el.dataset.delay
        ? `${parseInt(el.dataset.delay) * 0.08}s`
        : "0s";
      el.style.transition = `opacity 0.75s ${EASE} ${delay}, transform 0.75s ${EASE} ${delay}`;

      const rect = el.getBoundingClientRect();
      if (rect.top < vh && rect.bottom > 0) {
        // Already in viewport — show immediately, no animation
        el.style.opacity = "1";
        el.style.transform = "none";
      } else {
        el.style.opacity = "0";
        el.style.transform = TRANSFORMS[type] ?? TRANSFORMS.up;
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
