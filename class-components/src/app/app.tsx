import { type ReactNode } from 'react';
import { RouterProvider } from 'react-router-dom';

import { ErrorBoundary } from '@/shared/error-boundary/error-boundary';
import { router } from '@/shared/router/router';

export const App = (): ReactNode => {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
};
