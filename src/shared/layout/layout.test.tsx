import { Provider } from 'react-redux';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { store } from '@/app/providers/store/configureStore';

import { Layout } from './layout';

describe('Layout', () => {
  global.URL.createObjectURL = vi.fn();

  it('layout should be render', () => {
    const routes = [
      {
        element: <Layout />,
        path: '/',
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
      initialIndex: 1,
    });

    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>,
    );

    expect(screen.getByText('Pokémon TCG Cards')).toBeInTheDocument();
  });
});
