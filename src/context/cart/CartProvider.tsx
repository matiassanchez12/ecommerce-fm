import React from "react";
import { IProduct } from "../../interfaces";

import { CartContext, cartReducer } from "./";

interface Props {
  children: React.ReactNode;
}

export interface CartState {
  products: IProduct[];
}

const CART_INITIAL_STATE: CartState = {
  products: [],
};

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(cartReducer, CART_INITIAL_STATE);

  const addNewProduct = (product: IProduct) => {
    dispatch({ type: "Cart - Add", payload: product });
  };

  const updateProduct = (product: IProduct) => {
    dispatch({ type: "Cart - Update", payload: product });
  };

  const removeProduct = (product: IProduct) => {
    dispatch({ type: "Cart - Remove", payload: product });
  };

  return (
    <CartContext.Provider value={{ ...state, addNewProduct, updateProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};
