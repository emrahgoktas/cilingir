import type { Metadata } from "next";
import { CTAButtons } from "@/components/ui/CTAButtons";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { RegionCard } from "@/components/ui/RegionCard";
import { getPriorityRegions, REGIONS } from "@/data/regions";
import { generateBolgelerIndexMetadata } from "@/lib/metadata";

export function generateMetadata(): Metadata {
  return generateBolgelerIndexMetadata();
}

function RegionGrid({ regions }: { regions: ReturnType<typeof getPriorityRegions> }) {
  if (regions.length === 0) {
    return <p className="text-center text-sm text-muted">Bu öncelikte kayıtlı bölge yok.</p>;
  }
  return (
    <ul className="grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {regions.map((region) => (
        <li key={region.slug} className="min-w-0">
          <RegionCard region={region} />
        </li>
      ))}
    </ul>
  );
}

export default function BolgelerIndexPage() {
  const p1 = getPriorityRegions(1);
  const p2 = getPriorityRegions(2);
  const p3 = getPriorityRegions(3);
  const totalDisplayed = p1.length + p2.length + p3.length;

  return (
    <main className="pb-28">
      <div className="mx-auto max-w-6xl px-4 pt-4 pb-2 md:pt-6">
        <BreadcrumbNav
          items={[
            { name: "Ana Sayfa", href: "/" },
            { name: "Bölgeler", href: "/bolgeler" },
          ]}
        />
      </div>

      <section className="border-b border-border bg-gradient-to-b from-surface to-white px-4 pb-10 pt-4 md:pb-12 md:pt-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-3xl font-bold text-primary md:text-4xl">
            İstanbul Hizmet Bölgelerimiz
          </h1>
          <p className="mt-4 text-base text-muted md:text-lg">
            30+ ilçede 7/24 acil çilingir hizmeti. Bulunduğunuz bölgede 15
            dakikada kapınızda.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-white px-4 py-10 md:py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-xl font-bold text-primary md:text-2xl">
            Öncelikli Hizmet Bölgeleri
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-muted md:text-base">
            Yüksek talep gören bölgelerde hızlı ekip yönlendirmesi.
          </p>
          <div className="mt-8">
            <RegionGrid regions={p1} />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface/40 px-4 py-10 md:py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-xl font-bold text-primary md:text-2xl">
            Genişletilmiş Hizmet Ağı
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-muted md:text-base">
            Ek kapsama alanlarında aynı servis standardı.
          </p>
          <div className="mt-8">
            <RegionGrid regions={p2} />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white px-4 py-10 md:py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-xl font-bold text-primary md:text-2xl">
            Tüm İstanbul Avrupa Yakası
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-muted md:text-base">
            Liste kapsamındaki tüm semt ve mahalle sayfaları.
          </p>
          <div className="mt-8">
            <RegionGrid regions={p3} />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-primary px-4 py-14 text-white md:py-16">
        <div className="mx-auto flex max-w-lg flex-col items-center text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            Bölgenizi Görmüyor musunuz?
          </h2>
          <p className="mt-3 text-sm text-white/85 md:text-base">
            Tüm İstanbul genelinde hizmet veriyoruz. Hemen arayın, bölgenize en
            yakın ekibimizi yönlendirelim.
          </p>
          <div className="mt-8 w-full max-w-sm [&_a]:shadow-md">
            <CTAButtons layout="vertical" context="home" size="lg" />
          </div>
        </div>
      </section>

      {/* Gizli özet: SEO / QA — kartlarda gösterilen toplam bölge */}
      <p className="sr-only">
        Toplam {totalDisplayed} bölge kartı listeleniyor; veri kümesi{" "}
        {REGIONS.length} bölge içerir.
      </p>
    </main>
  );
}
