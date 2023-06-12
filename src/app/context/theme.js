'use client';

import {
  createContext, useContext, useState, useLayoutEffect, useMemo,
} from 'react';

const ThemeContext = createContext();

// TO - DO
// Add types to types.js DRY Code
// localstorage logic inside effect to wait window initialization (prevent undefined)

function ThemeProvider({ children }) {
  const initialTheme = () => localStorage.getItem('LOGICEA_THEME') || 'light';

  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = () => setTheme((themeSet) => (themeSet === 'light' ? 'dark' : 'light'));

  const contextValue = useMemo(() => ({ theme, toggleTheme }), [theme]);

  useLayoutEffect(() => {
    localStorage.setItem('LOGICEA_THEME', theme);

    if (theme === 'light') {
      document.documentElement.classList.remove('dark-mode');
      document.documentElement.classList.add('light-mode');
    } else {
      document.documentElement.classList.remove('light-mode');
      document.documentElement.classList.add('dark-mode');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('Need to be within a ThemeProvider');
  }

  return context;
};

export { ThemeProvider, useTheme };
