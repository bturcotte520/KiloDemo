'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type ColorScheme = 'classic' | 'dark' | 'neon';

interface ThemeContextType {
  colorScheme: ColorScheme;
  setColorScheme: (scheme: ColorScheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [colorScheme, setColorSchemeState] = useState<ColorScheme>('classic');
  const [mounted, setMounted] = useState(false);

  // Load saved theme from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const savedScheme = localStorage.getItem('colorScheme') as ColorScheme;
    if (savedScheme && ['classic', 'dark', 'neon'].includes(savedScheme)) {
      setColorSchemeState(savedScheme);
    }
  }, []);

  // Apply theme to document and save to localStorage
  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute('data-theme', colorScheme);
      localStorage.setItem('colorScheme', colorScheme);
    }
  }, [colorScheme, mounted]);

  const setColorScheme = (scheme: ColorScheme) => {
    setColorSchemeState(scheme);
  };

  return (
    <ThemeContext.Provider value={{ colorScheme, setColorScheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
