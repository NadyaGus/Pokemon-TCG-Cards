import type { Dispatch, ReactNode, SetStateAction } from 'react';

interface PaginationProps {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  totalCount: number;
}

export const Pagination = (props: PaginationProps): ReactNode => {
  const handlePageIncrement = (): void => {
    if (Math.ceil(props.totalCount / 20) > props.page) {
      props.setPage(props.page + 1);
    } else {
      console.log('No more pages');
    }
  };

  const handlePageDecrement = (): void => {
    if (props.page > 1) {
      props.setPage(props.page - 1);
    }
  };

  return (
    <div>
      <button onClick={() => handlePageIncrement()}>Next</button>
      <div>
        Page: {props.page} from {Math.ceil(props.totalCount / 20)}
      </div>
      <button onClick={() => handlePageDecrement()}>Prev</button>
    </div>
  );
};
