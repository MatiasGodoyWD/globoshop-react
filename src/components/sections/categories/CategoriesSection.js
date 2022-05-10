import React from "react";
import { categories } from "../../../data/products";
import CardSwiper from "../../swiper/Swiper";

const CategoriesSection = () => {
  return (
    <section
      className="slider__section"
      id="categories__section"
      data-aos="fade-right"
    >
      <CardSwiper
        id="categories__slider"
        title="Categorías"
        content={categories}
        className="categories__card"
        categories
      ></CardSwiper>
    </section>
  );
};

export default CategoriesSection;
