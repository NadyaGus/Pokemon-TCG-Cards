import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_URL } from '@/app/variables';

import type { ResponseData, ResponseDataCard } from './types';

export const pokemonApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getPokemon: builder.query<ResponseDataCard, string>({
      query: (id) => `/${id}`,
    }),
    getPokemonList: builder.query<ResponseData, string>({
      query: (query) => `${query}`,
    }),
  }),
  reducerPath: 'pokemonApi',
});

export const { useGetPokemonListQuery, useGetPokemonQuery } = pokemonApi;
