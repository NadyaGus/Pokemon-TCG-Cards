import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

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
