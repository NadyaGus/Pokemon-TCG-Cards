import { type ReactNode } from 'react';

import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header/header';
import { SearchPage } from '@/pages/search-page';

import classes from './app.module.css';

export const App = (): ReactNode => {
  return (
    <div className={classes.app}>
      <Header />
      <SearchPage />
      <Footer />
      <div className={classes.background}></div>
    </div>
  );
};
