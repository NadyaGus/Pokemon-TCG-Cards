import type { ReactNode } from 'react';

import classes from './loader.module.css';

interface LoaderProps {
  isLoading: boolean;
}

export const Loader = (props: LoaderProps): ReactNode => {
  return (
    <div className={props.isLoading ? classes.loader : classes.hidden}>
      <div className={classes.image}></div>
    </div>
  );
};
