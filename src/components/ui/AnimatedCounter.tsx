"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

type AnimatedCounterProps = {
  value: string;
  className?: string;
};

/** Parses values like "3,000+", "$17.9k", "240+" for count-up animation. */
function parseValue(value: string) {
  const match = value.trim().match(/^(\$?)([\d,]+(?:\.\d+)?)(k?)(\+?)$/);
  if (!match) return null;
  const [, prefix, digits, kilo, plus] = match;
  const target = Number(digits.replace(/,/g, ""));
  if (!Number.isFinite(target)) return null;
  const decimals = digits.includes(".") ? digits.split(".")[1].length : 0;
  return { prefix, target, decimals, suffix: `${kilo}${plus}` };
}

export function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(value);
  const parsed = useMemo(() => parseValue(value), [value]);

  useEffect(() => {
    if (!inView || !parsed || reduceMotion) return;

    const { prefix, target, decimals, suffix } = parsed;
    const controls = animate(0, target, {
      duration: 1.7,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (current) => {
        const formatted = current.toLocaleString("en-US", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        });
        setDisplay(`${prefix}${formatted}${suffix}`);
      },
    });

    return () => controls.stop();
  }, [inView, parsed, reduceMotion]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
