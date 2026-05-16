import type { HTMLAttributes } from "react";
import { clsx } from "clsx";
import type { SectionVariant } from "@/types";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: SectionVariant;
  /**
   * Vertical padding size.
   * - "default": 80px desktop / 48px mobile
   * - "sm": 48px desktop / 32px mobile
   * - "none": no padding
   */
  padding?: "none" | "sm" | "default";
  as?: "section" | "div" | "article" | "aside";
}

const variantClasses: Record<SectionVariant, string> = {
  light: "bg-white text-neutral-900",
  muted: "bg-neutral-100 text-neutral-900",
  dark: "bg-brand-secondary text-white",
  brand: "bg-brand-primary-light text-neutral-900",
};

const paddingClasses = {
  none: "",
  sm: "py-12 md:py-14",
  default: "py-16 md:py-20 lg:py-24",
};

/**
 * Reusable section wrapper.
 * Provides consistent vertical spacing and background color variants.
 * The alternating light/muted/dark pattern from the design system is
 * achieved by using different variant values on consecutive sections.
 */
export function Section({
  variant = "light",
  padding = "default",
  as: Tag = "section",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Tag
      className={clsx(variantClasses[variant], paddingClasses[padding], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
