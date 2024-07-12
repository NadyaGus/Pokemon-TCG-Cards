import { type ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import type { Pokemon } from '@/api/get-items';

import { getItem } from '@/api/get-items';
import { DetailedCard } from '@/features/detailed-card/detailed-card';

export const DetailsPage = (): ReactNode => {
  const { cardId } = useParams();
  const [pokemon, setPokemon] = useState({} as Pokemon);

  useEffect(() => {
    if (cardId) {
      getItem(cardId)
        .then((response) => {
          console.log(response);
          setPokemon(response?.data ?? ({} as Pokemon));
        })
        .catch((err) => console.error(err));
    }
  }, [cardId]);

  if (cardId) {
    return (
      <>
        <h1>Details of {pokemon?.name}</h1>
        <DetailedCard pokemon={pokemon} />
      </>
    );
  }
};
