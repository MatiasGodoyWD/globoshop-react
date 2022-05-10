import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer" data-aos="fade-right">
      <div className="footer__logos">
        <img
          src="https://i.ibb.co/VCnxGY8/GLOBOSHOP-gray.png"
          alt="Globoshop logo"
          className="navbar__logo"
        />
        <img
          src="https://i.ibb.co/cTR11v2/slogan-gray.png"
          alt="Siempre en el mismo barrio"
          className="navbar__slogan"
        />
      </div>
      <div className="footer__info">
        <p className="footer__p">
          Tienda Oficial C. A. Huracán | Desarrollado por{" "}
          <a href="https://www.linkedin.com/in/matiasgodoywd/">Matias Godoy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
