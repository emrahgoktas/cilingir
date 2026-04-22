import {
  CTABannerSection,
  CertificationSection,
  ContactFormSection,
  FAQSection,
  HeroSection,
  MapSection,
  PartnersSection,
  RegionsSection,
  ReviewsSection,
  ServicesSection,
  StatsSection,
  WhyUsSection,
} from "@/components/home";
import { LocationBanner } from "@/components/ui/LocationBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPlaceRating } from "@/lib/google-places";
import { generateHomeMetadata } from "@/lib/metadata";
import { buildHomePageGraphSchema } from "@/lib/schema";
import { getUtmCampaign } from "@/lib/utm";

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
