import { blogPosts } from "@/lib/blog/posts";
import Image from "next/image";

export default function BioSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:py-16">
      <h1 className="text-3xl font-semibold tracking-tight">About</h1>

      <div className="mt-8 grid gap-10 md:grid-cols-2 md:items-start">
        <div className="rounded-[2rem] border border-[var(--border)] bg-[rgba(255,255,255,0.55)] p-5 shadow-sm dark:bg-[rgba(18,19,27,0.55)]">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[var(--border)]">
            <Image
              src="/profile/myPic1.jpg"
              alt="John Vincent Aro"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-sm font-semibold text-[rgb(79,70,229)] dark:text-[rgb(165,180,252)]">
            [Multi Paragraph Text]
          </div>
          <p className="text-sm leading-relaxed text-[var(--foreground)]/90">
            Hi, I’m <span className="font-semibold">John Vincent Aro</span>. I enjoy crafting intuitive UI and engaging videos that flow smoothly and deliver 
            a clean, professional experience.
          </p>
          <p className="text-sm leading-relaxed text-[var(--muted)]">
            My approach is simple: design the layout first, build reusable components, then
            add client-side interactions only when they truly improve the experience.
          </p>
          <p className="text-sm leading-relaxed text-[var(--muted)]">
            This portfolio mirrors your mockup structure while aiming for a cleaner,
            modern feel. Explore the projects grid or read my latest insights.
          </p>

          <div className="rounded-3xl border border-[var(--border)] bg-[rgba(99,102,241,0.06)] p-5 dark:bg-[rgba(99,102,241,0.14)]">
            <div className="text-sm font-semibold">Latest insight</div>
            <div className="mt-1 text-sm text-[var(--muted)]">
              {blogPosts[0]?.title}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

