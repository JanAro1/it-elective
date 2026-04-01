import Link from "next/link";
import Image from "next/image";

import { portfolioProjects } from "@/lib/portfolio/projects";

export default function FeaturedWorkSection() {
  const featured = portfolioProjects.slice(0, 3);

  return (
    <section className="bg-[rgba(99,102,241,0.04)] dark:bg-[rgba(99,102,241,0.08)] border-y border-[var(--border)]">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
             Featured Work
            </h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Selected projects that match your mockup layout and structure.
            </p>
          </div>
          <Link
            href="/projects"
            className="text-sm font-semibold text-[rgb(79,70,229)] hover:underline dark:text-[rgb(165,180,252)]"
          >
            See all
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {featured.map((p) => (
            <article
              key={p.id}
              className="group rounded-3xl border border-[var(--border)] bg-[rgba(255,255,255,0.55)] p-4 shadow-sm transition-transform hover:-translate-y-0.5 dark:bg-[rgba(18,19,27,0.55)]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[rgba(15,23,42,0.06)] dark:bg-[rgba(255,255,255,0.04)]">
                {p.imageUrl ? (
                  <Image
                    src={p.imageUrl}
                    alt={`${p.title} thumbnail`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 320px"
                    priority={p.id === featured[0]?.id}
                  />
                ) : null}
              </div>
              <div className="mt-5">
                <div className="text-sm font-semibold">{p.title}</div>
                <div className="mt-1 text-xs text-[var(--muted)]">
                  {p.briefTag} • {p.year}
                </div>
              </div>

              <div className="mt-5">
                <Link
                  href="/projects"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-[var(--border)] bg-white/40 px-3 py-2 text-sm font-semibold text-[rgb(79,70,229)] hover:bg-white/60 transition-colors dark:bg-[rgba(255,255,255,0.04)] dark:hover:bg-[rgba(255,255,255,0.07)]"
                >
                  View
                </Link>
              </div>

              <div className="mt-3 text-xs text-[var(--muted)]">
                {p.description}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

