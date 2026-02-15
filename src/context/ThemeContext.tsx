"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

interface ThemeContextValue {
  darkMode: boolean;
  isReady: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
const THEME_STORAGE_KEY = "theme";

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}

interface ThemeProviderProps {
  children: ReactNode;
}

function applyThemeClass(isDark: boolean): void {
  document.documentElement.classList.toggle("dark", isDark);
  document.documentElement.style.colorScheme = isDark ? "dark" : "light";
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [darkMode, setDarkMode] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let storedTheme: string | null = null;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    try {
      storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    } catch {
      storedTheme = null;
    }

    const initialDarkMode = storedTheme ? storedTheme === "dark" : mediaQuery.matches;
    setDarkMode(initialDarkMode);
    applyThemeClass(initialDarkMode);
    setIsReady(true);

    if (storedTheme) {
      return undefined;
    }

    const handleSystemThemeChange = (event: MediaQueryListEvent) => {
      setDarkMode(event.matches);
      applyThemeClass(event.matches);
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((previous) => {
      const next = !previous;
      applyThemeClass(next);
      try {
        window.localStorage.setItem(THEME_STORAGE_KEY, next ? "dark" : "light");
      } catch {
        // Ignore storage access failures.
      }
      return next;
    });
  };

  const value = useMemo(
    () => ({
      darkMode,
      isReady,
      toggleDarkMode,
    }),
    [darkMode, isReady],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
