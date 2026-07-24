import { useState, useEffect } from 'react';

const STORAGE_KEY = 'theme';

function getStoredPreference(): 'dark' | 'light' | null {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === 'dark' || stored === 'light' ? stored : null;
}

function resolveInitialTheme(): boolean {
  const stored = getStoredPreference();
  if (stored) return stored === 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(resolveInitialTheme());

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = (event: MediaQueryListEvent) => {
      if (!getStoredPreference()) {
        setIsDarkMode(event.matches);
      }
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      localStorage.setItem(STORAGE_KEY, next ? 'dark' : 'light');
      return next;
    });
  };

  const resetToSystem = () => {
    localStorage.removeItem(STORAGE_KEY);
    setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
  };

  return { isDarkMode, toggleDarkMode, resetToSystem };
}

export default useDarkMode;
