"use client";
import React, { useEffect, useRef, useState } from "react";
import { EffectCoverflow } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import gsap, { Power2 } from "gsap";

export const Slider = ({ sliderItems }) => {
  return (
    <>
      {" "}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.5}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow]}
        className="w-[100%] coverflowslide "
        style={{ opacity: 0 }}
      >
        {sliderItems.map((item, index) => (
          <SwiperSlide key={index} className="rounded-lg h-[30vh]">
            {item.type === "image" ? (
              <div
                style={{
                  backgroundImage: `url('${item.url}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="h-[30vh] rounded-lg"
              />

            ) : (
              <div className="flex justify-center w-fit rounded-lg">
                <video
                  src={item.url}
                  autoPlay
                  loop
                  muted
                  playsInline

                  className="w-10/12 rounded-lg"
                  style={{ borderRadius: "9px" }}
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
