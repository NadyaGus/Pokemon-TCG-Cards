import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

import type { Pokemon } from '@/app/api/types';

export interface SaveItemsState {
  data: Pokemon[];
}

const initialState: SaveItemsState = {
  data: [],
};

export const savedItemSlice = createSlice({
  initialState,
  name: 'savedItems',
  reducers: {
    deleteItem: (state, action: PayloadAction<Pokemon>) => {
      const newData = state.data.filter((item) => item.id !== action.payload.id);
      state.data = newData;
    },
    saveItem: (state, action: PayloadAction<Pokemon>) => {
      state.data.push(action.payload);
    },
  },
});

export const { deleteItem, saveItem } = savedItemSlice.actions;

export default savedItemSlice.reducer;
