import { type LoaderFunctionArgs, redirect } from 'react-router-dom';

import type { ResponseDataCard } from '@/app/api/types';

import { pokemonApi } from '@/app/api/pokemonApi';
import { store } from '@/app/providers/store/configureStore';

export const loader = async ({ params }: LoaderFunctionArgs): Promise<ResponseDataCard | undefined> => {
  const p = store.dispatch(pokemonApi.endpoints.getPokemon.initiate(params.cardId ?? ''));
  try {
    const response = await p.unwrap();
    return response;
  } catch (error) {
    console.error(error);
    redirect('/');
  } finally {
    p.unsubscribe();
  }
};
