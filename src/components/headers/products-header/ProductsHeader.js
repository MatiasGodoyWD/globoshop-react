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
import { useDispatch } from "react-redux";

import * as productsActions from "../../../redux/products-reducer/products-action";

const ProductsHeader = ({ category }) => {
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    setClicked(!clicked);
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
          icon={!clicked ? faBars : faTimes}
          id="navbar__bars"
          onClick={handleClick}
        />
        <NavMenu
          menuClass={`navbar__navigation ${clicked && "navbar__active"}`}
        >
          <Link to="/" className="navbar__link">
            Home
          </Link>

          <Link
            to="/productos"
            onClick={() => dispatch(productsActions.resetProducts())}
            className="navbar__link"
          >
            Todos
          </Link>

          <Link
            to="/productos/juego"
            onClick={() => dispatch(productsActions.resetProducts())}
            className="navbar__link"
          >
            Juego
          </Link>

          <Link
            to="/productos/entrenamiento"
            onClick={() => dispatch(productsActions.resetProducts())}
            className="navbar__link"
          >
            Entrenamiento
          </Link>

          <Link
            to="/productos/salida"
            onClick={() => dispatch(productsActions.resetProducts())}
            className="navbar__link"
          >
            Salida
          </Link>

          <Link
            to="/productos/merchandising"
            onClick={() => dispatch(productsActions.resetProducts())}
            className="navbar__link"
          >
            Merchandising
          </Link>
        </NavMenu>
        <NavMenu menuClass="navbar__social">
          <a href="#landing__home" className="navbar__link" id="navbar__cart">
            <FontAwesomeIcon icon={faShoppingCart} />
          </a>
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
