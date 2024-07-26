import { createContext } from 'react';

export type Theme = 'dark' | 'light';

export interface ThemeContext {
  setTheme: (theme: Theme) => void;
  theme: Theme;
}

export const ThemeContext = createContext<ThemeContext>({
  setTheme: () => {
    null;
  },
  theme: 'light',
});
