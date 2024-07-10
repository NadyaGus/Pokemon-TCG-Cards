import type { ReactNode } from 'react';
import { useState } from 'react';

import { Loader } from '@/features/loader/loader';
import { Pagination } from '@/features/pagination/pagination';
import { Results } from '@/features/results/results';
import { Search } from '@/features/search/search';
import { LS_KEY } from '@/utils/variables';

export const SearchPage = (): ReactNode => {
  const [searchValue, setSearchValue] = useState(localStorage.getItem(LS_KEY) ?? '');
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  return (
    <>
      <Search handleSearchValue={setSearchValue} searchValue={searchValue} setPage={setPage} />
      <Results
        isLoading={isLoading}
        page={page}
        searchValue={searchValue}
        setLoadingState={setIsLoading}
        setPage={setPage}
        setTotalCount={setTotalCount}
      />
      <Pagination page={page} setPage={setPage} totalCount={totalCount} />
      <Loader isLoading={isLoading} />
    </>
  );
};
