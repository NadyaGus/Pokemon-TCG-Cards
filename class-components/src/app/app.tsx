import { type ReactNode } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { ErrorBoundary } from './providers/error-boundary/error-boundary';
import { router } from './providers/router/router';
import { store } from './providers/store/configureStore';

export const App = (): ReactNode => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ErrorBoundary>
  );
};
