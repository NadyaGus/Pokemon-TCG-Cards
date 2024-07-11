import type { Dispatch, ReactNode, SetStateAction } from 'react';
import type { SetURLSearchParams } from 'react-router-dom';

import classes from './pagination.module.css';

interface PaginationProps {
  isLoading: boolean;
  page: number;
  searchValue: string;
  setPage: Dispatch<SetStateAction<number>>;
  setSearchParams: SetURLSearchParams;
  totalCount: number;
}

export const Pagination = (props: PaginationProps): ReactNode => {
  const handlePageIncrement = (): void => {
    if (Math.ceil(props.totalCount / 20) > props.page) {
      props.setPage(props.page + 1);
      props.setSearchParams({ page: `${props.page + 1}`, pageSize: '20', search: props.searchValue });
    }

    window.scrollTo(0, 0);
  };

  const handlePageDecrement = (): void => {
    if (props.page > 1) {
      props.setPage(props.page - 1);
      props.setSearchParams({ page: `${props.page - 1}`, pageSize: '20', search: props.searchValue });
    }

    window.scrollTo(0, 0);
  };

  return (
    <div className={props.isLoading ? classes.hidden : classes.pagination}>
      <button onClick={() => handlePageDecrement()}>Prev</button>
      <div>
        Page: {props.page} from {Math.ceil(props.totalCount / 20)}
      </div>
      <button onClick={() => handlePageIncrement()}>Next</button>
    </div>
  );
};
