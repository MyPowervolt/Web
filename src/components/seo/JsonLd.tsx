import type { JsonLdObject } from "@/types";

interface JsonLdProps {
  schema: JsonLdObject | JsonLdObject[];
}

/**
 * Injects one or more JSON-LD structured data objects into the document.
 * Renders as <script type="application/ld+json"> in the <head>.
 *
 * Usage in a page or layout:
 *   <JsonLd schema={buildOrganizationSchema()} />
 *   <JsonLd schema={[buildServiceSchema(service), buildBreadcrumbSchema(crumbs)]} />
 *
 * Security note: JSON.stringify is safe here because schema data comes from
 * our own typed functions, not from user input. Never pass unsanitised
 * user-generated content directly to this component.
 */
export function JsonLd({ schema }: JsonLdProps) {
  const schemas = Array.isArray(schema) ? schema : [schema];

  return (
    <>
      {schemas.map((s, index) => (
        <script
          key={index}
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s, null, 0) }}
          type="application/ld+json"
        />
      ))}
    </>
  );
}
