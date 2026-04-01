import Link from "next/link";

import type { BlogPost, BlogCategory } from "@/lib/blog/posts";

function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

export default function BlogFeedSection({
  posts,
  emptyTitle = "No posts found",
}: {
  posts: BlogPost[];
  emptyTitle?: string;
}) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:py-12">
      <div className="space-y-4">
        {posts.length === 0 ? (
          <div className="rounded-3xl border border-[var(--border)] bg-[rgba(255,255,255,0.55)] p-6 text-sm text-[var(--muted)] dark:bg-[rgba(18,19,27,0.55)]">
            {emptyTitle}
          </div>
        ) : (
          posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-3xl border border-[var(--border)] bg-[rgba(255,255,255,0.55)] p-5 shadow-sm transition-colors dark:bg-[rgba(18,19,27,0.55)]"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-[var(--muted)]">
                    {formatDate(post.date)}
                  </div>
                  <h2 className="mt-1 text-base font-semibold">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-2 text-sm text-[var(--muted)]">{post.excerpt}</p>
                </div>

                <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
                  <div className="flex flex-wrap gap-2">
                    {post.categories.map((c) => (
                      <CategoryChip key={c} category={c as BlogCategory} />
                    ))}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm font-semibold text-[rgb(79,70,229)] hover:underline dark:text-[rgb(165,180,252)]"
                  >
                    [Small Read More link]
                  </Link>
                </div>
              </div>
            </article>
          ))
        )}
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

