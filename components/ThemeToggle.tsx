"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-xl border border-custom px-3 py-2 text-sm hover:surface"
        aria-label="Toggle theme"
      >
        <span className="w-5 h-5" />
      </button>
    );
  }

  const current = theme === "system" ? resolvedTheme : theme;

  return (
    <button
      type="button"
      className="inline-flex items-center justify-center rounded-xl border border-custom px-3 py-2 text-sm hover:surface transition-all focus-ring"
      onClick={() => setTheme(current === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {current === "dark" ? "☾" : "☀︎"}
    </button>
  );
}
