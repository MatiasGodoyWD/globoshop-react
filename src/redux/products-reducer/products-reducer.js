import { products } from "../../data/products";
import { FILTER_PRODUCTS, RESET_SHOWN_PRODUCTS } from "./products-action";
import { filterProducts } from "./products-utils";
const initialState = {
  products: products,
  shownProducts: products,
  filterValues: { sort: "Predeterminado", price: "Todo", element: "Todas" },
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_PRODUCTS:
      return {
        ...state,
        shownProducts: (state.shownProducts = filterProducts(
          state.filterValues,
          state.products,
          action.payload
        )),
      };
    case RESET_SHOWN_PRODUCTS:
      return {
        ...state,
        shownProducts: state.products,
        filterValues: {
          sort: "Predeterminado",
          price: "Todo",
          element: "Todas",
        },
      };
    default:
      return state;
  }
};

export default productsReducer;
