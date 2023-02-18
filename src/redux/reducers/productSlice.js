import { createSlice } from "@reduxjs/toolkit";

import { getProducts } from "../actions/productActions";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isLoading: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.products = payload;
    },
    [getProducts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.errorMessage = payload;
    },
  },
});

export default productSlice.reducer;
