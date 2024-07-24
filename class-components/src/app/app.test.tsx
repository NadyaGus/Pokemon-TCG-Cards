import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';

import { App } from './app';

it('full app rendering', () => {
  render(<App />);

  expect(screen.getByText('Pokémon TCG Cards')).toBeInTheDocument();
});
