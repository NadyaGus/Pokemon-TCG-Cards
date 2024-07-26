import { Provider } from 'react-redux';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import ue from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { store } from '@/app/providers/store/configureStore';
import { Layout } from '@/shared/layout/layout';

const routes = [
  {
    element: <Layout />,
    path: '/',
  },
];

const router = createMemoryRouter(routes, {
  initialEntries: ['/'],
  initialIndex: 0,
});

describe('Results', () => {
  global.URL.createObjectURL = vi.fn();

  it('results should render', async () => {
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>,
    );
    expect(await screen.findByRole('list')).toBeInTheDocument();
  });

  it('should show 12 items', async () => {
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>,
    );

    const userEvent = ue.setup();
    const searchInput = screen.getByPlaceholderText('Search');
    const searchSubmit = screen.getByText('Search');

    await userEvent.type(searchInput, 'arcanine');
    await userEvent.click(searchSubmit);

    expect(await screen.findAllByTestId('item')).toHaveLength(12);
  });
});
