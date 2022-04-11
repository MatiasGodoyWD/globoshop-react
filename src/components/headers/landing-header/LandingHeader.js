import React from "react";
import "../header.css";
import Navbar from "../../navbars/Navbar";
import NavMenu from "../../navMenu/NavMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";
import { toggleMenuHidden } from "../../../redux/menus-reducer/menu-actions";
import LogosHeader from "../headers-components/LogosHeader";
import SocialHeader from "../headers-components/SocialHeader";

const LandingHeader = () => {
  const dispatch = useDispatch();
  const menuClicked = useSelector((state) => state.menu.activeMenu);

  return (
    <>
      <header id="landing__header" className="header">
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
          <SocialHeader />
        </Navbar>
      </header>
    </>
  );
};

export default LandingHeader;
