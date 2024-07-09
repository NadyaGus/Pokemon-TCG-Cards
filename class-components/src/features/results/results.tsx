import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

import { type ResponseData, getItems } from '@/api/get-items';

import { ResultItem } from './result-item/result-item';

import classes from './results.module.css';

interface ResultsProps {
  response?: ResponseData | void;
  searchValue: string;
  setLoadingState: (isLoading: boolean) => void;
}

export const Results = (props: ResultsProps): ReactNode => {
  const [resultsList, setResultsList] = useState(props.response?.data);

  const loaderHandler = props.setLoadingState;

  useEffect(() => {
    loaderHandler(true);

    getItems(props.searchValue)
      .then((response) => setResultsList(response?.data))
      .then(() => loaderHandler(false))
      .catch((err) => console.error(err));
  }, [props.searchValue, loaderHandler]);

  if (resultsList && resultsList.length > 0) {
    return (
      <ul className={classes.list}>
        {resultsList.map((item) => (
          <ResultItem key={item.id} {...item} />
        ))}
      </ul>
    );
  }

  if (resultsList?.length === 0) {
    return (
      <div>
        <h2>No results</h2>
      </div>
    );
  }
};
