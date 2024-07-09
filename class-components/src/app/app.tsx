import { type ReactNode } from 'react';

import { SearchPage } from '@/pages/main-page';

import classes from './app.module.css';

export const App = (): ReactNode => {
  return (
    <div className={classes.app}>
      <SearchPage />
      <div className={classes.background}></div>
    </div>
  );
};
