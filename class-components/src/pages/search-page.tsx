import type { ReactNode } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header/header';
import { Loader } from '@/features/loader/loader';
import { Pagination } from '@/features/pagination/pagination';
import { Results } from '@/features/results/results';
import { Search } from '@/features/search/search';
import { LS_KEY } from '@/utils/variables';

export const SearchPage = (): ReactNode => {
  const { pageId } = useParams();
  const [page, setPage] = useState(pageId ? +pageId : 1);

  const [searchValue, setSearchValue] = useState(localStorage.getItem(LS_KEY) ?? '');
  const [isLoading, setIsLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  return (
    <>
      <Header />

      <Search handleSearchValue={setSearchValue} searchValue={searchValue} setPage={setPage} />

      <Results
        isLoading={isLoading}
        page={page}
        searchValue={searchValue}
        setLoadingState={setIsLoading}
        setTotalCount={setTotalCount}
      />

      <Pagination isLoading={isLoading} page={page} setPage={setPage} totalCount={totalCount} />

      <Loader isLoading={isLoading} />

      <Footer />
    </>
  );
};
