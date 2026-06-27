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

            <section id="dubixguard-veri-isleme">
              <h2 className="text-lg font-semibold text-primary">
                Reklam Tıklama Koruması ve Google Ads Veri İşleme
              </h2>
              <p className="mt-3 leading-relaxed md:text-base">
                anahtarcicilingirservisi.com sitesinde geçersiz reklam
                tıklamalarını tespit etmek ve engellemek amacıyla DubixGuard
                hizmeti kullanılmaktadır. Bu kapsamda aşağıdaki veriler
                işlenebilir:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed md:text-base">
                <li>IP adresi ve yaklaşık coğrafi konum</li>
                <li>Tarayıcı türü, cihaz özellikleri ve anonim cihaz parmak izi</li>
                <li>Reklam tıklama parametreleri (gclid, utm_campaign vb.)</li>
                <li>Sayfa etkileşim sinyalleri (tıklama, kaydırma, oturum süresi)</li>
              </ul>
              <p className="mt-3 leading-relaxed md:text-base">
                Açık rızanız ile dolandırıcı cihaz tanımlayıcıları Google Ads
                Customer Match hariç tutma listesine aktarılabilir. Rızanızı site
                üzerindeki onay banner&apos;ından yönetebilir veya istediğiniz
                zaman geri çekebilirsiniz.
              </p>
              <p className="mt-3 leading-relaxed md:text-base">
                Veri işleyici: DubixGuard — detaylar için{" "}
                <a
                  href="https://dubixguard.io/privacy"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="font-medium text-accent underline-offset-2 hover:underline"
                >
                  DubixGuard Gizlilik Politikası
                </a>
                .
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
