import { type ReactNode, useContext, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { clsx } from 'clsx';

import { useLocalStorage } from '@/app/hooks/useLocalStorage';
import { ThemeContext } from '@/app/providers/theme/theme';
import { SearchPage } from '@/pages/search-page/search-page';

import { Background } from '../background/background';
import { Flyout } from '../flyout/flyout';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

import classes from './layout.module.css';

export const Layout = (): ReactNode => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue] = useLocalStorage();

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (!searchParams.get('page')) {
      const name = searchValue;
      setSearchParams({ name, page: '1', pageSize: '20' });
    }
  });

  return (
    <div className={clsx(classes.app, classes[theme])}>
      <Header />
      <SearchPage />
      <Background />
      <Flyout />
      <Footer />
    </div>
  );
};
