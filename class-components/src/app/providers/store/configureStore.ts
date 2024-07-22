import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { pokemonApi } from '@/app/api/pokemonApi';
import { savedItemSlice } from '@/pages/search-page/results/result-item/result-item.slice';
import { searchSlice } from '@/pages/search-page/search-page.slice';

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    savedItems: savedItemSlice.reducer,
    searchResults: searchSlice.reducer,
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
