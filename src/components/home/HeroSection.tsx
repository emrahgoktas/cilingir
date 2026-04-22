import dynamic from "next/dynamic";
import Image from "next/image";
import type { CSSProperties } from "react";
import { HeroStatic } from "@/components/home/HeroStatic";
import { HERO_BG_BLUR_DATA_URL } from "@/lib/image-blur";
import type { UtmCampaign } from "@/lib/utm";

const HeroDynamic = dynamic(
  () => import("./HeroDynamic").then((m) => m.HeroDynamic),
  { ssr: false, loading: () => null }
);

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

type HeroSectionProps = {
  utmCampaign?: UtmCampaign;
};

export function HeroSection({ utmCampaign }: HeroSectionProps) {
  return (
    <section className="relative flex min-h-[min(100vh,640px)] items-center justify-center overflow-hidden md:min-h-[85vh]">
      <Image
        src="/images/hero-bg.webp"
        alt=""
        fill
        priority
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
      <div className="relative z-10 mx-auto flex w-full min-w-0 max-w-3xl flex-col items-center px-4 py-16 text-center text-white md:py-20">
        <HeroDynamic utmCampaign={utmCampaign} />
        <HeroStatic />
      </div>
    </section>
  );
}
