"use client";

import { MessageCircle, Phone } from "lucide-react";
import type { GtmPageType } from "@/lib/events";
import { trackPhoneCallClick, trackWhatsAppClick } from "@/lib/events";
import {
  getFingerprint,
  markFingerprintSuspicious,
} from "@/lib/fingerprint";
import { pushEvent } from "@/lib/gtm";

const PHONE_TEL = "tel:+905323039169";
const WHATSAPP_BASE = "https://wa.me/905323039169";

export type CTAButtonsProps = {
  size?: "lg" | "md" | "sm";
  layout?: "vertical" | "horizontal";
  context: GtmPageType;
  regionName?: string;
  serviceName?: string;
  /** Varsa telefon düğmesi metni (ör. UTM kampanyası). */
  phoneLabel?: string;
};

function buildWhatsAppMessage(
  context: CTAButtonsProps["context"],
  regionName?: string,
  serviceName?: string
): string {
  switch (context) {
    case "home":
      return "Merhaba, acil çilingir hizmeti almak istiyorum.";
    case "region":
      return `Merhaba, ${regionName?.trim() || "bölgem"} de çilingir hizmeti almak istiyorum.`;
    case "service":
      return `Merhaba, ${serviceName?.trim() || "hizmet"} hakkında bilgi almak istiyorum.`;
    case "blog":
      return "Merhaba, blog üzerinden ulaşıyorum; çilingir hizmeti hakkında bilgi almak istiyorum.";
  }
}

const sizeClasses = {
  lg: "min-h-14 gap-2.5 px-4 py-3 text-base",
  md: "min-h-12 gap-2 px-4 py-2.5 text-sm",
  sm: "min-h-10 gap-1.5 px-3 py-2 text-xs",
} as const;

const iconSizes = {
  lg: "h-5 w-5",
  md: "h-4 w-4",
  sm: "h-3.5 w-3.5",
} as const;

export function CTAButtons({
  size = "lg",
  layout = "vertical",
  context,
  regionName,
  serviceName,
  phoneLabel,
}: CTAButtonsProps) {
  const message = buildWhatsAppMessage(context, regionName, serviceName);
  const whatsappHref = `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;

  const isVertical = layout === "vertical";

  const onPhoneClick = () => {
    void (async () => {
      const visitorId = await getFingerprint();
      if (visitorId) {
        const key = `fp_clicks_${visitorId}`;
        const now = Date.now();
        let timestamps: number[] = [];
        try {
          const raw = sessionStorage.getItem(key);
          timestamps = raw ? (JSON.parse(raw) as number[]) : [];
        } catch {
          timestamps = [];
        }
        timestamps = timestamps.filter((t) => now - t < 60_000);
        timestamps.push(now);
        sessionStorage.setItem(key, JSON.stringify(timestamps));

        if (timestamps.length >= 5) {
          markFingerprintSuspicious(visitorId);
          await pushEvent("suspicious_click_pattern", {
            visitorId,
            click_count: timestamps.length,
          });
          console.warn(
            "[fingerprint]",
            "suspicious_click_pattern",
            visitorId,
            timestamps.length
          );
        }
      }

      trackPhoneCallClick(
        context,
        context === "region" && regionName?.trim()
          ? { region: regionName.trim() }
          : undefined
      );
    })();
  };

  const onWhatsAppClick = () => {
    trackWhatsAppClick(context, message);
  };

  return (
    <div
      className={
        isVertical
          ? "flex w-full flex-col gap-3"
          : "flex w-full flex-row gap-3"
      }
    >
      <a
        href={PHONE_TEL}
        className={`inline-flex w-full min-w-0 items-center justify-center rounded-lg bg-accent font-bold text-white transition-opacity hover:opacity-95 active:opacity-90 ${sizeClasses[size]} ${
          isVertical ? "" : "flex-1"
        }`}
        onClick={onPhoneClick}
      >
        <Phone className={`shrink-0 ${iconSizes[size]}`} aria-hidden />
        {phoneLabel ?? "Hemen Ara"}
      </a>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex w-full min-w-0 items-center justify-center rounded-lg bg-success font-bold text-white transition-opacity hover:opacity-95 active:opacity-90 ${sizeClasses[size]} ${
          isVertical ? "" : "flex-1"
        }`}
        onClick={onWhatsAppClick}
      >
        <MessageCircle className={`shrink-0 ${iconSizes[size]}`} aria-hidden />
        WhatsApp
      </a>
    </div>
  );
}
