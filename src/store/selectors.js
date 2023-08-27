import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;
export const selectModeTheme = state => state.theme.mode;
export const selectSortBy = state => state.sortby;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  ({ items }, filter) => {
    return items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
