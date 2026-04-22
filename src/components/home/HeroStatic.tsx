import { CTAButtons } from "@/components/ui/CTAButtons";
import { TrustBadges } from "@/components/ui/TrustBadges";

/**
 * Server Component — H1 ve ana içerik ilk HTML’de; LCP için istemci hidrasyonu beklenmez.
 */
export function HeroStatic() {
  return (
    <>
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
    </>
  );
}
