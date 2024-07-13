import type { ReactNode } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

import type { Pokemon } from '@/api/types';

import { DetailedCard } from '@/features/detailed-card/detailed-card';

export const DetailsPage = (): ReactNode => {
  const { cardId } = useParams();

  const pokemon = useLoaderData() as Pokemon | null;

  if (cardId && pokemon) {
    return (
      <>
        <DetailedCard pokemon={pokemon} />
      </>
    );
  }
};
