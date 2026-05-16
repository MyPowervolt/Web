"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SITE_CONFIG } from "@/data/site-config";
import { PRIMARY_NAV } from "@/data/navigation";
import { clsx } from "clsx";
import type { NavItem } from "@/types";

// ─── Dark-theme desktop nav ───────────────────────────────────────────────────

function DarkNavLink({ item }: { item: NavItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const hasChildren = Boolean(item.children && item.children.length > 0);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!isOpen) return;
    function handleClick(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen]);

  if (!hasChildren) {
    return (
      <Link
        className="flex items-center gap-1 text-sm font-medium text-white/90 transition-colors hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-secondary"
        href={item.href}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="relative" ref={wrapperRef}>
      <button
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="flex items-center gap-1 text-sm font-medium text-white/90 transition-colors hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-secondary"
        type="button"
        onClick={() => setIsOpen((v) => !v)}
      >
        {item.label}
        <ChevronDown
          aria-hidden="true"
          className={clsx("h-4 w-4 transition-transform", isOpen && "rotate-180")}
        />
      </button>

      {/* Dropdown — dark themed, JS-controlled for accessibility */}
      {isOpen && (
        <div className="absolute left-0 top-full z-50 min-w-56 rounded-xl border border-white/10 bg-brand-secondary py-2 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          {item.children?.map((child) => (
            <Link
              key={child.href}
              className="block px-4 py-2.5 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-secondary"
              href={child.href}
              onClick={() => setIsOpen(false)}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function DesktopNavDark() {
  return (
    <nav aria-label="Navigazione principale">
      <ul className="hidden items-center gap-8 md:flex" role="list">
        {PRIMARY_NAV.map((item) => (
          <li key={item.href}>
            <DarkNavLink item={item} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

function MobileNavDark({ onClose }: { onClose: () => void }) {
  return (
    <nav aria-label="Navigazione mobile">
      <ul className="flex flex-col gap-1" role="list">
        {PRIMARY_NAV.map((item) => (
          <li key={item.href}>
            <Link
              className="flex items-center rounded-lg px-4 py-3 font-medium text-white/90 transition-colors hover:bg-white/5 hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-secondary"
              href={item.href}
              onClick={onClose}
            >
              {item.label}
            </Link>
            {/* Sub-items for Servizi */}
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

// ─── Header ───────────────────────────────────────────────────────────────────

/**
 * Sticky site header — dark premium industrial style.
 *
 * Background: brand-secondary (#1a1a2e) — guarantees the white SVG logo and
 * all white navigation text remain visible at all times.
 *
 * Layout:
 *   Desktop (md+): logo | nav | phone | CTA button
 *   Mobile (<md):  logo | phone icon | hamburger → side drawer
 *
 * Scroll state adds a deeper drop shadow and a slightly more opaque bottom
 * border to reinforce the "elevated" sticky surface.
 */
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      // Restore focus to hamburger trigger when drawer closes
      hamburgerRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header
        className={clsx(
          "sticky top-0 z-40 w-full bg-brand-secondary transition-all duration-200",
          isScrolled
            ? "border-b border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.35)]"
            : "border-b border-white/5",
        )}
      >
        {/* Amber accent hairline at the very top edge */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-primary to-transparent"
        />

        <Container>
          <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
            {/* ── Logo ── */}
            <Link
              aria-label="PowerVolt — Torna alla homepage"
              className="shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-secondary"
              href="/"
            >
              <Image
                alt="PowerVolt — Impianti Elettrici"
                className="h-10 w-auto lg:h-12"
                height={44}
                priority
                src="/LogoPageS.svg"
                width={160}
              />
            </Link>

            {/* ── Desktop navigation ── */}
            <DesktopNavDark />

            {/* ── Desktop right actions ── */}
            <div className="hidden items-center gap-3 md:flex">
              <a
                aria-label={`Chiama PowerVolt: ${SITE_CONFIG.phoneFormatted}`}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-white/90 transition-colors hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-secondary"
                href={`tel:${SITE_CONFIG.phone}`}
              >
                <Phone aria-hidden="true" className="h-4 w-4 text-brand-primary" />
                {SITE_CONFIG.phoneFormatted}
              </a>

              <Button as="link" href="/contatti#sopralluogo" size="md" variant="primary">
                Richiedi un Sopralluogo
              </Button>
            </div>

            {/* ── Mobile: phone icon + hamburger ── */}
            <div className="flex items-center gap-1 md:hidden">
              <a
                aria-label="Chiama PowerVolt"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-white/90 transition-colors hover:bg-white/10 hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-secondary"
                href={`tel:${SITE_CONFIG.phone}`}
              >
                <Phone aria-hidden="true" className="h-5 w-5" />
              </a>

              <button
                ref={hamburgerRef}
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? "Chiudi menu" : "Apri menu"}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-white/90 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-secondary"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                type="button"
              >
                {isMenuOpen ? (
                  <X aria-hidden="true" className="h-5 w-5" />
                ) : (
                  <Menu aria-hidden="true" className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* ── Mobile drawer — dark to match header ── */}
      {isMenuOpen && (
        <div
          aria-modal="true"
          className="fixed inset-0 z-30 md:hidden"
          id="mobile-menu"
          role="dialog"
        >
          {/* Backdrop */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeMenu}
          />

          {/* Drawer panel — offset matches header height (h-16 md, h-20 lg) */}
          <div className="absolute right-0 top-16 h-[calc(100vh-4rem)] w-80 max-w-full overflow-y-auto bg-brand-secondary shadow-[0_8px_32px_rgba(0,0,0,0.5)] lg:top-20 lg:h-[calc(100vh-5rem)]">
            {/* Amber accent stripe at drawer top */}
            <div
              aria-hidden="true"
              className="h-[2px] w-full bg-gradient-to-r from-transparent via-brand-primary to-transparent"
            />

            <div className="p-6">
              <MobileNavDark onClose={closeMenu} />

              {/* Mobile CTAs */}
              <div className="mt-8 space-y-3">
                <Button
                  as="link"
                  fullWidth
                  href="/contatti#sopralluogo"
                  size="md"
                  variant="primary"
                  onClick={closeMenu}
                >
                  Richiedi un Sopralluogo
                </Button>
                <Button
                  as="a"
                  className="border-white/30 text-white hover:border-brand-primary hover:text-brand-primary"
                  fullWidth
                  href={`tel:${SITE_CONFIG.phone}`}
                  size="md"
                  variant="secondary"
                >
                  <Phone aria-hidden="true" className="h-4 w-4" />
                  {SITE_CONFIG.phoneFormatted}
                </Button>
              </div>

              {/* Footer tagline */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-xs text-white/35">{SITE_CONFIG.tagline}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
