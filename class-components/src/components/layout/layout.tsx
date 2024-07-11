import type { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import { SearchPage } from '@/pages/search-page';

import { Footer } from '../footer/footer';
import { Header } from '../header/header';

import classes from './layout.module.css';

export const Layout = (): ReactNode => {
  return (
    <div className={classes.app}>
      <Header />
      <SearchPage />
      <Outlet />
      <div className={classes.background}></div>
      <Footer />
    </div>
  );
};
