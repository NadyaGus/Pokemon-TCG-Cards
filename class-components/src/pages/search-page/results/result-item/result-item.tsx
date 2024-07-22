import type { ReactNode } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import type { Pokemon } from '@/app/api/types';

import classes from './result-item.module.css';

export const ResultItem = (props: Pokemon): ReactNode => {
  const [searchParams] = useSearchParams();

  return (
    <li className={classes.item}>
      <Link
        className={classes.link}
        data-testid="item"
        to={`/cards/${props.id}?page=${searchParams.get('page')}&pageSize=${searchParams.get('pageSize')}&name=${searchParams.get('name')}`}
      >
        <h3 className={classes.title}>{props.name}</h3>
        <img alt={props.name} className={classes.image} src={props.images.small} />
        <p className={classes.description}>Set: {props.set.name}</p>
      </Link>

      <label className={classes.checkbox}>
        Choose the card <input type="checkbox" />
      </label>
    </li>
  );
};
