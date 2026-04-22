import type { Metadata } from "next";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { GoogleReviewCta } from "@/components/ui/GoogleReviewCta";
import { SITE_CONFIG, generateHakkimizdaMetadata } from "@/lib/metadata";

export function generateMetadata(): Metadata {
  return generateHakkimizdaMetadata();
}

export default function HakkimizdaPage() {
  return (
    <main className="pb-28">
      <div className="mx-auto max-w-3xl px-4 pt-6 pb-4">
        <BreadcrumbNav
          items={[
            { name: "Ana Sayfa", href: "/" },
            { name: "Hakkımızda", href: "/hakkimizda" },
          ]}
        />
      </div>

      <section className="border-b border-border bg-white px-4 py-10 md:py-14">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-primary md:text-4xl">
            Hakkımızda
          </h1>
          <p className="mt-4 text-muted md:text-lg">
            {SITE_CONFIG.name} olarak İstanbul genelinde 7/24 acil çilingir,
            hasarsız kapı açılışı ve kilit güvenliği hizmeti sunuyoruz. Hızlı
            ekip yönlendirmesi, şeffaf fiyat ve oda standartlarına uygun iş
            pratiği önceliğimizdir.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
            Müşterilerimize güvenli müdahale, net iletişim ve yerinde çözüm
            sunmak için çalışıyoruz. Deneyiminizi Google üzerinden
            paylaşmanız, bölgedeki diğer kullanıcılara da yardımcı olur.
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-surface/40 px-4 py-10 md:py-12">
        <GoogleReviewCta />
      </section>
    </main>
  );
}
