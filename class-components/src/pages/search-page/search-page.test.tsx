import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Layout } from '@/components/layout/layout';

describe('should search', () => {
  it('event route', async () => {
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

    // const user = userEvent.setup();
    expect(await screen.findByRole('button', { name: 'Search' })).toBeInTheDocument();
    await screen.findByRole('button', { name: 'Search' });

    // const searchInput = screen.getByPlaceholderText('Search');
    // const searchSubmit = screen.getByRole('button', { name: 'Search' });

    // await user.type(searchInput, 'arcanine');
    // await user.click(searchSubmit);

    expect(await screen.findByText('arcanine')).toBeInTheDocument();
  });
});
