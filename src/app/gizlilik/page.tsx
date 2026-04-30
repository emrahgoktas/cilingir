import type { Metadata } from "next";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { SITE_CONFIG, generateGizlilikMetadata } from "@/lib/metadata";

export function generateMetadata(): Metadata {
  return generateGizlilikMetadata();
}

export default function GizlilikPage() {
  return (
    <main className="pb-28">
      <div className="mx-auto max-w-3xl px-4 pt-6 pb-4">
        <BreadcrumbNav
          items={[
            { name: "Ana Sayfa", href: "/" },
            { name: "Gizlilik Politikası", href: "/gizlilik" },
          ]}
        />
      </div>

      <article className="border-b border-border bg-white px-4 py-10 md:py-14">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-primary md:text-4xl">
            Gizlilik Politikası
          </h1>
          <p className="mt-2 text-sm text-muted">Son güncelleme: Nisan 2026</p>

          <div className="mt-10 space-y-10 text-muted">
            <section>
              <h2 className="text-lg font-semibold text-primary">
                1. Toplanan Bilgiler
              </h2>
              <p className="mt-3 leading-relaxed md:text-base">
                Telefon araması ve WhatsApp üzerinden iletişim sırasında ad,
                telefon numarası ve adres bilgisi toplanabilir.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-primary">
                2. Bilgilerin Kullanımı
              </h2>
              <p className="mt-3 leading-relaxed md:text-base">
                Toplanan bilgiler yalnızca hizmet sunumu amacıyla kullanılır.
                Üçüncü taraflarla paylaşılmaz.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-primary">3. Çerezler</h2>
              <p className="mt-3 leading-relaxed md:text-base">
                Sitemiz Google Analytics ve Google Ads performans takibi
                amacıyla çerez kullanmaktadır.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-primary">
                4. Veri Güvenliği
              </h2>
              <p className="mt-3 leading-relaxed md:text-base">
                Müşteri bilgileri güvenli sistemlerde saklanır ve yetkisiz
                erişime karşı korunur.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-primary">5. İletişim</h2>
              <p className="mt-3 leading-relaxed md:text-base">
                Gizlilik politikamızla ilgili sorularınız için:
              </p>
              <ul className="mt-4 list-none space-y-2 text-primary">
                <li>
                  <a
                    href="mailto:bilgi@anahtarcicilingirservisi.com"
                    className="font-medium text-accent underline-offset-2 hover:underline"
                  >
                    bilgi@anahtarcicilingirservisi.com
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="font-medium text-accent underline-offset-2 hover:underline"
                  >
                    0536 940 56 56
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
