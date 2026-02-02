'use client';

import React from 'react';
import { useTheme, ColorScheme } from '../contexts/ThemeContext';

const ThemeSelector: React.FC = () => {
  const { colorScheme, setColorScheme } = useTheme();

  const themes: { value: ColorScheme; label: string; icon: string }[] = [
    { value: 'classic', label: 'Classic', icon: '🟡' },
    { value: 'dark', label: 'Dark', icon: '🌙' },
    { value: 'neon', label: 'Neon', icon: '⚡' },
  ];

  return (
    <div className="bg-theme-panel border border-theme-border p-3 rounded text-theme-text font-mono">
      <div className="text-xs font-bold mb-2">COLOR SCHEME</div>
      <div className="flex gap-2">
        {themes.map((theme) => (
          <button
            key={theme.value}
            onClick={() => setColorScheme(theme.value)}
            className={`
              px-3 py-1.5 rounded text-xs font-bold transition-all
              ${
                colorScheme === theme.value
                  ? 'bg-theme-accent text-theme-accent-text'
                  : 'bg-theme-button text-theme-button-text hover:bg-theme-button-hover'
              }
            `}
            title={theme.label}
          >
            <span className="mr-1">{theme.icon}</span>
            {theme.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
