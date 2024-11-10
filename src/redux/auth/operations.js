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
      setToken(data.token);
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk(
  // Example formData
  //{
  // "name": "Adrian Cross",
  // "email": "across@mail.com",
  //  "password": "examplepwd12345"
  // }
  "auth/login",
  async (formData, thunkApi) => {
    try {
      const { data } = await authInstance.post("/users/login", formData);
      setToken(data.token);
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkApi.rejectWithValue("No valid token");
    }
    try {
      setToken(token);
      const { data } = await authInstance.get("/users/current");
      console.log(data);
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    const { data } = await authInstance.post("/users/logout");

    clearToken();

    return data;
  } catch (e) {
    return thunkApi.rejectWithValue(e.message);
  }
});
