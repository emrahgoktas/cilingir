import Image from "next/image";
import type { CSSProperties } from "react";
import { CTAButtons } from "@/components/ui/CTAButtons";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { HERO_BG_BLUR_DATA_URL } from "@/lib/image-blur";

const GRID_PATTERN_STYLE: CSSProperties = {
  backgroundImage: `
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 35px,
      rgba(255, 255, 255, 0.04) 35px,
      rgba(255, 255, 255, 0.04) 36px
    ),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 35px,
      rgba(255, 255, 255, 0.04) 35px,
      rgba(255, 255, 255, 0.04) 36px
    )
  `,
};

/**
 * Sunucu bileşeni — LCP görseli + H1 ilk HTML’de; istemci hidrasyonu LCP’yi bekletmez.
 */
export function HeroStatic() {
  return (
    <>
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.webp"
          alt=""
          width={1920}
          height={1080}
          fill
          priority
          fetchPriority="high"
          quality={85}
          placeholder="blur"
          blurDataURL={HERO_BG_BLUR_DATA_URL}
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/80 to-dark/90"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
          style={GRID_PATTERN_STYLE}
          aria-hidden
        />
      </div>
      <div className="relative z-10 mx-auto flex w-full min-w-0 max-w-3xl flex-col items-center px-4 py-16 text-center text-white md:py-20">
        <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
          İstanbul Çilingir — 7/24 Kapınızda
        </h1>
        <p className="mt-4 text-lg text-white/90 md:text-xl">
          Hasarsız, Garantili, 15 Dakikada
        </p>
        <div className="mt-8 w-full max-w-sm">
          <CTAButtons layout="vertical" context="home" size="lg" />
        </div>
        <div className="mt-8 w-full max-w-4xl [&_li]:border-white/20 [&_span]:text-primary [&_svg]:text-mid">
          <TrustBadges />
        </div>
      </div>
    </>
  );
}
