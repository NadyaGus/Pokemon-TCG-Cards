import type { ReactNode } from 'react';
import { useState } from 'react';

import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header/header';
import { Loader } from '@/features/loader/loader';
import { Results } from '@/features/results/results';
import { Search } from '@/features/search/search';
import { LS_KEY } from '@/utils/variables';

export interface PageState {
  handleSearchValue: (value: string) => void;
  isLoading: boolean;
  searchValue: string;
  setLoadingState: (isLoading: boolean) => void;
  timestamp: number;
}

export const SearchPage = (): ReactNode => {
  const [searchValue, setSearchValue] = useState(localStorage.getItem(LS_KEY) ?? '');

  const [isLoading, setIsLoading] = useState(true);
  const [timestamp, setTimestamp] = useState(Date.now());

  return (
    <>
      <Header />
      <Search handleSearchValue={setSearchValue} searchValue={searchValue} setTimestamp={setTimestamp} />
      <Results isLoading={isLoading} searchValue={searchValue} setLoadingState={setIsLoading} timestamp={timestamp} />
      <Footer />
      <Loader isLoading={isLoading} />
    </>
  );
};
