import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import Link from "next/link";
import { clsx } from "clsx";
import type { ButtonVariant, ButtonSize } from "@/types";

// ─── Shared style maps ────────────────────────────────────────────────────────

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-primary text-brand-secondary font-semibold hover:bg-brand-primary-hover active:scale-95 shadow-sm hover:shadow-brand-glow",
  secondary:
    "bg-transparent border-2 border-brand-primary text-brand-primary font-semibold hover:bg-brand-primary hover:text-brand-secondary active:scale-95",
  ghost:
    "bg-transparent text-brand-secondary font-medium hover:bg-neutral-100 active:scale-95",
  link: "bg-transparent text-brand-primary font-medium underline-offset-4 hover:underline p-0",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-lg min-h-[36px]",
  md: "px-6 py-3 text-base rounded-xl min-h-[44px]",
  lg: "px-8 py-4 text-lg rounded-xl min-h-[52px]",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none";

// ─── Props ────────────────────────────────────────────────────────────────────

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  fullWidth?: boolean;
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
    href?: never;
  };

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "link";
    href: string;
  };

type ButtonAsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * Polymorphic Button component.
 * Renders as <button>, <Link> (Next.js), or <a> depending on the `as` prop.
 *
 * - as="button" (default): standard HTML button
 * - as="link": Next.js <Link> for internal navigation
 * - as="a": plain <a> for external links (tel:, https://, etc.)
 */
export function Button({
  variant = "primary",
  size = "md",
  className,
  fullWidth = false,
  ...props
}: ButtonProps) {
  const classes = clsx(
    baseClasses,
    variantClasses[variant],
    variant !== "link" && sizeClasses[size],
    fullWidth && "w-full",
    className,
  );

  if (props.as === "link") {
    const { as: _as, href, ...rest } = props as ButtonAsLink;
    return (
      <Link className={classes} href={href} {...rest} />
    );
  }

  if (props.as === "a") {
    const { as: _as, href, ...rest } = props as ButtonAsAnchor;
    return (
      <a className={classes} href={href} {...rest} />
    );
  }

  const { as: _as, ...rest } = props as ButtonAsButton;
  return <button className={classes} {...rest} />;
}
