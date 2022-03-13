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

const LandingHeader = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = (e) => {
    setClicked(!clicked);
  };
  return (
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
          icon={!clicked ? faBars : faTimes}
          id="navbar__bars"
          onClick={handleClick}
        />
        <NavMenu
          menuClass={`navbar__navigation ${clicked && "navbar__active"}`}
        >
          <a href="#landing__header" className="navbar__link">
            Home
          </a>
          <a href="#featured__section" className="navbar__link">
            Destacados
          </a>
          <a href="#landing__header" className="navbar__link">
            Categorias
          </a>
          <a href="#contact__section" className="navbar__link">
            Contacto
          </a>
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

export default LandingHeader;
