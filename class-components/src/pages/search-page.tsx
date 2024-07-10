import type { ReactNode } from 'react';
import { useState } from 'react';

import { Loader } from '@/features/loader/loader';
import { Results } from '@/features/results/results';
import { Search } from '@/features/search/search';
import { LS_KEY } from '@/utils/variables';

export const SearchPage = (): ReactNode => {
  const [searchValue, setSearchValue] = useState(localStorage.getItem(LS_KEY) ?? '');

  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Search handleSearchValue={setSearchValue} searchValue={searchValue} />
      <Results isLoading={isLoading} searchValue={searchValue} setLoadingState={setIsLoading} />
      <Loader isLoading={isLoading} />
    </>
  );
};
