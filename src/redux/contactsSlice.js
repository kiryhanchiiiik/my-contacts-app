import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
export const selectContacts = (state) => state.contactsData.items;
export const selectNameFilter = (state) => state.filterData.filter;

const INITIAL_STATE = {
  items: null,
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "items",
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      // fetchContacts
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // addContact
      .addCase(addContact.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // deleteContact
      .addCase(deleteContact.pending, (state) => {
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

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

export const contactsReducer = contactsSlice.reducer;
