import { type ReactNode, useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

import { SearchPage } from '@/pages/search-page';
import { APP_ROUTES } from '@/routes/router';

import { Footer } from '../footer/footer';
import { Header } from '../header/header';

import classes from './layout.module.css';

export const Layout = (): ReactNode => {
  const navigate = useNavigate();
  const { pageId } = useParams();

  useEffect(() => {
    if (!pageId) {
      navigate(`${APP_ROUTES.page}/1`);
      window.scrollTo(0, 0);
    }
  }, [navigate, pageId]);

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
