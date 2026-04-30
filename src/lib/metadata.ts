import type { Metadata } from "next";
import type { BlogPost } from "@/data/blog";
import type { RegionServiceCombo } from "@/data/region-service-combos";
import type { Region } from "@/data/regions";
import type { Service } from "@/data/services";

export const SITE_CONFIG = {
  name: "İstanbul Çilingir Anahtarcı Servisi",
  url: "https://anahtarcicilingirservisi.com",
  phone: "+905369405656",
  whatsapp: "905369405656",
  address: "Ahi Evren Cad. No:120, İstanbul",
} as const;

const OG_LOCALE = "tr_TR";
const TWITTER_CARD = "summary_large_image" as const;

const ROBOTS: Metadata["robots"] = {
  index: true,
  follow: true,
};

/** SEO meta açıklaması — hedef ~155 karakter. */
function clipMetaDescription(text: string, max = 155): string {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  const base = (lastSpace > 60 ? cut.slice(0, lastSpace) : cut).trimEnd();
  return `${base}…`;
}

function regionTitleLabel(region: Region): string {
  return region.name.replace(/\s*çilingir\s*$/i, "").trim();
}

function serviceTitleLabel(service: Service): string {
  const parts = service.name.split("—").map((p) => p.trim());
  return parts.length > 1 ? parts[1]! : parts[0]!;
}

function baseOpenGraph(
  title: string,
  description: string,
  url: string,
  type: "website" | "article",
  article?: { publishedTime?: string }
): NonNullable<Metadata["openGraph"]> {
  const shared = {
    locale: OG_LOCALE,
    url,
    siteName: SITE_CONFIG.name,
    title,
    description,
  };
  if (type === "article" && article?.publishedTime) {
    return {
      ...shared,
      type: "article",
      publishedTime: article.publishedTime,
    };
  }
  return {
    ...shared,
    type: "website",
  };
}

function baseTwitter(title: string, description: string): Metadata["twitter"] {
  return {
    card: TWITTER_CARD,
    title,
    description,
  };
}

/** Ana sayfa — sabit 155 karakterlik açıklama (anahtar kelime yoğun). */
export function generateHomeMetadata(): Metadata {
  const title =
    "İstanbul Çilingir 7/24 | Hasarsız Garantili | 0536 940 56 56";
  const description =
    "İstanbul çilingir 7/24: hasarsız kapı açma, kilit değişimi, Kale & Mul-T-Lock, acil servis. 0536 940 56 56 — hızlı ekip, garantili işçilik. Şeffaf ücret.";
  const canonical = SITE_CONFIG.url;

  return {
    title,
    description,
    robots: ROBOTS,
    alternates: { canonical },
    openGraph: baseOpenGraph(title, description, canonical, "website"),
    twitter: baseTwitter(title, description),
  };
}

export function generateRegionServiceComboMetadata(
  combo: RegionServiceCombo
): Metadata {
  const title = combo.title;
  const description = clipMetaDescription(combo.description, 155);
  const canonical = `${SITE_CONFIG.url}/bolgeler/${combo.regionSlug}/${combo.serviceSlug}`;

  return {
    title,
    description,
    robots: ROBOTS,
    alternates: { canonical },
    openGraph: baseOpenGraph(title, description, canonical, "website"),
    twitter: baseTwitter(title, description),
  };
}

export function generateRegionMetadata(region: Region): Metadata {
  const title = `${regionTitleLabel(region)} Çilingir 7/24 — 15 Dakikada Kapınızda | Hasarsız`;
  const description = clipMetaDescription(region.description, 155);
  const canonical = `${SITE_CONFIG.url}/bolgeler/${region.slug}`;

  return {
    title,
    description,
    robots: ROBOTS,
    alternates: { canonical },
    openGraph: baseOpenGraph(title, description, canonical, "website"),
    twitter: baseTwitter(title, description),
  };
}

/** `/bolgeler` liste sayfası — sabit başlık / açıklama / canonical. */
export function generateBolgelerIndexMetadata(): Metadata {
  const title =
    "İstanbul Hizmet Bölgeleri | Tüm İlçelerde 7/24 Çilingir";
  const descriptionRaw =
    "İstanbul'un tüm ilçelerinde 7/24 acil çilingir hizmeti. Beşiktaş, Levent, Maslak, Sarıyer ve 30+ ilçede 15 dakikada kapınızda.";
  const description = clipMetaDescription(descriptionRaw, 155);
  const canonical = `${SITE_CONFIG.url}/bolgeler`;

  return {
    title,
    description,
    robots: ROBOTS,
    alternates: { canonical },
    openGraph: baseOpenGraph(title, description, canonical, "website"),
    twitter: baseTwitter(title, description),
  };
}

/** `/hizmetler` liste sayfası. */
export function generateHizmetlerIndexMetadata(): Metadata {
  const title =
    "Çilingir Hizmetleri | Kapı Açma, Kilit, Kasa, 7/24 Acil | İstanbul";
  const descriptionRaw =
    "İstanbul’da kapı açma, Kale ve Mul-T-Lock kilit değişimi, oto çilingir, kasa açılışı, Ojmar dolap kilitleri ve 7/24 acil çilingir. Hizmet detayları ve bölgeler.";
  const description = clipMetaDescription(descriptionRaw, 155);
  const canonical = `${SITE_CONFIG.url}/hizmetler`;

  return {
    title,
    description,
    robots: ROBOTS,
    alternates: { canonical },
    openGraph: baseOpenGraph(title, description, canonical, "website"),
    twitter: baseTwitter(title, description),
  };
}

export function generateServiceMetadata(service: Service): Metadata {
  const title = `İstanbul ${serviceTitleLabel(service)} — Garantili & Profesyonel | 7/24 Hizmet`;
  const description = clipMetaDescription(service.description, 155);
  const canonical = `${SITE_CONFIG.url}/hizmetler/${service.slug}`;

  return {
    title,
    description,
    robots: ROBOTS,
    alternates: { canonical },
    openGraph: baseOpenGraph(title, description, canonical, "website"),
    twitter: baseTwitter(title, description),
  };
}

export function generateIletisimMetadata(): Metadata {
  const title = "İletişim | İstanbul Çilingir 7/24";
  const description = clipMetaDescription(
    "0536 940 56 56 — İstanbul 7/24 çilingir iletişim, adres ve WhatsApp. Acil kapı açma ve kilit servisi için hemen arayın.",
    155
  );
  const canonical = `${SITE_CONFIG.url}/iletisim`;

  return {
    title,
    description,
    robots: ROBOTS,
    alternates: { canonical },
    openGraph: baseOpenGraph(title, description, canonical, "website"),
    twitter: baseTwitter(title, description),
  };
}

export function generateHakkimizdaMetadata(): Metadata {
  const title = "Hakkımızda | İstanbul Çilingir Anahtarcı Servisi";
  const description = clipMetaDescription(
    "İstanbul genelinde 7/24 acil çilingir, hasarsız kapı açılışı ve profesyonel kilit çözümleri. Deneyimli ekip, şeffaf süreç.",
    155
  );
  const canonical = `${SITE_CONFIG.url}/hakkimizda`;

  return {
    title,
    description,
    robots: ROBOTS,
    alternates: { canonical },
    openGraph: baseOpenGraph(title, description, canonical, "website"),
    twitter: baseTwitter(title, description),
  };
}

export function generateGizlilikMetadata(): Metadata {
  const title =
    "Gizlilik Politikası | İstanbul Çilingir Anahtarcı Servisi";
  const description = clipMetaDescription(
    "Kişisel verilerinizin korunması hakkında gizlilik politikamız.",
    155
  );
  const canonical = `${SITE_CONFIG.url}/gizlilik`;

  return {
    title,
    description,
    robots: ROBOTS,
    alternates: { canonical },
    openGraph: baseOpenGraph(title, description, canonical, "website"),
    twitter: baseTwitter(title, description),
  };
}

export function generateBlogIndexMetadata(): Metadata {
  const title = "Blog | İstanbul Çilingir Rehberi";
  const description = clipMetaDescription(
    "Kapı açma, kilit güvenliği, acil çilingir ve İstanbul semt rehberi. Uzman yazılar ve pratik tavsiyeler.",
    155
  );
  const canonical = `${SITE_CONFIG.url}/blog`;

  return {
    title,
    description,
    robots: ROBOTS,
    alternates: { canonical },
    openGraph: baseOpenGraph(title, description, canonical, "website"),
    twitter: baseTwitter(title, description),
  };
}

export function generateBlogMetadata(post: BlogPost): Metadata {
  const title = `${post.title} | İstanbul Çilingir Rehberi`;
  const description = clipMetaDescription(post.description, 155);
  const canonical = `${SITE_CONFIG.url}/blog/${post.slug}`;

  return {
    title,
    description,
    robots: ROBOTS,
    alternates: { canonical },
    openGraph: baseOpenGraph(title, description, canonical, "article", {
      publishedTime: post.publishDate,
    }),
    twitter: baseTwitter(title, description),
  };
}
