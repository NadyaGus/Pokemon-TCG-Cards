import { type ReactNode } from 'react';
import { RouterProvider } from 'react-router-dom';

import { ErrorBoundary } from './providers/error-boundary/error-boundary';
import { router } from './providers/router/router';

export const App = (): ReactNode => {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
};
