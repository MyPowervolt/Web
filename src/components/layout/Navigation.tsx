import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { clsx } from "clsx";
import { PRIMARY_NAV } from "@/data/navigation";
import type { NavItem } from "@/types";

interface NavLinkProps {
  item: NavItem;
  className?: string;
  onLinkClick?: () => void;
}

/**
 * Single navigation link, with optional dropdown for items with children.
 * Used by both desktop Header and mobile drawer.
 */
export function NavLink({ item, className, onLinkClick }: NavLinkProps) {
  const hasChildren = item.children && item.children.length > 0;

  if (!hasChildren) {
    return (
      <Link
        className={clsx(
          "flex items-center gap-1 font-medium transition-colors hover:text-brand-primary",
          className,
        )}
        href={item.href}
        {...(onLinkClick !== undefined && { onClick: onLinkClick })}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="group relative">
      <button
        aria-expanded="false"
        aria-haspopup="true"
        className={clsx(
          "flex items-center gap-1 font-medium transition-colors hover:text-brand-primary",
          className,
        )}
        type="button"
      >
        {item.label}
        <ChevronDown
          aria-hidden="true"
          className="h-4 w-4 transition-transform group-hover:rotate-180"
        />
      </button>

      {/* Dropdown panel */}
      <div className="absolute left-0 top-full z-50 hidden min-w-56 rounded-xl border border-white/10 bg-brand-secondary py-2 shadow-[0_8px_32px_rgba(0,0,0,0.4)] group-hover:block">
        {item.children?.map((child) => (
          <Link
            key={child.href}
            className="block px-4 py-2.5 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-brand-primary"
            href={child.href}
            {...(onLinkClick !== undefined && { onClick: onLinkClick })}
          >
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

/**
 * Desktop navigation bar links.
 * Used inside Header on md+ screens.
 */
export function DesktopNav() {
  return (
    <nav aria-label="Navigazione principale">
      <ul className="hidden items-center gap-8 md:flex" role="list">
        {PRIMARY_NAV.map((item) => (
          <li key={item.href}>
            <NavLink className="text-sm text-white/90" item={item} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

/**
 * Mobile navigation link list.
 * Used inside the mobile drawer/menu.
 */
export function MobileNav({ onClose }: { onClose: () => void }) {
  return (
    <nav aria-label="Navigazione mobile">
      <ul className="flex flex-col gap-1" role="list">
        {PRIMARY_NAV.map((item) => (
          <li key={item.href}>
            <Link
              className="flex items-center rounded-lg px-4 py-3 font-medium text-white/90 transition-colors hover:bg-white/5 hover:text-brand-primary"
              href={item.href}
              onClick={onClose}
            >
              {item.label}
            </Link>
            {/* Mobile sub-items for Servizi */}
            {item.children && item.children.length > 0 && (
              <ul className="ml-4 border-l-2 border-white/10 pl-4" role="list">
                {item.children.map((child) => (
                  <li key={child.href}>
                    <Link
                      className="block py-2 text-sm text-white/50 transition-colors hover:text-brand-primary"
                      href={child.href}
                      onClick={onClose}
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
