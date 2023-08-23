import { combineReducers } from 'redux';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { modeThemeReducer } from './themeSlice';
//
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { LOCAL_STORAGE_KEY } from 'store/constants';

const persistConfigContacts = {
  key: LOCAL_STORAGE_KEY,
  storage,
  whitelist: ['item'],
  blacklist: [],
};

const persistConfigTheme = {
  key: LOCAL_STORAGE_KEY + '_theme',
  storage,
};

// const persistedReducerTheme = persistReducer(
//   persistConfigTheme,
//   modeThemeReducer
// );

// const persistedReducerContacts = persistReducer(
//   persistConfigContacts,
//   contactsReducer
// );

//
export const reducer = combineReducers({
  theme: persistReducer(persistConfigTheme, modeThemeReducer),
  // theme: modeThemeReducer,
  // contacts: contactsReducer,
  contacts: persistReducer(persistConfigContacts, contactsReducer),
  filter: filterReducer,
});
