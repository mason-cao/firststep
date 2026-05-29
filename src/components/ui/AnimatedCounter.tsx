"use client";

import { useEffect, useMemo, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

type AnimatedCounterProps = {
  value: string;
  className?: string;
};

export function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(value);

  const parsed = useMemo(() => {
    const numeric = Number(value.replace(/[$,+]/g, ""));
    return Number.isFinite(numeric)
      ? {
          numeric,
          prefix: value.trim().startsWith("$") ? "$" : "",
          suffix: value.includes("+") ? "+" : "",
          isMoney: value.trim().startsWith("$"),
        }
      : null;
  }, [value]);

  useEffect(() => {
    if (!inView || !parsed || reduceMotion) return;

    let frame = 0;
    const total = 150;
    const tick = () => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / total, 3);
      const current = Math.round(parsed.numeric * progress);
      const formatted = parsed.isMoney
        ? current >= 1000
          ? `${parsed.prefix}${(current / 1000).toFixed(1)}k`
          : `${parsed.prefix}${current}`
        : `${current.toLocaleString()}${parsed.suffix}`;
      setDisplay(formatted);
      if (frame < total) window.setTimeout(() => requestAnimationFrame(tick), 12);
    };

    requestAnimationFrame(tick);
  }, [inView, parsed, reduceMotion, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
