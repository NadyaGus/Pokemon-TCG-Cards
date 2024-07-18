import { type ReactNode } from 'react';
import { useParams } from 'react-router-dom';

import { useGetPokemonQuery } from '@/app/api/pokemon';

import { DetailedCard } from './detailed-card/detailed-card';

export const DetailsPage = (): ReactNode => {
  const { cardId } = useParams();

  const { data } = useGetPokemonQuery(cardId ?? '');

  return <DetailedCard pokemon={data?.data} />;
};
