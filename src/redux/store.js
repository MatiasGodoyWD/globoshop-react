import { createStore, applyMiddleware } from "redux"; //Crear el store y por si hay api
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist"; // Para persistir en el local
import rootReducer from "./root-reducer";

const initialState = {}; //Definimos un primer estado
const middleware = [];

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);
