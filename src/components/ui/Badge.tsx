import type { HTMLAttributes } from "react";
import { clsx } from "clsx";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "brand" | "dark" | "muted" | "success";
  size?: "sm" | "md";
}

const variantClasses = {
  brand: "bg-brand-primary text-brand-secondary font-semibold",
  dark: "bg-brand-secondary text-brand-primary font-semibold",
  muted: "bg-neutral-100 text-neutral-700 font-medium",
  success: "bg-success-50 text-success-700 font-medium",
};

const sizeClasses = {
  sm: "px-2.5 py-0.5 text-xs rounded-md",
  md: "px-3 py-1 text-sm rounded-lg",
};

/**
 * Badge component for service categories, trust signals, and labels.
 */
export function Badge({ variant = "muted", size = "md", className, children, ...props }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
