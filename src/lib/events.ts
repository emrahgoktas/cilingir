import { getRegionBySlug } from "@/data/regions";
import { clarityEvent } from "./clarity";
import { pushEvent } from "./gtm";

export type GtmPageType = "home" | "region" | "service" | "blog";

/** URL’den GTM `page_type` türetir (`/iletisim` vb. → `home`). */
export function inferPageTypeFromPath(pathname: string): GtmPageType {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return "home";
  if (parts[0] === "bolgeler" && parts[1]) return "region";
  if (parts[0] === "hizmetler" && parts[1]) return "service";
  if (parts[0] === "blog") return "blog";
  return "home";
}

/** Header / footer / genel `tel:` tıklamaları: mevcut sayfa + bölge detayında bölge adı. */
export function getPhoneClickContextFromPath(pathname: string): {
  page_type: GtmPageType;
  region?: string;
} {
  const page_type = inferPageTypeFromPath(pathname);
  if (page_type === "region") {
    const slug = pathname.split("/").filter(Boolean)[1];
    const r = slug ? getRegionBySlug(slug) : undefined;
    return r?.name ? { page_type, region: r.name } : { page_type };
  }
  return { page_type };
}

export function trackPhoneCallClick(
  page_type: GtmPageType,
  options?: { region?: string }
): void {
  const data: Record<string, string> = { page_type };
  if (options?.region) data.region = options.region;
  void (async () => {
    await pushEvent("phone_call_click", data);
    clarityEvent("phone_click");
  })();
}

export function trackPhoneCallSticky(): void {
  void (async () => {
    await pushEvent("phone_call_sticky", {
      page_path: window.location.pathname,
    });
    clarityEvent("phone_click");
  })();
}

export function trackWhatsAppClick(
  page_type: GtmPageType,
  context_message: string
): void {
  void (async () => {
    await pushEvent("whatsapp_click", { page_type, context_message });
    clarityEvent("whatsapp_click");
  })();
}

export function trackWhatsAppSticky(): void {
  void (async () => {
    await pushEvent("whatsapp_sticky", {
      page_path: window.location.pathname,
    });
    clarityEvent("whatsapp_click");
  })();
}

/** Yapışkan çağrı çubuğu ilk kez görünür olduğunda (Clarity). */
export function trackStickyBarShown(): void {
  clarityEvent("sticky_bar_shown");
}

/** SSS paneli açıldığında (Clarity). */
export function trackFaqOpened(): void {
  clarityEvent("faq_opened");
}

export function trackPageRegionView(data: {
  region_name: string;
  region_slug: string;
  region_priority: number;
}): void {
  void pushEvent("page_region_view", data);
}
