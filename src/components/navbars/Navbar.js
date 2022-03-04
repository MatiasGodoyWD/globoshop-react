import React from "react";

const Navbar = ({ navClass, children }) => {
  return <nav className={navClass}>{children}</nav>;
};

export default Navbar;
