import { CartState } from ".";
import { IProduct } from "../../interfaces";

type CartActionType =
  | { type: "Cart - Add"; payload: IProduct }
  | { type: "Cart - Update"; payload: IProduct }
  | { type: "Cart - Remove"; payload: IProduct };

export const cartReducer = (state: CartState, action: CartActionType): CartState => {
  switch (action.type) {
    case "Cart - Add":
      return {
        ...state,
        products:
          state.products.length > 0
            ? state.products.map((product) =>
                product.name === action.payload.name ? { ...product, quantity: action.payload.quantity } : product
              )
            : [...state.products, action.payload],
      };
    case "Cart - Update":
      return {
        ...state,
        products: state.products.map((product) =>
          product.name === action.payload.name ? { ...product, quantity: action.payload.quantity } : product
        ),
      };
    case "Cart - Remove":
      return {
        ...state,
        products: state.products.filter((product) => product.name !== action.payload.name),
      };
    default:
      return state;
  }
};
