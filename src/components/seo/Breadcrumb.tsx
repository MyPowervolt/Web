import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { JsonLd } from "./JsonLd";
import { buildBreadcrumbSchema } from "@/lib/structured-data";
import type { BreadcrumbItem } from "@/lib/structured-data";

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  /** Accessible label for the nav landmark */
  label?: string;
}

/**
 * Visual breadcrumb navigation + BreadcrumbList JSON-LD schema.
 *
 * The first item is always the homepage. Additional items are passed as props.
 *
 * Example:
 *   <Breadcrumb items={[
 *     { name: "Servizi", href: "/servizi" },
 *     { name: "Domotica", href: "/servizi/domotica" },
 *   ]} />
 */
export function Breadcrumb({ items, label = "Breadcrumb" }: BreadcrumbProps) {
  const allItems: BreadcrumbItem[] = [{ name: "Home", href: "/" }, ...items];
  const schema = buildBreadcrumbSchema(allItems);

  return (
    <>
      <JsonLd schema={schema} />
      <nav aria-label={label}>
        <ol className="flex flex-wrap items-center gap-1 text-sm text-neutral-500">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1">
                {index === 0 && (
                  <Home aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
                )}
                {isLast ? (
                  <span aria-current="page" className="font-medium text-neutral-700">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    className="transition-colors hover:text-brand-primary"
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                )}
                {!isLast && (
                  <ChevronRight aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
