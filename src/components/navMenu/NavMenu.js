import React from "react";

const NavMenu = ({ menuClass, children }) => {
  return <ul className={menuClass}>{children}</ul>;
};

export default NavMenu;
