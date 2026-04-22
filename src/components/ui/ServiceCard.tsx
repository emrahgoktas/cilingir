import Link from "next/link";
import {
  Building2,
  Car,
  DoorOpen,
  Lock,
  PhoneCall,
  ShieldCheck,
  Vault,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/data/services";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  DoorOpen,
  Lock,
  ShieldCheck,
  Car,
  Vault,
  Building2,
  PhoneCall,
};

function shortDescription(text: string, max = 140): string {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max);
  const i = cut.lastIndexOf(" ");
  const base = (i > 50 ? cut.slice(0, i) : cut).trimEnd();
  return `${base}…`;
}

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = SERVICE_ICONS[service.icon] ?? DoorOpen;

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-surface text-mid">
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <h3 className="text-base font-semibold leading-snug text-primary">
        {service.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {shortDescription(service.description)}
      </p>
      <Link
        href={`/hizmetler/${service.slug}`}
        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-mid transition-colors group-hover:text-accent"
      >
        Detay →
      </Link>
    </article>
  );
}
