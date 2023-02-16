import { Action } from "@remix-run/router";
import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
  product: {},
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return payload;
    default:
      return initialState;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, product: payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return { ...state, product: payload };
    default:
      return state;
  }
};
