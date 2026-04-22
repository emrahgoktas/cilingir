import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { getPriorityRegions } from "@/data/regions";
import { PRIORITY_1_REGION_SLUGS, SERVICES } from "@/data/services";
import { FooterContactLinks } from "./FooterContactLinks";

const ADDRESS_LINE = "Ahi Evren Cad. No:120";

function topPriorityOneRegions(limit = 10) {
  const p1 = getPriorityRegions(1);
  const order = new Map(
    PRIORITY_1_REGION_SLUGS.map((slug, index) => [slug, index])
  );
  return [...p1]
    .sort(
      (a, b) =>
        (order.get(a.slug) ?? 999) - (order.get(b.slug) ?? 999)
    )
    .slice(0, limit);
}

export function Footer() {
  const year = new Date().getFullYear();
  const featuredRegions = topPriorityOneRegions(10);

  return (
    <footer className="overflow-x-hidden bg-primary text-white">
      <div className="mx-auto min-w-0 max-w-7xl px-4 py-12 lg:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Col 1 — Firma */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block min-w-0 max-w-full transition-opacity hover:opacity-90"
            >
              <Logo variant="white" className="h-9 w-auto" />
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-white/75">
              İstanbul genelinde 7/24 acil çilingir, hasarsız kapı açılışı ve
              profesyonel kilit çözümleri. Hızlı ekip, şeffaf fiyat.
            </p>
            <FooterContactLinks />
            <address className="not-italic text-sm text-white/70">
              {ADDRESS_LINE}
              <br />
              İstanbul
            </address>
          </div>

          {/* Col 2 — Hizmetler */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Hizmetler
            </h2>
            <ul className="space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/hizmetler/${service.slug}`}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Bölgeler */}
          <div className="flex flex-col">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Hizmet Bölgeleri
            </h2>
            <ul className="space-y-2.5">
              {featuredRegions.map((region) => (
                <li key={region.slug}>
                  <Link
                    href={`/bolgeler/${region.slug}`}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {region.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/bolgeler"
              className="mt-6 inline-flex text-sm font-medium text-white transition-colors hover:text-white/90"
            >
              Tüm Bölgeler →
            </Link>
          </div>

          {/* Col 4 — Kurumsal */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Kurumsal
            </h2>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/hakkimizda"
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/iletisim"
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  İletişim
                </Link>
              </li>
              <li>
                <Link
                  href="/yetki-belgeleri"
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  Yetki Belgelerimiz
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto min-w-0 max-w-7xl px-4 py-6 text-center">
          <p className="text-xs text-muted sm:text-sm">
            © 2017–{year} Çilingir Servisi. Tüm hakları saklıdır.
          </p>
          <p className="mt-2 text-xs text-muted sm:text-sm">
            İstanbul Anahtarcılar ve Çilingirciler Odası Üyesi
          </p>
          <div className="mt-8 flex justify-center border-t border-white/10 pt-8">
            <a
              href="https://emrahgoktas.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block max-w-full rounded-lg bg-black/30 p-3 opacity-90 ring-1 ring-white/10 transition-opacity hover:opacity-100 hover:ring-white/20 focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <Image
                src="/images/logo-2.png"
                alt="Emrah Göktaş — Web Yazılım ve Dijital Pazarlama"
                width={160}
                height={60}
                className="h-auto max-h-10 w-auto max-w-[min(100%,140px)] object-contain"
                unoptimized
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
