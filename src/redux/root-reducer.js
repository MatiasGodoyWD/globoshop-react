import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import categoriesReducer from "./categories-reducer/categories-reducer";
import productsReducer from "./products-reducer/products-reducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whiteList: ["cart"],
};

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
});

export default persistReducer(persistConfig, rootReducer);
