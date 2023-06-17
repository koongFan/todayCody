import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper";

export default function Slider(imgs) {
  console.log(imgs);
  return (
    <>
      <Swiper
        pagination={true}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="imgContainer">
            <img src={imgs[0]} alt="feedImg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgContainer">
            <img src={imgs[1]} alt="feedImg" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
