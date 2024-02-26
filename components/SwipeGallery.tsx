// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";

const SwipeGallery = () => {
  return (
    <div>
      Swiper
      <Swiper></Swiper>
    </div>
    //   spaceBetween={50}
    //   slidesPerView={3}
    //   onSlideChange={() => console.log("slide change")}
    //   onSwiper={(swiper) => console.log(swiper)}
    // >
    //   <SwiperSlide>Slider 1</SwiperSlide>
    //   <SwiperSlide>Slider 2</SwiperSlide>
    //   <SwiperSlide>Slider 3</SwiperSlide>
    //   <SwiperSlide>Slider 4</SwiperSlide>
    // </>
  );
};

export default SwipeGallery;
