import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://67235237493fac3cf24a7386.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkApi) => {
    try {
      const { data } = await axios.post("/contacts", newContact);
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact ",
  async (taskId, thunkApi) => {
    try {
      const { data } = await axios.delete(`/contacts/${taskId}`);
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
