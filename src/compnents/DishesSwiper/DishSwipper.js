import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from "swiper";
import "swiper/swiper-bundle.min.css";
import "./DishSwipper.css";
import ReactStars from "react-rating-stars-component";

const DishSwipper = ({ slidedata }) => {
    const ratingChanged=()=>{}
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={50}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 24,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          // when window width is >= 640px
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 32,
            slidesPerGroup: 1,
          },
          1336: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slidedata?.map((slide) => (
          <SwiperSlide key={slide.image}>
            <div className="imagesSlide_wrapper">
              <img src={slide.image} alt={slide.title} />
              <h6>{slide.title}</h6>
              <p>{slide.subTitle}</p>
              <h5>{slide.interval}</h5>
              <div className="sliderFooter">
                <img src={slide.image1} alt={slide.title} />
                <p className="small">{slide.chefName}</p>
                <div className="startRate">
                <ReactStars
                  count={1}
                  onChange={ratingChanged}
                  size={24}
                  classNames="oneStar"
                  activeColor="#FF9E2C"
                  />
                  <p>3.9</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default DishSwipper;
