import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Building2,
  Car,
  Clock,
  DoorOpen,
  Lock,
  PhoneCall,
  ShieldCheck,
  Vault,
  type LucideIcon,
} from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { CTAButtons } from "@/components/ui/CTAButtons";
import { FAQAccordionDynamic } from "@/components/ui/FAQAccordionDynamic";
import { TrustBadges } from "@/components/ui/TrustBadges";
import {
  getComboBySlugs,
  getComboFaqs,
  getRelatedCombos,
  REGION_SERVICE_COMBOS,
} from "@/data/region-service-combos";
import { getRegionBySlug } from "@/data/regions";
import { getServiceBySlug } from "@/data/services";
import { generateRegionServiceComboMetadata } from "@/lib/metadata";
import { buildFAQSchema, buildServiceSchema } from "@/lib/schema";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  DoorOpen,
  Lock,
  ShieldCheck,
  Car,
  Vault,
  Building2,
  PhoneCall,
};

type PageProps = {
  params: { regionSlug: string; serviceSlug: string };
};

export function generateStaticParams(): {
  regionSlug: string;
  serviceSlug: string;
}[] {
  return REGION_SERVICE_COMBOS.map((c) => ({
    regionSlug: c.regionSlug,
    serviceSlug: c.serviceSlug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const combo = getComboBySlugs(params.regionSlug, params.serviceSlug);
  if (!combo) {
    return { title: "Sayfa bulunamadı" };
  }
  return generateRegionServiceComboMetadata(combo);
}

function serviceBreadcrumbLabel(serviceSlug: string): string {
  const s = getServiceBySlug(serviceSlug);
  if (!s) return serviceSlug;
  return s.name.split("—")[0]?.trim() ?? s.name;
}

export default function RegionServiceComboPage({ params }: PageProps) {
  const combo = getComboBySlugs(params.regionSlug, params.serviceSlug);
  const region = getRegionBySlug(params.regionSlug);
  const service = getServiceBySlug(params.serviceSlug);

  if (!combo || !region || !service) {
    notFound();
  }

  const faqs = getComboFaqs(combo, region, service);
  const related = getRelatedCombos(combo.regionSlug, combo.serviceSlug, 3);
  const Icon = SERVICE_ICONS[service.icon] ?? DoorOpen;

  return (
    <main className="pb-28">
      <JsonLd schema={buildServiceSchema(service, region)} />
      <JsonLd schema={buildFAQSchema(faqs)} />

      <div className="mx-auto max-w-6xl px-4 pt-3 pb-2 md:pt-4">
        <BreadcrumbNav
          items={[
            { name: "Ana Sayfa", href: "/" },
            { name: "Bölgeler", href: "/bolgeler" },
            { name: region.district, href: `/bolgeler/${region.slug}` },
            {
              name: serviceBreadcrumbLabel(service.slug),
              href: `/bolgeler/${region.slug}/${service.slug}`,
            },
          ]}
        />
      </div>

      <section className="border-b border-border bg-gradient-to-b from-surface to-white px-4 pb-8 pt-2 md:pb-10 md:pt-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-surface text-mid">
            <Icon className="h-6 w-6" aria-hidden />
          </div>
          <h1 className="text-balance text-2xl font-bold leading-tight text-primary md:text-4xl">
            {combo.h1}
          </h1>
          <p className="mx-auto mt-3 inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-sm font-medium text-primary shadow-sm">
            <Clock className="h-4 w-4 shrink-0 text-mid" aria-hidden />
            Ortalama {region.responseTime} içinde yönlendirme
          </p>
          <div className="mx-auto mt-6 w-full max-w-sm">
            <CTAButtons layout="vertical" context="home" size="lg" />
          </div>
          <div className="mx-auto mt-6 max-w-4xl md:mt-8">
            <TrustBadges />
          </div>
        </div>
      </section>

      <section className="border-b border-border px-4 py-10 md:py-12">
        <div className="mx-auto max-w-3xl">
          <p className="text-base leading-relaxed text-primary md:text-lg">
            {combo.intro}
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-surface/40 px-4 py-10 md:py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-xl font-bold text-primary md:text-2xl">
            Bölge özeti
          </h2>
          <p className="mt-4 text-center text-sm text-muted md:text-base">
            <strong className="text-primary">{region.district}</strong> için tipik
            varış bandı:{" "}
            <span className="font-semibold text-mid">{region.responseTime}</span>.
            Site güvenliği veya otopark kodu gerekiyorsa çağrıda paylaşmanız süreci
            hızlandırır.
          </p>
        </div>
      </section>

      <section className="border-b border-border px-4 py-10 md:py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-xl font-bold text-primary md:text-2xl">
            Hizmet süreci
          </h2>
          <ol className="mt-8 space-y-6">
            {service.process.map((step) => (
              <li
                key={step.step}
                className="flex gap-4 rounded-lg border border-border bg-white p-4 shadow-sm"
              >
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white"
                  aria-hidden
                >
                  {step.step}
                </span>
                <div>
                  <h3 className="font-semibold text-primary">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted md:text-base">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-border px-4 py-10 md:py-14">
        <div className="mx-auto max-w-3xl">
          <FAQAccordionDynamic faqs={faqs} title="Sık Sorulan Sorular" />
        </div>
      </section>

      {related.length > 0 ? (
        <section className="border-b border-border bg-surface/40 px-4 py-10 md:py-14">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-xl font-bold text-primary md:text-2xl">
              Bu bölgede diğer hizmetlerimiz
            </h2>
            <ul className="mt-6 flex flex-col gap-3">
              {related.map((c) => {
                const svc = getServiceBySlug(c.serviceSlug);
                if (!svc) return null;
                const label =
                  svc.name.split("—")[0]?.trim() ?? svc.name;
                return (
                  <li key={`${c.regionSlug}-${c.serviceSlug}`}>
                    <Link
                      href={`/bolgeler/${c.regionSlug}/${c.serviceSlug}`}
                      className="flex items-center justify-between rounded-lg border border-border bg-white px-4 py-3 text-sm font-semibold text-mid shadow-sm transition-colors hover:border-mid hover:text-primary md:text-base"
                    >
                      <span>
                        {region.district} — {label}
                      </span>
                      <span aria-hidden className="text-mid">
                        →
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="bg-primary px-4 py-10 text-white md:py-12">
        <div className="mx-auto flex max-w-lg flex-col items-center">
          <h2 className="text-center text-xl font-bold md:text-2xl">
            Hemen destek alın
          </h2>
          <p className="mt-2 text-center text-sm text-white/90">
            {region.district} bölgesi için 7/24 hat — şeffaf fiyat, garantili işçilik.
          </p>
          <div className="mt-8 w-full max-w-sm [&_a]:shadow-md">
            <CTAButtons layout="vertical" context="home" size="lg" />
          </div>
        </div>
      </section>
    </main>
  );
}
