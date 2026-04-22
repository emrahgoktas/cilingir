# Deployment checklist — Vercel

□ Vercel hesabı oluştur (vercel.com)

□ GitHub repo oluştur ve kodu push et

□ Vercel'de "Import Project" ile GitHub repo'yu bağla

□ Environment variables ekle:

- `NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX`
- `NEXT_PUBLIC_SITE_URL=https://anahtarcicilingirservisi.com`

□ Vercel'de custom domain ekle: anahtarcicilingirservisi.com

□ Natro DNS panelinde nameserver'ları Vercel'e yönlendir:

- `ns1.vercel-dns.com`
- `ns2.vercel-dns.com`

□ SSL otomatik aktif olur (Let's Encrypt)

□ Deploy tamamlandıktan sonra sitemap kontrol:

- https://anahtarcicilingirservisi.com/sitemap.xml

□ Google Search Console'a site ekle

□ Sitemap'i Search Console'a gönder

---

**Not:** Canonical URL ve şema için kodda `src/lib/metadata.ts` içindeki `SITE_CONFIG.url` kullanılıyor. Üretim domain'i değiştirdiğinizde bu değeri veya `NEXT_PUBLIC_SITE_URL` ile hizalamayı güncelleyin.

**Not (Vercel + Next.js):** Standart App Router projelerinde Vercel genelde `vercel.json` içinde `outputDirectory` belirtmeden otomatik derler. Deploy hata verirse `vercel.json` içindeki `outputDirectory` satırını kaldırmayı veya Vercel dokümantasyonundaki Next.js önerisini izlemeyi deneyin.
