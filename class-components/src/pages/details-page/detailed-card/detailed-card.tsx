import type { ReactNode } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import type { Pokemon } from '@/app/api/types';

import classes from './detailed-card.module.css';

interface DetailedCardProps {
  pokemon: Pokemon | undefined;
}

export const DetailedCard = (props: DetailedCardProps): ReactNode => {
  const [searchParams] = useSearchParams();

  if (!props.pokemon) {
    return (
      <div className={classes.container}>
        <Link
          className={classes.closeArea}
          to={`/?page=${searchParams.get('page')}&pageSize=${searchParams.get('pageSize')}&search=${searchParams.get('search')}`}
        />
        <div className={classes.cardArea}>
          <Link
            className={classes.closeButton}
            to={`/?page=${searchParams.get('page')}&pageSize=${searchParams.get('pageSize')}&search=${searchParams.get('search')}`}
          >
            <button>Close</button>
          </Link>
          <h2>Card not found</h2>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <Link
        className={classes.closeArea}
        to={`/?page=${searchParams.get('page')}&pageSize=${searchParams.get('pageSize')}&search=${searchParams.get('search')}`}
      />

      <div className={classes.cardArea}>
        <Link
          className={classes.closeButton}
          to={`/?page=${searchParams.get('page')}&pageSize=${searchParams.get('pageSize')}&search=${searchParams.get('search')}`}
        >
          <button>Close</button>
        </Link>

        <div className={classes.card}>
          <img alt={props.pokemon.name} className={classes.image} src={props.pokemon.images?.small} />
          <div className={classes.info}>
            <h2 className={classes.title}>{props.pokemon.name}</h2>
            <p className={classes.description}>Set: {props.pokemon.set?.name}</p>
            <p className={classes.description}>Series: {props.pokemon.set?.series}</p>
            <p className={classes.description}>Supertype: {props.pokemon.supertype}</p>
            <p className={classes.description}>Types: {props.pokemon.types}</p>
            <p className={classes.description}>HP: {props.pokemon.hp}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
