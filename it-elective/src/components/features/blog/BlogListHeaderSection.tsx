export default function BlogListHeaderSection({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pt-10 sm:pt-14">
      <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
      {subtitle ? (
        <p className="mt-3 text-sm text-[var(--muted)]">{subtitle}</p>
      ) : null}
      <div className="mt-6 border-t border-[var(--border)]" />
    </section>
  );
}

