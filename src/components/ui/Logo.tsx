"use client";

import { useId } from "react";

type LogoProps = {
  variant?: "full" | "white" | "icon";
  className?: string;
};

const ORANGE = "#F97316";

/** Kalkan + anahtar (tam SVG ile aynı geometri) */
function ShieldWithKey({
  shieldFill,
  keyholeFill,
}: {
  shieldFill: string;
  keyholeFill: string;
}) {
  return (
    <g transform="translate(28, 14)">
      <path
        d="M72 0 L144 22 L144 100 Q144 148 72 170 Q0 148 0 100 L0 22 Z"
        fill={shieldFill}
      />
      <path
        d="M72 9 L135 28 L135 100 Q135 143 72 162 Q9 143 9 100 L9 28 Z"
        fill="none"
        stroke={ORANGE}
        strokeWidth="2"
        opacity="0.35"
      />
      <circle
        cx="72"
        cy="74"
        r="28"
        fill="none"
        stroke={ORANGE}
        strokeWidth="6"
      />
      <circle cx="72" cy="74" r="13" fill={ORANGE} opacity="0.12" />
      <circle cx="72" cy="74" r="8" fill={keyholeFill} />
      <rect x="68" y="102" width="8" height="42" rx="4" fill={ORANGE} />
      <rect x="76" y="110" width="13" height="6" rx="3" fill={ORANGE} />
      <rect x="76" y="123" width="9" height="6" rx="3" fill={ORANGE} />
      <rect x="76" y="136" width="13" height="6" rx="3" fill={ORANGE} />
      <circle cx="72" cy="7" r="5" fill={ORANGE} />
    </g>
  );
}

function LogoIcon({
  className,
  shieldFill,
  keyholeFill,
}: {
  className?: string;
  shieldFill: string;
  keyholeFill: string;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`block max-w-full ${className ?? ""}`}
      role="img"
      aria-label="Çilingir Servisi"
      preserveAspectRatio="xMidYMid meet"
    >
      <title>Çilingir Servisi</title>
      <g transform="translate(14 13) scale(0.92)">
        <ShieldWithKey shieldFill={shieldFill} keyholeFill={keyholeFill} />
      </g>
    </svg>
  );
}

function LogoFullOrWhite({
  variant,
  className,
}: {
  variant: "full" | "white";
  className?: string;
}) {
  const uid = useId().replace(/:/g, "");
  const isWhite = variant === "white";
  const shieldFill = isWhite ? "#F8F9FA" : "#1A1A2E";
  const keyholeFill = isWhite ? "#F8F9FA" : "#1A1A2E";
  const ltFill = isWhite ? "#F8F9FA" : `#1A1A2E`;
  const lgFill = isWhite ? "#9CA3AF" : `#6B7280`;

  return (
    <svg
      viewBox="0 0 680 210"
      className={`block max-w-full ${className ?? ""}`}
      role="img"
      aria-label="Çilingir Servisi İstanbul"
    >
      <title>Çilingir Servisi Logo</title>
      <desc>Kalkan ve anahtar ikonu ile kurumsal çilingir servisi logosu</desc>

      <defs>
        <style>{`
          .logo-lt-${uid} {
            font-family: Arial, sans-serif;
            font-weight: 700;
            font-size: 64px;
            letter-spacing: -1px;
            fill: ${ltFill};
          }
          .logo-ls-${uid} {
            font-family: Arial, sans-serif;
            font-weight: 400;
            font-size: 16px;
            fill: ${ORANGE};
            letter-spacing: 4px;
          }
          .logo-lg-${uid} {
            font-family: Arial, sans-serif;
            font-weight: 400;
            font-size: 12px;
            letter-spacing: 1.5px;
            fill: ${lgFill};
          }
          ${
            !isWhite
              ? `@media (prefers-color-scheme: dark) {
            .logo-lt-${uid} { fill: #F8F9FA; }
            .logo-lg-${uid} { fill: #9CA3AF; }
          }`
              : ""
          }
        `}</style>
      </defs>

      <ShieldWithKey shieldFill={shieldFill} keyholeFill={keyholeFill} />

      <line
        x1="188"
        y1="18"
        x2="188"
        y2="192"
        stroke={ORANGE}
        strokeWidth="2"
        opacity="0.5"
      />

      <g transform="translate(206, 0)">
        <text x="0" y="96" className={`logo-lt-${uid}`}>
          ÇİLİNGİR
        </text>
        <text x="0" y="164" className={`logo-lt-${uid}`}>
          SERVİSİ
        </text>
        <rect x="3" y="173" width="268" height="4" rx="2" fill={ORANGE} />
        <text x="4" y="192" className={`logo-ls-${uid}`}>
          İSTANBUL
        </text>
        <text x="4" y="206" className={`logo-lg-${uid}`}>
          7/24 · HASARSIZ · GARANTİLİ
        </text>
      </g>

      <rect
        x="634"
        y="18"
        width="3"
        height="48"
        rx="1.5"
        fill={ORANGE}
        opacity="0.4"
      />
      <rect
        x="610"
        y="18"
        width="26"
        height="3"
        rx="1.5"
        fill={ORANGE}
        opacity="0.4"
      />
    </svg>
  );
}

/**
 * SVG tabanlı logo. `variant="icon"` favicon / küçük kullanım için (yalnız kalkan + anahtar).
 * `className` ile boyut: örn. `h-10 w-auto`.
 */
export function Logo({ variant = "full", className }: LogoProps) {
  if (variant === "icon") {
    return (
      <LogoIcon
        className={className}
        shieldFill="#1A1A2E"
        keyholeFill="#1A1A2E"
      />
    );
  }
  if (variant === "white") {
    return <LogoFullOrWhite variant="white" className={className} />;
  }
  return <LogoFullOrWhite variant="full" className={className} />;
}
