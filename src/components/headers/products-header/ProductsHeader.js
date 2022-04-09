import React, { useState } from "react";
import "../header.css";
import Navbar from "../../navbars/Navbar";
import NavMenu from "../../navMenu/NavMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as productsActions from "../../../redux/products-reducer/products-action";
import QuantityBubble from "../../quantity-bubble/quantityBubble";
import { toggleMenuHidden } from "../../../redux/menus-reducer/menu-actions";

const ProductsHeader = ({ category }) => {
  const dispatch = useDispatch();
  const menuClicked = useSelector((state) => state.menu.activeMenu);

  const handleClick = () => {
    dispatch(toggleMenuHidden());
    dispatch(productsActions.resetProducts());
  };
  return (
    <header id="products__header" className="header">
      <Navbar navClass="logo__navbar">
        <img
          src="https://i.ibb.co/ysTytXC/GLOBOSHOP.png"
          alt="Globoshop store"
          className="navbar__logo"
        />
        <img
          src="https://i.ibb.co/C541p5d/slogan2.png"
          alt="Siempre en el mismo barrio"
          className="navbar__slogan"
        />
      </Navbar>
      <Navbar navClass="navbar__menu">
        <FontAwesomeIcon
          icon={!menuClicked ? faBars : faTimes}
          id="navbar__bars"
          onClick={() => dispatch(toggleMenuHidden())}
        />
        <NavMenu
          menuClass={`navbar__navigation ${menuClicked && "navbar__active"}`}
        >
          <Link
            to="/"
            className="navbar__link"
            onClick={() => dispatch(toggleMenuHidden())}
          >
            Home
          </Link>

          <Link to="/productos" onClick={handleClick} className="navbar__link">
            Todos
          </Link>

          <Link
            to="/productos/juego"
            onClick={handleClick}
            className="navbar__link"
          >
            Juego
          </Link>

          <Link
            to="/productos/entrenamiento"
            onClick={handleClick}
            className="navbar__link"
          >
            Entrenamiento
          </Link>

          <Link
            to="/productos/salida"
            onClick={handleClick}
            className="navbar__link"
          >
            Salida
          </Link>

          <Link
            to="/productos/merchandising"
            onClick={handleClick}
            className="navbar__link"
          >
            Merchandising
          </Link>
        </NavMenu>
        <NavMenu menuClass="navbar__social">
          <Link
            to="/cart"
            className="navbar__link"
            id="navbar__cart"
            onClick={() => {
              if (menuClicked) {
                handleClick();
              }
            }}
          >
            <QuantityBubble />
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
          <a href="#landing__home" className="navbar__link">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#landing__home" className="navbar__link">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </NavMenu>
      </Navbar>
    </header>
  );
};

export default ProductsHeader;
