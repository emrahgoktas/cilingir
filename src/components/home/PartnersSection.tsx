import Image from "next/image";

/** Soldan sağa sürekli kayan marka logoları — `public/images/partners/` */
const PARTNER_LOGOS = [
  {
    src: "/images/partners/yale-seeklogo.svg",
    alt: "Yale",
  },
  {
    src: "/images/partners/eurolock-puerta-blindadas-seeklogo.svg",
    alt: "Eurolock",
  },
  {
    src: "/images/partners/Kale_Kilit_idlQfToYwn_1.svg",
    alt: "Kale Kilit",
  },
  {
    src: "/images/partners/inlet-lock-integration-platform-seeklogo.svg",
    alt: "Inlet Lock",
  },
  {
    src: "/images/partners/cisa-ceramiche-seeklogo.svg",
    alt: "Cisa",
  },
] as const;

function partnerImageClassName(src: string): string {
  const base =
    "h-10 w-auto max-w-[160px] object-contain opacity-95 grayscale transition hover:opacity-100 hover:grayscale-0 md:h-12 md:max-w-[200px]";
  if (src.includes("yale-seeklogo")) {
    return `${base} scale-110 md:scale-115`;
  }
  if (src.includes("cisa-ceramiche")) {
    return `${base} scale-105 md:scale-110`;
  }
  return base;
}

export function PartnersSection() {
  const track = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <section className="overflow-x-hidden border-t border-border bg-surface px-0 py-14 md:py-16">
      <div className="mx-auto min-w-0 max-w-6xl w-full px-4">
        <h3 className="text-center text-lg font-bold text-primary md:text-xl">
          Yetkili Satıcısı Olduğumuz Markalar
        </h3>
      </div>

      <div className="relative mt-8 w-full">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-surface to-transparent md:w-20"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-surface to-transparent md:w-20"
          aria-hidden
        />

        <div className="overflow-hidden">
          <div className="flex w-max animate-partners-marquee hover:[animation-play-state:paused]">
            {track.map((brand, index) => (
              <div
                key={`${brand.src}-${index}`}
                className="flex h-16 shrink-0 items-center justify-center px-8 md:h-20 md:px-12"
              >
                <Image
                  src={brand.src}
                  alt={index < PARTNER_LOGOS.length ? brand.alt : ""}
                  width={180}
                  height={72}
                  className={partnerImageClassName(brand.src)}
                  unoptimized
                  role={index >= PARTNER_LOGOS.length ? "presentation" : undefined}
                  aria-hidden={index >= PARTNER_LOGOS.length ? true : undefined}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="sr-only">
        {PARTNER_LOGOS.map((b) => b.alt).join(", ")}
      </p>
    </section>
  );
}
