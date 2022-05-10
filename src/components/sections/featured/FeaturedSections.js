import React from "react";
import CardSwiper from "../../swiper/Swiper";
import { featuredProducts } from "../../../data/products";

const FeaturedSections = () => {
  return (
    <section
      className="slider__section"
      id="featured__section"
      data-aos="fade-right"
    >
      <CardSwiper
        id={"featured__slider"}
        title={"Productos Destacados"}
        content={featuredProducts}
        action
      ></CardSwiper>
    </section>
  );
};

export default FeaturedSections;
