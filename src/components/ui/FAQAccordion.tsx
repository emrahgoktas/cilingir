"use client";

import { Minus, Plus } from "lucide-react";
import { useId, useMemo, useState } from "react";
import type { FAQ } from "@/data/regions";
import { JsonLd } from "@/components/seo/JsonLd";
import { trackFaqOpened } from "@/lib/events";
import { buildFAQSchema } from "@/lib/schema";

export type FAQAccordionProps = {
  faqs: FAQ[];
  title?: string;
  /** Varsayılan true; sayfa düzeyinde `@graph` FAQPage kullanılıyorsa false. */
  includeSchema?: boolean;
};

export function FAQAccordion({
  faqs,
  title,
  includeSchema = true,
}: FAQAccordionProps) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = useMemo(() => buildFAQSchema(faqs), [faqs]);

  const toggle = (index: number) => {
    setOpenIndex((prev) => {
      const next = prev === index ? null : index;
      if (next !== null) {
        trackFaqOpened();
      }
      return next;
    });
  };

  return (
    <section className="w-full" aria-labelledby={title ? `${baseId}-heading` : undefined}>
      {includeSchema ? <JsonLd schema={faqSchema} /> : null}
      {title ? (
        <h2
          id={`${baseId}-heading`}
          className="mb-4 text-xl font-semibold text-primary md:text-2xl"
        >
          {title}
        </h2>
      ) : null}
      <div className="divide-y divide-border overflow-hidden rounded-lg border border-border bg-white shadow-sm">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const panelId = `${baseId}-panel-${index}`;
          const buttonId = `${baseId}-trigger-${index}`;

          return (
            <div key={`${index}-${faq.question.slice(0, 24)}`} className="bg-white">
              <h3 className="text-base font-medium text-primary">
                <button
                  id={buttonId}
                  type="button"
                  className="flex w-full min-w-0 items-center justify-between gap-3 px-4 py-4 text-left transition-colors hover:bg-surface/80"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(index)}
                >
                  <span className="min-w-0 flex-1 break-words pr-2">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 ${isOpen ? "text-accent" : "text-mid"}`}
                    aria-hidden
                  >
                    {isOpen ? (
                      <Minus className="h-5 w-5" strokeWidth={2} />
                    ) : (
                      <Plus className="h-5 w-5" strokeWidth={2} />
                    )}
                  </span>
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="min-h-0 overflow-hidden">
                  <div className="border-t border-border/60 px-4 pb-4 pt-3 text-sm leading-relaxed text-muted break-words">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
