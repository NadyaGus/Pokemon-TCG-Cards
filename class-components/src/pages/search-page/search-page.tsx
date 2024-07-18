import type { ReactNode } from 'react';
import { useState } from 'react';
import { Outlet, useParams, useSearchParams } from 'react-router-dom';

import { useLocalStorage } from '@/app/hooks/useLocalStorage';
import { Loader } from '@/features/loader/loader';
import { Pagination } from '@/features/pagination/pagination';
import { Results } from '@/pages/search-page/results/results';
import { Search } from '@/pages/search-page/search/search';

import classes from './search-page.module.css';

export const SearchPage = (): ReactNode => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;

  const [savedValue, setSavedValue] = useLocalStorage();
  const [searchValue, setSearchValue] = useState(savedValue);

  const [isLoading, setIsLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  const { cardId } = useParams();

  return (
    <>
      <Search
        handleSearchValue={setSearchValue}
        searchValue={searchValue}
        setSavedValue={setSavedValue}
        setSearchParams={setSearchParams}
      />

      <div className={classes.container}>
        <div className={cardId ? classes.resultsHalf : classes.results}>
          <Results isLoading={isLoading} setLoadingState={setIsLoading} setTotalCount={setTotalCount} />
        </div>

        <div className={cardId ? classes.outlet : classes.hidden}>
          <Outlet />
        </div>
      </div>

      <Pagination
        isLoading={isLoading}
        page={page}
        searchValue={searchValue}
        setSearchParams={setSearchParams}
        totalCount={totalCount}
      />

      <Loader isLoading={isLoading} />
    </>
  );
};
