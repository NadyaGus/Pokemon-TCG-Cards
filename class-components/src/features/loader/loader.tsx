import type { ReactNode } from 'react';
import { useNavigation } from 'react-router-dom';

import classes from './loader.module.css';

interface LoaderProps {
  isLoading: boolean;
}

export const Loader = (props: LoaderProps): ReactNode => {
  const navigate = useNavigation();

  return (
    <div className={navigate.state === 'loading' || props.isLoading ? classes.loader : classes.hidden}>
      <div className={classes.image}></div>
    </div>
  );
};
