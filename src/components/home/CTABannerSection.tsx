import { CTAButtons } from "@/components/ui/CTAButtons";

export function CTABannerSection() {
  return (
    <section className="overflow-x-hidden border-t border-border bg-primary px-4 py-14 text-white md:py-16">
      <div className="mx-auto flex min-w-0 w-full max-w-lg flex-col items-center text-center">
        <h2 className="text-2xl font-bold md:text-3xl">
          Hala Kapıda mı Kaldınız?
        </h2>
        <p className="mt-3 text-sm text-white/85 md:text-base">
          Hemen arayın veya WhatsApp’tan konum paylaşın — ekip yönlendirelim.
        </p>
        <div className="mt-8 w-full max-w-sm [&_a]:shadow-md">
          <CTAButtons layout="vertical" context="home" size="lg" />
        </div>
      </div>
    </section>
  );
}
