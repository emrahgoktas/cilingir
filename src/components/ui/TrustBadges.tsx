import { Award, CheckCircle, Clock, Shield, type LucideIcon } from "lucide-react";

type IconBadge = { icon: LucideIcon; label: string };

const badges: IconBadge[] = [
  { icon: Shield, label: "14 Yıllık Deneyim" },
  { icon: Award, label: "Oda Kayıtlı Yetkili Firma" },
  { icon: CheckCircle, label: "Hasarsız Garantili" },
  { icon: Clock, label: "7/24 Hizmet" },
];

export function TrustBadges() {
  return (
    <div className="mx-auto w-full min-w-0 max-w-5xl px-4">
      <ul className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
        {badges.map((badge) => (
          <li
            key={badge.label}
            className="flex min-w-0 items-center gap-2 rounded-lg border border-border bg-surface px-2.5 py-2 shadow-sm md:gap-2.5 md:px-3 md:py-2.5"
          >
            <badge.icon
              className="h-4 w-4 shrink-0 text-mid md:h-[1.125rem] md:w-[1.125rem]"
              aria-hidden
            />
            <span className="min-w-0 break-words text-[11px] font-medium leading-snug text-primary md:text-xs">
              {badge.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
