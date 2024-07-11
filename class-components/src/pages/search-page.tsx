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

  const [searchValue, setSearchValue] = useState(localStorage.getItem(LS_KEY) ?? '');
  const [isLoading, setIsLoading] = useState(true);
  // const [page, setPage] = useState(pageId ? +pageId : 1);
  const [totalCount, setTotalCount] = useState(0);

  return (
    <>
      <Header />

      <Search handleSearchValue={setSearchValue} searchValue={searchValue} />

      <Results
        isLoading={isLoading}
        page={pageId ? +pageId : 1}
        searchValue={searchValue}
        setLoadingState={setIsLoading}
        setTotalCount={setTotalCount}
      />

      <Pagination page={pageId ? +pageId : 1} totalCount={totalCount} />

      <Loader isLoading={isLoading} />

      <Footer />
    </>
  );
};
