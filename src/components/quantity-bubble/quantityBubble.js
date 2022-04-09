import React from "react";
import { useSelector } from "react-redux";

const QuantityBubble = () => {
  const cartQuantity = useSelector((state) => state.cart.cartItems).reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <>
      {cartQuantity > 0 && (
        <div className="navbar__cart__counter">{cartQuantity}</div>
      )}
    </>
  );
};

export default QuantityBubble;
