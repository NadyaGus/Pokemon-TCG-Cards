import { type ReactNode, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { SearchPage } from '@/pages/search-page/search-page';
import { LS_KEY } from '@/utils/variables';

import { Footer } from '../footer/footer';
import { Header } from '../header/header';

import classes from './layout.module.css';

export const Layout = (): ReactNode => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    console.log(window.location);
    if (!searchParams.get('page')) {
      const search = localStorage.getItem(LS_KEY) ?? '';
      setSearchParams({ page: '1', pageSize: '20', search });
    }
  });

  return (
    <div className={classes.app}>
      <Header />
      <SearchPage />
      <div className={classes.background}></div>
      <Footer />
    </div>
  );
};
