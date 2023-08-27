import { combineReducers } from 'redux';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { modeThemeReducer } from './themeSlice';
import { sortbyReducer } from './sortbySlice';
//
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { LOCAL_STORAGE_KEY } from 'store/constants';

const persistConfigTheme = {
  key: LOCAL_STORAGE_KEY + '_theme',
  storage,
};

const persistedReducerTheme = persistReducer(
  persistConfigTheme,
  modeThemeReducer
);

export const reducer = combineReducers({
  theme: persistedReducerTheme,
  // theme: modeThemeReducer,
  contacts: contactsReducer,
  filter: filterReducer,
  sortby: sortbyReducer,
});
