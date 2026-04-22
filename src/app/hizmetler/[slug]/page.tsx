import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Building2,
  Car,
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
import { RegionCard } from "@/components/ui/RegionCard";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { getRegionBySlug } from "@/data/regions";
import { getServiceBySlug, SERVICES } from "@/data/services";
import { generateServiceMetadata } from "@/lib/metadata";
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
  params: { slug: string };
};

export function generateStaticParams(): { slug: string }[] {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) {
    return { title: "Hizmet bulunamadı" };
  }
  return generateServiceMetadata(service);
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = getServiceBySlug(params.slug);
  if (!service) {
    notFound();
  }

  const Icon = SERVICE_ICONS[service.icon] ?? DoorOpen;
  const relatedRegions = service.relatedRegions
    .map((slug) => getRegionBySlug(slug))
    .filter((r): r is NonNullable<typeof r> => r != null);

  const breadcrumbLabel = service.name.split("—")[0]?.trim() ?? service.name;

  return (
    <main className="pb-28">
      <JsonLd schema={buildServiceSchema(service)} />
      <JsonLd schema={buildFAQSchema(service.faqs)} />

      <div className="mx-auto max-w-6xl px-4 pt-3 pb-2 md:pt-4">
        <BreadcrumbNav
          items={[
            { name: "Ana Sayfa", href: "/" },
            { name: "Hizmetler", href: "/hizmetler" },
            {
              name: breadcrumbLabel,
              href: `/hizmetler/${service.slug}`,
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
            {service.h1}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted md:text-lg">
            {service.description}
          </p>
          <div className="mx-auto mt-6 w-full max-w-sm">
            <CTAButtons
              layout="vertical"
              context="service"
              serviceName={service.name}
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
            {service.intro}
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-surface/40 px-4 py-10 md:py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-xl font-bold text-primary md:text-2xl">
            Nasıl çalışıyoruz?
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

      {relatedRegions.length > 0 ? (
        <section className="border-b border-border px-4 py-10 md:py-14">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-xl font-bold text-primary md:text-2xl">
              Öne çıkan hizmet bölgeleri
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-muted md:text-base">
              Bu hizmet için yoğun talep gören semt sayfalarımızdan birini
              seçebilirsiniz.
            </p>
            <ul className="mt-8 grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedRegions.map((region) => (
                <li key={region.slug}>
                  <RegionCard region={region} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="border-b border-border px-4 py-10 md:py-14">
        <div className="mx-auto max-w-3xl">
          <FAQAccordionDynamic faqs={service.faqs} title="Sık Sorulan Sorular" />
        </div>
      </section>

      <section className="bg-primary px-4 py-10 text-white md:py-12">
        <div className="mx-auto flex max-w-lg flex-col items-center">
          <p className="mb-6 text-center text-sm text-white/90 md:text-base">
            <Link href="/hizmetler" className="font-semibold underline-offset-2 hover:underline">
              Tüm hizmetlere dön
            </Link>
          </p>
          <div className="w-full max-w-sm [&_a]:shadow-md">
            <CTAButtons
              layout="vertical"
              context="service"
              serviceName={service.name}
              size="lg"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
