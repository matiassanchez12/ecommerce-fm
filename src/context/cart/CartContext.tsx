import React from "react";
import { IProduct } from "../../interfaces";

interface ContextProps {
  products: IProduct[];
  addNewProduct: (product: IProduct) => void;
  updateProduct: (product: IProduct) => void;
  removeProduct: (product: IProduct) => void;
}

export const CartContext = React.createContext({} as ContextProps);
