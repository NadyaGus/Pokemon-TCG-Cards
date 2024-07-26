import { type ReactNode, useState } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import type { Theme } from './providers/theme/theme';

import { ErrorBoundary } from './providers/error-boundary/error-boundary';
import { router } from './providers/router/router';
import { store } from './providers/store/configureStore';
import { ThemeContext } from './providers/theme/theme';

export const App = (): ReactNode => {
  const [theme, setTheme] = useState<Theme>('light');

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ThemeContext.Provider value={{ setTheme, theme }}>
          <RouterProvider router={router} />
        </ThemeContext.Provider>
      </Provider>
    </ErrorBoundary>
  );
};
