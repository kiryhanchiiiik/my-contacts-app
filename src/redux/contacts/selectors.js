import { createSelector } from "@reduxjs/toolkit";
export const selectIsLoading = (state) => state.contactsData.isLoading;
export const selectError = (state) => state.contactsData.error;
export const selectContacts = (state) => state.contactsData.items;
export const selectNameFilter = (state) => state.filterData.filter;

// Optimized selector
export const selectFilteredContacts = createSelector(
  [selectNameFilter, selectContacts],
  (filter, contacts) => {
    return Array.isArray(contacts)
      ? contacts.filter((contact) =>
          contact.name.toLowerCase().includes(filter.toLowerCase().trim())
        )
      : [];
  }
);
