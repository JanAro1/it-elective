import Link from "next/link";

const contactEmail = "arojohnvincent53@gmail.com";

const socialLinks = [
  { href: "https://github.com/JanAro1", label: "GitHub" },
  { href: "https://www.facebook.com/JanAro30", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[rgba(246,247,251,0.5)] dark:bg-[rgba(10,11,16,0.45)]">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-2">
          <div className="font-semibold">JVA</div>
          <div className="text-sm text-[var(--muted)]">
            arojohnvincent53@gmail.com
          </div>
          <a
            className="inline-flex text-sm text-[rgb(79,70,229)] hover:underline dark:text-[rgb(165,180,252)]"
            href={`mailto:${contactEmail}`}
          >
            Email Link
          </a>
        </div>

        <div>
          <div className="mb-3 text-sm font-medium">Social Media Links</div>
          <ul className="space-y-2 text-sm text-[var(--muted)]">
            {socialLinks.map((s) => (
              <li key={s.href}>
                <Link
                  className="hover:text-[rgb(79,70,229)] dark:hover:text-[rgb(165,180,252)]"
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-sm text-[var(--muted)] lg:col-span-1">
          <div className="mb-3 text-sm font-medium">Copyright Notice</div>
          <div>© {new Date().getFullYear()} John Vincent Aro. All rights reserved.</div>
        </div>

        <div className="hidden lg:block" aria-hidden="true" />
      </div>
    </footer>
  );
}

