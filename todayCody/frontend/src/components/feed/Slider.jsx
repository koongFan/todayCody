import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

export default function Slider({ imgs }) {
  const baseUrl = "http://52.79.65.236:8081";
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
            <img src={baseUrl + img.slice(0, -1)} alt="feedImg" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
