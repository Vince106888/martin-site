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
  const [darkMode] = useState(true);
  const [isReady] = useState(true);

  useEffect(() => {
    applyThemeClass(true);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, "dark");
    } catch {
      // Ignore storage access failures.
    }
  }, []);

  const toggleDarkMode = () => {
    // Light mode is temporarily disabled.
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
