import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Layout } from './layout';

describe('Layout', () => {
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

    render(<RouterProvider router={router} />);

    expect(screen.getByText('Pokémon TCG Cards')).toBeInTheDocument();
  });
});
