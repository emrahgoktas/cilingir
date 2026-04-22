declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

/**
 * Tüm GTM dataLayer olaylarına `visitorId` (FingerprintJS) eklenir — GA4 tarafında şüpheli davranışı izlemek için.
 */
export async function pushEvent(event: string, data?: object) {
  if (typeof window === "undefined") return;

  let visitorId: string | null = null;
  try {
    const { getFingerprint } = await import("./fingerprint");
    visitorId = await getFingerprint();
  } catch {
    visitorId = null;
  }

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({
    event,
    ...(data ?? {}),
    ...(visitorId ? { visitorId } : {}),
  });
}
