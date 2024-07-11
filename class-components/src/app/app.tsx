import { type ReactNode } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from '@/routes/router';
import { ErrorBoundary } from '@/utils/error-boundary';

export const App = (): ReactNode => {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
};
