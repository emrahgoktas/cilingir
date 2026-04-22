"use client";

import { useEffect } from "react";
import { getFingerprint } from "@/lib/fingerprint";

const FP_COOKIE = "fp_id";
const MAX_AGE_SEC = 60 * 60 * 24 * 365;

/**
 * İlk yüklemede ziyaretçi kimliğini `fp_id` çerezine yazar (middleware engel listesi için).
 */
export function FingerprintCookie() {
  useEffect(() => {
    void (async () => {
      const id = await getFingerprint();
      if (!id) return;
      document.cookie = `${FP_COOKIE}=${encodeURIComponent(id)}; path=/; max-age=${MAX_AGE_SEC}; SameSite=Lax`;
    })();
  }, []);

  return null;
}
