import { MemoryRouter, RouterProvider, createMemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import ue from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Layout } from '@/components/layout/layout';

import { Results } from './results';

describe('Results', () => {
  it('should render', () => {
    render(
      <MemoryRouter>
        <Results isLoading={false} setLoadingState={() => false} setTotalCount={() => 0} />
      </MemoryRouter>,
    );
    expect(screen.getByText('No results')).toBeInTheDocument();
  });
});

describe('SearchPage', () => {
  it('should show 20 items', async () => {
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

    render(<RouterProvider router={router} />);

    const userEvent = ue.setup();
    const searchInput = screen.getByPlaceholderText('Search');
    const searchSubmit = screen.getByText('Search');

    await userEvent.type(searchInput, 'arcanine');
    await userEvent.click(searchSubmit);

    expect(await screen.findAllByTestId('item')).toHaveLength(20);
  });
});
