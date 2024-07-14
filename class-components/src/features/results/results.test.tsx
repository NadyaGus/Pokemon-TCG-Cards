import { MemoryRouter, RouterProvider, createMemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import arcinine from '@/tests/msw/arcanine.json';

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

import ue from '@testing-library/user-event';

import { Layout } from '@/components/layout/layout';

describe('SearchPage', () => {
  it('should find arcanine', async () => {
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

    render(
      <MemoryRouter>
        <Results
          isLoading={false}
          response={arcinine}
          setLoadingState={() => false}
          setTotalCount={() => arcinine.totalCount}
        />
      </MemoryRouter>,
    );

    const userEvent = ue.setup();
    const searchInput = screen.getByPlaceholderText('Search');
    const searchSubmit = screen.getByText('Search');

    await userEvent.type(searchInput, 'arcanine');
    await userEvent.click(searchSubmit);

    expect(await screen.findAllByRole('listitem')).toHaveLength(20);
  });
});
