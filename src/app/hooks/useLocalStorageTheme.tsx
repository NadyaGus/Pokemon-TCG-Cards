import type { Dispatch } from 'react';
import { useEffect, useState } from 'react';

import { LS_KEY_THEME } from '@/app/variables';

import type { Theme } from '../providers/theme/theme';

const themeInitialValue = (): Theme => {
  const theme = localStorage.getItem(LS_KEY_THEME);
  if (theme === 'dark' || theme === 'light') {
    return theme;
  } else {
    return 'light';
  }
};

export const useLocalStorageTheme = (): [Theme, Dispatch<React.SetStateAction<Theme>>] => {
  const [themeValue, setThemeValue] = useState<Theme>(themeInitialValue());

  useEffect(() => {
    localStorage.setItem(LS_KEY_THEME, themeValue);
  }, [themeValue]);

  return [themeValue, setThemeValue];
};
