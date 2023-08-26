import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { INITIAL_CONTACTS } from 'data/initial';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: INITIAL_CONTACTS,
    isLoading: false,
    error: null,
  },
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
      state.error = '';
    },
    fetchingSuccess(state, { payload }) {
      state.isLoading = false;
      // console.log('success payload:>> ', payload);
      state.items = payload;
    },
    fetchingError(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    //
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: {
            ...contact,
            id: nanoid(),
          },
        };
      },
    },

    deleteContact(state, action) {
      const index = state.items.findIndex(
        contact => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },
  },
});

export const {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
  addContact,
  deleteContact,
} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
