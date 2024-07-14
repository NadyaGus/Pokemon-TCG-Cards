import type { ReactNode } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import type { Pokemon } from '@/api/types';

import classes from './result-item.module.css';

export const ResultItem = (props: Pokemon): ReactNode => {
  const [searchParams] = useSearchParams();

  return (
    <Link
      className={classes.link}
      to={`/cards/${props.id}?page=${searchParams.get('page')}&pageSize=${searchParams.get('pageSize')}&search=${searchParams.get('search')}`}
    >
      <li className={classes.item}>
        <h3 className={classes.title}>{props.name}</h3>
        <img alt={props.name} className={classes.image} src={props.images.small} />
        <p className={classes.description}>Set: {props.set.name}</p>
        <p className={classes.description}>Series: {props.set.series}</p>
      </li>
    </Link>
  );
};
