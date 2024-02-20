import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";

import { EffectFlip, Pagination } from "swiper/modules";

export const SliderFlip = ({ images }) => {
  return (
    <>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        loop={true}
        modules={[EffectFlip, Pagination]}
        className="mySwiper  w-6/12"
      >
        {images.map((e) => (
          <SwiperSlide key={e}>
            <img src={e} className="w-full " />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
