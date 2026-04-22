import FingerprintJS from "@fingerprintjs/fingerprintjs";

type FPAgent = Awaited<ReturnType<typeof FingerprintJS.load>>;

let fpPromise: Promise<FPAgent> | null = null;

export const getFingerprint = async (): Promise<string | null> => {
  if (typeof window === "undefined") return null;
  if (!fpPromise) {
    fpPromise = FingerprintJS.load();
  }
  try {
    const fp = await fpPromise;
    const result = await fp.get();
    return result.visitorId;
  } catch {
    return null;
  }
};

// Store suspicious fingerprints in sessionStorage
export const markFingerprintSuspicious = (visitorId: string) => {
  if (typeof window === "undefined") return;
  const blocked = getSuspiciousFingerprints();
  if (!blocked.includes(visitorId)) {
    sessionStorage.setItem(
      "blocked_fingerprints",
      JSON.stringify([...blocked, visitorId])
    );
  }
};

export const getSuspiciousFingerprints = (): string[] => {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(
      sessionStorage.getItem("blocked_fingerprints") ?? "[]"
    ) as string[];
  } catch {
    return [];
  }
};

export const isFingerprintBlocked = (visitorId: string): boolean => {
  return getSuspiciousFingerprints().includes(visitorId);
};
