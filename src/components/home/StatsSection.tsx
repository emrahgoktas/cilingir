"use client";

import { useCallback, useEffect, useRef, useState } from "react";

function easeOutCubic(t: number): number {
  return 1 - (1 - t) ** 3;
}

type StatItem =
  | {
      kind: "count";
      target: number;
      suffix: string;
      label: string;
    }
  | {
      kind: "static";
      value: string;
      label: string;
    };

const STATS: StatItem[] = [
  { kind: "count", target: 847, suffix: "+", label: "Mutlu Müşteri" },
  { kind: "count", target: 14, suffix: "", label: "Yıllık Deneyim" },
  { kind: "count", target: 30, suffix: "+", label: "Hizmet Bölgesi" },
  { kind: "static", value: "7/24", label: "Kesintisiz Hizmet" },
];

const DURATION_MS = 2000;

function AnimatedValue({
  target,
  suffix,
  started,
}: {
  target: number;
  suffix: string;
  started: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!started) return;

    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / DURATION_MS);
      if (t >= 1) {
        setDisplay(target);
        return;
      }
      const eased = easeOutCubic(t);
      setDisplay(Math.round(target * eased));
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target]);

  return (
    <span className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const rootRef = useRef<HTMLElement | null>(null);
  const [started, setStarted] = useState(false);

  const onIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
    const e = entries[0];
    if (e?.isIntersecting) {
      setStarted(true);
    }
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(onIntersect, {
      root: null,
      rootMargin: "0px",
      threshold: 0.25,
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [onIntersect]);

  return (
    <section
      ref={rootRef}
      className="overflow-x-hidden border-t border-white/10 bg-mid px-4 py-14 text-white md:py-20"
      aria-labelledby="stats-heading"
    >
      <div className="mx-auto min-w-0 max-w-6xl w-full">
        <h2
          id="stats-heading"
          className="sr-only"
        >
          Rakamlarla güven
        </h2>
        <ul className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 md:gap-6">
          {STATS.map((stat) => (
            <li key={stat.label} className="min-w-0 text-center">
              <p className="text-3xl font-bold tracking-tight text-accent sm:text-4xl lg:text-5xl">
                {stat.kind === "count" ? (
                  <AnimatedValue
                    target={stat.target}
                    suffix={stat.suffix}
                    started={started}
                  />
                ) : (
                  <span className="tabular-nums">{stat.value}</span>
                )}
              </p>
              <p className="mt-2 text-sm font-medium text-white/75 md:text-base">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
