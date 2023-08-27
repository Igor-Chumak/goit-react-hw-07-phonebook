import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addContact, deleteContact } from 'store/operationsAPI';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    // getQuery
    [getContacts.pending]: handlePending,
    [getContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      // console.log('Thunk success:>> ', payload);
      state.items = payload;
    },
    [getContacts.rejected]: handleRejected,
    // addContact
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      // console.log('Thunk success:>> ', payload);
      state.items.unshift(payload);
    },
    [addContact.rejected]: handleRejected,
    // deleteContact
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      // console.log('Thunk delete:>> ', payload);
      const index = state.items.findIndex(item => item.id === payload.id);
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
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
