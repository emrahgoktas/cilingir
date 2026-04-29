import dynamic from "next/dynamic";
import { HOME_PAGE_FAQS } from "@/data/home-faqs";

const FAQAccordionDynamic = dynamic(
  () =>
    import("@/components/ui/FAQAccordionDynamic").then(
      (m) => m.FAQAccordionDynamic
    ),
  {
    ssr: false,
    loading: () => (
      <div
        className="min-h-[220px] animate-pulse rounded-xl bg-white/50"
        aria-busy
        aria-label="SSS yükleniyor"
      />
    ),
  }
);

export function FAQSection() {
  return (
    <section className="overflow-x-hidden border-t border-border bg-surface px-4 py-14 md:py-16">
      <div className="mx-auto min-w-0 max-w-3xl w-full">
        <FAQAccordionDynamic faqs={HOME_PAGE_FAQS} title="Sık Sorulan Sorular" />
      </div>
    </section>
  );
}
