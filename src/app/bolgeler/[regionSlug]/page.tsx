import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock } from "lucide-react";
import { RegionPageViewTracker } from "@/components/region/RegionPageViewTracker";
import { JsonLd } from "@/components/seo/JsonLd";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { CTAButtons } from "@/components/ui/CTAButtons";
import { FAQAccordionDynamic } from "@/components/ui/FAQAccordionDynamic";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { getRegionBySlug, REGIONS } from "@/data/regions";
import { SERVICES } from "@/data/services";
import { generateRegionMetadata } from "@/lib/metadata";
import { buildRegionServicesGraphSchema } from "@/lib/schema";

type PageProps = {
  params: { regionSlug: string };
};

export function generateStaticParams(): { regionSlug: string }[] {
  return REGIONS.map((region) => ({ regionSlug: region.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const region = getRegionBySlug(params.regionSlug);
  if (!region) {
    return { title: "Bölge bulunamadı" };
  }
  return generateRegionMetadata(region);
}

export default function RegionPage({ params }: PageProps) {
  const region = getRegionBySlug(params.regionSlug);
  if (!region) {
    notFound();
  }

  const serviceSchema = buildRegionServicesGraphSchema(SERVICES, region);
  const regionNameForCta = region.name;

  return (
    <main className="pb-28">
      <RegionPageViewTracker region={region} />
      <JsonLd schema={serviceSchema} />

      <div className="mx-auto max-w-6xl px-4 pt-3 pb-2 md:pt-4">
        <BreadcrumbNav
          items={[
            { name: "Ana Sayfa", href: "/" },
            { name: "Bölgeler", href: "/bolgeler" },
            { name: region.district, href: `/bolgeler/${region.slug}` },
          ]}
        />
      </div>

      {/* Hero: telefon CTA mümkün olduğunca üstte (mobil üst katman) */}
      <section className="border-b border-border bg-gradient-to-b from-surface to-white px-4 pb-8 pt-2 md:pb-10 md:pt-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-2xl font-bold leading-tight text-primary md:text-4xl">
            {region.h1}
          </h1>
          <p className="mx-auto mt-3 inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-sm font-medium text-primary shadow-sm">
            <Clock className="h-4 w-4 shrink-0 text-mid" aria-hidden />
            Ortalama {region.responseTime} içinde kapınızda
          </p>
          <div className="mx-auto mt-5 w-full max-w-sm md:mt-6">
            <CTAButtons
              layout="vertical"
              context="region"
              regionName={regionNameForCta}
              size="lg"
            />
          </div>
          <div className="mx-auto mt-6 max-w-4xl md:mt-8">
            <TrustBadges />
          </div>
        </div>
      </section>

      <section className="border-b border-border px-4 py-10 md:py-12">
        <div className="mx-auto max-w-3xl">
          <p className="text-base leading-relaxed text-primary md:text-lg">
            {region.intro}
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-surface/40 px-4 py-10 md:py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-xl font-bold text-primary md:text-2xl">
            Bu Bölgede Verdiğimiz Hizmetler
          </h2>
          <ul className="mt-8 grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <ServiceCard service={service} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border px-4 py-10 md:py-14">
        <div className="mx-auto max-w-3xl">
          <FAQAccordionDynamic faqs={region.faqs} title="Sık Sorulan Sorular" />
        </div>
      </section>

      <section className="bg-primary px-4 py-10 text-white md:py-12">
        <div className="mx-auto flex max-w-lg flex-col items-center">
          <div className="w-full max-w-sm [&_a]:shadow-md">
            <CTAButtons
              layout="vertical"
              context="region"
              regionName={regionNameForCta}
              size="lg"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
