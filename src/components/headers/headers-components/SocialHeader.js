import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenuHidden } from "../../../redux/menus-reducer/menu-actions";
import NavMenu from "../../navMenu/NavMenu";
import QuantityBubble from "../../quantity-bubble/quantityBubble";

const SocialHeader = () => {
  const dispatch = useDispatch();
  const menuClicked = useSelector((state) => state.menu.activeMenu);
  return (
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
  );
};

export default SocialHeader;
