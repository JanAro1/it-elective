"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Sun, Moon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/components/providers/ThemeProvider";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const contactEmail = "arojohnvincent53@gmail.com";

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname?.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(246,247,251,0.7)] backdrop-blur dark:bg-[rgba(10,11,16,0.65)]">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <div className="flex items-center gap-3">
          <Link href="/" className="font-semibold tracking-tight">
            JVA
          </Link>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm transition-colors hover:text-[rgb(79,70,229)] dark:hover:text-[rgb(165,180,252)]",
                isActive(item.href) && "text-[rgb(79,70,229)] dark:text-[rgb(165,180,252)]",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="hidden md:inline-flex"
            onClick={() => toggleTheme()}
            type="button"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>

          <Button
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex"
            onClick={() => {
              window.location.href = `mailto:${contactEmail}`;
            }}
          >
            Contact Button
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Open navigation"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-[var(--border)] md:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-xl px-3 py-2 text-sm transition-colors hover:bg-[rgba(99,102,241,0.08)]",
                  isActive(item.href) &&
                    "bg-[rgba(99,102,241,0.12)] text-[rgb(79,70,229)] dark:text-[rgb(165,180,252)]",
                )}
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-2 flex items-center justify-between gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => toggleTheme()}
                type="button"
              >
                Toggle theme
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  window.location.href = `mailto:${contactEmail}`;
                }}
              >
                Contact Button
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

