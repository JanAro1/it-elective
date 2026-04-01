import Link from "next/link";

import type { BlogPost, BlogCategory } from "@/lib/blog/posts";

function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
}

export default function BlogPostSection({ post }: { post: BlogPost }) {
  return (
    <article className="mx-auto w-full max-w-6xl px-4 py-10 sm:py-14">
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/blog"
          className="text-sm font-semibold text-[rgb(79,70,229)] hover:underline dark:text-[rgb(165,180,252)]"
        >
          ← Back to Blog
        </Link>
        <div className="text-xs font-semibold text-[var(--muted)]">
          {formatDate(post.date)}
        </div>
      </div>

      <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
        {post.title}
      </h1>

      <div className="mt-4 flex flex-wrap gap-2">
        {post.categories.map((c) => (
          <CategoryChip key={c} category={c as BlogCategory} />
        ))}
      </div>

      <div className="mt-6 rounded-3xl border border-[var(--border)] bg-[rgba(255,255,255,0.55)] p-6 shadow-sm dark:bg-[rgba(18,19,27,0.55)]">
        <p className="text-sm text-[var(--muted)]">{post.excerpt}</p>

        <div className="mt-5 space-y-4">
          {post.content.map((paragraph, idx) => (
            <p
              key={idx}
              className="text-sm leading-relaxed text-[var(--foreground)]/90"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
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

