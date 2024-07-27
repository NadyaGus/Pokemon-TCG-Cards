import { Provider } from 'react-redux';
import { MemoryRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import type { Pokemon } from '@/app/api/types';

import { store } from '@/app/providers/store/configureStore';
import { Layout } from '@/shared/layout/layout';
import json from '@/tests/msw/arcanine.json';

import { DetailsPage } from './details-page';

describe('Details Page', () => {
  it('should render', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <DetailsPage />
        </Provider>
      </MemoryRouter>,
    );

    expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument();
  });

  it('data should be correct', async () => {
    global.URL.createObjectURL = vi.fn();
    const data = json.data.find((card) => card.id === 'gym2-1') as Pokemon;
    const user = userEvent.setup();

    const routes = [
      {
        element: <DetailsPage />,
        loader: () => data,
        path: '/cards/gym2-1',
      },
      {
        element: <Layout />,
        path: '/',
      },
    ];

    const router = createBrowserRouter(routes);

    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>,
    );

    const searchButton = await screen.findByRole('button', { name: 'Search' });
    expect(searchButton).toBeInTheDocument();

    const searchInput = screen.getByPlaceholderText('Search');
    const searchSubmit = screen.getByRole('button', { name: 'Search' });

    await user.type(searchInput, 'arcanine');
    await user.click(searchSubmit);

    const searchResult = await screen.findByAltText("Blaine's Arcanine");
    expect(searchResult).toBeInTheDocument();

    await user.click(searchResult);

    setTimeout(() => {
      expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: "Blaine's Arcanine" })).toBeInTheDocument();
      expect(screen.getByRole('img', { name: "Blaine's Arcanine" })).toBeInTheDocument();
      expect(screen.getByText('HP: 35')).toBeInTheDocument();
      expect(screen.getByText('Set: Base Set')).toBeInTheDocument();
    }, 3000);
  });
});
