import type { ReactNode } from 'react';

import classes from './background.module.css';

export const Background = (): ReactNode => {
  return <div className={classes.background}></div>;
};
