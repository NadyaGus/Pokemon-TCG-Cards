import { type ReactNode, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { ITEM_PER_PAGE } from '@/app/variables';

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

  const scrollToTop = (): void => {
    window.scrollTo(0, 0);
  };

  const handlePageIncrement = (): void => {
    if (Math.ceil(props.totalCount / +ITEM_PER_PAGE) > +page) {
      setSearchParams({ name, page: `${+page + 1}`, pageSize: ITEM_PER_PAGE });
    }

    scrollToTop();
  };

  const handlePageDecrement = (): void => {
    if (+page > 1) {
      setSearchParams({ name, page: `${+page - 1}`, pageSize: ITEM_PER_PAGE });
    }

    scrollToTop();
  };

  useEffect(() => {
    setPage(searchParams.get('page') ?? '1');
  }, [searchParams]);

  useEffect(() => {
    if (+page < Math.ceil(props.totalCount / +ITEM_PER_PAGE)) {
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
          Page: {page} from {Math.ceil(props.totalCount / +ITEM_PER_PAGE)}
        </div>
        <button disabled={disabledNext} onClick={() => handlePageIncrement()}>
          Next
        </button>
      </div>
    );
  }
};
