"use client";

import * as React from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = React.createContext<ThemeContextValue | undefined>(
  undefined,
);

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches
    ? "dark"
    : "light";
}

function applyThemeClass(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export function useTheme() {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // IMPORTANT: Start with a stable value for SSR hydration.
  // We update it in an effect after mount (prevents server/client mismatch).
  const [theme, setThemeState] = React.useState<Theme>("light");

  React.useEffect(() => {
    const stored =
      typeof window !== "undefined"
        ? window.localStorage.getItem("theme")
        : null;
    const nextTheme: Theme =
      stored === "light" || stored === "dark" ? stored : getSystemTheme();

    applyThemeClass(nextTheme);
    setThemeState(nextTheme);
  }, []);

  const setTheme = React.useCallback((next: Theme) => {
    applyThemeClass(next);
    setThemeState(next);
    window.localStorage.setItem("theme", next);
  }, []);

  const toggleTheme = React.useCallback(() => {
    setThemeState((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      applyThemeClass(next);
      window.localStorage.setItem("theme", next);
      return next;
    });
  }, []);

  const value = React.useMemo<ThemeContextValue>(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

