import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_KEY, API_URL } from '@/app/variables';

import type { ResponseData, ResponseDataCard } from './types';

export const pokemonApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      headers.set('X-API-KEY', API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPokemon: builder.query<ResponseDataCard, string>({
      query: (id) => `/${id}`,
    }),
    getPokemonLargeImage: builder.query<string, string>({
      query: (url) => url,
    }),
    getPokemonList: builder.query<ResponseData, string>({
      query: (query) => `${query}`,
    }),
  }),
  reducerPath: 'pokemonApi',
});

export const { useGetPokemonListQuery, useGetPokemonQuery } = pokemonApi;
