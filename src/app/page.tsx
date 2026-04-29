import dynamic from "next/dynamic";
import {
  CertificationSection,
  CTABannerSection,
  HeroSection,
  RegionsSection,
  ServicesSection,
  WhyUsSection,
} from "@/components/home";
import { LocationBanner } from "@/components/ui/LocationBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPlaceRating } from "@/lib/google-places";
import { generateHomeMetadata } from "@/lib/metadata";
import { buildHomePageGraphSchema } from "@/lib/schema";
import { getUtmCampaign } from "@/lib/utm";

const StatsSection = dynamic(
  () =>
    import("@/components/home/StatsSection").then((m) => m.StatsSection),
  {
    ssr: false,
    loading: () => (
      <section
        className="overflow-x-hidden border-t border-white/10 bg-mid px-4 py-14 text-white md:py-20"
        aria-hidden
      >
        <div className="mx-auto h-28 max-w-6xl animate-pulse rounded-lg bg-white/10" />
      </section>
    ),
  }
);

const PartnersSection = dynamic(() =>
  import("@/components/home/PartnersSection").then((m) => m.PartnersSection)
);

const ReviewsSection = dynamic(() =>
  import("@/components/home/ReviewsSection").then((m) => m.ReviewsSection)
);

const FAQSection = dynamic(() =>
  import("@/components/home/FAQSection").then((m) => m.FAQSection)
);

const ContactFormSection = dynamic(
  () =>
    import("@/components/home/ContactFormSection").then(
      (m) => m.ContactFormSection
    ),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-[24rem] bg-surface py-14" aria-hidden />
    ),
  }
);

const MapSection = dynamic(() =>
  import("@/components/home/MapSection").then((m) => m.MapSection)
);

export const metadata = generateHomeMetadata();

function searchParamsToURLSearchParams(
  searchParams: Record<string, string | string[] | undefined>
): URLSearchParams {
  const sp = new URLSearchParams();
  for (const [key, val] of Object.entries(searchParams)) {
    if (val === undefined) continue;
    if (Array.isArray(val)) {
      val.forEach((v) => sp.append(key, v));
    } else {
      sp.set(key, val);
    }
  }
  return sp;
}

type HomePageProps = {
  searchParams: Record<string, string | string[] | undefined>;
};

export default async function HomePage({ searchParams }: HomePageProps) {
  const placeRating = await getPlaceRating();
  const utmCampaign = getUtmCampaign(searchParamsToURLSearchParams(searchParams));

  return (
    <>
      <JsonLd
        schema={buildHomePageGraphSchema(
          placeRating ? { rating: placeRating } : undefined
        )}
      />
      <LocationBanner />
      <HeroSection utmCampaign={utmCampaign} />
      <ServicesSection />
      <RegionsSection />
      <WhyUsSection />
      <StatsSection />
      <PartnersSection />
      <ReviewsSection />
      <CertificationSection />
      <FAQSection />
      <ContactFormSection />
      <MapSection />
      <CTABannerSection />
    </>
  );
}
