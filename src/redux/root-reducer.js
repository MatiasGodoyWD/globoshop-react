import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cart-reducer/cart-reducer";

import productsReducer from "./products-reducer/products-reducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart"],
  blacklist: ["products"],
};

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
