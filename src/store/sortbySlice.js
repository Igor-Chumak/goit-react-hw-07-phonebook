import { createSlice } from '@reduxjs/toolkit';
import { SORT_BY } from './constants';

const sortbySlice = createSlice({
  name: 'sortby',
  initialState: SORT_BY.NONE,
  reducers: {
    setSortBy(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setSortBy } = sortbySlice.actions;
export const sortbyReducer = sortbySlice.reducer;
