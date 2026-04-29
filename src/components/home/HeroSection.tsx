import dynamic from "next/dynamic";
import { HeroStatic } from "@/components/home/HeroStatic";
import type { UtmCampaign } from "@/lib/utm";

const HeroDynamic = dynamic(
  () => import("./HeroDynamic").then((m) => m.HeroDynamic),
  { ssr: false, loading: () => null }
);

type HeroSectionProps = {
  utmCampaign?: UtmCampaign;
};

/** Sunucu bileşeni — arka plan görseli HeroStatic içinde (LCP); istemci sadece HeroDynamic. */
export function HeroSection({ utmCampaign }: HeroSectionProps) {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden md:min-h-[85vh]">
      <HeroDynamic utmCampaign={utmCampaign} />
      <HeroStatic />
    </section>
  );
}
