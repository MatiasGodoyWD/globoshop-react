import React from "react";
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
import QuantityBubble from "../../quantity-bubble/quantityBubble";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenuHidden } from "../../../redux/menus-reducer/menu-actions";

const LandingHeader = () => {
  const dispatch = useDispatch();
  const menuClicked = useSelector((state) => state.menu.activeMenu);
  console.log(menuClicked);
  return (
    <>
      <header id="landing__header" className="header">
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
            <a
              href="#landing__header"
              className="navbar__link"
              onClick={() => dispatch(toggleMenuHidden())}
            >
              Home
            </a>
            <a
              href="#featured__section"
              className="navbar__link"
              onClick={() => dispatch(toggleMenuHidden())}
            >
              Destacados
            </a>
            <a
              href="#landing__header"
              className="navbar__link"
              onClick={() => dispatch(toggleMenuHidden())}
            >
              Categorias
            </a>
            <a
              href="#contact__section"
              className="navbar__link"
              onClick={() => dispatch(toggleMenuHidden())}
            >
              Contacto
            </a>
          </NavMenu>
          <NavMenu menuClass="navbar__social">
            <Link
              to="/cart"
              className="navbar__link"
              id="navbar__cart"
              onClick={() => {
                if (menuClicked) {
                  dispatch(toggleMenuHidden());
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
    </>
  );
};

export default LandingHeader;
