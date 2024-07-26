import { type LoaderFunctionArgs, redirect } from 'react-router-dom';

import type { ResponseDataCard } from '@/app/api/types';

import { pokemonApi } from '@/app/api/pokemonApi';
import { store } from '@/app/providers/store/configureStore';

export const loadImage = async (url: string): Promise<string | undefined> => {
  const response = store.dispatch(pokemonApi.endpoints.getPokemonLargeImage.initiate(url));
  try {
    const promise = await response.unwrap();
    return promise;
  } catch (error) {
    redirect('/');
  } finally {
    response.unsubscribe();
  }
};

export const loader = async ({ params }: LoaderFunctionArgs): Promise<ResponseDataCard | undefined> => {
  const response = store.dispatch(pokemonApi.endpoints.getPokemon.initiate(params.cardId ?? ''));
  try {
    const promise = await response.unwrap();
    await loadImage(promise.data.images.large);
    return promise;
  } catch (error) {
    redirect('/');
  } finally {
    response.unsubscribe();
  }
};
