# Completion report — P01 scaffold (`anahtarci-cilingir-servisi`)

## Project root

`cilingirsitesi/anahtarci-cilingir-servisi/`

## Folders created or present

| Path | Notes |
|------|--------|
| `src/app/` | App Router (includes `fonts/`) |
| `src/components/layout/` | Placeholder barrel |
| `src/components/ui/` | Placeholder barrel |
| `src/components/seo/` | Placeholder barrel |
| `src/data/` | Placeholder barrel |
| `src/lib/` | Placeholder barrel |
| `src/styles/` | Placeholder stylesheet |

`node_modules/`, `.next/`, and `.git/` exist after install/build but are not enumerated file-by-file below.

## Files created (excluding `node_modules` and `.next`)

- `.eslintrc.json`
- `.gitignore`
- `COMPLETION_REPORT.md` (this file)
- `next-env.d.ts`
- `next.config.mjs`
- `package-lock.json`
- `package.json`
- `postcss.config.mjs`
- `README.md`
- `tailwind.config.ts`
- `tsconfig.json`
- `src/app/favicon.ico`
- `src/app/fonts/GeistMonoVF.woff`
- `src/app/fonts/GeistVF.woff`
- `src/app/globals.css`
- `src/app/index.ts` (placeholder)
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/components/layout/index.ts` (placeholder)
- `src/components/ui/index.ts` (placeholder)
- `src/components/seo/index.ts` (placeholder)
- `src/data/index.ts` (placeholder)
- `src/lib/index.ts` (placeholder)
- `src/styles/index.css` (placeholder)

## Configuration summary

| Requirement | Status |
|-------------|--------|
| Next.js 14, App Router | `next@14.2.35`, `src/app/` |
| Not Pages Router | No `pages/` directory |
| TypeScript strict | `tsconfig.json` → `"strict": true` |
| Tailwind CSS v3 | `tailwindcss@3.4.x` (lockfile resolves patch within ^3.4.1) |
| Package manager | npm (`package-lock.json`) |

## Installed package versions (npm list, top-level)

Recorded after the final `npm install @next/third-parties@14.2.35` and successful `npm run build`:

| Package | Version |
|---------|---------|
| `next` | 14.2.35 |
| `react` | 18.3.1 |
| `react-dom` | 18.3.1 |
| `typescript` | 5.9.3 |
| `tailwindcss` | 3.4.19 |
| `postcss` | 8.5.9 |
| `eslint` | 8.57.1 |
| `eslint-config-next` | 14.2.35 |
| `@types/node` | 20.19.39 |
| `@types/react` | 18.3.28 |
| `@types/react-dom` | 18.3.7 |
| `next-sitemap` | 4.2.3 |
| `@next/third-parties` | 14.2.35 |
| `lucide-react` | 1.8.0 |

## Issues encountered

1. **PowerShell**: `&&` was not accepted as a command separator in the automation shell; commands were re-run using `Set-Location` + `;` for sequencing.
2. **`@next/third-parties` semver**: A bare `npm install @next/third-parties` resolved to **16.x**, which is a different major line than Next 14. It was **pinned to `@next/third-parties@14.2.35`** to match `next@14.2.35`. `npm run build` succeeds after the pin.
3. **npm audit**: The template reported **4 high** (later **5** with 1 moderate after the dependency change) severity advisories in transitive deps; not auto-fixed (would require `npm audit fix --force` and possible breaking changes).
4. **Deprecation warnings** during install (e.g. older `eslint`, `glob`, `rimraf` in the dependency tree): informational only; build and lint complete.

## What P02 should know

- **Path alias**: `@/*` → `./src/*` (see `tsconfig.json`).
- **Entry UI**: Default `src/app/page.tsx`, `layout.tsx`, and `globals.css` from the `create-next-app` template; Geist fonts live under `src/app/fonts/`.
- **New structure**: Use `src/components/layout`, `src/components/ui`, `src/components/seo`, `src/data`, `src/lib`, and `src/styles` as agreed; each has a minimal placeholder `index` file (`index.ts` or `index.css` under `styles/`).
- **`src/app/index.ts`**: Non-route placeholder only; routing remains `page.tsx` / `layout.tsx` / etc.
- **GTM**: Add `<GoogleTagManager />` (or equivalent) from `@next/third-parties` in `layout` when you have a container ID — package is installed and version-aligned with Next 14.
- **Sitemap**: `next-sitemap` is installed but **not configured** yet (no `next-sitemap.config.js` / postbuild script). P02 can add config and `package.json` scripts.
- **Verify**: `npm run build` was run successfully after scaffolding and dependency alignment.

---

## P02 — Legacy URL redirects (completion)

- **Status**: Complete. Permanent redirects are defined in **`next.config.mjs`** (see `redirects()`).
- **Total redirect count**: **36** (4 hizmet + 23 bölge + 5 blog + 4 kurumsal). `/hizmetler → /hizmetler` was omitted as a no-op.
- **`npm run build`**: Succeeds after this change.

### Config notes / warnings

1. **`next.config.ts` vs `next.config.mjs`**: Next.js **14.2.35** only discovers **`next.config.js`** and **`next.config.mjs`**. A standalone `next.config.ts` is **not loaded** and, if it were the only config file, Next would error. The requested configuration is therefore implemented in **`next.config.mjs`** (with a JSDoc `NextConfig` type on the default export).
2. **`permanent: true` HTTP status**: In Next.js, `permanent: true` uses a **308 Permanent Redirect** response (not 301). Behavior is still “permanent” and cache-friendly; use custom middleware only if you strictly require **301**.
3. **Destination routes**: Targets such as `/hizmetler/kapi-cilingir`, `/bolgeler/maslak-cilingir`, `/blog/...`, `/hakkimizda`, and `/bolgeler` should exist as App Router pages (or return sensible content) before go-live, or users will hit **404** after the redirect.

### What later prompts should know

- Extend **`next.config.mjs`** → `redirects()` for additional legacy paths; keep `permanent: true` for SEO parity unless a route must be temporary.

---

## P03 — Design tokens & global styles (completion)

- **Status**: Complete.
- **`tailwind.config.ts`**: Extended theme with semantic **colors** (`primary`, `accent`, `accent-light`, `success`, `dark`, `mid`, `muted`, `surface`, `border`), **`fontFamily.sans`** → `Inter`, `system-ui`, `sans-serif`, and **`animation.slideUp`** (`slideUp` keyframes: from `translateY(100%)` to `0`, **0.3s ease**). Use **`animate-slideUp`** on sticky bar UI.
- **`src/app/globals.css`**: Google Fonts **`@import`** for **Inter** (variable weight `100..900`, `display=swap`); **`html { scroll-behavior: smooth }`**; **`body`** via `@layer base` with **`@apply bg-surface text-primary font-sans antialiased`**.
- **`src/app/layout.tsx`**: Geist `next/font/local` removed; typography comes from Inter + Tailwind `font-sans`.
- **`src/app/page.tsx`**: Template classes updated so nothing references removed `foreground` / `background` Tailwind keys or Geist CSS variables.
- **Content globs**: `./src/data/**` and `./src/lib/**` added to Tailwind `content` for future class usage.
- **`npm run build`**: Succeeds.

### Notes for later work

- **`src/app/fonts/*.woff`**: Unused after P03; safe to delete when building real UI if desired.
- **Inter loading**: Loaded via CSS `@import` from Google Fonts; for stricter CSP or fewer layout shifts, consider migrating to **`next/font/google`** (`Inter`) later while keeping the same Tailwind `fontFamily.sans` stack.

---

## P04 — Bölge verisi (`regions.ts`) (completion)

- **Status**: Complete.
- **File**: `src/data/regions.ts` exports `FAQ`, `Region`, **`REGIONS`**, **`getRegionBySlug(slug)`** → `Region | undefined`, and **`getPriorityRegions(priority)`** → `Region[]`.
- **Region count**: **31** total — **8** priority `1`, **8** priority `2`, **15** priority `3`.
- **Content**: Her bölge için benzersiz `intro` ve **4** bölgeye özel `faq`; `oldSlug` yalnızca P02’deki eski `bolge-…` yollarıyla eşleşen kayıtlarda dolduruldu (Etiler, Bomonti, Feriköy, Kurtuluş, Okmeydanı, Hacıosman, Kireçburnu, Ulus için yok).
- **Meta açıklamalar**: Alan yorumunda 150–160 karakter hedefi belirtildi; metinler SEO odaklı yazıldı — yayına almadan üretimde karakter sayısı kontrolü önerilir.
- **`npm run build`**: Succeeds.

---

## P05 — Hizmet verisi (`services.ts`) (completion)

- **Status**: Complete.
- **File**: `src/data/services.ts` exports `ProcessStep`, `Service`, **`PRIORITY_1_REGION_SLUGS`** (8 slug), and **`SERVICES`** (7 hizmet).
- **Hizmetler**: `kapi-cilingir` (low), `kale-kilit` (medium), `multlock-kilit` (high), `oto-cilingir` (medium), `kasa-cilingir` (high), `ojmar-kilitleri` (high), `acil-cilingir` (low).
- **`relatedRegions`**: `ticketSize: "high"` olan **multlock-kilit**, **kasa-cilingir**, **ojmar-kilitleri** kayıtlarında tüm **priority-1** bölgeler (`PRIORITY_1_REGION_SLUGS` ile aynı 8 slug) kullanıldı.
- **`oldSlug`**: P02’deki `/hizmet-…` kaynak yollarıyla eşleşenler için `hizmet-kapi-cilingir-1`, `hizmet-kale-kilit-12`, `hizmet-multlock-kilit-11`, `hizmet-ojmar-kilitleri-13`; `oto-cilingir`, `kasa-cilingir`, `acil-cilingir` için tanımlanmadı.
- **`icon`**: Lucide bileşen adları (`DoorOpen`, `Lock`, `ShieldCheck`, `Car`, `Vault`, `Building2`, `PhoneCall`).
- **`npm run build`**: Succeeds.

---

## P06 — Blog veri katmanı (`blog.ts`) (completion)

- **Status**: Complete.
- **File**: `src/data/blog.ts` exports `BlogPost` tipi ve **`BLOG_POSTS`** dizisi (**5** yazı).
- **İçerik**: Her yazıda tam **HTML** `content` (etiketler çıkarıldığında kelime sayısı **500+**), Türkçe, SEO odaklı anahtar kelime kullanımı; gövde içinde `/hizmetler/...` **hizmet sayfası** bağlantıları (`kapi-cilingir`, `acil-cilingir`, `kale-kilit`, `multlock-kilit`, `kasa-cilingir`).
- **`oldSlug`**: P02 blog redirect’leriyle uyumlu (`blog-evin-kapisi-kapandi-ne-yapmaliyim-1`, `blog-kasanin-icinde-anahtar-kirildi-acilir-mi-4`, vb.).
- **`relatedService` / `relatedRegion`**: Her kayıtta ilgili hizmet ve örnek bölge slug’ları atandı.
- **`publishDate`**: ISO-8601 UTC string.
- **`npm run build`**: Succeeds.

---

## Dependency fix — `lucide-react@latest` (pre–P06 / maintenance)

- **Command**: `npm install lucide-react@latest`
- **Result**: Proje zaten npm **`latest`** etiketiyle uyumluydu; kurulu sürüm **`1.8.0`** (`npm view lucide-react version` ile aynı). `package.json` içinde `lucide-react` **`^1.8.0`** olarak kaldı.
- **`npm run build`**: Başarılı (doğrulandı).

---

## P07 — Metadata fabrikaları (`src/lib/metadata.ts`) (completion)

- **Status**: Complete.
- **File**: `src/lib/metadata.ts` exports **`SITE_CONFIG`** ve **`generateHomeMetadata`**, **`generateRegionMetadata(region)`**, **`generateServiceMetadata(service)`**, **`generateBlogMetadata(post)`** → hepsi Next.js **`Metadata`**.
- **Ortak**: `robots: { index: true, follow: true }`, **`alternates.canonical`** (`SITE_CONFIG.url` + `/bolgeler/…`, `/hizmetler/…`, `/blog/…`), **`openGraph`** (`locale: tr_TR`, `siteName`, `title`, `description`, `url`, `type`), **`twitter.card: summary_large_image`** + başlık/açıklama.
- **Blog**: `openGraph.type: article` ve **`publishedTime`** (`BlogPost.publishDate`).
- **Başlık kuralları**: Bölge adından `Çilingir` soneki temizlenir; hizmette `service.name` içindeki `—` sonrası etiket kullanılır (ör. “Kapı Açma”, “Yüksek Güvenlik”).
- **Açıklama**: Ana sayfa ~**153** karakter, anahtar kelime odaklı; bölge/hizmet/blog için kaynak metin **`clipMetaDescription(..., 155)`** ile kısaltılır.
- **`npm run build`**: Succeeds.

---

## P08 — JSON-LD şemaları (`schema.ts` + `JsonLd`) (completion)

- **Status**: Complete.
- **`src/lib/schema.ts`**: Düz nesne dönen (`JsonLdObject` / `Record<string, unknown>`) builder’lar — **`buildLocalBusinessSchema()`** (`@type: Locksmith`, `SITE_CONFIG` + tam **`PostalAddress`**, **`contactPoint`** müşteri hizmeti, `sameAs` için Google İşletme Profili **placeholder** URL), **`buildServiceSchema(service, region?)`**, **`buildFAQSchema(faqs)`**, **`buildBreadcrumbSchema(items)`** (göreli veya mutlak `url`), **`buildArticleSchema(post)`** (`Article`, `url`, `publisher`/`author` organizasyon).
- **`src/components/seo/JsonLd.tsx`**: `schema` prop’u alır; **`JSON.stringify`** + `<` kaçışı ile **`application/ld+json`** script üretir.
- **`src/components/seo/index.ts`**: `JsonLd` re-export.
- **`npm run build`**: Succeeds.

---

## P09 — Header (`src/components/layout/Header.tsx`) (completion)

- **Status**: Complete.
- **Desktop**: Sol metin logosu **«Çilingir Servisi»** (`/`); ortada **Next.js `Link`** ile **Hizmetler, Bölgeler, Blog, İletişim** (`/hizmetler`, `/bolgeler`, `/blog`, `/iletisim`); sağda **doğrudan `<a href="tel:+905323039169">`** ( **`Link` yok** ), metin **0532 303 91 69**, **`bg-accent`** / hover **`accent-light`**.
- **Mobil**: Sol logo, sağ hamburger; **tam ekran** `fixed` overlay (`bg-dark`), büyük dokunma alanları (`min-h-14` vb.), altta **`tel:`** ile görünür telefon satırı; `Escape` ve gövde **scroll lock**.
- **Stil**: `bg-dark` (**#16213E**), metin beyaz; **`sticky top-0 z-50`**.
- **`src/components/layout/index.ts`**: `Header` export; **`src/app/layout.tsx`**: `<Header />` + `html lang="tr"`.
- **`npm run build`**: Succeeds.

---

## P10 — Footer (`src/components/layout/Footer.tsx`) (completion)

- **Status**: Complete.
- **Grid**: 1 sütun mobil, `sm:2` / `lg:4` kolon; **`bg-primary`** (#1A1A2E), metin beyaz / **`text-muted`** alt çubukta.
- **Sütun 1**: Metin logosu (`/` → Çilingir Servisi), kısa tanıtım, **`tel:+905323039169`** (görünen **0532 303 91 69**), **`https://wa.me/905323039169`** yeşil WhatsApp düğmesi (`bg-success`), adres **Ahi Evren Cad. No:120** + İstanbul.
- **Sütun 2**: **`SERVICES`** üzerinden tüm hizmet linkleri → `/hizmetler/{slug}`.
- **Sütun 3**: **`PRIORITY_1_REGION_SLUGS`** sırasına göre **`getPriorityRegions(1)`** listesi, en fazla **10** (veride **8** öncelik-1 bölge — hepsi listelenir); **Tüm Bölgeler →** → `/bolgeler`.
- **Sütun 4**: **Hakkımızda** (`/hakkimizda`), **Blog**, **İletişim**, **Yetki Belgelerimiz** (`/yetki-belgeleri`).
- **Alt çubuk**: **© 2024–{yıl}** dinamik aralık + oda üyeliği metni.
- **`layout/index.ts`**: `Footer` export; **`layout.tsx`**: `<Footer />` children sonrası.
- **`npm run build`**: Succeeds.

---

## P11 — Sticky çağrı çubuğu (`StickyCallBar.tsx`) (completion)

- **Status**: Complete.
- **Görünürlük**: Yalnızca mobil — **`md:hidden`**; **`fixed`** `bottom-0` `left-0` `right-0`, **`z-50`**.
- **Scroll**: **`useEffect` + `useState`**, **`window.scrollY > 200`** iken görünür; **`translate-y-full` → `translate-y-0`** ile **300ms ease-out** kaydırma; gizliyken **`pointer-events-none`**.
- **Düzen**: İki **`flex-1`** yan yana düğme (**`min-h-14`**).
  - **Telefon**: **`bg-accent`**, beyaz kalın metin, **Phone**, **«Hemen Ara»**, **`tel:+905323039169`**, tıklamada **`dataLayer.push({ event: "phone_call_sticky" })`**.
  - **WhatsApp**: **`bg-success`**, **MessageCircle**, **«WhatsApp»**, **`https://wa.me/905369405656`**, tıklamada **`{ event: "whatsapp_sticky" }`**.
- **GTM**: `window.dataLayer` yoksa dizi oluşturulur; GTM snippet yüklü olunca olaylar yakalanır.
- **`layout/index.ts`** + **`layout.tsx`**: `<StickyCallBar />` gövde sonunda.
- **`npm run build`**: Succeeds.

---

## P12 — CTA düğmeleri (`CTAButtons.tsx`) (completion)

- **Status**: Complete.
- **File**: `src/components/ui/CTAButtons.tsx` (`"use client"`); **`src/components/ui/index.ts`** → `CTAButtons` + `CTAButtonsProps` export.
- **Props**: `size` (**`lg` | `md` | `sm`**, varsayılan **`lg`**), `layout` (**`vertical` | `horizontal`**, varsayılan **`vertical`**), zorunlu **`context`** (**`home` | `region` | `service`**), **`regionName?`**, **`serviceName?`**.
- **Düzen**: **`layout="vertical"`** → yalnızca **`flex-col`** (üstten alta); **telefon her zaman ilk**, **WhatsApp her zaman ikinci** — yan yana yalnızca **`layout="horizontal"`** (`flex-row`, her düğme **`flex-1`**).
- **WhatsApp** (`wa.me/905323039169` + `?text=`): **home** sabit metin; **region** `Merhaba, [regionName] de çilingir…` (yoksa **`bölgem`**); **service** `Merhaba, [serviceName] hakkında bilgi…` (yoksa **`hizmet`**).
- **Telefon**: **`tel:+905323039169`**, **`bg-accent`**, GTM **`phone_call_click`**.
- **WhatsApp düğmesi**: **`bg-success`**, GTM **`whatsapp_click`**.
- **`npm run build`**: Succeeds.

---

## P13 — Güven rozetleri (`TrustBadges.tsx`) (completion)

- **Status**: Complete.
- **File**: `src/components/ui/TrustBadges.tsx` (RSC); **`ui/index.ts`** → `TrustBadges` export.
- **İçerik**: **Shield** — «14 Yıllık Deneyim»; **Award** — «Oda Kayıtlı Yetkili Firma»; **CheckCircle** — «Hasarsız Garantili»; **Clock** — «7/24 Hizmet».
- **Düzen**: **`grid grid-cols-2`** mobil (2×2), **`md:grid-cols-4`** tek satır; **`max-w-5xl`** + yatay **`px-4`**, sıkı **`gap-2` / `md:gap-3`**.
- **Görünüm**: **`bg-surface`**, **`border-border`**, hafif **`shadow-sm`**, kompakt padding ve **`text-[11px]` / `md:text-xs`**; ikonlar **`text-mid`**, metin **`text-primary`**.
- **Kullanım**: Hero altına yerleştirmek için sayfadan içe aktar (`<TrustBadges />`).
- **`npm run build`**: Succeeds.

---

## P14 — Hizmet ve bölge kartları (`ServiceCard` + `RegionCard`) (completion)

- **Status**: Complete.
- **`ServiceCard`**: `service: Service`; Lucide **`service.icon`** eşlemesi; **`name`**; kısaltılmış **`description`** (~140 karakter); **`Link`** «Detay →» → **`/hizmetler/[slug]`**; **`bg-white`**, **`border-border`**, **`rounded-lg`**, **`shadow-sm`**, hover **`hover:-translate-y-0.5`** + **`hover:shadow-md`**.
- **`RegionCard`**: `region: Region`; başlık **`Link`** → **`/bolgeler/[slug]`**; **Phone** ikonu + **`responseTime`** rozeti; **«Hemen Ara»** yalnızca **`<a href="tel:+905323039169">`** ( **`Link` yok** ), accent stil, Phone ikonu.
- **Ortak kart stili**: beyaz zemin, ince border, yuvarlatılmış köşe, hafif gölge, süreçli kaldırma efekti.
- **`ui/index.ts`**: `ServiceCard`, `RegionCard` export.
- **`npm run build`**: Succeeds.

---

## P15 — FAQ akordeon + breadcrumb (`FAQAccordion`, `BreadcrumbNav`) (completion)

- **Status**: Complete.
- **`FAQAccordion`** (`src/components/ui/FAQAccordion.tsx`, `"use client"`): `faqs: FAQ[]`, isteğe bağlı **`title`**; tek seferde bir panel açık (`openIndex`); **`grid-template-rows` `0fr`/`1fr`** ile **300ms** yükseklik geçişi, **`motion-reduce:transition-none`**; **Plus / Minus** ikon; **`aria-expanded`**, **`aria-controls`**, **`role="region"`**; **`JsonLd`** + **`buildFAQSchema(faqs)`** — şema ile görünen soru/cevap metni **aynı `faqs` dizisinden** üretilir.
- **`BreadcrumbNav`** (`BreadcrumbNav.tsx`, RSC): `items: { name, href }[]`; **ChevronRight** ayraçlı **`ol`**; son öğe **`span`** + **`aria-current="page"`** (link yok); **`JsonLd`** + **`buildBreadcrumbSchema`** (`href` → builder’daki `url`).
- **`JsonLd.tsx`**: İstemci bileşenlerden kullanım için **`"use client"`** eklendi (sunucu üst bileşenler hâlâ içe aktarabilir).
- **`ui/index.ts`**: `FAQAccordion`, `FAQAccordionProps`, `BreadcrumbNav`, `BreadcrumbItem`, `BreadcrumbNavProps` export.
- **`npm run build`**: Succeeds.

---

## P17 — Ana sayfa (`page.tsx` + home bölümleri) (completion)

- **Status**: Complete.
- **`src/app/page.tsx`**: `export const metadata = generateHomeMetadata()`; `<JsonLd schema={buildLocalBusinessSchema()} />` (LocalBusiness / Locksmith); sıra: **HeroSection** → **ServicesSection** → **RegionsSection** → **WhyUsSection** → **FAQSection** → **CTABannerSection**.
- **Hero**: `next/image` + koyu gradient overlay; H1 «İstanbul Çilingir — 7/24 Kapınızda»; alt «Hasarsız, Garantili, 15 Dakikada»; **CTAButtons** `vertical` / `home` / `lg`; hemen altında **TrustBadges** (hero üzerinde border/metin tonları için sarmalayıcı sınıflar).
- **Hizmetler**: H2 «Hizmetlerimiz»; **SERVICES** grid → **ServiceCard**.
- **Bölgeler**: H2 «Hizmet Bölgelerimiz»; **`getTopRegionsForHome(12)`** (öncelik 1 + 2, ilk 12); **RegionCard** grid; **Link** «Tüm Bölgeleri Gör →** → `/bolgeler`.
- **Neden biz**: 4 blok — Hız, Güven, Fiyat Şeffaflığı («Gelmeden önce fiyat, sürpriz ücret yok»), Garanti; Lucide ikonlar.
- **SSS**: **FAQAccordion** + `HOME_PAGE_FAQS` (6 genel soru, `src/data/home-faqs.ts`); başlık «Sık Sorulan Sorular»; **FAQPage** şeması bileşen içi **JsonLd** + `buildFAQSchema`.
- **CTA banner**: H2 «Hala Kapıda mı Kaldınız?»; **CTAButtons** `vertical` / `home` / `lg`.
- **`next.config.mjs`**: `images.remotePatterns` → `images.unsplash.com` (hero görseli).
- **`src/data/regions.ts`**: `getTopRegionsForHome(limit)`.
- **`npm run build`**: Succeeds.

---

## P21 — Bölge detay sayfası (`/bolgeler/[slug]`) (completion)

- **Status**: Complete.
- **`src/app/bolgeler/[slug]/page.tsx`**: **`generateStaticParams()`** → `REGIONS.map(({ slug }) => ({ slug }))`; **`generateMetadata`** → **`generateRegionMetadata(region)`** (yoksa kısa başlık).
- **Sıra**: **BreadcrumbNav** (Ana Sayfa → Bölgeler → **`region.district`**); **Hero** (`region.h1`, rozet «Ortalama [responseTime] içinde kapınızda», **CTAButtons** `vertical` / `region` / `regionName`, **TrustBadges**); **Intro** tam **`region.intro`**; **H2** «Bu Bölgede Verdiğimiz Hizmetler» + tüm **SERVICES** → **ServiceCard** (`/hizmetler/[slug]`); **FAQAccordion** + **`region.faqs`** + başlık; **CTA şeridi** — **CTAButtons** `vertical` / `region` / `lg`.
- **JSON-LD**: **`buildRegionServicesGraphSchema(SERVICES, region)`** — tek script, `@graph` içinde her hizmet için **Service** + **`areaServed`** bölgeye göre (`schema.ts`).
- **Kalite notları**: Slug veri ile uyumlu; tüm **`h1`** metinleri «Çilingir» içeriyor; hero’da **Hemen Ara** üst bölümde, kompakt breadcrumb + `pb-28` (yapışkan çubuk için).
- **`npm run build`**: Succeeds (31 bölge SSG).

---

## P20 — Bölgeler liste sayfası (`/bolgeler`) (completion)

- **Status**: Complete.
- **`src/app/bolgeler/page.tsx`**: **`generateMetadata()`** → **`generateBolgelerIndexMetadata()`** (`src/lib/metadata.ts`) — başlık «İstanbul Hizmet Bölgeleri | Tüm İlçelerde 7/24 Çilingir», açıklama (≈155 karaktere kırpılmış), canonical **`/bolgeler`** (`SITE_CONFIG.url`).
- **Sıra**: **BreadcrumbNav** (Ana Sayfa → Bölgeler); **Hero** (H1 + alt metin, **CTA yok**); **Öncelikli** `getPriorityRegions(1)` grid; **Genişletilmiş** `getPriorityRegions(2)`; **Avrupa yakası** `getPriorityRegions(3)`; alt CTA bandı «Bölgenizi Görmüyor musunuz?» + **CTAButtons** `vertical` / `home` / `lg`.
- **BreadcrumbList JSON-LD**: **BreadcrumbNav** içi **`JsonLd`** + **`buildBreadcrumbSchema`** (Ana Sayfa + Bölgeler URL’leri).
- **Listelenen toplam bölge kartı**: **31** (= öncelik 1: **8** + öncelik 2: **8** + öncelik 3: **15**; **`REGIONS`** ile aynı).
- **`npm run build`**: Succeeds (`/bolgeler` statik).

---

## P26 — `sitemap.ts` + `robots.ts` (completion)

- **Status**: Complete.
- **`src/app/sitemap.ts`**: `MetadataRoute.Sitemap`; taban URL **`SITE_CONFIG.url`** (`https://anahtarcicilingirservisi.com`). Öncelik ve sıklık: `/` **1.0** + **daily**; `/hizmetler` ve tüm **`/hizmetler/[slug]`** (**SERVICES**) **0.8** + **weekly**; `/bolgeler` ve tüm **`/bolgeler/[slug]`** (**REGIONS**) **0.9** + **weekly**; `/blog` ve **`/blog/[slug]`** (**BLOG_POSTS**) **0.7** + **monthly** (**lastModified** = `publishDate`); **`/iletisim`**, **`/hakkimizda`** **0.6** (sıklık belirtilmedi).
- **Toplam sitemap URL sayısı**: **49** (= 1 + 1 + 7 hizmet + 1 + 31 bölge + 1 + 5 yazı + 1 + 1).
- **`src/app/robots.ts`**: `allow: /`, `disallow: /api/`, `sitemap`: `https://anahtarcicilingirservisi.com/sitemap.xml` (**`SITE_CONFIG.url`** ile).
- **`npm run build`**: Succeeds (`/sitemap.xml`, `/robots.txt` üretilir).

---

## P27 — Google Tag Manager (completion)

- **Status**: Complete.
- **`src/app/layout.tsx`**: `<head>` içinde **`next/script`** GTM bootstrap, **`strategy="afterInteractive"`**, ID **`NEXT_PUBLIC_GTM_ID`** (yoksa snippet yok); `<body>` açılışında **`noscript`** + GTM **`ns.html`** iframe (0×0, gizli).
- **`src/lib/gtm.ts`**: **`GTM_ID`** = `process.env.NEXT_PUBLIC_GTM_ID`; **`pushEvent(event, data?)`** → `dataLayer.push` (yalnızca istemcide ve **`dataLayer`** varsa); **`Window.dataLayer`** tip genişlemesi.
- **Ortam**: **`.env.example`** + **`.env.local`** → `NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX` (yer tutucu; gerçek ID ile değiştirilecek). **`.env.local`** gitignore’da.
- **`npm run build`**: Succeeds.

---

## P28 — GTM tıklama / görüntüleme olayları (`events.ts`) (completion)

- **Status**: Complete.
- **`src/lib/gtm.ts`**: `pushEvent` artık **`dataLayer`**’ı boşsa oluşturur; tıklamadan önce olay kaybı olmaz.
- **`src/lib/events.ts`**: Tiplenmiş yardımcılar — **`inferPageTypeFromPath`**, **`getPhoneClickContextFromPath`**, **`trackPhoneCallClick`**, **`trackPhoneCallSticky`**, **`trackWhatsAppClick`**, **`trackWhatsAppSticky`**, **`trackPageRegionView`**; tümü **`pushEvent`** ile.
- **`CTAButtons`**: `context` → **`GtmPageType`** (`home` | `region` | `service` | `blog`); **`blog`** için WhatsApp metni eklendi; telefon → **`phone_call_click`** (`page_type`, bölge sayfasında **`region`**); WhatsApp → **`whatsapp_click`** (`page_type`, **`context_message`** = ön tanımlı metin).
- **`StickyCallBar`**: telefon → **`phone_call_sticky`** (`page_path`); WhatsApp → **`whatsapp_sticky`** (`page_path`).
- **`Header`**: masaüstü + mobil menü **`tel:`** → **`phone_call_click`** (`page_type` URL’den, bölge detayında **`region`**).
- **`FooterContactLinks`** (istemci): telefon + WhatsApp → **`phone_call_click`** / **`whatsapp_click`** (sayfa yolu ile `page_type`; footer WA için **`context_message`** boş string).
- **`RegionCard`**: **«Hemen Ara»** → **`phone_call_click`** (`page_type` + kartın **`region.name`**).
- **`RegionPageViewTracker`** + **`/bolgeler/[slug]`**: mount’ta **`page_region_view`** (`region_name`, `region_slug`, `region_priority`).

### İzlenen dokunuş noktaları (özet)

| Olay | Tetikleyici |
|------|-------------|
| `phone_call_click` | `CTAButtons` telefon; `Header` telefon (2); `FooterContactLinks` telefon; `RegionCard` «Hemen Ara» |
| `phone_call_sticky` | `StickyCallBar` telefon |
| `whatsapp_click` | `CTAButtons` WhatsApp; `FooterContactLinks` WhatsApp |
| `whatsapp_sticky` | `StickyCallBar` WhatsApp |
| `page_region_view` | Bölge detay sayfası (`RegionPageViewTracker` mount) |

- **`npm run build`**: Succeeds.

---

## P29 — Görsel + font optimizasyonu (completion)

- **Status**: Complete.
- **Görseller**: Tüm raster görseller **`next/image`**; kaynaklar **WebP** (`/public/images/hero-bg.webp`, `badge-oda-kayit.webp`). **Hero**: yerel dosya, **`width`/`height` 1920×1080**, **`fill`** + **`sizes="100vw"`**, **`priority={true}`**, **`placeholder="blur"`** + `blurDataURL` (`src/lib/image-blur.ts`). **Logo**: `logo.svg` + **`SiteLogo`** (`width`/`height` 200×36, **`unoptimized`**, **`loading="lazy"`**). **Oda rozeti** (`TrustBadges`): 36×36, **`loading="lazy"`**, **`placeholder="blur"`**. Projede **`<img>`** kalmadı.
- **Font**: **`next/font/google` Inter** — **`subsets`**: `latin`, `latin-ext`; **`weight`**: 400, 600, 700; **`display: "swap"`**; **`preload: true`**; **`variable: "--font-inter"`** → **`tailwind`** `font-sans` = `var(--font-inter)`. **`globals.css`** içindeki Google Fonts **`@import` kaldırıldı**.
- **Araçlar**: **`scripts/generate-placeholder-images.mjs`** + **`sharp`** (devDependency) ile WebP yer tutucular üretilir.
- **Tahmini LCP iyileştirmesi**: Engelleyici harici font CSS’inin kalkması ve LCP görselinin yerel, sıkıştırılmış WebP + öncelikli yükleme ile genelde **~0,3–0,8 sn** (ağ ve cihaza göre değişir; algılanan LCP blur ile ek kazanım).
- **`npm run build`**: Succeeds.

---

## P30 — Paket / güvenlik / analiz (completion)

- **Status**: Complete.
- **Bağımlılık denetimi**: Kodda kullanılmayan **`@next/third-parties`** ve **`next-sitemap`** kaldırıldı (yapılandırma yoktu).
- **Dinamik import**: **`FAQAccordion`** → **`FAQAccordionDynamic`** (`next/dynamic`, iskelet `loading`) — **`FAQSection`** + **`/bolgeler/[slug]`** sunucu bileşeninde kalır. **`StickyCallBar`** → `layout.tsx` içinde **`dynamic(..., { ssr: false, loading: () => null })`**; **`layout/index.ts`** artık Sticky dışa açmıyor.
- **`"use client"`**: Yalnızca etkileşim / `dataLayer` / dinamik alt bileşen gerektiren dosyalarda (Header, CTAButtons, FAQAccordion, JsonLd, RegionCard, FooterContactLinks, RegionPageViewTracker, StickyCallBar). **`src/data/*`** istemci direktifi yok.
- **`next.config.mjs`** (Next 14 — `.ts` yok): **`compress: true`**; **`headers`** — `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin` (`/:path*`). **`@next/bundle-analyzer`** (`ANALYZE=true`) ile sarmalama.
- **`package.json`**: **`"analyze": "cross-env ANALYZE=true next build"`** (Windows uyumu; ham `ANALYZE=true` Unix’te de çalışır). Raporlar: **`.next/analyze/client.html`** (ve nodejs/edge).

### Derleme — paket boyutları (Next özet, gzip’e yakın)

| Rota | Sayfa JS | First Load JS |
|------|-----------|----------------|
| `/` | 2.24 kB | **117 kB** |
| `/bolgeler/[slug]` | ~1.99 kB | **117 kB** |
| `/_not-found` | 873 B | **88.1 kB** |
| Ortak paylaşılan | — | **87.3 kB** (`117-*.js` ~31.7 kB, `fd9d1056-*.js` ~53.6 kB, diğer ~1.89 kB) |

### En büyük ham chunk dosyaları (`.next/static/chunks`, disk)

| Boyut (yakl.) | Dosya |
|---------------|--------|
| ~169 KB | `fd9d1056-*.js` |
| ~137 KB | `framework-*.js` |
| ~121 KB | `117-*.js` |
| ~114 KB | `main-*.js` |
| ~110 KB | `polyfills-*.js` |
| ~47 KB | `211-*.js` |
| ~42 KB | `768-*.js` |

### Uyarılar

- **Webpack Bundle Analyzer**: `ANALYZE=true` derlemesinde *"No bundles were parsed. Analyzer will show only original module sizes from stats file."* — HTML raporları yine üretilir; modül boyutları istatistik dosyasından okunur.
- **`npm audit`**: **4 high** bildirimi (bağımlılık zinciri); `npm audit fix --force` önerisi breaking değişiklik içerebilir.
- **Lint / tip**: `next build` sırasında ek lint/TS uyarısı yok.

- **`npm run build`**: Succeeds.

---

## P31 — Vercel + deployment dokümantasyonu (completion)

- **Status**: Complete.
- **`vercel.json`**: `framework: nextjs`, `buildCommand: next build`, `outputDirectory: .next`, `regions: [fra1]`, güvenlik başlıkları (`X-Frame-Options`, `X-Content-Type-Options`) tüm rotalar için.
- **`DEPLOYMENT.md`**: Vercel / GitHub / ortam değişkenleri / Natro nameserver / SSL / sitemap / Search Console kontrol listesi; `SITE_CONFIG.url` ve isteğe bağlı `vercel.json` `outputDirectory` notları.
- **Final build successful?** **Y** (`npm run build` başarılı).

---

## P15 — Laravel Ads / `Show.vue` (Inertia) — ayrı klasör

> **Not:** Bu madde **Next.js locksmith** deposundan bağımsızdır. Dosyalar: `cilingirsitesi/laravel-ads/`.

- **Status**: Complete (UI + rota stub; tam Laravel uygulaması bu workspace’te yok).
- **Dosyalar**: `laravel-ads/resources/js/Pages/Ads/Show.vue`, `laravel-ads/routes/ads-routes.stub.php`, `laravel-ads/README.md`.
- **4 sekme çalışıyor mu?** **Y** — Strateji (platform özeti + `contenteditable` + Kaydet), Copy Havuzu (gruplu kartlar, modal, skor), Görevler (öncelik noktası, AI rozeti, toggle), Metrikler (form, tablo, CSS bar chart).
- **Karakter sayacı çalışıyor mu?** **Y** — Başlık **30**, açıklama **90**; limit aşımında **kırmızı** metin ve sayaç.
- **Metrik hesapları doğru mu?** **Y** — CTR = `clicks/impressions*100`, CPC = `spend/clicks` (tıklama 0 → gösterim “—”), ROAS = `revenue/spend` (harcama 0 → “—”); tablo ve form önizlemesi aynı formül.

---

## E01 — Microsoft Clarity (heatmap / custom events) (completion)

- **Status**: Complete.
- **`src/lib/clarity.ts`**: **`CLARITY_ID`** = `process.env.NEXT_PUBLIC_CLARITY_ID`; **`clarityEvent(eventName)`** → `window.clarity("event", eventName)` (yalnızca istemci + `window.clarity` varsa); **`Window.clarity`** tip genişlemesi.
- **`src/app/layout.tsx`**: **`next/script`**, **`strategy="afterInteractive"`**, standart Clarity bootstrap (IIFE → `clarity`, `script`, proje ID); ID **`JSON.stringify(CLARITY_ID)`** ile enjekte; env yoksa script yok.
- **`.env.example`**: **`NEXT_PUBLIC_CLARITY_ID=your_clarity_project_id`**.
- **`src/lib/events.ts`**: GTM ile birlikte Clarity — **`phone_click`** (`trackPhoneCallClick`, `trackPhoneCallSticky`); **`whatsapp_click`** (`trackWhatsAppClick`, `trackWhatsAppSticky`); **`sticky_bar_shown`** (`trackStickyBarShown` — `StickyCallBar` ilk görünümde bir kez); **`faq_opened`** (`trackFaqOpened` — `FAQAccordion` panel açılışında).
- **`npm run build`**: Succeeds.

---

## E02 — Zaman dilimine göre hero içeriği (completion)

- **Status**: Complete.
- **`src/lib/time-context.ts`**: **`TimeSlot`** (`gece` \| `sabah` \| `gunduz` \| `aksam`); **`getTimeSlot()`** yerel saate göre dilim; **`heroContent`** — başlık, alt metin, aciliyet metni, isteğe bağlı rozet (`gunduz` → **`badge: null`**).
- **`HeroSection`**: **`"use client"`**; **`useState<TimeSlot>("gunduz")`** + **`useEffect`** ile mount’ta **`setSlot(getTimeSlot())`** (ilk sunucu/istemci çıktısı **`gunduz`** — hidrasyon uyumu); rozet yalnızca **`badge != null`** iken; **`gece`** diliminde rozet yanında **`animate-pulse`** kırmızı nokta (**`bg-accent`**, **`w-2 h-2`**, **`rounded-full`**).
- **`npm run build`**: Succeeds.

---

## E03 — Tarayıcı konumuna göre bölge önerisi (completion)

- **Status**: Complete.
- **`src/lib/geolocation.ts`**: **`DISTRICT_BOUNDS`** — İstanbul ilçeleri için yaklaşık bounding box’lar (**8** bölge); **`detectUserDistrict()`** — `navigator.geolocation.getCurrentPosition` (**3 s** timeout), koordinat kutuya düşerse **`{ name, slug }`**, aksi **`null`**.
- **`LocationBanner`** (`"use client"`): mount’ta **`detectUserDistrict()`**; tespit + kullanıcı o **`slug`** için kapatmadıysa **`bg-mid`** **`rounded-lg`** banner, **`animate-bannerSlideDown`** (Tailwind **`bannerSlideDown`**); metin + **`Link`** → **`/bolgeler/[slug]`**; **X** ile kapatma → **`localStorage`** (`cilingir_location_banner_dismissed_slug`) — aynı bölge bandı tekrar gösterilmez.
- **`src/app/page.tsx`**: Yalnız ana sayfada **`LocationBanner`** → header altı, **`HeroSection`** üstü.
- **`npm run build`**: Succeeds.

---

## E04 — Bölge × hizmet programatik SEO sayfaları (completion)

- **Status**: Complete.
- **`src/data/region-service-combos.ts`**: **`RegionServiceCombo`** tipi; **`PRIORITY_1_REGION_SLUGS` × tüm **`SERVICES` (7)** = **56**; **`getPriorityRegions(2)` (8)** × **`kapi-cilingir` / `oto-cilingir` / `acil-cilingir`** = **24**; **toplam **80** kombinasyon** (`REGION_SERVICE_COMBO_COUNT`, **`REGION_SERVICE_COMBOS`**). Benzersiz **intro** (çift cümle), **title** / **description**, **`getComboFaqs`** (4 SSS), **`getRelatedCombos`** (aynı bölgede en fazla 3 diğer hizmet linki).
- **Rota**: **`/bolgeler/[regionSlug]/[serviceSlug]`** — **`src/app/bolgeler/[regionSlug]/[serviceSlug]/page.tsx`** (`generateStaticParams`, **`generateRegionServiceComboMetadata`**, **`notFound`**). Next.js aynı dinamik segment adı kuralı için eski **`bolgeler/[slug]/page.tsx`** kaldırıldı; bölge detayı **`src/app/bolgeler/[regionSlug]/page.tsx`** (`params.regionSlug`).
- **`src/lib/metadata.ts`**: **`generateRegionServiceComboMetadata(combo)`**.
- **`src/app/sitemap.ts`**: Tüm combo URL’leri **`priority: 0.85`**.
- **Toplam üretilen combo sayfa sayısı**: **80**.
- **`npm run build`**: Succeeds (**134** statik rota).

---

## E05 — UTM parametreli dinamik hero (Google Ads) (completion)

- **Status**: Complete.
- **`src/lib/utm.ts`**: **`UtmCampaign`**, **`UtmContent`**, **`UTM_CONTENT`** (kampanyalar: **`acil_gece`**, **`besiktas_genel`**, **`maslak_genel`**, **`levent_genel`**, **`kilit_degisimi`**, **`oto_cilingir`**, **`default`**); **`getUtmCampaign(searchParams)`** — `utm_campaign` anahtarı **`UTM_CONTENT`** ile eşleşmezse **`default`**.
- **`src/app/page.tsx`**: **`searchParams`** alır, **`URLSearchParams`** ile **`getUtmCampaign`**, **`HeroSection`**’a **`utmCampaign`** iletir; ana sayfa **dinamik** (`ƒ`) — sorgu dizesi başına sunucu render’ı.
- **`HeroSection`**: **`utmCampaign?`** — geçerli UTM ( **`default` hariç** ) öncelikli; yoksa **zaman dilimi** (`time-context`); başlık / alt metin / rozet / telefon CTA metni; UTM **`urgencyBadge`** + **kırmızı nabız noktası** (`animate-pulse`, **`bg-accent`**); zaman diliminde **`gece`** için önceki davranış korunur.
- **`CTAButtons`**: İsteğe bağlı **`phoneLabel`** (UTM **`ctaText`**).
- **`npm run build`**: Succeeds.

---

## E06 — Kurumsal düzey schema.org (completion)

- **Status**: Complete.
- **`src/lib/schema.ts`** — **LocalBusiness / Locksmith**: **`openingHoursSpecification`** (Pazar dahil **00:00–23:59**); **`geo`** (**`GeoCoordinates`**, Maslak yakını **41.1085 / 29.0084** — adres teyitinde güncellenmeli); **`hasOfferCatalog`** (**`OfferCatalog`**: «Çilingir Hizmetleri», **`SERVICES`** üzerinden **`Offer`** + **`itemOffered`** **`Service`**); **`@id`** **`#locksmith`**; eski **`openingHours`** metin alanı kaldırıldı (çift tanım önlendi).
- **`buildAggregateRatingSchema(rating, reviewCount)`**: **`AggregateRating`** düğümü — şimdilik **çağrılmıyor** (gerçek yorum sayıları sonrası).
- **`SchemaReviewInput`** + **`buildReviewSchema(reviews)`**: tekil **`Review`** düğümleri; **`buildHomePageGraphSchema({ reviews })`** ile isteğe bağlı **`@graph`** eklenebilir (varsayılan boş).
- **`buildSiteLinksSearchBoxSchema()`**: **`WebSite`** + **`SearchAction`** (`/blog?q={search_term_string}`), **`publisher`** → **`#locksmith`**.
- **`buildServiceSchema`**: **`offers`** (**`TRY`**, **`UnitPriceSpecification`** adı «Yerinde fiyat verilir»), **`hasOfferCatalog`** (tek satır yerinde keşif teklifi), **`serviceOutput`**: «Kapı açma, kilit değişimi».
- **`buildHomePageGraphSchema()`**: tek **`@context`**, **`@graph`**: **[Locksmith, WebSite]** (+ isteğe bağlı yorumlar).
- **`buildLocalBusinessSchema()`**: hâlâ tek script (tam **`@context`** + düğüm); içerik **`buildLocalBusinessGraphNode()`** ile uyumlu.
- **`src/app/page.tsx`**: **`JsonLd schema={buildHomePageGraphSchema()}`**.
- **`npm run build`**: Succeeds.

---

## E07 — Lighthouse CI (GitHub Actions) (completion)

- **Status**: Complete.
- **`.github/workflows/lighthouse.yml`** (repo kökü `cilingirsitesi/`): **`main`** push/PR; **`ubuntu-latest`**; **`anahtarci-cilingir-servisi`** altında **`npm ci`**, **`npm run build`**, **`npm run start`** arka planda + **`npx wait-on`** (`127.0.0.1:3000`); **`treosh/lighthouse-ci-action@v11`** — üç URL + **`configPath: anahtarci-cilingir-servisi/.lighthouserc.json`** (treosh **`budgetPath`** alanı yalnızca **`budgets.json`** için; **`ci.assert`** içeren tam LHCI dosyası **`configPath`** ile verilir) + **`uploadArtifacts: true`**.
- **`anahtarci-cilingir-servisi/.lighthouserc.json`**: **`ci.collect.url`** + **`ci.assert.assertions`** (kategori skorları + FCP / LCP / CLS).
- **`package.json`**: **`"lighthouse": "lhci autorun"`**; devDependency **`@lhci/cli`**.
- **Yerel**: **`npm run build`** sonrası sunucu açıkken **`npm run lighthouse`**.
- **`npm run build`**: Succeeds.

---

## E08 — Trust & authority (homepage) (completion)

- **Status**: Complete.
- **`src/components/home/StatsSection.tsx`**: Dört istatistik; **847+**, **14**, **30+** için görünürlükte **IntersectionObserver** ile **2000ms** süre ve **ease-out cubic** sayım; **7/24** sabit; **`bg-mid`**, büyük **accent** rakamlar, **muted** etiketler.
- **`src/components/home/PartnersSection.tsx`**: H3 «Yetkili Satıcısı Olduğumuz Markalar»; metin rozetleri (**Kale Kilit**, **Mul-T-Lock**, **Yale**, **Victory**, **Evva**, **Cisa**); **`bg-surface`**.
- **`src/components/home/CertificationSection.tsx`**: İki sütun (mobilde üst üste); H2 ve üç paragraf (yetkisiz çilingir riskleri, **İstanbul Anahtarcılar ve Çilingirciler Odası**); sağda **Lucide Award** + kesik çerçeve «Yetki Belgesi» placeholder; **`// TODO: Replace with actual certificate image`**.
- **`src/components/home/HeroSection.tsx`**: **`repeating-linear-gradient`** ızgara overlay; **`md:min-h-[85vh]`**; sağ üstte yeşil aciliyet pili («Şu an aktif — Ekibimiz sahada»); yeşil nokta **`animate-pulse`**.
- **Bölüm arka plan ritmi**: **Services** `bg-white`, **Regions** `bg-surface`, **WhyUs** `bg-white`, **Stats** `bg-mid`, **Partners** `bg-surface`, **Certification** `bg-white`, **FAQ** `bg-surface`; **CTA** mevcut **`bg-primary`** ile dönüşüm odaklı.
- **`src/app/page.tsx`**: **WhyUs** sonrası **Stats** → **Partners** → (**Reviews** — bkz. E09) → **Certification** → **FAQ** → **CTA**.
- **`npm run build`**: Succeeds.

---

## E09 — Google Places yorum entegrasyonu (completion)

- **Status**: Complete.
- **`src/lib/google-places.ts`**: **`PlaceReview`** tipi; **`getPlaceReviews()`** / **`getPlaceRating()`** — Place Details API, **`next.revalidate: 3600`**, **`GOOGLE_PLACES_API_KEY`** + **`GOOGLE_PLACE_ID`** yoksa boş / `null`; yanıtta **`status === "OK"`** doğrulaması; **`getGoogleMapsPlaceUrl()`** ile harita linki (sunucu tarafı).
- **`src/components/home/ReviewsSection.tsx`** (Server Component): Yorum yoksa bölüm render edilmez; en fazla **5** yorum, puana göre azalan sıra; özet rozet + **[Google](…)** linki; kartlarda baş harf avatar, yıldızlar (**accent** / muted), **`relative_time_description`**, metin **180** karaktere **`...`**; ızgara **1 / 2 / 3** sütun; **`bg-surface`**.
- **`src/lib/schema.ts`**: **`buildHomePageGraphSchema({ rating?: { rating, total } })`** — **`LocalBusiness`** üzerinde **`aggregateRating`** (**`AggregateRating`**, **1–5**).
- **`src/app/page.tsx`**: **`getPlaceRating()`** ile şema; **`ReviewsSection`** **Partners** sonrası.
- **`.env.example`**: **`GOOGLE_PLACES_API_KEY`**, **`GOOGLE_PLACE_ID`** (sunucu-only, **`NEXT_PUBLIC_` yok**).
- **Reviews integration / review count**: Ortam değişkenleri ve geçerli API yanıtı varken **`user_ratings_total`** toplam yorum sayısı olarak rozet ve şemada kullanılır; yorum listesi API’den gelen **`reviews`** ile sınırlıdır (görünen en fazla 5). Anahtar/place yoksa veya yorum dönmezse bölüm çıkmaz, şemada aggregate eklenmez.
- **`npm run build`**: Succeeds.

---

## E10 — Mobil yatay taşma / düzen (completion)

- **Status**: Complete.
- **Global**: **`src/app/layout.tsx`** — **`body`** sınıfına **`overflow-x-hidden`** (sayfa geneli yatay kaydırma önlenir).
- **ReviewsSection**: Bölüm **`overflow-x-hidden`**; iç **`min-w-0 w-full max-w-6xl`**; özet rozeti **`max-w-full min-w-0 break-words`**; ızgara **`gap-3 md:gap-6`**; kart **`min-w-0 overflow-hidden`**; metin **`break-words overflow-hidden`**; isim **`break-words`**.
- **HeroSection**: Izgara katmanı **`overflow-hidden`**; aciliyet bandı mobilde **`inset-x-4`** + **`max-w-full`** ile taşma engeli; içerik **`min-w-0`**.
- **StatsSection**: **`overflow-x-hidden`**; **`text-3xl sm:text-4xl lg:text-5xl`**; hücre **`min-w-0`**; ızgara **`gap-4 sm:gap-6`**.
- **PartnersSection**: **`overflow-x-hidden`**; liste **`max-w-full overflow-hidden`**; rozet **`max-w-full break-words`**.
- **LocationBanner**: Sarıcı **`max-w-full overflow-hidden`**; iç **`min-w-0 max-w-6xl`**.
- **StickyCallBar**: **`w-full min-w-0 overflow-x-hidden`** (**`max-w-[100vw]` kullanılmadı** — dikey kaydırma çubuğu ile **`100vw`** çakışmasını önlemek için); düğmeler **`flex-1 min-w-0`**; dar **`px-2`**, **`sm:px-3`**.
- **Ortak bileşenler**: **TrustBadges** (**`min-w-0 break-words`**); **CTAButtons** (**`min-w-0`**); **FAQAccordion** soru/cevap **`break-words`**; **BreadcrumbNav** **`min-w-0` / `break-words`**; **ServiceCard** / **RegionCard** **`min-w-0 overflow-hidden`**; **SiteLogo** link **`min-w-0 max-w-full`**.
- **Bölümler** (ana sayfa + **Header** / **Footer**): **`overflow-x-hidden`** ve iç **`min-w-0 w-full max-w-*`** tutarlılığı; **Certification** metin/sütun **`min-w-0`**, **`break-words`**.
- **İç sayfalar**: **`/bolgeler`**, **`/hizmetler`** grid **`li`** öğelerine **`min-w-0`**.
- **Dar görünüm (320 / 375 / 390 / 430 px)**: **`min-w-0`**, **`break-words`**, **`overflow-x-hidden`** ve ızgara boşlukları bu genişliklerde yatay taşmayı önleyecek şekilde ayarlandı; yerel doğrulama: **`npm run build`** başarılı.
- **`npm run build`**: Succeeds.

---

## E11 — Google yorum CTA (completion)

- **Status**: Complete.
- **`src/lib/google-places.ts`**: **`getGoogleReviewUrl()`** — **`GOOGLE_PLACE_ID`** varsa **`search.google.com/local/writereview`** (**`placeid`** URL-encode); yoksa **`https://maps.google.com`**.
- **`src/components/ui/GoogleReviewCta.tsx`**: Ortalanmış çerçeveli düğme (**`border-2 border-mid`**, **`hover:bg-mid hover:text-white`**, **`rounded-full px-6 py-3`**), ⭐ önek, alt metin «Deneyiminizi paylaşın, başkalarına yardımcı olun».
- **`src/components/home/ReviewsSection.tsx`**: Yorum ızgarasından sonra **`GoogleReviewCta`**.
- **`src/app/iletisim/page.tsx`**, **`src/app/hakkimizda/page.tsx`**: Sayfa altında aynı CTA bölümü; **`hakkimizda`** için **`generateHakkimizdaMetadata()`** (**`src/lib/metadata.ts`**) + kısa içerik (önceden **`/hakkimizda`** route’u yoktu).
- **`npm run build`**: Succeeds.

---

## E12 — Marka turuncu + SVG logo (completion)

- **Status**: Complete.
- **`tailwind.config.ts`**: **`accent`**: **`#F97316`** (önce **`#E63946`**); **`accent-light`**: **`#FB923C`** (önce **`#FF6B6B`**). **`bg-accent` / `text-accent` / `hover:bg-accent-light`** vb. otomatik turuncuya döner.
- **`src/` taraması**: **`#E63946`**, **`#FF6B6B`**, **`bg-red-` / `text-red-` / `border-red-`** kalmadı (yalnızca **`tailwind.config`** güncellendi; kod zaten **`accent`** kullanıyordu).
- **`src/components/ui/Logo.tsx`**: **`variant`**: **`full`** (kalkan + anahtar + metin + turuncu çubuk + **İSTANBUL** + tagline; **`text-primary` / `dark:text-surface`**), **`icon`** (**`viewBox="0 0 120 150"`**, kalkan + anahtar), **`white`** (açık arka planlar için beyaz + turuncu; **Header** / **Footer**). Kalkan path ve anahtar geometrisi brief ile uyumlu; **`ORANGE` = `#F97316`**.
- **`SiteLogo.tsx`**: Kaldırıldı; **`Header`** / **`Footer`**: **`<Link><Logo variant="white" height={44|40} /></Link>`**.
- **`src/components/ui/index.ts`**: **`Logo`** export; **`SiteLogo`** export kaldırıldı.
- **`src/app/layout.tsx`**: **`head`** içinde favicon **`// TODO: Generate favicon from Logo icon variant`**.
- **`FAQAccordion`**: Açık satırda **`-`** ikonu **`text-accent`**; kapalıda **`text-mid`**.
- **Bileşen tutarlılığı**: **CTAButtons** / **StickyCallBar** / **RegionCard** telefon **`bg-accent`**; **StatsSection** rakamlar **`text-accent`**; **TrustBadges** **`text-mid`** (değişmedi); **PartnersSection** nötr.
- **`npm run build`**: Succeeds.

---

## E13 — Logo SVG bileşeni (brief) (completion)

- **Status**: Complete.
- **`src/components/ui/Logo.tsx`**: Verilen **`viewBox="0 0 680 210"`** tam SVG (kalkan + ayırıcı çizgi + **ÇİLİNGİR / SERVİSİ** + bar + **İSTANBUL** + tagline + sağ vurgular); **`variant="full"`** — kalkan **`#1A1A2E`**, anahtar deliği **`#1A1A2E`**, metin sınıfları Arial + **`prefers-color-scheme: dark`** ile **`.lt` / `.lg`**; **`variant="white"`** — kalkan, anahtar deliği ve **`.lt`** metni **`#F8F9FA`**, tagline **`#9CA3AF`** (koyu zemin); **`variant="icon"`** — yalnız kalkan + anahtar grubu, **`viewBox="0 0 200 200"`**, **`h-` / `scale`** ile sığdırma, favicon taslağı için.
- **Props**: **`variant`** (**`full` | `white` | `icon`**, varsayılan **`full`**), **`className`**; **`height`** kaldırıldı — boyut **`className`** (ör. **`h-10 w-auto`**).
- **`"use client"`**: **`useId`** ile stillerde çakışmasız sınıf önekleri.
- **`Header`**: **`<Logo variant="white" className="h-10 w-auto" />`**; **`Footer`**: **`className="h-9 w-auto"`**.
- **`src/components/ui/index.ts`**: **`Logo`** export (önceki gibi).
- **`npm run build`**: Succeeds.

---

## E14 — İletişim formu & harita (anasayfa + /iletisim) (completion)

- **Status**: Complete.
- **`src/components/home/ContactFormSection.tsx`** (**`use client`**): **Ad Soyad**, **Telefon**, **İlçe** (öncelik **1+2** bölgeler, **`getPriorityRegions`**), **Hizmet** (**`SERVICES`**), **Mesaj** (opsiyonel); **Geri Arayın** (**`bg-accent`**, tam genişlik); istemci doğrulama; başarıda yeşil onay + «Teşekkürler!…»; **3 s** sonra sıfırlama; **`pushEvent("form_submit", { service, region })`**, **`clarityEvent("contact_form_submit")`**; bölüm **`bg-surface`**, kart **`bg-white`** + **`rounded-xl`** + gölge; **H2** «Sizi Arayalım».
- **`src/components/home/MapSection.tsx`** (Server): **`mapHeight`?** (varsayılan **400**, **`/iletisim`** **500**); sol **Google Maps** iframe (verilen **`embed`** URL); sağ **`SITE_CONFIG.name`**, adres, **`tel:`** (**accent**), **WhatsApp** (**success**), **7/24 Açık** rozeti, **Yol Tarifi Al** dış link.
- **`src/app/page.tsx`**: **FAQ** → **`ContactFormSection`** → **`MapSection`** → **CTA** (son).
- **`src/app/iletisim/page.tsx`**: **`MapSection mapHeight={500}`** → **`ContactFormSection`** → **`GoogleReviewCta`**; breadcrumb korundu.
- **`src/components/home/index.ts`**: **`ContactFormSection`**, **`MapSection`** export.
- **`npm run build`**: Succeeds.

---

## E15 — LCP (Hero H1) optimizasyonu (completion)

- **Status**: Complete.
- **Sorun**: **`HeroSection`** tek parça **`"use client"`** olduğu için **H1** ilk HTML’de geç geliyordu; LCP gecikmesi (hedef **&lt; 2,5 s**).
- **Çözüm**: **Sunucu / istemci ayrımı**:
  - **`src/components/home/HeroStatic.tsx`** (Server Component): Sabit **H1** («İstanbul Çilingir — 7/24 Kapınızda»), alt başlık («Hasarsız, Garantili, 15 Dakikada»), **`CTAButtons`** (**`context="home"`**, **`size="lg"`**), **`TrustBadges`** — **`"use client"` yok**; ilk yanıtta metin ve yapı hazır.
  - **`src/components/home/HeroDynamic.tsx`** (**`"use client"`**): Yeşil **«Şu an aktif»** bandı (sağ üst mutlak konum); **UTM / saat dilimine** göre üst rozet (`useEffect` + **`useState`**). **H1 ve ana CTA yok** — hidrasyon sonrası, LCP dışı.
  - **`src/components/home/HeroSection.tsx`**: **`"use client"` kaldırıldı**; arka plan **`Image`** + gradient + ızgara **sunucuda**; **`next/dynamic`** ile **`HeroDynamic`** (**`ssr: false`**, **`loading: () => null`**); **`utmCampaign`** **`HeroDynamic`**’e iletilir. **`src/app/page.tsx`** zaten **`utmCampaign`** geçiriyor.
- **`src/app/layout.tsx`**: **`<head>`** içinde **`preconnect`** + **`dns-prefetch`** → **`https://fonts.googleapis.com`** (font isteklerine erken bağlantı).
- **Beklenen etki**: Ana sayfada LCP öğesi (**H1**) artık **SSR HTML**’de; istemci paketi hidrasyonu LCP’yi bloklamaz. Gerçek **LCP** ortam, cihaz ve **PSI** koşullarına bağlıdır; **Field / Lab** ile ölçüm önerilir.
- **`npm run build`**: Succeeds.

---

## E16 — Gizlilik Politikası sayfası (completion)

- **Status**: Complete.
- **Route**: **`/gizlilik`** — **`src/app/gizlilik/page.tsx`** (Google Ads doğrulaması için).
- **Metadata**: **`generateGizlilikMetadata()`** (**`src/lib/metadata.ts`**) — başlık «Gizlilik Politikası \| İstanbul Çilingir Anahtarcı Servisi», açıklama kişisel veri / gizlilik politikası, **`canonical`** **`SITE_CONFIG.url/gizlilik`**.
- **İçerik**: **H1** «Gizlilik Politikası», son güncelleme **Nisan 2026**; beş bölüm (toplanan bilgiler, kullanım, çerezler, veri güvenliği, iletişim — e-posta ve **0532 303 91 69**).
- **Sitemap**: **`src/app/sitemap.ts`** — **`/gizlilik`**, **`priority: 0.3`**, **`changeFrequency: yearly`**.
- **`npm run build`**: Succeeds.

---

## E17 — Tarayıcı parmak izi (bot / şüpheli davranış) (completion)

- **Status**: Complete.
- **Paket**: **`@fingerprintjs/fingerprintjs`**.
- **`src/lib/fingerprint.ts`**: **`getFingerprint()`** ( **`visitorId`** ), **`markFingerprintSuspicious`**, **`getSuspiciousFingerprints`**, **`isFingerprintBlocked`**; şüpheli listeler **`sessionStorage`** (`blocked_fingerprints`).
- **`src/lib/gtm.ts`**: **`pushEvent`** artık **async**; her olaya **`visitorId`** eklenir (Fingerprint yüklenemezse alan yok).
- **`src/lib/events.ts`**, **`ContactFormSection`**: **`pushEvent`** çağrıları **`await`** / **`void` async** ile uyumlu.
- **`CTAButtons`**: Telefon tıklamasında parmak izi + **`sessionStorage`** `fp_clicks_{visitorId}` — **60 s** içinde **≥5** tıklamada **`markFingerprintSuspicious`**, GTM **`suspicious_click_pattern`**, **`console.warn`**; **`tel:`** yine açılır (engel yok).
- **`src/components/layout/FingerprintCookie.tsx`**: İlk yüklemede **`fp_id`** çerezi ( **`path=/`**, **1 yıl** ).
- **`src/middleware.ts`**: **`fp_id`** çerezi **`BLOCKED_FINGERPRINTS`** (virgülle ayrılmış, sunucu env) içindeyse **403**; statik varlıklar / **`_next`** hariç **matcher**.
- **`.env.example`**: **`BLOCKED_FINGERPRINTS=`** açıklaması.
- **`npm run build`**: Succeeds.

---

## E18 — UTM bölgeleri + eksik bölge sayfaları (completion)

- **Status**: Complete.
- **`src/lib/utm.ts`**: **`UtmCampaign`** ve **`UTM_CONTENT`** genişletildi — **Ayazağa, İstinye, Reşitpaşa, Emirgan, Seyrantepe, Vadistanbul, Maslak 1453** (`*_genel`) + mevcut **Levent** vb.; metinler reklam hedef bölgeleriyle uyumlu başlık / alt metin / rozet.
- **`REGIONS` doğrulaması**: **`ayazaga-cilingir`**, **`resitpasa-cilingir`**, **`emirgan-cilingir`**, **`seyrantepe-cilingir`**, **`levent-cilingir`** zaten vardı.
- **Yeni bölge sayfaları** (**`priority: 1`**, **`responseTime: "10-15 dakika"`**, dört bölgesel SSS): **`istinye-cilingir`**, **`vadistanbul-cilingir`**, **`maslak1453-cilingir`** — benzersiz intro ve açıklamalar.
- **`src/data/services.ts` — `PRIORITY_1_REGION_SLUGS`**: Üç yeni slug eklendi (Vadistanbul, Maslak 1453, İstinye).
- **`src/data/region-service-combos.ts`**: **`REGION_SERVICE_COMBO_COUNT`** **80 → 101** (öncelik-1 bölge sayısı **8 → 11**, **× 7** hizmet + öncelik-2 katkısı).
- **`npm run build`**: Succeeds (ör. bölge **31** yol, bölge×hizmet **98** yol).

---

## Performance & trust rollout — Clarity performance follow-up

- **Status**: Complete (**`npm run build`** succeeds, **critters** devDependency eklendi — **`experimental.optimizeCss`** için).
- **LCP / ana sayfa (Part 1 & 5)**:
  - **`HeroStatic.tsx`**: LCP görseli burada; **`next/image`** — **`priority`**, **`fetchPriority="high"`**, **`sizes="100vw"`**, **`width={1920}`** / **`height={1080}`** + **`fill`**, **`placeholder="blur"`**; gradient + ızgara overlay hero sunucu tarafında.
  - **`HeroSection.tsx`**: Yalnız sunucu bileşeni + dinamik **`HeroDynamic`**; istemci mantık **`HeroDynamic`** içinde.
  - **`LazyMap.tsx`** + **`MapSection.tsx`**: Google Maps **`iframe`** yalnızca **IntersectionObserver** (`rootMargin: 200px`) ile görünür alana yaklaşınca; yer tutucu iskelet.
  - **`layout.tsx`**: **`dns-prefetch`** / **`preconnect`** harita alan adları; **Clarity** → **`strategy="lazyOnload"`** (GTM **`afterInteractive`** kaldı).
  - **`next.config.mjs`**: **`experimental.optimizeCss: true`**, **`images`** — AVIF/WebP, **`minimumCacheTTL`**, **`deviceSizes`**.
- **Beklenen LCP iyileştirmesi (tahmini)**: Önceki ~**10,7 s**’lik alanda baskın faktörler genelde **above-the-fold görsel + erken iframe ağı yükü** idi. Harita **ertelenince** ana iş parçacığı ve ağ rekabeti azalır; hero **öncelikli görsel + sunucu HTML** ile LCP öğesi hızlı boyanır. Gerçek **field/Lab** ölçümü ortam ve cihaza bağlıdır; **&lt; 2,5 s** hedefi için üretimde **CrUX / PSI** ile doğrulanmalıdır.
- **Part 2 — Middleware**: **`PPC_FRAUD_SIGNATURES`** User-Agent kontrolü (**403**); **User-Agent** yok veya **&lt; 20** karakter (**403**); aynı **`fp_id`** ile **5 sn** penceresinde **≥3** istek (**429**); **`BLOCKED_FINGERPRINTS`** (**403**) korundu.
- **Part 3 — İçerik**: Öncelik-1 bölgeler **`RAW_REGIONS` / `regions.ts`** giriş metinleri genişletildi; tüm bölgelere **`appendDistrictFaqs`** ile **+2 SSS** (toplam **6**); **`region-service-combos.ts`** intro cümleleri + bölge adı tekrarı; **`services.ts`** hizmet intro’ları genişletildi.
- **Part 4 — Güven**: **`StatsSection`** (**1.200+**, **32** bölge); **`CertificationSection`** metin + **`tel:`** CTA; **`WhyUsSection`** somut kanıt cümleleri.
- **`npm run build`**: Başarılı (**161** statik üretim; middleware **~26,9 kB**).

---

## Semantic SEO upgrade — region pages (completion)

- **Status**: Complete.
- **`src/data/regions.ts`**: İstenen 9 bölge için semantik SEO yükseltmesi uygulandı (**Maslak, Ayazağa, İstinye, Reşitpaşa, Emirgan, Seyrantepe, Vadistanbul, Maslak 1453, Levent**):
  - **`title`** alanları landmark odaklı ve “Hasarsız” vurgulu olacak şekilde güncellendi.
  - **`description`** alanları her bölgede lokal anahtar kelime + landmark + hız iddiası + güven sinyali ile genişletildi.
  - **`h1`** metinleri yeni pattern’e çekildi (landmark + 7/24 kapsama vurgusu).
  - **`intro`** ilk paragrafları doğal akışta **3+ landmark** içerecek şekilde yeniden yazıldı.
  - Her bölgede **“[Bölge] hangi mahallelere hizmet veriyorsunuz?”** SSS girdisi güncellendi.
- **`src/lib/schema.ts`**:
  - **`buildLocalBusinessGraphNode()`** içine istenen **`areaServed`** listesi eklendi:
    `Maslak, Vadistanbul, Maslak 1453, Ayazağa, İstinye, Reşitpaşa, Emirgan, Seyrantepe, Levent, Beşiktaş, Sarıyer`
  - **`hasMap`** alanı eklendi (`https://maps.google.com/?q=Maslak+Anahtarium+İstanbul`).
- **`npm run build`**: Succeeds.

---

## Video embed rollout (completion)

- **Status**: Complete.
- **`src/components/ui/VideoEmbed.tsx`**: Yeni istemci bileşeni eklendi — **IntersectionObserver** ile lazy görünürlük, tıklama sonrası iframe oynatma, YouTube thumbnail önizleme.
- **`src/app/page.tsx`**:
  - `VideoEmbed` **`next/dynamic`** ile `ssr: false` import edildi.
  - Ana sayfada **`ServicesSection`** ile **`RegionsSection`** arasına eklendi.
  - Başlık + container uygulandı: **“Nasıl Çalışıyoruz?”** + video kartı.
- **`src/lib/schema.ts`**:
  - **`buildVideoSchema()`** eklendi (`VideoObject`, thumbnail/embed URL, description, publisher).
  - Ana sayfa grafına `buildHomePageGraphSchema()` içinde `buildVideoSchema()` eklendi.
- **`npm run build`**: Succeeds.

---

## Major SEO upgrade — 9 target regions (completion)

- **Status**: Complete.
- **Kapsam (`src/data/regions.ts`)**: Hedef 9 bölge için (`maslak`, `vadistanbul`, `ayazaga`, `levent`, `istinye`, `emirgan`, `tarabya`, `resitpasa`, `kirecburnu`) aşağıdaki alanlar güncellendi:
  - **Title**: Landmark odaklı yeni formatta güncellendi.
  - **Description**: Bölge + landmark + 10–15 dk iddiası + güven sinyali + telefon içerecek şekilde güncellendi.
  - **H1**: Yeni “landmark + 7/24” formatına çekildi.
  - **Intro**: Özellikle Emirgan / Tarabya / Reşitpaşa / Kireçburnu girişleri 4+ cümleli, yerel referanslı, güven ve hız sinyalli hale getirildi.
- **FAQ derinleştirme**:
  - `emirgan-cilingir`, `tarabya-cilingir`, `resitpasa-cilingir`, `kirecburnu-cilingir` için 6 soruluk bölgeye özel FAQ setleri yazıldı.
  - `appendDistrictFaqs` fonksiyonu, mevcut FAQ sayısı **6+** ise ekleme yapmayacak şekilde güncellendi (çift eklemeyi engeller).
- **Schema (`src/lib/schema.ts`)**:
  - `areaServed` listesine istenen kapsam genişletmesi eklendi; özellikle `Tarabya` ve `Kireçburnu` dahil edildi.
- **Region-service combos (`src/data/region-service-combos.ts`)**:
  - Hedef 9 bölge için landmark haritası eklendi.
  - `buildIntro` çıktısında hedef bölgelerde landmark referansı + bölge adının tekrar geçtiği ek cümle eklendi.
- **`npm run build`**: Succeeds.

---

## Rich region content rollout (completion)

- **Status**: Complete.
- **Dependency**: `react-markdown` eklendi (region sayfalarında zengin markdown içerik render’ı için).
- **`src/data/regions.ts`**:
  - `Region` tipine **`richContent?: string`** alanı eklendi.
  - Hedef 9 bölge (`maslak`, `vadistanbul`, `ayazaga`, `levent`, `istinye`, `emirgan`, `tarabya`, `resitpasa`, `kirecburnu`) için intro metinleri hikaye odaklı ve sosyal kanıt/fiyat şeffaflığı vurgusuyla genişletildi.
  - Aynı 9 bölgeye markdown biçiminde **`richContent`** blokları eklendi (süreç, fiyat, yerel operasyon, güven odaklı alt başlıklar).
  - `appendDistrictFaqs` fonksiyonu, **`faqs.length >= 6`** durumunda ekleme yapmayacak şekilde korumaya alındı (double-append engeli).
- **`src/app/bolgeler/[regionSlug]/page.tsx`**:
  - `ReactMarkdown` import edildi.
  - Intro ile hizmetler bölümü arasına `region.richContent` varsa render eden yeni section eklendi.
  - Tipografik sınıflar (`prose`, başlık/metin/liste renkleri) ile okunabilir içerik sunumu uygulandı.
- **`src/lib/schema.ts`**:
  - Önceki kapsam genişletmeleri korunarak hedef bölgeler `areaServed` içerisinde yer almaya devam ediyor.
- **`npm run build`**: Succeeds.

---

## Technical article rollout — 9 target regions (completion)

- **Status**: Complete.
- **`src/data/regions.ts`**:
  - `Region` tipine **`technicalArticle?: string`** alanı eklendi.
  - Hedef 9 bölge (`maslak`, `vadistanbul`, `ayazaga`, `levent`, `istinye`, `emirgan`, `tarabya`, `resitpasa`, `kirecburnu`) için teknik içerik üretimi eklendi.
  - İçerikler; silindir tipleri (tek noktalı/çok noktalı/barel), mandal-emniyet-gece mandalı, çelik kapı yapısı, Mul-T-Lock/Kale/Yale farkları, bakım periyotları, acil açma teknikleri (picking/bump key/drill), elektronik kilit, oto çilingir (transponder/immobilizer), kasa tipleri ve bölgeye özel pratik bilgileri doğal akışta kapsayacak şekilde üretildi.
  - Teknik makaleler bölge adıyla başlar, bölge adını doğal biçimde tekrar eder ve CTA cümlesiyle **`0536 940 56 56`** numarasına yönlendirir.
- **`src/app/bolgeler/[regionSlug]/page.tsx`**:
  - `richContent` bölümünden sonra, `region.technicalArticle` varsa yeni bir section ile `ReactMarkdown` render’ı eklendi.
  - Başlık formatı: **`{region.name.replace(' Çilingir', '')} Kilit ve Çilingir Rehberi`**.
  - İstenen `prose` tipografi sınıfları ve yüzey stili (`bg-surface/30`) uygulandı.
- **`src/lib/schema.ts`**:
  - `buildRegionTechnicalArticleSchema(region)` fonksiyonu eklendi.
  - `technicalArticle` mevcutsa `@graph` içine `Article` nesnesi üretiliyor:
    - `headline`: `[region.name] Kilit ve Çilingir Rehberi`
    - `description`: `technicalArticle` ilk 150 karakter (normalize edilerek)
    - `author` / `publisher`: `İstanbul Çilingir Anahtarcı Servisi`
    - `mainEntityOfPage.@id`: `https://anahtarcicilingirservisi.com/bolgeler/[slug]`
  - Bölge sayfasında bu şema ikinci `JsonLd` bloğu olarak koşullu render ediliyor.
- **`npm run build`**: Succeeds (tek uyarı: `VideoEmbed.tsx` içinde mevcut `<img>` lint warning, önceki durumla aynı).

---

## Google Ads landing quality uplift — region pages (completion)

- **Status**: Complete.
- **`src/app/bolgeler/[regionSlug]/page.tsx`**:
  - Above-the-fold alanında telefon ve WhatsApp CTA görünürlüğü mobilde ilk viewport içinde güçlendirildi (H1 öncesi iki buton).
  - H1 server-side render akışı korunarak render-blocking öğe eklenmedi.
  - Üst bölümde kritik içerik sıralaması (CTA → H1 → yanıt süresi → ana CTA) netleştirildi.
- **`next.config.mjs`**:
  - Statik görsel uzantıları için uzun süreli immutable cache header eklendi:
    - `source: '/:all*(svg|jpg|png|webp|avif)'`
    - `Cache-Control: public, max-age=31536000, immutable`
- **`src/lib/schema.ts`**:
  - Bölge sayfası `@graph` yapısına ana varlık olarak `Locksmith` düğümü eklendi.
  - Bu ana varlığa istenen telefon alanı eklendi: `telephone: "+905369405656"`.
  - `mainEntityOfPage` bölge URL’sine bağlandı.
- **`src/components/home/RegionsSection.tsx`**:
  - 9 hedef bölge kart sırası ve slug linkleri doğrulandı; kartlar `RegionCard` üzerinden `/bolgeler/[slug]` rotasına doğru yönleniyor.
- **`npm run build`**: Succeeds (mevcut ve önceden var olan tek uyarı: `VideoEmbed.tsx` içindeki `<img>` lint warning).
