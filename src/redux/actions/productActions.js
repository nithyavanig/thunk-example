import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://fakestoreapi.com/products";

export const getProducts = createAsyncThunk(
  "products/fetchAll",
  async (args, thunkApi) => {
    console.log(thunkApi);
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await axios.get(API_URL);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
