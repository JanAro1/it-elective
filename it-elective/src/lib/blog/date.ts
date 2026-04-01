function normalizeDateToken(token: string) {
  return token.replaceAll(".", "-").trim();
}

export type DateScope =
  | { kind: "all" }
  | { kind: "year"; year: string }
  | { kind: "month"; year: string; month: string }
  | { kind: "day"; year: string; month: string; day: string };

/**
 * Parses the optional catch-all segment for `/blog/date/[[...date]]`.
 * Examples:
 * - /blog/date -> { kind: "all" }
 * - /blog/date/2026 -> year
 * - /blog/date/2026/03 -> month
 * - /blog/date/2026/03/30 -> day
 * - /blog/date/2026-03-30 -> day (single token)
 */
export function parseDateScope(dateParts: string[] | undefined): DateScope {
  if (!dateParts || dateParts.length === 0) return { kind: "all" };

  // Allow single token: YYYY-MM or YYYY-MM-DD
  if (dateParts.length === 1) {
    const token = normalizeDateToken(dateParts[0]);
    const m = token.match(/^(\d{4})(?:-(\d{2}))?(?:-(\d{2}))?$/);
    if (m) {
      const [, year, month, day] = m;
      if (!month) return { kind: "year", year };
      if (!day) return { kind: "month", year, month };
      return { kind: "day", year, month, day };
    }
  }

  const [year, month, day] = dateParts;
  if (year && month && day) return { kind: "day", year, month, day };
  if (year && month) return { kind: "month", year, month };
  return { kind: "year", year: dateParts[0] };
}

export function matchesPostDate(postDate: string, scope: DateScope) {
  if (scope.kind === "all") return true;
  if (scope.kind === "year") return postDate.startsWith(`${scope.year}-`);
  if (scope.kind === "month")
    return postDate.startsWith(`${scope.year}-${scope.month}-`);
  // day
  return postDate === `${scope.year}-${scope.month}-${scope.day}`;
}

