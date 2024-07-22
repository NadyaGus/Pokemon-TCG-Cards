import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

import type { Pokemon } from '@/app/api/types';

export interface SearchState {
  data: Pokemon[];
  isEmpty: boolean;
}

const initialState: SearchState = {
  data: [],
  isEmpty: false,
};

export const searchSlice = createSlice({
  initialState,
  name: 'search',
  reducers: {
    isEmpty: (state, action: PayloadAction<boolean>) => {
      state.isEmpty = action.payload;
    },
    setResultsList: (state, action: PayloadAction<Pokemon[]>) => {
      state.data = action.payload;
    },
  },
});

export const { isEmpty, setResultsList } = searchSlice.actions;

export default searchSlice.reducer;
