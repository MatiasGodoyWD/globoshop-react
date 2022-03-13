import React from "react";
import { categories } from "../../../data/products";
import CardSwiper from "../../swiper/Swiper";

const CategoriesSection = () => {
  return (
    <section className="slider__section" id="categories__section">
      <CardSwiper
        id="categories__slider"
        title="Categorías"
        content={categories}
        className="categories__card"
      ></CardSwiper>
    </section>
  );
};

export default CategoriesSection;
