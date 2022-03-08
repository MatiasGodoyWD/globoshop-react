import "./Cards.css";
import React from "react";

const HomeCard = ({ product }) => {
  const { name, img } = product;
  return (
    <div className="home__card featured__slider">
      <img src={img} alt={name} className="home__card__product" />
      <div className="home__card__info">
        <h2 className="home__card__info-title">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </h2>
      </div>
    </div>
  );
};

export default HomeCard;
