import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/data/blog";
import { REGION_SERVICE_COMBOS } from "@/data/region-service-combos";
import { REGIONS } from "@/data/regions";
import { SERVICES } from "@/data/services";
import { SITE_CONFIG } from "@/lib/metadata";

const BASE = SITE_CONFIG.url;

function abs(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${BASE}${p}`;
}

/** Dinamik sitemap — ana + hizmetler + bölgeler + bölge×hizmet kombinasyonları + blog + iletişim + hakkımızda + gizlilik */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: abs("/"),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: abs("/hizmetler"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...SERVICES.map((service) => ({
      url: abs(`/hizmetler/${service.slug}`),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    {
      url: abs("/bolgeler"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...REGIONS.map((region) => ({
      url: abs(`/bolgeler/${region.slug}`),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...REGION_SERVICE_COMBOS.map((combo) => ({
      url: abs(`/bolgeler/${combo.regionSlug}/${combo.serviceSlug}`),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
    {
      url: abs("/blog"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...BLOG_POSTS.map((post) => ({
      url: abs(`/blog/${post.slug}`),
      lastModified: new Date(post.publishDate),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: abs("/iletisim"),
      priority: 0.6,
    },
    {
      url: abs("/hakkimizda"),
      priority: 0.6,
    },
    {
      url: abs("/gizlilik"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
