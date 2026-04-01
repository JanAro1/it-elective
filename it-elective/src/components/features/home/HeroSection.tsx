import Link from "next/link";
import { ArrowRight } from "lucide-react";
const contactEmail = "arojohnvincent53@gmail.com";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:py-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>

          <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            I build modern, responsive interfaces that feel clean and intentional.
          </h1>

          <p className="mt-4 max-w-xl text-pretty text-[var(--muted)]">
            From layout rhythm to client-side interactions, I focus on usability and
            aesthetics that scale across devices.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl bg-[rgb(79,70,229)] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[rgb(67,56,202)] transition-colors"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-white/50 px-4 py-2.5 text-sm font-semibold text-[rgb(79,70,229)] hover:bg-white/70 transition-colors dark:bg-[rgba(255,255,255,0.04)] dark:hover:bg-[rgba(255,255,255,0.07)]"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-7 rounded-2xl border border-[var(--border)] bg-[var(--card)]/60 p-4">
            <div className="mt-1 text-sm text-[var(--muted)]">
              Designing thoughtful UI and shipping reliable web experiences.
            </div>
          </div>
        </div>

        <div className="relative md:justify-self-end">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.35),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.22),transparent_50%)] blur-2xl" />
          <div className="relative rounded-[2.25rem] border border-[var(--border)] bg-[rgba(255,255,255,0.55)] p-8 shadow-sm dark:bg-[rgba(18,19,27,0.55)]">
            <div className="flex items-center gap-4">
              <div className="relative h-36 w-36 overflow-hidden rounded-2xl border border-[var(--border)] sm:h-40 sm:w-40">
                <Image
                  src="/profile/myPic.jpg"
                  alt="Profile photo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 144px, 160px"
                />
              </div>
              <div>
                <div className="text-lg font-semibold tracking-tight sm:text-xl">
                  John Vincent Aro
                </div>
                <div className="mt-1 text-sm text-[var(--muted)] sm:text-base">
                  Frontend Developer • Video Editor
                </div>
                <div className="mt-2 text-sm text-[var(--muted)]">
                  Building clean interfaces and cinematic visual stories.
                </div>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-[var(--border)] bg-[rgba(255,255,255,0.5)] p-4 text-sm text-[var(--muted)] dark:bg-[rgba(255,255,255,0.04)]">
                UI Polish
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[rgba(255,255,255,0.5)] p-4 text-sm text-[var(--muted)] dark:bg-[rgba(255,255,255,0.04)]">
                Next.js
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[rgba(255,255,255,0.5)] p-4 text-sm text-[var(--muted)] dark:bg-[rgba(255,255,255,0.04)]">
                Accessibility
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute -bottom-6 -right-4 hidden h-24 w-24 rounded-full border border-[var(--border)] bg-[rgba(99,102,241,0.14)] sm:block" />
        </div>
      </div>
    </section>
  );
}

