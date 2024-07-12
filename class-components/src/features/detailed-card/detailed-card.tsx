import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import type { Pokemon } from '@/api/types';

import classes from './detailed-card.module.css';

interface DetailedCardProps {
  pokemon: Pokemon;
}

export const DetailedCard = (props: DetailedCardProps): ReactNode => {
  return (
    <div className={classes.container}>
      <Link className={classes.closeArea} to={'/'} />

      <div className={classes.cardArea}>
        <Link to={'/'}>
          <button>close</button>
        </Link>

        <div className={classes.card}>
          <img alt={props.pokemon.name} className={classes.image} src={props.pokemon.images?.small} />
          <div className={classes.info}>
            <h1 className={classes.title}>{props.pokemon.name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
