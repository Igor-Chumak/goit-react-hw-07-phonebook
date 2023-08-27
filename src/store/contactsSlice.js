import { createSlice } from '@reduxjs/toolkit';
import {
  getContactsThunk,
  addContactThunk,
  deleteContactThunk,
} from 'store/operationsAPI';
import {
  handleAddContact,
  handleDeleteContact,
  handleFulfilled,
  handleGetContacts,
  handlePending,
  handleRejected,
} from './handlers';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: '',
  },
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, handleGetContacts)
      .addCase(addContactThunk.fulfilled, handleAddContact)
      .addCase(deleteContactThunk.fulfilled, handleDeleteContact)
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectedAction, handleRejected)
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        handleFulfilled
      );
    // getQuery
    // [getContactsThunk.pending]: handlePending,
    // [getContactsThunk.fulfilled]: handleGetContacts,
    // [getContactsThunk.rejected]: handleRejected,
    // addContact
    // [addContactThunk.pending]: handlePending,
    // [addContactThunk.fulfilled]: handleAddContact,
    // [addContactThunk.rejected]: handleRejected,
    // deleteContact
    // [deleteContactThunk.pending]: handlePending,
    // [deleteContactThunk.fulfilled]: handleDeleteContact,
    // [deleteContactThunk.rejected]: handleRejected,
  },
});

function isRejectedAction(action) {
  return action.type.endsWith('/rejected');
}

function isPendingAction(action) {
  return action.type.endsWith('/pending');
}

export const contactsReducer = contactsSlice.reducer;
