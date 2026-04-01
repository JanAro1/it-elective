"use client";

import * as React from "react";
import Link from "next/link";

import type { BlogPost } from "@/lib/blog/posts";

type FilterKey =
  | "all"
  | "video-editing"
  | "davinci"
  | "mixing-vocals"
  | "color-grading"
  | "audio";

const filters: Array<{ key: FilterKey; label: string }> = [
  { key: "all", label: "All Posts" },
  { key: "video-editing", label: "Video Editing" },
  { key: "davinci", label: "DaVinci Resolve" },
  { key: "mixing-vocals", label: "Mixing Vocals" },
  { key: "color-grading", label: "Color Grading" },
  { key: "audio", label: "Audio" },
];

function formatDate(iso: string) {
  const d = new Date(`${iso}T00:00:00`);
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function matchesFilter(post: BlogPost, key: FilterKey) {
  if (key === "all") return true;
  if (key === "video-editing") return post.categories.includes("video-editing");
  if (key === "audio") return post.categories.includes("audio");
  if (key === "color-grading") return post.slug.includes("color-grading");
  if (key === "davinci")
    return (
      post.slug.includes("davinci") ||
      post.title.toLowerCase().includes("davinci")
    );
  if (key === "mixing-vocals")
    return (
      post.slug.includes("mixing") ||
      post.title.toLowerCase().includes("mixing")
    );
  return true;
}

export default function BlogShowcaseSection({ posts }: { posts: BlogPost[] }) {
  const [activeFilter, setActiveFilter] = React.useState<FilterKey>("all");

  const filteredPosts = React.useMemo(
    () => posts.filter((p) => matchesFilter(p, activeFilter)),
    [posts, activeFilter],
  );

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-10 sm:py-14">
      <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        {filters.map((filter) => {
          const active = filter.key === activeFilter;
          return (
            <button
              key={filter.key}
              type="button"
              onClick={() => setActiveFilter(filter.key)}
              className={[
                "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
                active
                  ? "bg-[#e0e7ff] text-[#3730a3] dark:bg-[#1b2f52] dark:text-[#d7e6ff]"
                  : "bg-[#eef2ff] text-[#475569] hover:bg-[#e2e8f0] dark:bg-[#0f1728] dark:text-[#9cb1d1] dark:hover:bg-[#16253f]",
              ].join(" ")}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <div className="mt-5 space-y-3">
        {filteredPosts.map((post) => (
          <article
            key={post.slug}
            className="rounded-xl border border-[#dbe4f4] bg-white px-5 py-4 shadow-sm dark:border-[#1d2a44] dark:bg-[#0e162a]"
          >
            <Link
              href={`/blog/${post.slug}`}
              className="text-xl font-semibold text-[#0f172a] hover:underline dark:text-[#e5eeff]"
            >
              {post.title}
            </Link>
            <p className="mt-1 text-sm text-[#475569] dark:text-[#a9bad8]">
              {post.excerpt}
            </p>
            <div className="mt-2 text-xs text-[#64748b] dark:text-[#8394b2]">
              {formatDate(post.date)} • John Vincent Aro
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

