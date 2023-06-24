import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

export default function Slider({ imgs }) {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {imgs.map((img) => (
        <SwiperSlide>
          <div className="imgContainer">
            <img src={img} alt="feedImg" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
