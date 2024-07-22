import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { Outlet, useParams, useSearchParams } from 'react-router-dom';

import { clsx } from 'clsx';

import { useGetPokemonListQuery } from '@/app/api/pokemonApi';
import { useLocalStorage } from '@/app/hooks/useLocalStorage';
import { store } from '@/app/providers/store/configureStore';
import { Loader } from '@/features/loader/loader';
import { Pagination } from '@/features/pagination/pagination';
import { Results } from '@/pages/search-page/results/results';
import { Search } from '@/pages/search-page/search/search';

import { searchSlice } from './search-page.slice';

import classes from './search-page.module.css';

export const SearchPage = (): ReactNode => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [savedValue, setSavedValue] = useLocalStorage();
  const [searchValue, setSearchValue] = useState(savedValue);

  const [isLoading, setIsLoading] = useState(true);

  const { cardId } = useParams();

  const { data, isFetching } = useGetPokemonListQuery(
    `?page=${searchParams.get('page') ?? '1'}&pageSize=${searchParams.get('pageSize') ?? '20'}&q=name:${searchParams.get('name') ?? ''}*`,
  );

  useEffect(() => {
    store.dispatch(searchSlice.actions.setResultsList(data?.data ?? []));
    store.dispatch(searchSlice.actions.isEmpty(false));

    if (data && data.totalCount === 0) {
      store.dispatch(searchSlice.actions.isEmpty(true));
    }
  }, [data, searchValue]);

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

      <div className={classes.results}>
        <Results />
      </div>

      <div className={clsx(classes.outlet, cardId ? classes.show : '')}>
        <Outlet />
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
