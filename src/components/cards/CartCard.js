import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import * as cartActions from "../../redux/cart-reducer/cart-actions";

const CartCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="cart__product" data-aos="fade-right">
        <img
          className="cart__product-img"
          alt={product.name}
          src={product.img}
        />

        <div className="cart__product-info">
          <div className="cart__product-data">
            <h3 className="cart__product-title">{product.name}</h3>
            <p className="cart__product-size">
              Talle:{product.size} / Categoría:
              {product.category.charAt(0).toUpperCase() +
                product.category.slice(1)}
            </p>
          </div>
          <div className="cart__product-sale">
            <div className="cart__product-quantity">
              <span className="product__quantity-span product__decreaser">
                <FontAwesomeIcon
                  className={`${product.quantity === 1 ? "btn-disabled" : ""}`}
                  icon={faMinus}
                  onClick={() => dispatch(cartActions.substractItem(product))}
                />
              </span>
              <span className="product__quantity-span">{product.quantity}</span>
              <span className="product__quantity-span product__increaser">
                <FontAwesomeIcon
                  icon={faPlus}
                  onClick={() => dispatch(cartActions.addItem(product))}
                />
              </span>
            </div>
            <p className="cart__product-price">
              ${product.price * product.quantity}
            </p>
          </div>
          <div className="delete__product">
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => dispatch(cartActions.removeItem(product))}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCard;
