import React, { useState } from "react";
import { sizeOptions } from "../../data/filterOptions";
import Select from "../select/Select";
import * as cartActions from "../../redux/cart-reducer/cart-actions";
import { useDispatch } from "react-redux";

import { toggleModal } from "../../redux/modal/modal-actions";

const ProductCard = ({ product }) => {
  const [size, setSize] = useState(null);
  const dispatch = useDispatch();
  const { id, img, name, price, category } = product;

  const addProductToCart = () => {
    dispatch(toggleModal(size));
    if (!size) {
      return;
    }

    dispatch(
      cartActions.addItem({
        id: id,
        img: img,
        name: name,
        price: price,
        size: size,
        category: category,
      })
    );
  };

  return (
    <>
      <div className="product__card" data-aos="fade-right">
        <img src={img} alt={name} className="product__card__product" />
        <div className="product__card__info">
          <div className="product__card__info-details">
            <h3 className="product__card__info-category">
              {category.toUpperCase()}
            </h3>
            <h2 className="product__card__info-name">{name.toUpperCase()}</h2>
            <p className="product__card__info-price">${price}</p>
          </div>
          <div className="product__card__info-sizes">
            <div className="product__card__size-options">
              {
                <Select
                  name="Talle"
                  className="form__control-size"
                  title="Seleccionar Talle"
                  options={sizeOptions}
                  product
                  changeHandler={(e) => setSize(e.target.value)}
                  value={"Seleccionar talle..."}
                />
              }
            </div>
          </div>
          <button
            type="submit"
            className="product__card__info-BTN"
            onClick={addProductToCart}
          >
            AÑADIR AL CARRITO
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
