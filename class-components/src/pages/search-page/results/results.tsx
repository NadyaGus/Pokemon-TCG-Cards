import type { ReactNode } from 'react';

import type { ResponseData } from '@/app/api/types';

import { ResultItem } from './result-item/result-item';

import classes from './results.module.css';

interface ResultsProps {
  data: ResponseData | undefined;
}

export const Results = (props: ResultsProps): ReactNode => {
  if (props.data?.totalCount === 0) {
    return <h2>No results</h2>;
  }

  if (props.data && props.data.totalCount > 0) {
    return (
      <ul className={classes.list} data-testid="list">
        {props.data.data.map((item) => (
          <ResultItem key={item.id} {...item} />
        ))}
      </ul>
    );
  }
};
