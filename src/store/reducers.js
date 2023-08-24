import { combineReducers } from 'redux';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { modeThemeReducer } from './themeSlice';
//
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { LOCAL_STORAGE_KEY } from 'store/constants';
import createTransform from 'redux-persist/es/createTransform';

const persistConfigContacts = {
  key: LOCAL_STORAGE_KEY,
  storage,
  whitelist: ['item'],
  blacklist: [],
};

// const SetTransform = createTransform(
// transform state on its way to being serialized and persisted.
// (inboundState, key) => {
// convert mySet to an Array.
// return { ...inboundState, mySet: [...inboundState] };
// },

// transform state being rehydrated
// (outboundState, key) => {
// convert mySet back to a Set.
// return { ...outboundState, mySet: new Set(outboundState.mySet) };
// }

// define which reducers this transform gets called for.
// { whitelist: ['someReducer'] }
// );

const persistConfigTheme = {
  key: LOCAL_STORAGE_KEY + '_theme',
  storage,
  // stateReconciler: autoMergeLevel2
  transforms: [SetTransform],
};

const persistedReducerTheme = persistReducer(
  persistConfigTheme,
  modeThemeReducer
);

const persistedReducerContacts = persistReducer(
  persistConfigContacts,
  contactsReducer
);

//
export const reducer = combineReducers({
  theme: persistedReducerTheme,
  // theme: modeThemeReducer,
  // contacts: contactsReducer,
  contacts: persistedReducerContacts,
  filter: filterReducer,
});
