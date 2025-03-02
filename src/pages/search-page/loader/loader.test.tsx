import { Provider } from 'react-redux';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { store } from '@/app/providers/store/configureStore';
import { DetailsPage } from '@/pages/details-page/details-page';
import { Layout } from '@/shared/layout/layout';

describe('Layout', () => {
  global.URL.createObjectURL = vi.fn();

  it('loader should be visible', async () => {
    const FAKE_EVENT = { name: 'test event' };
    const routes = [
      {
        element: <Layout />,
        loader: () => FAKE_EVENT,
        path: '/',
      },
      {
        element: <DetailsPage />,
        loader: () => FAKE_EVENT,
        path: '/cards/:cardId',
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/', '/cards/1'],
      initialIndex: 0,
    });

    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>,
    );

    const loader = await screen.findByTestId('loader');
    expect(loader).toBeVisible();
  });
});
