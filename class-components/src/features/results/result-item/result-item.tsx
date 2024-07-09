import type { ReactNode } from 'react';

import type { Pokemon } from '@/api/get-items';

import classes from './result-item.module.css';

export const ResultItem = (props: Pokemon): ReactNode => {
  return (
    <li className={classes.item}>
      <h3 className={classes.title}>{props.name}</h3>
      <img alt="alt" className={classes.image} src={props.images.small} />
      <p className={classes.description}>Set: {props.set.name}</p>
      <p className={classes.description}>Series: {props.set.series}</p>
    </li>
  );
};
