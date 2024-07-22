import type { ChangeEvent, ReactNode } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import type { Pokemon } from '@/app/api/types';

import { useAppDispatch, useAppSelector } from '@/app/hooks/storeHooks';

import { savedItemSlice } from './result-item.slice';

import classes from './result-item.module.css';

export const ResultItem = (props: Pokemon): ReactNode => {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const savedItems = useAppSelector((state) => state.savedItems.data);

  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.checked) {
      dispatch(savedItemSlice.actions.saveItem(props));
    } else {
      dispatch(savedItemSlice.actions.deleteItem(props));
    }
  };

  const handleCheckboxState = (): boolean => {
    const isSaved = savedItems.find((item) => item.id === props.id);
    return isSaved ? true : false;
  };

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
        Choose the card{' '}
        <input
          checked={handleCheckboxState()}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleCheckbox(e)}
          type="checkbox"
        />
      </label>
    </li>
  );
};
