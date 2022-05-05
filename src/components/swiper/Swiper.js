import React from "react";
import "./swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import HomeCard from "../cards/HomeCard";
import { Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenuHidden } from "../../redux/menus-reducer/menu-actions";

const CardSwiper = ({ id, title, action, content, categories }) => {
  const dispatch = useDispatch();
  const active = useSelector((state) => state.menu.activeMenu);
  const closeMenu = () => {
    if (active) {
      dispatch(toggleMenuHidden());
    }
  };
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
          {content.map((c, index) => (
            <SwiperSlide key={index} className={`swiper-slide`}>
              {categories ? (
                <Link to={`/productos/${c.name}`} onClick={closeMenu}>
                  <HomeCard product={c}></HomeCard>
                </Link>
              ) : (
                <HomeCard product={c}></HomeCard>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="swiper-pagination" id={id + "-pagination"}></div>
      {action && (
        <Link
          to="/productos"
          className="slider__section__button"
          onClick={closeMenu}
        >
          {" "}
          Ver catálogo{" "}
        </Link>
      )}
    </>
  );
};

export default CardSwiper;
