import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import categoriesReducer from "./categories-reducer/categories-reducer";
import productsReducer from "./products-reducer/products-reducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart"],
  blacklist: ["products"],
};

const rootReducer = combineReducers({
  products: productsReducer,
});

export default persistReducer(persistConfig, rootReducer);
