import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from "swiper";
import "swiper/swiper-bundle.min.css";
import "./CustomerSwiper.css";
import ReactStars from "react-rating-stars-component";
const CustomerSwiper = ({customerSlide}) => {
  const swiper = useSwiper()
  const ratingChanged=()=>{}
  return (
    <>
    {/* <button onClick={() => swiper.slideNext()}></button> */}
     <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={3}
        // navigation
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled"
        }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
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
            slidesPerView: 3,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 32,
            slidesPerGroup: 1,
          },
          1336: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        }}



      >
        {customerSlide?.map((slide) => (
          <SwiperSlide key={slide.image}>
            <div className="customerSwiper">
              <div className="swiperImgss">
              <img src={slide.image} alt="" />
              <div className="slideDecrpt">
              <h6>{slide.name}</h6>
              <p>{slide.position}</p>
              </div>
              </div>
              <p className="desription_para">{slide.description}</p>
              <div className="sliderFooters">
                <div className="startRatess">
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
            {/* <button className="swipperBtn" onClick={()=>swiper}></button> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default CustomerSwiper