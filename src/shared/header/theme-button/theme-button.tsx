import { type ReactNode, useContext } from 'react';

import { clsx } from 'clsx';

import { ThemeContext } from '@/app/providers/theme/theme';

import classes from './theme-button.module.css';

export const ThemeButton = (): ReactNode => {
  const { setTheme, theme } = useContext(ThemeContext);

  const handleClick = (): void => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return <button className={clsx(classes.button, classes[theme])} onClick={() => handleClick()}></button>;
};
