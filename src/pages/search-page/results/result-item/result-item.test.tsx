import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { store } from '@/app/providers/store/configureStore';

import { ResultItem } from './result-item';

const pokemon = {
  hp: '35',
  id: '123',
  images: {
    large: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
    small: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
  },
  name: 'Pikachu',
  set: {
    name: 'Base Set',
    series: 'scarlet-violet',
  },
  subtypes: ['Physical'],
  supertype: 'Pokémon',
  types: ['Electric'],
};

describe('Results-Item', () => {
  it('results item should render', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <ResultItem {...pokemon} />
        </Provider>
      </MemoryRouter>,
    );
    expect(screen.getByRole('listitem')).toBeInTheDocument();
    expect(screen.getByText('Pikachu')).toBeInTheDocument();
    expect(screen.getByText('Set: Base Set')).toBeInTheDocument();
  });
});
