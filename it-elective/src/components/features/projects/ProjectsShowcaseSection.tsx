"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  getProjectsByCategory,
  type ProjectCategory,
} from "@/lib/portfolio/projects";

import { Button } from "@/components/ui/Button";

const contactEmail = "arojohnvincent53@gmail.com";

const tabs: Array<{ key: "all" | ProjectCategory; label: string }> = [
  { key: "all", label: "All" },
  { key: "development", label: "Development" },
  { key: "videography", label: "Videography" },
];

export default function ProjectsShowcaseSection() {
  const [active, setActive] = React.useState<"all" | ProjectCategory>("all");

  const projects = React.useMemo(() => getProjectsByCategory(active), [active]);

  return (
    <div>
      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:py-14">
        <h1 className="text-3xl font-semibold tracking-tight">Recent Projects</h1>
        <div className="mt-6 border-t border-[var(--border)]" />

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          {tabs.map((t) => {
            const selected = t.key === active;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => setActive(t.key)}
                className={[
                  "rounded-full border px-4 py-2 text-xs font-semibold transition-colors",
                  selected
                    ? "border-[rgb(79,70,229)] bg-[rgba(99,102,241,0.14)] text-[rgb(79,70,229)] dark:bg-[rgba(165,180,252,0.18)] dark:text-[rgb(165,180,252)]"
                    : "border-[var(--border)] bg-white/40 text-[var(--muted)] hover:bg-white/60 dark:bg-[rgba(255,255,255,0.04)] dark:hover:bg-[rgba(255,255,255,0.07)]",
                ].join(" ")}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group rounded-3xl border border-[var(--border)] bg-[rgba(255,255,255,0.55)] p-6 shadow-sm transition-transform hover:-translate-y-0.5 dark:bg-[rgba(18,19,27,0.55)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-[var(--border)] bg-[rgba(15,23,42,0.06)] dark:bg-[rgba(255,255,255,0.04)]">
                {p.imageUrl ? (
                  <Image
                    src={p.imageUrl}
                    alt={`${p.title} thumbnail`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    priority={p.id === projects[0]?.id}
                  />
                ) : null}
                <div className="absolute inset-0 bg-black/0 transition-colors duration-200 group-hover:bg-black/50" />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center gap-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                  <Link
                    href={p.liveUrl ?? "#"}
                    target={p.liveUrl ? "_blank" : undefined}
                    rel={p.liveUrl ? "noreferrer" : undefined}
                    className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-black transition hover:bg-white/90"
                  >
                    Live
                  </Link>
                  {p.codeUrl ? (
                    <Link
                      href={p.codeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg border border-white/80 bg-transparent px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-white/15"
                    >
                      Code
                    </Link>
                  ) : null}
                </div>
              </div>
              <div className="mt-5">
                <div className="text-base font-semibold">{p.title}</div>
                <div className="mt-1 text-sm text-[var(--muted)]">
                  {p.briefTag} • {p.year}
                </div>
              </div>
              <p className="mt-3 text-sm text-[var(--muted)]">{p.description}</p>
              {p.tags?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--border)] bg-[rgba(99,102,241,0.08)] px-3 py-1.5 text-xs font-semibold text-[rgb(79,70,229)] dark:text-[rgb(165,180,252)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[rgba(18,19,27,0.02)] dark:bg-[rgba(18,19,27,0.35)]">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:py-14">
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight">
              Let’s Collaborate
            </h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Let’s work together. Bring ideas to life.
            </p>

            <div className="mt-6 inline-flex items-center justify-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  window.location.href = `mailto:${contactEmail}`;
                }}
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

