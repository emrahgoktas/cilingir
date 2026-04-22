export type TimeSlot = "gece" | "sabah" | "gunduz" | "aksam";

export function getTimeSlot(): TimeSlot {
  const hour = new Date().getHours();
  if (hour >= 0 && hour < 6) return "gece";
  if (hour >= 6 && hour < 10) return "sabah";
  if (hour >= 10 && hour < 18) return "gunduz";
  return "aksam";
}

export const heroContent: Record<
  TimeSlot,
  {
    headline: string;
    subtext: string;
    urgency: string;
    badge?: string | null;
  }
> = {
  gece: {
    headline: "Gece Kapıda mı Kaldınız?",
    subtext: "Gece 7/24 aktif ekibimiz 15 dakikada yanınızda.",
    urgency: "Şu an ekibimiz sahada",
    badge: "🌙 Gece Servisi Aktif",
  },
  sabah: {
    headline: "Güne Kilitsiz Başlamayın",
    subtext: "Sabah acil çilingir hizmeti — hızlı, hasarsız, garantili.",
    urgency: "Sabah servisi aktif",
    badge: "🌅 Sabah Servisi",
  },
  gunduz: {
    headline: "İstanbul Çilingir — 7/24 Kapınızda",
    subtext: "Hasarsız, Garantili, 15 Dakikada.",
    urgency: "Ekibimiz hazır",
    badge: null,
  },
  aksam: {
    headline: "Akşam Kapıda mı Kaldınız?",
    subtext: "Akşam ve gece kesintisiz çilingir hizmeti.",
    urgency: "Akşam servisi aktif",
    badge: "🌆 Akşam Servisi",
  },
};
