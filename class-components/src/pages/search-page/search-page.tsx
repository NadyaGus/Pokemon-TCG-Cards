import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { Outlet, useParams, useSearchParams } from 'react-router-dom';

import { useGetPokemonListQuery } from '@/app/api/pokemonApi';
import { useLocalStorage } from '@/app/hooks/useLocalStorage';
import { Loader } from '@/features/loader/loader';
import { Pagination } from '@/features/pagination/pagination';
import { Results } from '@/pages/search-page/results/results';
import { Search } from '@/pages/search-page/search/search';

import classes from './search-page.module.css';

export const SearchPage = (): ReactNode => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [savedValue, setSavedValue] = useLocalStorage();
  const [searchValue, setSearchValue] = useState(savedValue);

  const [isLoading, setIsLoading] = useState(true);

  const { cardId } = useParams();

  const { data, /* error, */ isFetching } = useGetPokemonListQuery(
    `?page=${searchParams.get('page') ?? '1'}&pageSize=${searchParams.get('pageSize') ?? '20'}&q=name:${searchParams.get('name') ?? ''}*`,
  );

  useEffect(() => {
    isFetching ? setIsLoading(true) : setIsLoading(false);
  }, [isFetching, setIsLoading]);

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
          <Results data={data} />
        </div>

        <div className={cardId ? classes.outlet : classes.hidden}>
          <Outlet />
        </div>
      </div>

      <Pagination
        isLoading={isLoading}
        searchValue={searchValue}
        setSearchParams={setSearchParams}
        totalCount={data?.totalCount ?? 0}
      />

      <Loader isLoading={isLoading} />
    </>
  );
};
