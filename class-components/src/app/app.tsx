import { type ReactNode } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from '@/routes/router';
import { ErrorBoundary } from '@/utils/error-boundary';

import classes from './app.module.css';

export const App = (): ReactNode => {
  return (
    <div className={classes.app}>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
      <div className={classes.background}></div>
    </div>
  );
};
