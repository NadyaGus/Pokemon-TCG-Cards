import type { ReactNode } from 'react';
import type { SetURLSearchParams } from 'react-router-dom';

import classes from './pagination.module.css';

interface PaginationProps {
  isLoading: boolean;
  page: number;
  searchValue: string;
  setSearchParams: SetURLSearchParams;
  totalCount: number;
}

export const Pagination = (props: PaginationProps): ReactNode => {
  const handlePageIncrement = (): void => {
    if (Math.ceil(props.totalCount / 20) > props.page) {
      props.setSearchParams({ name: props.searchValue, page: `${props.page + 1}`, pageSize: '20' });
    }

    window.scrollTo(0, 0);
  };

  const handlePageDecrement = (): void => {
    if (props.page > 1) {
      props.setSearchParams({ name: props.searchValue, page: `${props.page - 1}`, pageSize: '20' });
    }

    window.scrollTo(0, 0);
  };

  if (props.totalCount) {
    return (
      <div className={props.isLoading ? classes.hidden : classes.pagination}>
        <button onClick={() => handlePageDecrement()}>Prev</button>
        <div>
          Page: {props.page} from {Math.ceil(props.totalCount / 20)}
        </div>
        <button onClick={() => handlePageIncrement()}>Next</button>
      </div>
    );
  }
};
