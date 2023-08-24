import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: { mode: 'light' },
  reducers: {
    setModeTheme(state, action) {
      state.mode = action.payload;
    },
  },
});

export const { setModeTheme } = themeSlice.actions;
export const modeThemeReducer = themeSlice.reducer;
