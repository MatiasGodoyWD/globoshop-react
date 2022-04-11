import React from "react";
import Navbar from "../../navbars/Navbar";

const LogosHeader = () => {
  return (
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
  );
};

export default LogosHeader;
