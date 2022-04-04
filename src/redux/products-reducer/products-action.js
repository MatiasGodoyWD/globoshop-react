export const FILTER_PRODUCTS = "FILTER_PRODUCTS";
export const RESET_SHOWN_PRODUCTS = "RESET_SHOWN_PRODUCTS";
export const filterProducts = (category = null) => ({
  type: FILTER_PRODUCTS,
  payload: category,
});

export const resetProducts = () => ({
  type: RESET_SHOWN_PRODUCTS,
});
