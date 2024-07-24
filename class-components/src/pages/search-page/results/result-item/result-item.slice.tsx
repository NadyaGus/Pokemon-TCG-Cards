import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

import type { Pokemon } from '@/app/api/types';

export interface PokemonTableData extends Omit<Pokemon, 'images' | 'set'> {
  images: string;
  setName: string;
  setSeries: string;
}

export interface SaveItemsState {
  data: PokemonTableData[];
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
      const pokemon = {
        hp: action.payload.hp,
        id: action.payload.id,
        images: action.payload.images.small,
        name: action.payload.name,
        setName: action.payload.set.name,
        setSeries: action.payload.set.series,
        subtypes: action.payload.subtypes,
        supertype: action.payload.supertype,
        types: action.payload.types,
      };

      state.data.push(pokemon);
    },
    unselectAll: (state) => {
      state.data = [];
    },
  },
});

export const { deleteItem, saveItem } = savedItemSlice.actions;

export default savedItemSlice.reducer;
