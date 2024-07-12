import type { ReactNode } from 'react';
import { useParams } from 'react-router-dom';

export const DetailsPage = (): ReactNode => {
  const { cardId } = useParams();

  if (cardId) {
    return <h1>Details Page</h1>;
  }
};
