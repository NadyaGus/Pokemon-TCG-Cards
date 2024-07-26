import { type ReactNode, useContext } from 'react';

import { clsx } from 'clsx';

import { ThemeContext } from '@/app/providers/theme/theme';

import classes from './background.module.css';

export const Background = (): ReactNode => {
  const { theme } = useContext(ThemeContext);

  return <div className={clsx(classes.background, classes[theme])}></div>;
};
