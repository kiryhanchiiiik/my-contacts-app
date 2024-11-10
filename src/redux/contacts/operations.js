import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { authInstance } from "../auth/operations";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await authInstance.get("/contacts");

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
      const { data } = await authInstance.post("/contacts", newContact);
      toast.success("Contact added successfully!");
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
      const { data } = await authInstance.delete(`/contacts/${taskId}`);
      toast.success("Contact has been deleted!");
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
