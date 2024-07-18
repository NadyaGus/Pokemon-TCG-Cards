import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Layout } from '@/components/layout/layout';

import { DetailsPage } from '../details-page/details-page';

describe('should search', () => {
  it('event route', async () => {
    const EVENT_FAKE = {
      hp: '90',
      id: 'gym2-1',
      images: {
        large: 'https://images.pokemontcg.io/gym2/1_hires.png',
        small: 'https://images.pokemontcg.io/gym2/1.png',
      },
      level: '42',
      name: "Blaine's Arcanine",
      nationalPokedexNumbers: [59],
      number: '1',
      rarity: 'Rare Holo',
      retreatCost: ['Colorless', 'Colorless', 'Colorless'],
      set: {
        id: 'gym2',
        images: {
          logo: 'https://images.pokemontcg.io/gym2/logo.png',
          symbol: 'https://images.pokemontcg.io/gym2/symbol.png',
        },
        legalities: { unlimited: 'Legal' },
        name: 'Gym Challenge',
        printedTotal: 132,
        ptcgoCode: 'G2',
        releaseDate: '2000/10/16',
        series: 'Gym',
        total: 132,
        updatedAt: '2022/10/10 15:12:00',
      },
      subtypes: ['Stage 1'],
      supertype: 'Pokémon',
      types: ['Fire'],
      weaknesses: [{ type: 'Water', value: '×2' }],
    };

    const routes = [
      {
        element: <DetailsPage />,
        loader: () => EVENT_FAKE,
        path: '/cards/:cardId',
      },
      {
        element: <Layout />,
        path: '/',
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/', '/cards/gym2-1'],
      initialIndex: 0,
    });

    const user = userEvent.setup();

    render(<RouterProvider router={router} />);

    expect(await screen.findByRole('button', { name: 'Search' })).toBeInTheDocument();
    await screen.findByRole('button', { name: 'Search' });

    const searchInput = screen.getByPlaceholderText('Search');
    const searchSubmit = screen.getByRole('button', { name: 'Search' });

    await user.type(searchInput, 'arcanine');
    await user.click(searchSubmit);

    const searchResults = await screen.findByText("Blaine's Arcanine");
    expect(searchResults).toBeInTheDocument();

    await user.click(screen.getByText("Blaine's Arcanine"));
    expect(screen.getByAltText("Blaine's Arcanine")).toBeInTheDocument();
  });
});
