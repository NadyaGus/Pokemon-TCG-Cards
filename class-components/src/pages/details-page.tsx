import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { useEffect, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';

import type { Pokemon } from '@/api/types';

import { getItem } from '@/api/get-items';
import { DetailedCard } from '@/features/detailed-card/detailed-card';

interface loadingContext {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const DetailsPage = (): ReactNode => {
  const { cardId } = useParams();
  const [pokemon, setPokemon] = useState({} as Pokemon);
  const { isLoading, setIsLoading }: loadingContext = useOutletContext();

  const [overLoad] = useState(isLoading);

  useEffect(() => {
    if (cardId) {
      setIsLoading(true);
      getItem(cardId)
        .then((response) => {
          setPokemon(response?.data ?? ({} as Pokemon));
        })
        .catch((err) => console.error(err))
        .finally(() => {
          if (!overLoad) {
            setIsLoading(false);
          }
        });
    }
  }, [cardId, setIsLoading, overLoad]);

  if (cardId && !isLoading) {
    return (
      <>
        <DetailedCard pokemon={pokemon} />
      </>
    );
  }
};
