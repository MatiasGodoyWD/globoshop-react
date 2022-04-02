import React, { useState } from "react";
import { sizeOptions } from "../../data/filterOptions";
import Select from "../select/Select";

const ProductCard = ({ product }) => {
  const { img, name, price, category } = product;
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
                  placeholder="Seleccionar talle"
                />
              }
            </div>
          </div>
          <button type="submit" className="product__card__info-BTN">
            AÑADIR AL CARRITO
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
