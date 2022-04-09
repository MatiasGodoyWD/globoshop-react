import { ADD_ITEM, REMOVE_ITEM, SUBSTRACT_ITEM } from "./cart-actions";
import {
  addItemToCart,
  removeItemFromCart,
  substractItemFromCart,
} from "./cart-utils";

const INITIAL_STATE = {
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case SUBSTRACT_ITEM:
      return {
        ...state,
        cartItems: substractItemFromCart(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
