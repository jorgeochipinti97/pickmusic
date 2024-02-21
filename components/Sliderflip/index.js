import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";

import { Autoplay, EffectFlip, Pagination } from "swiper/modules";
import { useIsMobile } from "@/app/hook/useIsMobile";

export const SliderFlip = ({ images }) => {
  const isMobile = useIsMobile();

  return (
    <>
      <Swiper
        effect={"flip"}
        loop={true}
        autoplay={{
          delay: 800,

        }}
        modules={[Autoplay, EffectFlip, Pagination]}
        className="mySwiper  w-6/12"
      >
        {images.map((e) => (
          <SwiperSlide key={e}>
            <div className="flex justify-center">
              <img src={e} className={isMobile ? "w-12/12" : "w-12/12 "} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
