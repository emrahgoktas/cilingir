type FPAgent = Awaited<
  ReturnType<Awaited<ReturnType<typeof loadFpModule>>["load"]>
>;

async function loadFpModule() {
  const mod = await import("@fingerprintjs/fingerprintjs");
  return mod.default;
}

/** İlk yüklemede ana iş parçacığını ve ağı korur — modül ~3 sn sonra indirilir. */
const DEFER_MS = 3000;

let deferredAgentPromise: Promise<FPAgent> | null = null;

function loadAgentAfterDelay(): Promise<FPAgent> {
  if (deferredAgentPromise) return deferredAgentPromise;

  deferredAgentPromise = new Promise((resolve, reject) => {
    if (typeof window === "undefined") {
      reject(new Error("SSR"));
      return;
    }
    setTimeout(() => {
      loadFpModule()
        .then((FP) => FP.load())
        .then(resolve)
        .catch(reject);
    }, DEFER_MS);
  });

  return deferredAgentPromise;
}

export const getFingerprint = async (): Promise<string | null> => {
  if (typeof window === "undefined") return null;
  try {
    const fp = await loadAgentAfterDelay();
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
