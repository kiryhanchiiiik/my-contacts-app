import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const authInstance = axios.create({
  baseURL: "https://connections-api.goit.global/",
  //   header: {
  //     'Authorization': "Bearer [token]"
  //   }
});

export const setToken = (token) => {
  authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  authInstance.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  // Example formData
  //{
  // "name": "Adrian Cross",
  // "email": "across@mail.com",
  //  "password": "examplepwd12345"
  // }
  "auth/register",
  async (formData, thunkApi) => {
    try {
      const { data } = await authInstance.post("/users/signup", formData);
      console.log(data);
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
