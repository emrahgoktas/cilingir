export type UtmCampaign =
  | "acil_gece"
  | "besiktas_genel"
  | "maslak_genel"
  | "levent_genel"
  | "ayazaga_genel"
  | "istinye_genel"
  | "resitpasa_genel"
  | "emirgan_genel"
  | "seyrantepe_genel"
  | "vadistanbul_genel"
  | "maslak1453_genel"
  | "kilit_degisimi"
  | "oto_cilingir"
  | "default";

export type UtmContent = {
  heroHeadline: string;
  heroSubtext: string;
  ctaText: string;
  urgencyBadge?: string;
};

export const UTM_CONTENT: Record<UtmCampaign, UtmContent> = {
  acil_gece: {
    heroHeadline: "Gece Kapıda mı Kaldınız?",
    heroSubtext: "Gece ekibimiz şu an sahada — 15 dakikada yanınızda.",
    ctaText: "Şimdi Ara",
    urgencyBadge: "🔴 Gece Servisi Aktif",
  },
  besiktas_genel: {
    heroHeadline: "Beşiktaş Cilingir — 15 Dk'da Kapınızda",
    heroSubtext: "Beşiktaş ve çevresinde 7/24 hasarsız çilingir hizmeti.",
    ctaText: "Hemen Ara",
    urgencyBadge: "📍 Beşiktaş Servisi",
  },
  maslak_genel: {
    heroHeadline: "Maslak Cilingir — Anında Hizmet",
    heroSubtext: "Maslak, Vadistanbul, Skyland — 10 dakikada kapınızda.",
    ctaText: "Hemen Ara",
    urgencyBadge: "📍 Maslak Servisi",
  },
  levent_genel: {
    heroHeadline: "Levent Cilingir — 7/24 Profesyonel",
    heroSubtext: "Levent ve çevresinde hasarsız garantili çilingir.",
    ctaText: "Hemen Ara",
    urgencyBadge: "📍 Levent Servisi",
  },
  ayazaga_genel: {
    heroHeadline: "Ayazağa Cilingir — 15 Dk'da Kapınızda",
    heroSubtext: "Ayazağa ve çevresinde 7/24 hasarsız çilingir.",
    ctaText: "Hemen Ara",
    urgencyBadge: "📍 Ayazağa Servisi",
  },
  istinye_genel: {
    heroHeadline: "İstinye Cilingir — Anında Hizmet",
    heroSubtext: "İstinye, Sarıyer ve çevresinde 7/24 çilingir.",
    ctaText: "Hemen Ara",
    urgencyBadge: "📍 İstinye Servisi",
  },
  resitpasa_genel: {
    heroHeadline: "Reşitpaşa Cilingir — 7/24 Hizmet",
    heroSubtext: "Reşitpaşa Mahallesi ve çevresinde hızlı cilingir.",
    ctaText: "Hemen Ara",
    urgencyBadge: "📍 Reşitpaşa Servisi",
  },
  emirgan_genel: {
    heroHeadline: "Emirgan Cilingir — Hasarsız Garantili",
    heroSubtext: "Emirgan ve Boğaz hattında 7/24 çilingir hizmeti.",
    ctaText: "Hemen Ara",
    urgencyBadge: "📍 Emirgan Servisi",
  },
  seyrantepe_genel: {
    heroHeadline: "Seyrantepe Cilingir — 15 Dk'da Kapınızda",
    heroSubtext: "Seyrantepe ve çevresinde 7/24 profesyonel cilingir.",
    ctaText: "Hemen Ara",
    urgencyBadge: "📍 Seyrantepe Servisi",
  },
  vadistanbul_genel: {
    heroHeadline: "Vadistanbul Cilingir — Anında Kapınızda",
    heroSubtext: "Vadistanbul rezidansında 10 dakikada hizmetinizdeyiz.",
    ctaText: "Hemen Ara",
    urgencyBadge: "📍 Vadistanbul Servisi",
  },
  maslak1453_genel: {
    heroHeadline: "Maslak 1453 Cilingir — 7/24 Hizmet",
    heroSubtext: "Maslak 1453 sitesinde 10 dakikada kapınızdayız.",
    ctaText: "Hemen Ara",
    urgencyBadge: "📍 Maslak 1453 Servisi",
  },
  kilit_degisimi: {
    heroHeadline: "Kilit Değişimi İstanbul — Garantili",
    heroSubtext: "Kale, Mul-T-Lock yetkili satıcısı. Aynı gün montaj.",
    ctaText: "Fiyat Al",
    urgencyBadge: "✓ Yetkili Satıcı",
  },
  oto_cilingir: {
    heroHeadline: "Araç Kapısı Açma — Hasarsız",
    heroSubtext: "Tüm araç modelleri. Çizilme garantisi. 15 dakika.",
    ctaText: "Hemen Ara",
    urgencyBadge: "🚗 Oto Uzmanı",
  },
  default: {
    heroHeadline: "İstanbul Çilingir — 7/24 Kapınızda",
    heroSubtext: "Hasarsız, Garantili, 15 Dakikada.",
    ctaText: "Hemen Ara",
  },
};

export function getUtmCampaign(searchParams: URLSearchParams): UtmCampaign {
  const campaign = searchParams.get("utm_campaign") ?? "";
  return (Object.keys(UTM_CONTENT).includes(campaign)
    ? campaign
    : "default") as UtmCampaign;
}
