import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import { APP_ROUTES } from '@/routes/router';

import classes from './pagination.module.css';

interface PaginationProps {
  isLoading: boolean;
  page: number;
  totalCount: number;
}

export const Pagination = (props: PaginationProps): ReactNode => {
  const navigate = useNavigate();

  const handlePageIncrement = (): void => {
    if (Math.ceil(props.totalCount / 20) > props.page) {
      navigate(`${APP_ROUTES.page}/${props.page + 1}`);
    }

    window.scrollTo(0, 0);
  };

  const handlePageDecrement = (): void => {
    if (props.page > 1) {
      navigate(`${APP_ROUTES.page}/${props.page - 1}`);
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
