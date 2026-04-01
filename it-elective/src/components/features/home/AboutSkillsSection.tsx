const skills = [
  "Cinematic Video Editing",
  "Color Grading",
  "Audio Mixing",
  "Speed Ramping",
  "UI Design",
];

export default function AboutSkillsSection() {
  return (
    <section className="border-y border-[var(--border)] bg-[rgba(18,19,27,0.02)] dark:bg-[rgba(18,19,27,0.35)]">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:py-14">
        <h2 className="text-2xl font-semibold tracking-tight">
          Quick About/Skills
        </h2>

        <div className="mt-6 rounded-3xl border border-[var(--border)] bg-[rgba(255,255,255,0.55)] p-8 dark:bg-[rgba(18,19,27,0.55)]">
          <p className="max-w-2xl mx-auto text-balance text-center text-sm text-[var(--muted)] sm:text-base">
            <br />
            Building calm, well-structured interfaces with clean components, good spacing,
            and purposeful interactions.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-[var(--border)] bg-[rgba(99,102,241,0.06)] px-4 py-2 text-xs font-medium text-[rgb(79,70,229)] dark:bg-[rgba(99,102,241,0.18)] dark:text-[rgb(165,180,252)]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

