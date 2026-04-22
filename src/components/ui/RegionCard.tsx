"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import type { Region } from "@/data/regions";
import {
  getPhoneClickContextFromPath,
  trackPhoneCallClick,
} from "@/lib/events";

const PHONE_TEL = "tel:+905323039169";

type RegionCardProps = {
  region: Region;
};

export function RegionCard({ region }: RegionCardProps) {
  const onPhoneClick = () => {
    const ctx = getPhoneClickContextFromPath(window.location.pathname);
    trackPhoneCallClick(ctx.page_type, { region: region.name });
  };

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <Link
        href={`/bolgeler/${region.slug}`}
        className="text-base font-semibold leading-snug text-primary transition-colors hover:text-mid"
      >
        {region.name}
      </Link>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-2.5 py-1 text-xs font-medium text-primary">
          <Phone className="h-3.5 w-3.5 text-mid" aria-hidden />
          {region.responseTime}
        </span>
      </div>

      <a
        href={PHONE_TEL}
        className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-accent px-3 text-sm font-bold text-white transition-opacity hover:opacity-95 active:opacity-90"
        onClick={onPhoneClick}
      >
        <Phone className="h-4 w-4 shrink-0" aria-hidden />
        Hemen Ara
      </a>
    </article>
  );
}
