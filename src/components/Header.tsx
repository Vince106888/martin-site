"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import type { NavLink } from "@/types/site";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/publications", label: "Publications" },
    { href: "/teaching", label: "Teaching" },
    { href: "/experience", label: "Experience" },
    { href: "/cv", label: "CV" },
    { href: "/contact", label: "Contact" },
  ];

  const navItemClass = (href: string): string => {
    const isActive = pathname === href;

    return [
      "rounded-lg px-3 py-2 text-sm font-medium transition-all",
      isActive
        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
        : "text-slate-900 hover:bg-blue-50 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-300",
    ].join(" ");
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-blue-200/80 bg-blue-100/92 backdrop-blur-xl transition-colors dark:border-slate-800/80 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Martin Wachiye Wafula"
            width={44}
            height={44}
            priority
            className="h-11 w-11 rounded-xl border border-blue-300/60 object-cover shadow-md dark:border-slate-700"
          />
          <div className="min-w-0">
            <p className="truncate text-base font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-lg">
              Martin Wachiye Wafula
            </p>
            <p className="hidden text-xs font-medium uppercase tracking-[0.13em] text-slate-900 md:block dark:text-slate-400">
              Engineering Science | Communication Systems
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={navItemClass(link.href)}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 lg:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav id="mobile-nav" className="space-y-1 border-t border-blue-200 bg-blue-100 px-4 py-4 dark:border-slate-800 dark:bg-slate-950/95 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={navItemClass(link.href)}
              onClick={() => setMobileMenuOpen(false)}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}



