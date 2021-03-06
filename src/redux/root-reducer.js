import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cart-reducer/cart-reducer";
import menuReducer from "./menus-reducer/menu-reducer";
import modalReducer from "./modal/modal-reducer";
import productsReducer from "./products-reducer/products-reducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart"],
  blacklist: ["products", "menu", "modal"],
};

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  menu: menuReducer,
  modal: modalReducer,
});

export default persistReducer(persistConfig, rootReducer);
