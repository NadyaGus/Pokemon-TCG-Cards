import { type ReactNode } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';

import { useGetPokemonQuery } from '@/app/api/pokemonApi';

import classes from './details-page.module.css';

export const DetailsPage = (): ReactNode => {
  const { cardId } = useParams();

  const { data } = useGetPokemonQuery(cardId ?? '');

  const [searchParams] = useSearchParams();

  const pokemon = data?.data;

  if (!pokemon) {
    return (
      <div className={classes.container}>
        <Link
          className={classes.closeArea}
          to={`/?name=${searchParams.get('name')}&page=${searchParams.get('page')}&pageSize=${searchParams.get('pageSize')}`}
        />
        <div className={classes.cardArea}>
          <Link
            className={classes.closeButton}
            to={`/?name=${searchParams.get('name')}&page=${searchParams.get('page')}&pageSize=${searchParams.get('pageSize')}`}
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
        to={`/?name=${searchParams.get('name')}&page=${searchParams.get('page')}&pageSize=${searchParams.get('pageSize')}`}
      />

      <div className={classes.cardArea}>
        <div className={classes.cardContainer}>
          <Link
            className={classes.closeButton}
            to={`/?name=${searchParams.get('name')}&page=${searchParams.get('page')}&pageSize=${searchParams.get('pageSize')}`}
          >
            <button>Close</button>
          </Link>

          <div className={classes.card}>
            <img alt={pokemon.name} className={classes.image} src={pokemon.images?.large} />
            <div className={classes.info}>
              <h2 className={classes.title}>{pokemon.name}</h2>
              <p className={classes.description}>Set: {pokemon.set?.name}</p>
              <p className={classes.description}>Series: {pokemon.set?.series}</p>
              <p className={classes.description}>Supertype: {pokemon.supertype}</p>
              <p className={classes.description}>Types: {pokemon.types}</p>
              <p className={classes.description}>HP: {pokemon.hp}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
