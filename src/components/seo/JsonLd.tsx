"use client";

import type { JsonLdObject } from "@/lib/schema";

type JsonLdProps = {
  schema: JsonLdObject;
};

/**
 * JSON-LD script tag. Pass a plain object from `src/lib/schema` builders.
 */
export function JsonLd({ schema }: JsonLdProps) {
  const json = JSON.stringify(schema).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
