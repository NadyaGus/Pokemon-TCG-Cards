import { type ReactNode, useState } from 'react';
import { type SetURLSearchParams, useSearchParams } from 'react-router-dom';

import classes from './pagination.module.css';

interface PaginationProps {
  isLoading: boolean;
  searchValue: string;
  setSearchParams: SetURLSearchParams;
  totalCount: number;
}

export const Pagination = (props: PaginationProps): ReactNode => {
  const searchParams = useSearchParams()[0].get('page') ?? '1';
  const [page, setPage] = useState(searchParams);

  const handlePageIncrement = (): void => {
    if (Math.ceil(props.totalCount / 20) > +page) {
      setPage(`${+page + 1}`);
      props.setSearchParams({ name: props.searchValue, page: `${+page + 1}`, pageSize: '20' });
    }

    window.scrollTo(0, 0);
  };

  const handlePageDecrement = (): void => {
    if (+page > 1) {
      setPage(`${+page - 1}`);
      props.setSearchParams({ name: props.searchValue, page: `${+page - 1}`, pageSize: '20' });
    }

    window.scrollTo(0, 0);
  };

  if (props.totalCount) {
    return (
      <div className={props.isLoading ? classes.hidden : classes.pagination}>
        <button onClick={() => handlePageDecrement()}>Prev</button>
        <div>
          Page: {page} from {Math.ceil(props.totalCount / 20)}
        </div>
        <button onClick={() => handlePageIncrement()}>Next</button>
      </div>
    );
  }
};
