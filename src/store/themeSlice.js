import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: 'light',
  reducers: {
    setModeTheme(state, action) {
      console.log('state :>> ', state);
      return (state = action.payload);
    },
  },
});

export const { setModeTheme } = themeSlice.actions;
export const modeThemeReducer = themeSlice.reducer;
