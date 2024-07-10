import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { useEffect, useState } from 'react';

import { type ResponseData, getItems } from '@/api/get-items';

import { ResultItem } from './result-item/result-item';

import classes from './results.module.css';

interface ResultsProps {
  isLoading: boolean;
  page: number;
  response?: ResponseData | void;
  searchValue: string;
  setLoadingState: (isLoading: boolean) => void;
  setPage: Dispatch<SetStateAction<number>>;
  setTotalCount: Dispatch<SetStateAction<number>>;
}

export const Results = (props: ResultsProps): ReactNode => {
  const [resultsList, setResultsList] = useState(props.response?.data);

  const loaderHandler = props.setLoadingState;
  const setTotalCount = props.setTotalCount;

  useEffect(() => {
    loaderHandler(true);

    getItems(props.searchValue, props.page)
      .then((response) => {
        setResultsList(response?.data);
        setTotalCount(response?.totalCount ?? 0);
      })
      .then(() => loaderHandler(false))
      .catch((err) => console.error(err));
  }, [props.searchValue, loaderHandler, props.page, setTotalCount]);

  if (resultsList && resultsList.length > 0) {
    return (
      <ul className={classes.list}>
        {resultsList.map((item) => (
          <ResultItem key={item.id} {...item} />
        ))}
      </ul>
    );
  }

  if (resultsList?.length === 0 || (!resultsList && !props.isLoading)) {
    return (
      <div>
        <h2>No results</h2>
      </div>
    );
  }
};
