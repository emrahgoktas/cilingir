import type { BlogPost } from "@/data/blog";
import type { FAQ, Region } from "@/data/regions";
import { SERVICES, type Service } from "@/data/services";
import { SITE_CONFIG } from "@/lib/metadata";

/** Google Business Profile — gerçek URL yayında güncellenmeli. */
const GOOGLE_BUSINESS_PROFILE_PLACEHOLDER =
  "https://www.google.com/maps?cid=GOOGLE_BUSINESS_PROFILE_PLACEHOLDER";

const BUSINESS_ID = `${SITE_CONFIG.url}/#locksmith`;
const WEBSITE_ID = `${SITE_CONFIG.url}/#website`;
const GOOGLE_MAPS_BUSINESS_URL =
  "https://maps.google.com/?q=Maslak+Anahtarium+İstanbul";

/** Maslak yakını — gerçek adres teyit edilince güncellenmeli. */
const BUSINESS_LAT = 41.1085;
const BUSINESS_LNG = 29.0084;

export type JsonLdObject = Record<string, unknown>;

/** Ana sayfa yorumları için JSON-LD girdisi (ileride veri kaynağından beslenebilir). */
export type SchemaReviewInput = {
  authorName: string;
  reviewBody: string;
  ratingValue: number;
  datePublished?: string;
};

export function buildVideoSchema(): JsonLdObject {
  return {
    "@type": "VideoObject",
    name: "Maslak Çilingir Servisi — 7/24 Hizmet",
    description:
      "İstanbul Maslak ve çevresinde 7/24 profesyonel çilingir ve anahtarcı hizmetimizi tanıtan video.",
    thumbnailUrl: "https://img.youtube.com/vi/IvXytbBWvlM/maxresdefault.jpg",
    uploadDate: "2024-01-01",
    embedUrl: "https://www.youtube.com/embed/IvXytbBWvlM",
    publisher: {
      "@type": "Organization",
      name: "Anahtarcı Çilingir Servisi",
    },
  };
}

function buildServiceOfferCatalogItems(): JsonLdObject[] {
  return SERVICES.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Offer",
      name: service.name,
      url: `${SITE_CONFIG.url}/hizmetler/${service.slug}`,
      description: service.description,
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        url: `${SITE_CONFIG.url}/hizmetler/${service.slug}`,
      },
    },
  }));
}

/** `@graph` içine konacak Locksmith düğümü (`@context` yok). */
export function buildLocalBusinessGraphNode(): JsonLdObject {
  return {
    "@type": "Locksmith",
    "@id": BUSINESS_ID,
    name: SITE_CONFIG.name,
    telephone: SITE_CONFIG.phone,
    url: SITE_CONFIG.url,
    priceRange: "₺₺",
    areaServed: [
      "Maslak",
      "Vadistanbul",
      "Maslak 1453",
      "Ayazağa",
      "İstinye",
      "Reşitpaşa",
      "Emirgan",
      "Tarabya",
      "Kireçburnu",
      "Seyrantepe",
      "Levent",
      "Beşiktaş",
      "Sarıyer",
    ],
    hasMap: GOOGLE_MAPS_BUSINESS_URL,
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_LAT,
      longitude: BUSINESS_LNG,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Çilingir Hizmetleri",
      itemListElement: buildServiceOfferCatalogItems(),
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ahi Evren Cad. No:120",
      addressLocality: "İstanbul",
      addressRegion: "İstanbul",
      postalCode: "34000",
      addressCountry: "TR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE_CONFIG.phone,
      contactType: "customer service",
      availableLanguage: ["Turkish", "tr"],
      areaServed: "TR",
    },
    sameAs: [GOOGLE_BUSINESS_PROFILE_PLACEHOLDER],
  };
}

export function buildLocalBusinessSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    ...buildLocalBusinessGraphNode(),
  };
}

/**
 * Gerçek yorumlar eklendiğinde LocalBusiness veya @graph içinde kullanılmak üzere.
 * Şimdilik yalnızca builder — çağrılmıyor.
 */
export function buildAggregateRatingSchema(
  rating: number,
  reviewCount: number
): JsonLdObject {
  return {
    "@type": "AggregateRating",
    ratingValue: rating,
    reviewCount,
    bestRating: 5,
    worstRating: 1,
  };
}

/** Tekil Review düğümleri — ana sayfa `@graph` içine serpiştirmek için. */
export function buildReviewSchema(reviews: SchemaReviewInput[]): JsonLdObject[] {
  return reviews.map((r) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: r.authorName,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.ratingValue,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: r.reviewBody,
    ...(r.datePublished ? { datePublished: r.datePublished } : {}),
  }));
}

/** Google Sitelinks arama kutusu (WebSite + SearchAction). */
export function buildSiteLinksSearchBoxSchema(): JsonLdObject {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    publisher: { "@id": BUSINESS_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_CONFIG.url}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Ana sayfa: Locksmith + WebSite (SearchAction) tek script’te `@graph`.
 * İsteğe bağlı yorum düğümleri; isteğe bağlı **AggregateRating** (Google Places vb.).
 */
export function buildHomePageGraphSchema(options?: {
  reviews?: SchemaReviewInput[];
  rating?: { rating: number; total: number };
}): JsonLdObject {
  const localBusiness: JsonLdObject = {
    ...buildLocalBusinessGraphNode(),
  };
  if (options?.rating) {
    localBusiness.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: options.rating.rating,
      reviewCount: options.rating.total,
      bestRating: 5,
      worstRating: 1,
    };
  }

  const graph: JsonLdObject[] = [
    localBusiness,
    buildSiteLinksSearchBoxSchema(),
    buildVideoSchema(),
  ];
  const reviews = options?.reviews;
  if (reviews?.length) {
    graph.push(...buildReviewSchema(reviews));
  }
  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function buildServiceSchema(
  service: Service,
  region?: Region
): JsonLdObject {
  const serviceUrl = `${SITE_CONFIG.url}/hizmetler/${service.slug}`;
  const schema: JsonLdObject = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: serviceUrl,
    serviceType: service.h1,
    serviceOutput: "Kapı açma, kilit değişimi",
    provider: {
      "@type": "Locksmith",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      telephone: SITE_CONFIG.phone,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "TRY",
      description: "Yerinde fiyat verilir",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceCurrency: "TRY",
        name: "Yerinde fiyat verilir",
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.name} — paket seçenekleri`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Yerinde keşif ve fiyatlandırma",
            priceCurrency: "TRY",
            description: "Yerinde fiyat verilir",
            url: serviceUrl,
          },
        },
      ],
    },
  };

  if (region) {
    schema.areaServed = {
      "@type": "AdministrativeArea",
      name: region.district,
      description: region.name,
    };
  } else {
    schema.areaServed = { "@type": "City", name: "İstanbul" };
  }

  return schema;
}

/** Bölge sayfası: tüm hizmetler için `Service` JSON-LD (tek script, `@graph`). */
export function buildRegionServicesGraphSchema(
  services: Service[],
  region: Region
): JsonLdObject {
  const regionMainEntity: JsonLdObject = {
    "@type": "Locksmith",
    "@id": `${SITE_CONFIG.url}/bolgeler/${region.slug}#locksmith`,
    name: SITE_CONFIG.name,
    telephone: "+905369405656",
    url: `${SITE_CONFIG.url}/bolgeler/${region.slug}`,
    areaServed: region.name,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.url}/bolgeler/${region.slug}`,
    },
  };

  const graph = services.map((service) => {
    const full = buildServiceSchema(service, region);
    const node = { ...full };
    delete node["@context"];
    return node;
  });

  return {
    "@context": "https://schema.org",
    "@graph": [regionMainEntity, ...graph],
  };
}

function clipArticleDescription(text: string, max = 150): string {
  const plain = text
    .replace(/^#+\s+/gm, "")
    .replace(/\n+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (plain.length <= max) return plain;
  return `${plain.slice(0, max).trimEnd()}…`;
}

export function buildRegionTechnicalArticleSchema(
  region: Region
): JsonLdObject | null {
  if (!region.technicalArticle) return null;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: `${region.name} Kilit ve Çilingir Rehberi`,
        description: clipArticleDescription(region.technicalArticle, 150),
        author: {
          "@type": "Organization",
          name: "İstanbul Çilingir Anahtarcı Servisi",
        },
        publisher: {
          "@type": "Organization",
          name: "İstanbul Çilingir Anahtarcı Servisi",
          url: "https://anahtarcicilingirservisi.com",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_CONFIG.url}/bolgeler/${region.slug}`,
        },
      },
    ],
  };
}

export function buildFAQSchema(faqs: FAQ[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; url: string }[]
): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => {
      const absoluteUrl = item.url.startsWith("http")
        ? item.url
        : `${SITE_CONFIG.url}${
            item.url.startsWith("/") ? item.url : `/${item.url}`
          }`;
      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: absoluteUrl,
      };
    }),
  };
}

export function buildArticleSchema(post: BlogPost): JsonLdObject {
  const articleUrl = `${SITE_CONFIG.url}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    url: articleUrl,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    author: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    articleSection: post.category,
    inLanguage: "tr-TR",
  };
}
