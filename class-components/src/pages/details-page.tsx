import { type ReactNode, useEffect, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';

import type { Pokemon } from '@/api/types';

import { getItem } from '@/api/get-items';
import { DetailedCard } from '@/features/detailed-card/detailed-card';

interface loadingContext {
  isLoading: boolean;
}

export const DetailsPage = (): ReactNode => {
  const { cardId } = useParams();
  const [pokemon, setPokemon] = useState({} as Pokemon);
  const { isLoading }: loadingContext = useOutletContext();

  useEffect(() => {
    if (cardId) {
      getItem(cardId)
        .then((response) => {
          setPokemon(response?.data ?? ({} as Pokemon));
        })
        .catch((err) => console.error(err));
    }
  }, [cardId]);

  if (cardId && !isLoading) {
    return (
      <>
        <DetailedCard pokemon={pokemon} />
      </>
    );
  }
};
