import { type ReactNode, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { clsx } from 'clsx';

import { ThemeContext } from '@/app/providers/theme/theme';
import { Background } from '@/components/background/background';
import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header/header';

import classes from './not-found-page.module.css';

export const NotFoundPage = (): ReactNode => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  return (
    <div className={clsx(classes.app, classes[theme])}>
      <Header />

      <div className={classes.container}>
        <h1 className={classes.title}>Page not found</h1>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>

      <Background />
      <Footer />
    </div>
  );
};
