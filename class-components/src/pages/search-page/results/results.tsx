import type { ReactNode } from 'react';

import { useAppSelector } from '@/app/hooks/storeHooks';

import { ResultItem } from './result-item/result-item';

import classes from './results.module.css';

export const Results = (): ReactNode => {
  const data = useAppSelector((state) => state.searchResults.data);
  const isEmpty = useAppSelector((state) => state.searchResults.isEmpty);

  if (isEmpty) {
    return <h2>No results</h2>;
  }

  if (data && data.length > 0) {
    return (
      <ul className={classes.list} data-testid="list">
        {data.map((item) => (
          <ResultItem key={item.id} {...item} />
        ))}
      </ul>
    );
  }
};
