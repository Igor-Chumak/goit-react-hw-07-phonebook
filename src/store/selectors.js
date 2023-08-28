import { createSelector } from '@reduxjs/toolkit';
import { SORT_BY } from './constants';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;
export const selectModeTheme = state => state.theme.mode;
export const selectSortBy = state => state.sortby;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter, selectSortBy],
  (items, filter, sortby) => {
    const contacts = items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    switch (sortby) {
      case SORT_BY.AZ_SORT: {
        return contacts.sort((a, b) => a.name.localeCompare(b.name));
      }
      case SORT_BY.ZA_SORT:
        return contacts.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return contacts;
    }
  }
);
