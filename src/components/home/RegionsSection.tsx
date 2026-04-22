import Link from "next/link";
import { RegionCard } from "@/components/ui/RegionCard";
import { getTopRegionsForHome } from "@/data/regions";

export function RegionsSection() {
  const regions = getTopRegionsForHome(12);

  return (
    <section className="overflow-x-hidden border-t border-border bg-surface px-4 py-14 md:py-16">
      <div className="mx-auto min-w-0 max-w-6xl w-full">
        <h2 className="text-center text-2xl font-bold text-primary md:text-3xl">
          Hizmet Bölgelerimiz
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted md:text-base">
          Öncelikli Avrupa yakası bölgelerinde hızlı varış süreleri.
        </p>
        <ul className="mt-10 grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {regions.map((region) => (
            <li key={region.slug} className="min-w-0">
              <RegionCard region={region} />
            </li>
          ))}
        </ul>
        <div className="mt-10 flex justify-center">
          <Link
            href="/bolgeler"
            className="inline-flex min-h-11 items-center justify-center rounded-lg border-2 border-mid bg-white px-6 text-sm font-semibold text-mid transition-colors hover:bg-mid hover:text-white"
          >
            Tüm Bölgeleri Gör →
          </Link>
        </div>
      </div>
    </section>
  );
}
