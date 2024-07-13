import type { LoaderFunctionArgs } from 'react-router-dom';

import type { Pokemon } from '@/api/types';

import { getItem } from '@/api/get-items';

async function loader({ params }: LoaderFunctionArgs): Promise<Pokemon | null> {
  if (params.cardId) {
    const response = await getItem(params.cardId);

    if (response) {
      return response.data;
    }
  }

  return null;
}

export { loader };
