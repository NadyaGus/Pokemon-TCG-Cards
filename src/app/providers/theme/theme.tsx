import { createContext } from 'react';

import { LS_KEY_THEME } from '@/app/variables';

export type Theme = 'dark' | 'light';

export interface ThemeContext {
  setTheme: (theme: Theme) => void;
  theme: Theme;
}

export const ThemeContext = createContext<ThemeContext>({
  setTheme: () => {
    null;
  },
  theme: localStorage.getItem(LS_KEY_THEME) as Theme,
});
