import type { ReactNode } from 'react';
import { useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';

import { Loader } from '@/features/loader/loader';
import { Pagination } from '@/features/pagination/pagination';
import { Results } from '@/features/results/results';
import { Search } from '@/features/search/search';
import { LS_KEY } from '@/utils/variables';

import classes from './search-page.module.css';

export const SearchPage = (): ReactNode => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('page') ? Number(searchParams.get('page')) : 1;

  const [searchValue, setSearchValue] = useState(localStorage.getItem(LS_KEY) ?? '');
  const [isLoading, setIsLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(search ?? 1);

  return (
    <>
      <Search
        handleSearchValue={setSearchValue}
        searchValue={searchValue}
        setPage={setPage}
        setSearchParams={setSearchParams}
      />

      <div className={classes.container}>
        <div className={classes.results}>
          <Results
            isLoading={isLoading}
            page={page}
            searchValue={searchValue}
            setLoadingState={setIsLoading}
            setTotalCount={setTotalCount}
          />
        </div>

        <div className={classes.outlet}>
          <Outlet context={{ isLoading }} />
        </div>
      </div>

      <Pagination
        isLoading={isLoading}
        page={page}
        searchValue={searchValue}
        setPage={setPage}
        setSearchParams={setSearchParams}
        totalCount={totalCount}
      />

      <Loader isLoading={isLoading} />
    </>
  );
};
