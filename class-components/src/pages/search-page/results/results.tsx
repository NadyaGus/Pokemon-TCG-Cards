import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import type { ResponseData } from '@/app/api/types';

import { useGetPokemonListQuery } from '@/app/api/pokemon';

import { ResultItem } from './result-item/result-item';

import classes from './results.module.css';

interface ResultsProps {
  isLoading: boolean;
  response?: ResponseData | void;
  setLoadingState: (isLoading: boolean) => void;
  setTotalCount: Dispatch<SetStateAction<number>>;
}

export const Results = (props: ResultsProps): ReactNode => {
  const [resultsList, setResultsList] = useState(props.response?.data);

  const [searchParams] = useSearchParams();

  const loaderHandler = props.setLoadingState;
  const setTotalCount = props.setTotalCount;

  const { data, error, isFetching } = useGetPokemonListQuery(
    `?page=${searchParams.get('page') ?? '1'}&pageSize=${searchParams.get('pageSize') ?? '20'}&search=${searchParams.get('search')}`,
  );

  //TODO: refactor
  useEffect(() => {
    isFetching ? loaderHandler(true) : loaderHandler(false);
  }, [isFetching, loaderHandler]);

  useEffect(() => {
    if (data) {
      setResultsList(data.data);
      setTotalCount(data?.totalCount ?? 0);
    }
  }, [data, setTotalCount]);

  if (resultsList?.length === 0) {
    return <h2>No results</h2>;
  }

  if (error) {
    return <h2>Sorry, something get wrong! Please try again</h2>;
  }

  if (resultsList && resultsList.length > 0) {
    return (
      <ul className={classes.list} data-testid="list">
        {resultsList.map((item) => (
          <ResultItem key={item.id} {...item} />
        ))}
      </ul>
    );
  }
};

// useEffect(() => {
//   const query = {
//     page: searchParams.get('page'),
//     pageSize: searchParams.get('pageSize'),
//     search: searchParams.get('search'),
//   };

//   loaderHandler(true);

//   getItemsList(query)
//     .then((response) => {
//       setResultsList(response?.data);
//       setTotalCount(response?.totalCount ?? 0);
//     })
//     .then(() => loaderHandler(false))
//     .catch((err) => console.error(err));
// }, [searchParams, loaderHandler, setTotalCount]);

// if (resultsList?.length === 0 || (!resultsList && !props.isLoading)) {
//   return (
//     <div>
//       <h2>No results</h2>
//     </div>
//   );
// }
// };
