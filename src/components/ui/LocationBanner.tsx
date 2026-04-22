"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { detectUserDistrict } from "@/lib/geolocation";

const STORAGE_KEY = "cilingir_location_banner_dismissed_slug";

export function LocationBanner() {
  const [district, setDistrict] = useState<{
    name: string;
    slug: string;
  } | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const d = await detectUserDistrict();
      if (cancelled || !d) return;
      try {
        if (typeof window !== "undefined") {
          const dismissed = window.localStorage.getItem(STORAGE_KEY);
          if (dismissed === d.slug) return;
        }
      } catch {
        /* private / blocked storage */
      }
      setDistrict(d);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const dismiss = () => {
    if (district) {
      try {
        window.localStorage.setItem(STORAGE_KEY, district.slug);
      } catch {
        /* ignore */
      }
      setDistrict(null);
    }
  };

  if (!district) {
    return null;
  }

  return (
    <div className="relative z-40 max-w-full overflow-hidden px-4 pt-3 md:pt-4">
      <div
        className="mx-auto flex min-w-0 max-w-6xl animate-bannerSlideDown items-center gap-3 rounded-lg bg-mid px-4 py-3 text-sm text-white shadow-md md:text-base"
        role="region"
        aria-label="Bölge önerisi"
      >
        <p className="min-w-0 flex-1 leading-snug">
          <Link
            href={`/bolgeler/${district.slug}`}
            className="font-medium underline-offset-2 transition-opacity hover:underline hover:opacity-95"
          >
            📍 {district.name} bölgesindesiniz — {district.name} Çilingir
            sayfamıza gidin →
          </Link>
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="shrink-0 rounded-md p-1.5 text-white/90 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Kapat"
        >
          <X className="h-5 w-5" aria-hidden />
        </button>
      </div>
    </div>
  );
}
