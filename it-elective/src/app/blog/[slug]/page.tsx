import { notFound } from "next/navigation";

import BlogPostSection from "@/components/features/blog/BlogPostSection";
import { blogPosts } from "@/lib/blog/posts";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return <BlogPostSection post={post} />;
}

