import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartCard from "../../cards/CartCard";

const CartGrid = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <main>
      <section className="cart__section" data-aos="fade-right">
        <h2 className="cart__title">Carrito de compras</h2>
        <div className="cart__grid">
          {cartItems.length === 0 ? (
            <>
              <p className="empty__cart__message">
                Tu carrito de compras está vacio.{" "}
                <Link to="/productos">¡Empezá a comprar ya mismo!</Link>
              </p>
            </>
          ) : (
            <>
              {cartItems.map((prod, i) => (
                <CartCard key={prod + i} product={prod} />
              ))}
              <div className="cart__total" data-aos="fade-right">
                <span className="cart__total-tag">Total:</span>
                <span className="cart__total-price">${cartTotal}</span>
              </div>
              <div className="cart__button-container" data-aos="fade-right">
                <button className="cart__button" type="submit">
                  Continuar compra
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default CartGrid;
