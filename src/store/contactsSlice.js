import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';
// import { INITIAL_CONTACTS } from 'data/initial';
import { getContacts, addContact, deleteContact } from 'store/operationsAPI';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [], // INITIAL_CONTACTS,
    isLoading: false,
    error: null,
  },
  extraReducers: {
    // getQuery
    [getContacts.pending](state, action) {
      state.isLoading = true;
      state.error = null;
    },
    [getContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      // console.log('Thunk success:>> ', payload);
      state.items = payload;
    },
    [getContacts.rejected](state, { payload }) {
      state.isLoading = false;
      // console.log('Thunk rejected:>> ', payload);
      state.error = payload;
    },
    // addContact
    [addContact.pending](state, action) {
      state.isLoading = true;
      state.error = null;
    },
    [addContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      // console.log('Thunk success:>> ', payload);
      state.items.push(payload);
    },
    [addContact.rejected](state, { payload }) {
      state.isLoading = false;
      // console.log('Thunk rejected:>> ', payload);
      state.error = payload;
    },
    // deleteContact
    [deleteContact.pending](state, action) {
      state.isLoading = true;
      state.error = null;
    },
    [deleteContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      // console.log('Thunk delete:>> ', payload);
      const index = state.items.findIndex(item => item.id === payload.id);
      state.items.splice(index, 1);
    },
    [deleteContact.rejected](state, { payload }) {
      state.isLoading = false;
      // console.log('Thunk rejected:>> ', payload);
      state.error = payload;
    },
  },

  reducers: {
    // fetchingInProgress(state) {
    //   state.isLoading = true;
    //   state.error = '';
    // },
    // fetchingSuccess(state, { payload }) {
    //   state.isLoading = false;
    //   // console.log('success payload:>> ', payload);
    //   state.items = payload;
    // },
    // fetchingError(state, { payload }) {
    //   state.isLoading = false;
    //   // console.log('payload :>> ', payload);
    //   state.error = payload;
    //   // state.error = `${payload.message} <- ${payload.response.request.statusText}`;
    // },
    //
    // addContact: {
    //   reducer(state, action) {
    //     state.items.push(action.payload);
    //   },
    //   prepare(contact) {
    //     return {
    //       payload: {
    //         ...contact,
    //         id: nanoid(),
    //       },
    //     };
    //   },
    // },
    //     deleteContact(state, action) {
    //       const index = state.items.findIndex(
    //         contact => contact.id === action.payload
    //       );
    //       state.items.splice(index, 1);
    //     },
  },
});

// export const {
// fetchingInProgress,
// fetchingSuccess,
// fetchingError,
// addContact,
// deleteContact,
// } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
