import Link from "next/link";

import { blogPosts, type BlogCategory } from "@/lib/blog/posts";

function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" });
}

export default function BlogInsightsFeedSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:py-16">
      <h2 className="text-3xl font-semibold tracking-tight"> Latest Insights </h2>

      <div className="mt-6 space-y-4">
        {blogPosts.map((post) => (
          <div
            key={post.slug}
            className="rounded-3xl border border-[var(--border)] bg-[rgba(255,255,255,0.55)] p-5 dark:bg-[rgba(18,19,27,0.55)]"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <div className="text-xs font-semibold text-[var(--muted)]">
                  {formatDate(post.date)}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-1 block truncate text-base font-semibold hover:underline"
                >
                  {post.title}
                </Link>
              </div>

              <div className="flex flex-col items-start gap-2 sm:items-end">
                <div className="flex flex-wrap gap-2">
                  {post.categories.slice(0, 3).map((c) => (
                    <CategoryChip key={c} category={c as BlogCategory} />
                  ))}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-semibold text-[rgb(79,70,229)] hover:underline dark:text-[rgb(165,180,252)]"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CategoryChip({ category }: { category: BlogCategory }) {
  return (
    <Link
      href={`/category/${category}`}
      className="rounded-full border border-[var(--border)] bg-[rgba(99,102,241,0.06)] px-3 py-1 text-xs font-semibold text-[rgb(79,70,229)] hover:bg-[rgba(99,102,241,0.12)] dark:bg-[rgba(99,102,241,0.18)] dark:text-[rgb(165,180,252)]"
    >
      {category}
    </Link>
  );
}

