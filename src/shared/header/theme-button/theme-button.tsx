import { type ReactNode, useContext, useEffect } from 'react';

import { clsx } from 'clsx';

import { useLocalStorageTheme } from '@/app/hooks/useLocalStorageTheme';
import { ThemeContext } from '@/app/providers/theme/theme';

import classes from './theme-button.module.css';

export const ThemeButton = (): ReactNode => {
  const { setTheme, theme } = useContext(ThemeContext);
  const [themeValue, setThemeValue] = useLocalStorageTheme();

  const handleClick = (): void => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    setThemeValue(theme);
  }, [theme, setThemeValue]);

  return <button className={clsx(classes.button, classes[themeValue])} onClick={() => handleClick()}></button>;
};
