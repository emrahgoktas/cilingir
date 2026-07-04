import dynamic from "next/dynamic";
import type { FAQ } from "@/data/regions";

function FAQAccordionSkeleton() {
  return (
    <div
      className="h-36 w-full animate-pulse rounded-lg border border-border bg-surface"
      aria-hidden
    />
  );
}

const FAQAccordion = dynamic(
  () => import("./FAQAccordion").then((m) => m.FAQAccordion),
  { loading: () => <FAQAccordionSkeleton /> }
);

export type FAQAccordionDynamicProps = {
  faqs: FAQ[];
  title?: string;
  includeSchema?: boolean;
};

/** Sunucu bileşenlerinden `FAQAccordion` istemci yükünü ayrı chunk’a böler. */
export function FAQAccordionDynamic({
  faqs,
  title,
  includeSchema,
}: FAQAccordionDynamicProps) {
  return (
    <FAQAccordion faqs={faqs} title={title} includeSchema={includeSchema} />
  );
}
