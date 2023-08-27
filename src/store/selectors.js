import { createSelector } from '@reduxjs/toolkit';
import { SORT_BY } from './constants';

export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;
export const selectModeTheme = state => state.theme.mode;
export const selectSortBy = state => state.sortby;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter, selectSortBy],
  ({ items }, filter, sortby) => {
    const filteredContacts = items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    switch (sortby) {
      case SORT_BY.AZ_SORT: {
        console.log('AZ_SORT :>> ');
        return filteredContacts.sort((a, b) => a.name.localeCompare(b.name));
      }
      case SORT_BY.ZA_SORT:
        console.log('ZA_SORT :>> ');
        return filteredContacts.sort((a, b) => b.name.localeCompare(a.name));
      default:
        console.log('none sort :>> ');
        return filteredContacts;
    }
  }
);
