import React from "react";
import ProductsHeader from "../../components/headers/products-header/ProductsHeader";
import CartGrid from "../../components/sections/cart-grid/CartGrid";
import "./CartPage.css";

const CartPage = () => {
  return (
    <>
      <ProductsHeader />;
      <CartGrid />
    </>
  );
};

export default CartPage;
