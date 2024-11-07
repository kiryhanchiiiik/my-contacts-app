import { createSlice } from "@reduxjs/toolkit";
export const selectContacts = (state) => state.contactsData.items;
export const selectNameFilter = (state) => state.filterData.filter;

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {},
});

export const authReducer = authSlice.reducer;
