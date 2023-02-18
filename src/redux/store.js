import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productSlice";

export const store = configureStore({
  reducer: {
    allProducts: productReducer,
  },
});
