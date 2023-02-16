import { configureStore } from "@reduxjs/toolkit";
import {
  productReducer,
  selectedProductReducer,
} from "./reducers/productReducer";

export const store = configureStore({
  reducer: {
    allProducts: productReducer,
    selectedProduct: selectedProductReducer,
  },
});
