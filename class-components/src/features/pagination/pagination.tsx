import { type ReactNode, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import classes from './pagination.module.css';

interface PaginationProps {
  totalCount: number;
}

export const Pagination = (props: PaginationProps): ReactNode => {
  const [disabledPrev, setDisabledPrev] = useState(false);
  const [disabledNext, setDisabledNext] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get('page') ?? '1');

  const name = searchParams.get('name') ?? '';

  const handlePageIncrement = (): void => {
    if (Math.ceil(props.totalCount / 20) > +page) {
      setSearchParams({ name, page: `${+page + 1}`, pageSize: '20' });
    }

    window.scrollTo(0, 0);
  };

  const handlePageDecrement = (): void => {
    if (+page > 1) {
      setSearchParams({ name, page: `${+page - 1}`, pageSize: '20' });
    }

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setPage(searchParams.get('page') ?? '1');
  }, [searchParams]);

  useEffect(() => {
    if (+page < Math.ceil(props.totalCount / 20)) {
      setDisabledNext(false);
    } else {
      setDisabledNext(true);
    }

    if (+page > 1) {
      setDisabledPrev(false);
    } else {
      setDisabledPrev(true);
    }
  }, [page, props.totalCount]);

  if (props.totalCount) {
    return (
      <div className={classes.pagination}>
        <button disabled={disabledPrev} onClick={() => handlePageDecrement()}>
          Prev
        </button>
        <div>
          Page: {page} from {Math.ceil(props.totalCount / 20)}
        </div>
        <button disabled={disabledNext} onClick={() => handlePageIncrement()}>
          Next
        </button>
      </div>
    );
  }
};
