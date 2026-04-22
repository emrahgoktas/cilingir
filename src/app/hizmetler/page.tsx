import type { Metadata } from "next";
import { CTAButtons } from "@/components/ui/CTAButtons";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SERVICES } from "@/data/services";
import { generateHizmetlerIndexMetadata } from "@/lib/metadata";

export function generateMetadata(): Metadata {
  return generateHizmetlerIndexMetadata();
}

export default function HizmetlerIndexPage() {
  return (
    <main className="pb-28">
      <div className="mx-auto max-w-6xl px-4 pt-4 pb-2 md:pt-6">
        <BreadcrumbNav
          items={[
            { name: "Ana Sayfa", href: "/" },
            { name: "Hizmetler", href: "/hizmetler" },
          ]}
        />
      </div>

      <section className="border-b border-border bg-gradient-to-b from-surface to-white px-4 pb-10 pt-4 md:pb-12 md:pt-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-3xl font-bold text-primary md:text-4xl">
            Çilingir Hizmetlerimiz
          </h1>
          <p className="mt-4 text-base text-muted md:text-lg">
            Kapı açmadan yüksek güvenlik kilitlerine, oto ve kasa servisinden 7/24
            acil hatta kadar İstanbul Avrupa yakasında profesyonel destek.
          </p>
          <div className="mx-auto mt-8 w-full max-w-sm [&_a]:shadow-md">
            <CTAButtons layout="vertical" context="home" size="lg" />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white px-4 py-10 md:py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-xl font-bold text-primary md:text-2xl">
            Tüm hizmetler
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-muted md:text-base">
            Her karttan detay sayfasına geçebilir, süreç adımlarını ve sık sorulan
            soruları inceleyebilirsiniz.
          </p>
          <ul className="mt-8 grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {SERVICES.map((service) => (
              <li key={service.slug} className="min-w-0">
                <ServiceCard service={service} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border bg-primary px-4 py-14 text-white md:py-16">
        <div className="mx-auto flex max-w-lg flex-col items-center text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            Hangi hizmete ihtiyacınız var?
          </h2>
          <p className="mt-3 text-sm text-white/85 md:text-base">
            Telefonda kısa bilgi verin; adresinize en yakın ekibi yönlendirelim.
          </p>
          <div className="mt-8 w-full max-w-sm [&_a]:shadow-md">
            <CTAButtons layout="vertical" context="home" size="lg" />
          </div>
        </div>
      </section>
    </main>
  );
}
