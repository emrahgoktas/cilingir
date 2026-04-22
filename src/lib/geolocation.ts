export const DISTRICT_BOUNDS: Record<
  string,
  {
    name: string;
    slug: string;
    latMin: number;
    latMax: number;
    lngMin: number;
    lngMax: number;
  }
> = {
  besiktas: {
    name: "Beşiktaş",
    slug: "besiktas-cilingir",
    latMin: 41.03,
    latMax: 41.07,
    lngMin: 28.98,
    lngMax: 29.02,
  },
  levent: {
    name: "Levent",
    slug: "levent-cilingir",
    latMin: 41.07,
    latMax: 41.1,
    lngMin: 28.99,
    lngMax: 29.03,
  },
  maslak: {
    name: "Maslak",
    slug: "maslak-cilingir",
    latMin: 41.1,
    latMax: 41.13,
    lngMin: 28.99,
    lngMax: 29.03,
  },
  nisantasi: {
    name: "Nişantaşı",
    slug: "nisantasi-cilingir",
    latMin: 41.04,
    latMax: 41.07,
    lngMin: 28.99,
    lngMax: 29.01,
  },
  sisli: {
    name: "Şişli",
    slug: "sisli-cilingir",
    latMin: 41.05,
    latMax: 41.08,
    lngMin: 28.97,
    lngMax: 29.0,
  },
  kagithane: {
    name: "Kağıthane",
    slug: "kagithane-cilingir",
    latMin: 41.07,
    latMax: 41.11,
    lngMin: 28.95,
    lngMax: 28.99,
  },
  sariyer: {
    name: "Sarıyer",
    slug: "sariyer-cilingir",
    latMin: 41.13,
    latMax: 41.18,
    lngMin: 28.98,
    lngMax: 29.06,
  },
  beyoglu: {
    name: "Beyoğlu",
    slug: "beyoglu-cilingir",
    latMin: 41.02,
    latMax: 41.05,
    lngMin: 28.96,
    lngMax: 29.0,
  },
};

export async function detectUserDistrict(): Promise<{
  name: string;
  slug: string;
} | null> {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve(null);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude: lat, longitude: lng } = pos.coords;
        for (const d of Object.values(DISTRICT_BOUNDS)) {
          if (
            lat >= d.latMin &&
            lat <= d.latMax &&
            lng >= d.lngMin &&
            lng <= d.lngMax
          ) {
            resolve({ name: d.name, slug: d.slug });
            return;
          }
        }
        resolve(null);
      },
      () => resolve(null),
      { timeout: 3000 }
    );
  });
}
