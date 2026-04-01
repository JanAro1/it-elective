import BlogFeedSection from "@/components/features/blog/BlogFeedSection";
import BlogListHeaderSection from "@/components/features/blog/BlogListHeaderSection";
import { blogPosts } from "@/lib/blog/posts";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string[] }>;
}) {
  const { category } = await params;
  // Catch-all segments come from the route: /category/[...category]
  const segments = category ?? [];
  const wanted = segments.filter(Boolean).map((s) => s.toLowerCase());
  const posts = blogPosts.filter((post) =>
    post.categories.some((c) => wanted.includes(c.toLowerCase())),
  );

  const title =
    wanted.length > 0
      ? `Category: ${wanted.join(" / ")}`
      : "Category";

  return (
    <>
      <BlogListHeaderSection
        title="Section 1: Category Results"
        subtitle={title}
      />
      <BlogFeedSection posts={posts} emptyTitle="No posts match this category." />
    </>
  );
}

