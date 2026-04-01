const educationItems = [
  {
    institution: "Cordova Public College",
    degree: "B.S. in Information Technology",
    year: "2026",
    overview:
      "Focused on software engineering fundamentals, web development, and UI architecture.",
  },
];

export default function EducationSection() {
  return (
    <section className="border-t border-[var(--border)] bg-[rgba(99,102,241,0.02)] dark:bg-[rgba(99,102,241,0.08)]">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:py-16">
        <h2 className="text-3xl font-semibold tracking-tight">
           Education
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {educationItems.map((item) => (
            <div
              key={item.degree}
              className="rounded-3xl border border-[var(--border)] bg-[rgba(255,255,255,0.55)] p-6 dark:bg-[rgba(18,19,27,0.55)]"
            >
              <div className="text-sm font-semibold text-[var(--foreground)]">
                {item.institution}
              </div>
              <div className="mt-2 text-sm text-[var(--muted)]">
                <span className="font-semibold">{item.degree}</span> • {item.year}
              </div>
              <div className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {item.overview}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

