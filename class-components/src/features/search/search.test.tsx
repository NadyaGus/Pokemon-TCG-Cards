import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Search } from './search';

describe('Search form must render', () => {
  it('should render', () => {
    render(
      <MemoryRouter>
        <Search
          handleSearchValue={() => ''}
          searchValue=""
          setSavedValue={() => {
            ('');
          }}
          setSearchParams={() => {
            ('');
          }}
        />
      </MemoryRouter>,
    );
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });
});
