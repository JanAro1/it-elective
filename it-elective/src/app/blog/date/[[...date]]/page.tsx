import BlogFeedSection from "@/components/features/blog/BlogFeedSection";
import BlogListHeaderSection from "@/components/features/blog/BlogListHeaderSection";
import { blogPosts } from "@/lib/blog/posts";
import { matchesPostDate, parseDateScope } from "@/lib/blog/date";

function renderScopeTitle(scope: ReturnType<typeof parseDateScope>) {
  if (scope.kind === "all") return "All dates";
  if (scope.kind === "year") return `Year: ${scope.year}`;
  if (scope.kind === "month") return `Month: ${scope.year}-${scope.month}`;
  return `Day: ${scope.year}-${scope.month}-${scope.day}`;
}

export default async function BlogDateScopedPage({
  params,
}: {
  params: Promise<{ date?: string[] }>;
}) {
  const { date } = await params;
  const scope = parseDateScope(date);

  const posts = blogPosts
    .filter((post) => matchesPostDate(post.date, scope))
    // Sort newest first for consistent UX
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <BlogListHeaderSection
        title="Section 1: Date Filter"
        subtitle={renderScopeTitle(scope)}
      />
      <BlogFeedSection posts={posts} emptyTitle="No posts match this date scope." />
    </>
  );
}

