"use client";

import { MessageCircle, Phone } from "lucide-react";
import type { GtmPageType } from "@/lib/events";
import { trackPhoneCallClick, trackWhatsAppClick } from "@/lib/events";
import type React from "react";


class BotDetector {
  private mouseMovements = 0;
  private pageLoadTime = Date.now();
  private lastClickCoords: { x: number; y: number } | null = null;
  private sameCoordCount = 0;

  constructor() {
    if (typeof window !== "undefined") {
      document.addEventListener("mousemove", () => {
        this.mouseMovements++;
      });
    }
  }

  isBot(clickX: number, clickY: number): boolean {
    if (typeof window === "undefined") return false;

    // Sinyal 1: Playwright/Selenium flag
    if ((navigator as unknown as { webdriver?: boolean }).webdriver) return true;

    // Sinyal 2: Mouse hiç hareket etmedi
    if (this.mouseMovements === 0) return true;

    // Sinyal 3: Sayfa açılalı 1.5 saniyeden az
    if (Date.now() - this.pageLoadTime < 1500) return true;

    // Sinyal 4: Aynı koordinat tekrarı
    if (this.lastClickCoords) {
      if (
        Math.abs(this.lastClickCoords.x - clickX) < 2 &&
        Math.abs(this.lastClickCoords.y - clickY) < 2
      ) {
        this.sameCoordCount++;
        if (this.sameCoordCount >= 2) return true;
      }
    }
    this.lastClickCoords = { x: clickX, y: clickY };

    // Sinyal 5: Plugins boş (headless browser)
    if (navigator.plugins?.length === 0) return true;

    return false;
  }
}

const botDetector = new BotDetector();


const PHONE_TEL = "tel:+905369405656";
const WHATSAPP_BASE = "https://wa.me/905369405656";

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

  const handlePhoneClick = (e: React.MouseEvent) => {
    const isBot = botDetector.isBot(e.clientX, e.clientY);
    if (!isBot) {
      trackPhoneCallClick(
        context,
        context === "region" && regionName?.trim()
          ? { region: regionName.trim() }
          : undefined
      );
    }
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    const isBot = botDetector.isBot(e.clientX, e.clientY);
    if (!isBot) {
      trackWhatsAppClick(context, message);
    }
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
        onClick={handlePhoneClick}

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
        onClick={handleWhatsAppClick}

      >
        <MessageCircle className={`shrink-0 ${iconSizes[size]}`} aria-hidden />
        WhatsApp
      </a>
    </div>
  );
}
