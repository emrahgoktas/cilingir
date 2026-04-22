import type { Metadata } from "next";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { GoogleReviewCta } from "@/components/ui/GoogleReviewCta";
import { ContactFormSection, MapSection } from "@/components/home";
import { generateIletisimMetadata } from "@/lib/metadata";

export function generateMetadata(): Metadata {
  return generateIletisimMetadata();
}

export default function IletisimPage() {
  return (
    <main className="pb-28">
      <div className="mx-auto max-w-6xl px-4 pt-6 pb-4">
        <BreadcrumbNav
          items={[
            { name: "Ana Sayfa", href: "/" },
            { name: "İletişim", href: "/iletisim" },
          ]}
        />
      </div>

      <MapSection mapHeight={500} />
      <ContactFormSection />

      <section className="border-t border-border bg-surface/40 px-4 py-10 md:py-12">
        <GoogleReviewCta />
      </section>
    </main>
  );
}
