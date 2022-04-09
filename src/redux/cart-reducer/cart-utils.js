export const addItemToCart = (cartItems, newItem) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === newItem.id && item.size === newItem.size
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === newItem.id && cartItem.size === newItem.size
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }

  return [...cartItems, { ...newItem, quantity: 1 }];
};

export const substractItemFromCart = (cartItems, itemToRemove) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === itemToRemove.id && item.size === itemToRemove.size
  );
  if (existingCartItem.quantity === 1) {
    return cartItems;
  }

  return cartItems.map((cartItem) => {
    return cartItem.id === itemToRemove.id &&
      cartItem.size === itemToRemove.size
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem;
  });
};

export const removeItemFromCart = (cartItems, itemTosubstract) =>
  cartItems.filter((item) => item !== itemTosubstract);
