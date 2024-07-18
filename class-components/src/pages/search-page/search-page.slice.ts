import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

import type { Pokemon } from '@/app/api/types';

export interface SearchState {
  data: Pokemon[];
}

const initialState: SearchState = {
  data: [],
};

export const searchSlice = createSlice({
  initialState,
  name: 'search',
  reducers: {
    setResultsList: (state, action: PayloadAction<Pokemon[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setResultsList } = searchSlice.actions;

export default searchSlice.reducer;
