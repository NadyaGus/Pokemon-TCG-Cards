import { render, screen } from '@testing-library/react';
import { expect, it, vi } from 'vitest';

import { App } from './app';

it('full app rendering', () => {
  global.URL.createObjectURL = vi.fn();

  render(<App />);

  expect(screen.getByText('Pokémon TCG Cards')).toBeInTheDocument();
});
