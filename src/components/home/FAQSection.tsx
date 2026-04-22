import { FAQAccordionDynamic } from "@/components/ui/FAQAccordionDynamic";
import { HOME_PAGE_FAQS } from "@/data/home-faqs";

export function FAQSection() {
  return (
    <section className="overflow-x-hidden border-t border-border bg-surface px-4 py-14 md:py-16">
      <div className="mx-auto min-w-0 max-w-3xl w-full">
        <FAQAccordionDynamic faqs={HOME_PAGE_FAQS} title="Sık Sorulan Sorular" />
      </div>
    </section>
  );
}
