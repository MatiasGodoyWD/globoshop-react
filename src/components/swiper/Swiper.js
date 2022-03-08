import React from "react";
import "./swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import HomeCard from "../cards/HomeCard";
import { Navigation, Pagination } from "swiper";

const CardSwiper = ({ id, className, title, action, content }) => {
  return (
    <>
      <h2 className="slider__section__title">{title}</h2>
      <div className="swiper__container">
        <div className="swiper-button-prev" id={`${id}-prev`}></div>
        <div className="swiper-button-next" id={`${id}-next`}></div>
        <Swiper
          id={id}
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: `#${id}-prev`,
            nextEl: `#${id}-next`,
          }}
          pagination={{
            clickable: true,
            type: "bullets",
            el: `#${id}-pagination`,
          }}
          slidesPerView={1}
          centeredSlides={true}
          direction={"horizontal"}
          loop={true}
          breakpoints={{
            900: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
          }}
        >
          {content.map((c) => (
            <SwiperSlide className="swiper-slide">
              <HomeCard product={c}></HomeCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div class="swiper-pagination" id={id + "-pagination"}></div>
      {action && (
        <a href="../../products.html" class="slider__section__button">
          Ver catálogo
        </a>
      )}
    </>
  );
};

export default CardSwiper;
