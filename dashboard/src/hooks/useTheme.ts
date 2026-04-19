import { useState, useEffect, useCallback } from "react";

type Theme = "dark" | "light";

const STORAGE_KEY = "pieeg_theme";

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function getInitialTheme(): Theme {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return getSystemTheme();
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    localStorage.setItem(STORAGE_KEY, t);
    document.documentElement.setAttribute("data-theme", t);
  }, []);

  const toggle = useCallback(() => {
    setTheme(document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light");
  }, [setTheme]);

  // Apply on mount
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Listen for OS theme changes (only if user hasn't explicitly chosen)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const handler = () => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setTheme(mq.matches ? "light" : "dark");
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [setTheme]);

  return { theme, setTheme, toggle } as const;
}
