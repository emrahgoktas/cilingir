import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";

export type BreadcrumbItem = {
  name: string;
  href: string;
};

export type BreadcrumbNavProps = {
  items: BreadcrumbItem[];
};

export function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  if (items.length === 0) return null;

  const schemaItems = items.map((item) => ({
    name: item.name,
    url: item.href,
  }));

  return (
    <>
      <JsonLd schema={buildBreadcrumbSchema(schemaItems)} />
      <nav aria-label="Sayfa konumu" className="w-full min-w-0 max-w-full overflow-x-hidden">
        <ol className="flex min-w-0 flex-wrap items-center gap-1 text-sm">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li
                key={`${item.href}-${index}`}
                className="flex min-w-0 max-w-full items-center gap-1"
              >
                {index > 0 ? (
                  <ChevronRight
                    className="h-4 w-4 shrink-0 text-muted"
                    aria-hidden
                  />
                ) : null}
                {isLast ? (
                  <span
                    className="min-w-0 break-words font-medium text-primary"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="min-w-0 break-words text-muted transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
