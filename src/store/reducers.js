import { combineReducers } from 'redux';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { modeThemeReducer } from './themeSlice';
//
import {
  // persistStore,
  persistReducer,
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { LOCAL_STORAGE_KEY } from 'store/constants';

const persistConfig = {
  key: LOCAL_STORAGE_KEY + '_theme',
  storage,
  whitelist: ['item'],
  blacklist: [],
};

// const persistedReducerTheme = persistReducer(persistConfig, modeThemeReducer);

const persistedReducer = persistReducer(persistConfig, contactsReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);

//
export const reducer = combineReducers({
  // theme: persistedReducerTheme,
  theme: modeThemeReducer,
  // contacts: contactsReducer,
  contacts: persistedReducer,
  filter: filterReducer,
});
