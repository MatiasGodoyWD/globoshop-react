import { categories } from "../../data/products";

const initialState = {
  categories: categories,
};

//Seteamos el valor por defecto para una primera entrada
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default categoriesReducer;
