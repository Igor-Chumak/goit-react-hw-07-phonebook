import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.item;
export const selectFilter = state => state.filter;
export const selectModeTheme = state => state.theme.mode;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
