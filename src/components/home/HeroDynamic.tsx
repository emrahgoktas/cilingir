"use client";

import { useEffect, useState } from "react";
import { getUserLocation } from "@/lib/geolocation";
import {
  getTimeSlot,
  heroContent,
  type TimeSlot,
} from "@/lib/time-context";
import { UTM_CONTENT, type UtmCampaign } from "@/lib/utm";

type HeroDynamicProps = {
  utmCampaign?: UtmCampaign;
};

/**
 * Yalnızca hidrasyon sonrası rozetler — H1 / ana CTA içermez (LCP).
 */
export function HeroDynamic({ utmCampaign }: HeroDynamicProps) {
  const [slot, setSlot] = useState<TimeSlot>("gunduz");
  const [district, setDistrict] = useState<string | null>(null);

  useEffect(() => {
    setSlot(getTimeSlot());
  }, []);

  useEffect(() => {
    getUserLocation()
      .then((loc) => {
        if (loc?.district) setDistrict(loc.district);
      })
      .catch(() => {});
  }, []);

  const useUtm =
    utmCampaign != null &&
    utmCampaign !== "default" &&
    UTM_CONTENT[utmCampaign] != null;

  const utm = useUtm ? UTM_CONTENT[utmCampaign] : null;
  const time = heroContent[slot];

  const utmBadge = utm?.urgencyBadge;
  const timeBadge =
    !utm && time.badge != null && time.badge !== "" ? time.badge : null;
  const showBadge = utmBadge != null || timeBadge != null;

  const showUtmPulse = Boolean(utmBadge);
  const showGecePulse = !utm && slot === "gece";

  return (
    <>
      <div
        className="pointer-events-none absolute inset-x-4 top-4 z-30 flex justify-end md:inset-x-auto md:right-8 md:top-8"
        role="status"
      >
        <span className="pointer-events-auto inline-flex max-w-full items-center gap-2 rounded-full border border-green-500/30 bg-green-900/80 px-3 py-1.5 text-xs font-medium text-green-300 shadow-lg backdrop-blur-sm md:text-sm">
          <span
            className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-green-400"
            aria-hidden
          />
          Şu an aktif — Ekibimiz sahada
        </span>
      </div>
      {showBadge ? (
        <div className="pointer-events-none absolute left-0 right-0 top-[4.75rem] z-30 flex justify-center px-4 md:top-[5.5rem]">
          <div className="pointer-events-auto flex items-center justify-center gap-2">
            {showUtmPulse || showGecePulse ? (
              <span
                className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-accent"
                aria-hidden
              />
            ) : null}
            <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white/95 backdrop-blur-sm md:text-sm">
              {utmBadge ?? timeBadge}
            </span>
          </div>
        </div>
      ) : null}
      {district ? (
        <div
          className={`pointer-events-none absolute left-0 right-0 z-30 flex justify-center px-4 ${
            showBadge ? "top-[10rem] md:top-[11rem]" : "top-[6.25rem] md:top-[7rem]"
          }`}
        >
          <div className="pointer-events-none inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/20 px-4 py-1.5 text-sm font-medium text-orange-300 mb-4">
            <span aria-hidden>📍</span>
            <span>{district} bölgesine hizmet veriyoruz</span>
          </div>
        </div>
      ) : null}
    </>
  );
}
