import { type ReactNode, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import { SearchPage } from '@/pages/search-page/search-page';

import { Background } from '../background/background';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

import classes from './layout.module.css';

export const Layout = (): ReactNode => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue] = useLocalStorage();

  useEffect(() => {
    if (!searchParams.get('page')) {
      const search = searchValue;
      setSearchParams({ page: '1', pageSize: '20', search });
    }
  });

  return (
    <div className={classes.app}>
      <Header />
      <SearchPage />
      <Background />
      <Footer />
    </div>
  );
};
