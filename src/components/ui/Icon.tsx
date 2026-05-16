import type { HTMLAttributes } from "react";
import { clsx } from "clsx";

interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Size of the icon wrapper.
   * Controls the bounding box — the icon itself scales to fill it.
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /**
   * Whether to add a colored background pill behind the icon.
   * Useful for service cards and feature blocks.
   */
  background?: "none" | "brand" | "dark" | "muted";
  /** aria-hidden defaults to true — set to false only when icon carries meaning */
  "aria-hidden"?: boolean | "true" | "false";
}

const sizeClasses: Record<NonNullable<IconProps["size"]>, string> = {
  xs: "h-4 w-4",
  sm: "h-5 w-5",
  md: "h-6 w-6",
  lg: "h-8 w-8",
  xl: "h-10 w-10",
};

const backgroundClasses: Record<NonNullable<IconProps["background"]>, string> = {
  none: "",
  brand: "rounded-xl bg-brand-primary-light p-2 text-brand-primary",
  dark: "rounded-xl bg-brand-secondary p-2 text-brand-primary",
  muted: "rounded-xl bg-neutral-100 p-2 text-neutral-700",
};

/**
 * Icon wrapper component.
 *
 * Wraps any Lucide (or other SVG) icon to enforce consistent sizing,
 * spacing and optional background pill across the design system.
 *
 * Usage:
 *   <Icon size="md" background="brand">
 *     <Zap className="h-full w-full" aria-hidden />
 *   </Icon>
 *
 * Note: pass the Lucide icon as children — this component does not
 * import icons itself to keep bundle size minimal.
 */
export function Icon({
  size = "md",
  background = "none",
  className,
  children,
  "aria-hidden": ariaHidden = "true",
  ...props
}: IconProps) {
  return (
    <span
      aria-hidden={ariaHidden}
      className={clsx(
        "inline-flex items-center justify-center",
        sizeClasses[size],
        backgroundClasses[background],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
