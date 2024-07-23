import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Header } from './header';

describe('Header', () => {
  it('header should render', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    expect(screen.getByText('Pokémon TCG Cards')).toBeInTheDocument();
  });
});
