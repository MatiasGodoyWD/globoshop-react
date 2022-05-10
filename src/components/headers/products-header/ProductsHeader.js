import React from "react";
import "../header.css";
import Navbar from "../../navbars/Navbar";
import NavMenu from "../../navMenu/NavMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as productsActions from "../../../redux/products-reducer/products-action";
import { toggleMenuHidden } from "../../../redux/menus-reducer/menu-actions";
import * as modalActions from "../../../redux/modal/modal-actions";
import LogosHeader from "../headers-components/LogosHeader";
import SocialHeader from "../headers-components/SocialHeader";

const ProductsHeader = ({ category }) => {
  const dispatch = useDispatch();
  const menuClicked = useSelector((state) => state.menu.activeMenu);

  const handleClick = () => {
    dispatch(toggleMenuHidden());
    dispatch(productsActions.resetProducts());
    dispatch(modalActions.hideModal());
  };
  return (
    <header id="products__header" className="header" data-aos="fade-right">
      <LogosHeader />
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
        <SocialHeader />
      </Navbar>
    </header>
  );
};

export default ProductsHeader;
