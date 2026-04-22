"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import {
  getPhoneClickContextFromPath,
  trackPhoneCallClick,
} from "@/lib/events";

const PHONE_DISPLAY = "0532 303 91 69";
const PHONE_TEL = "tel:+905323039169";

const navItems = [
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/bolgeler", label: "Bölgeler" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
] as const;

function trackHeaderPhoneClick() {
  const ctx = getPhoneClickContextFromPath(window.location.pathname);
  trackPhoneCallClick(ctx.page_type, ctx.region ? { region: ctx.region } : undefined);
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 max-w-full overflow-x-hidden border-b border-white/10 bg-dark text-white shadow-sm">
        <div className="mx-auto grid min-w-0 max-w-7xl grid-cols-[1fr_auto] items-center gap-4 px-4 py-3 md:grid-cols-[1fr_auto_1fr] md:py-4">
          <Link
            href="/"
            className="inline-flex min-w-0 max-w-full items-center justify-self-start transition-opacity hover:opacity-90"
          >
            <Logo variant="white" className="h-10 w-auto" />
          </Link>

          <nav
            className="hidden justify-self-center md:block"
            aria-label="Ana menü"
          >
            <ul className="flex items-center gap-8 lg:gap-10">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-white/90 transition-colors hover:text-white lg:text-base"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center justify-end gap-2 justify-self-end">
            <a
              href={PHONE_TEL}
              className="hidden items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-light md:inline-flex"
              onClick={trackHeaderPhoneClick}
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden />
              {PHONE_DISPLAY}
            </a>

            <button
              type="button"
              className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 md:hidden"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Menüyü aç"
            >
              <Menu className="h-7 w-7" aria-hidden />
            </button>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <div
          className="fixed inset-0 z-[60] flex flex-col bg-dark md:hidden"
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobil menü"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <span className="text-lg font-semibold">Menü</span>
            <button
              type="button"
              className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-lg text-white hover:bg-white/10"
              onClick={() => setMenuOpen(false)}
              aria-label="Menüyü kapat"
            >
              <X className="h-7 w-7" aria-hidden />
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-2 overflow-y-auto px-4 py-6" aria-label="Mobil ana menü">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex min-h-14 items-center rounded-xl px-4 text-lg font-medium text-white/95 transition-colors hover:bg-white/10 active:bg-white/15"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="border-t border-white/10 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <p className="mb-2 text-center text-sm text-white/70">Hemen ara</p>
            <a
              href={PHONE_TEL}
              className="flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-accent px-4 text-lg font-semibold text-white transition-colors hover:bg-accent-light active:bg-accent-light"
              onClick={trackHeaderPhoneClick}
            >
              <Phone className="h-5 w-5 shrink-0" aria-hidden />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
