import type { ReactNode } from 'react';
import { useParams } from 'react-router-dom';

export const DetailsPage = (): ReactNode => {
  const { cardId, pageId } = useParams();

  if (pageId && cardId) {
    return <h1>Details Page</h1>;
  }
};
