import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Layout } from '@/components/layout/layout';
import { DetailsPage } from '@/pages/details-page/details-page';

describe('Layout', () => {
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

    render(<RouterProvider router={router} />);

    const loader = await screen.findByTestId('loader');
    expect(loader).toBeVisible();
  });
});
