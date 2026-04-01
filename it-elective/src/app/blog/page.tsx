import BlogShowcaseSection from "@/components/features/blog/BlogShowcaseSection";
import { blogPosts } from "@/lib/blog/posts";

export default function BlogIndexPage() {
  return <BlogShowcaseSection posts={blogPosts} />;
}

