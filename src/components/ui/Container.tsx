import type { HTMLAttributes } from "react";
import { clsx } from "clsx";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Maximum width constraint.
   * - "default": 1280px — standard content width
   * - "narrow": 768px — for long-form text (blog posts, Chi Siamo)
   * - "wide": 1536px — for full-bleed sections that still need a cap
   */
  size?: "narrow" | "default" | "wide";
}

/**
 * Max-width container with responsive horizontal padding.
 * Wraps page content to prevent lines from stretching on large screens.
 */
export function Container({ size = "default", className, children, ...props }: ContainerProps) {
  return (
    <div
      className={clsx(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        {
          "max-w-3xl": size === "narrow",
          "max-w-7xl": size === "default",
          "max-w-screen-2xl": size === "wide",
        },
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
