"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";

const scopes: Array<{ label: string; href: string }> = [
  { label: "All", href: "/blog/date" },
  { label: "2026", href: "/blog/date/2026" },
  { label: "2026 / 03", href: "/blog/date/2026/03" },
  { label: "2026 / 03 / 12", href: "/blog/date/2026/03/12" },
];

export default function BlogDateFilterControls() {
  const router = useRouter();
  const pathname = usePathname();

  const activeHref = React.useMemo(() => {
    if (!pathname?.startsWith("/blog/date")) return "/blog/date";
    return pathname;
  }, [pathname]);

  const [selected, setSelected] = React.useState(activeHref);

  React.useEffect(() => {
    setSelected(activeHref);
  }, [activeHref]);

  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
      {scopes.map((s) => {
        const isActive =
          selected === s.href ||
          (selected?.startsWith(s.href + "/") && s.href !== "/blog/date");

        return (
          <button
            key={s.href}
            type="button"
            onClick={() => {
              setSelected(s.href);
              router.push(s.href);
            }}
            className={[
              "rounded-full border px-4 py-2 text-xs font-semibold transition-colors",
              isActive
                ? "border-[rgb(79,70,229)] bg-[rgba(99,102,241,0.14)] text-[rgb(79,70,229)] dark:bg-[rgba(165,180,252,0.18)] dark:text-[rgb(165,180,252)]"
                : "border-[var(--border)] bg-white/40 text-[var(--muted)] hover:bg-white/60 dark:bg-[rgba(255,255,255,0.04)] dark:hover:bg-[rgba(255,255,255,0.07)]",
            ].join(" ")}
          >
            {s.label}
          </button>
        );
      })}
    </div>
  );
}

