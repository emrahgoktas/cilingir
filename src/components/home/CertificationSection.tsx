import { Award } from "lucide-react";

export function CertificationSection() {
  return (
    <section className="overflow-x-hidden border-t border-border bg-white px-4 py-14 md:py-16">
      <div className="mx-auto grid min-w-0 max-w-6xl gap-10 md:grid-cols-2 md:items-center md:gap-12">
        <div className="min-w-0">
          <h2 className="text-2xl font-bold text-primary md:text-3xl">
            Neden Güvenli Çilingir Seçmek Önemli?
          </h2>
          <p className="mt-4 break-words text-sm leading-relaxed text-muted md:text-base">
            Yetkisiz veya kayıt dışı kişilere kapınızı açtırmak, hem mülkiyet
            hem kişisel güvenlik açısından ciddi risk taşır. Kimlik doğrulaması
            yapmayan ekipler, kilit mekanizmasını kalıcı şekilde zedeleyebilir ve
            sonradan izinsiz giriş senaryolarına yol açabilir.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
            Şeffaf fiyat, yazılı süreç ve oda veya meslek örgütüne bağlı işletme
            seçimi, hem hukuki güvence hem de işçilik kalitesi için kritiktir.
            İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmalar, sektör
            standartlarına uyum ve tüketici şikâyet kanalları açısından daha
            denetlenebilir bir çerçeve sunar.
          </p>
          <p className="mt-4 break-words text-sm leading-relaxed text-muted md:text-base">
            Acil bir durumda panikle en yakın numarayı aramak yerine, adresi net
            soran, tahmini süreyi paylaşan ve yerinde kimlik kontrolü yapan
            profesyonel bir çilingir tercih etmek; uzun vadede hem maliyeti hem
            güvenlik açığını kontrol altında tutar.
          </p>
        </div>

        <div className="flex min-w-0 justify-center md:justify-end">
          {/* TODO: Replace with actual certificate image */}
          <div className="flex w-full min-w-0 max-w-sm flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-border bg-surface/50 px-6 py-12 text-center">
            <Award
              className="mx-auto h-16 w-16 text-mid md:h-20 md:w-20"
              aria-hidden
            />
            <p className="mt-4 text-lg font-semibold text-primary">
              Yetki Belgesi
            </p>
            <p className="mt-2 text-sm text-muted">
              Belgemizi görmek için iletişime geçin
            </p>
            <a
              href="tel:+905323039169"
              className="mt-6 inline-flex w-full max-w-xs items-center justify-center rounded-lg bg-accent px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-light"
            >
              Hemen Ara: 0532 303 91 69
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
