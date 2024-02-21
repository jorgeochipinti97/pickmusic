"use client";
import React, { useEffect, useRef, useState } from "react";
import { EffectCoverflow } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useIsMobile } from "@/app/hook/useIsMobile";

export const Steps = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={isMobile ? 1.3 : 3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
        }}
        pagination={true}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide className="  md:w-fit rounded-xl">
          {" "}
          <Card className="border-none   flex-col flex items-center justify-start bg-gradient-to-tr from-green-800 to-slate-900">
            <span className="mt-10 text-emerald-50 font-bold text-xl md:text-3xl">
              Paso 1
            </span>
            <CardHeader>
              <div className="flex justify-center">
                <svg
                  width={50}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-32 0 512 512"
                  fill="#f5f5f7"
                >
                  <path d="M105.6 83.2v86.177a115.52 115.52 0 00-22.4-2.176c-47.914 0-83.2 35.072-83.2 92 0 45.314 48.537 57.002 78.784 75.707 12.413 7.735 23.317 16.994 33.253 25.851l.146.131.148.129C129.807 376.338 136 384.236 136 391.2v2.679c-4.952 5.747-8 13.536-8 22.12v64c0 17.673 12.894 32 28.8 32h230.4c15.906 0 28.8-14.327 28.8-32v-64c0-8.584-3.048-16.373-8-22.12V391.2c0-28.688 40-67.137 40-127.2v-21.299c0-62.542-38.658-98.8-91.145-99.94-17.813-12.482-40.785-18.491-62.791-15.985A93.148 93.148 0 00272 118.847V83.2C272 37.765 234.416 0 188.8 0c-45.099 0-83.2 38.101-83.2 83.2zm118.4 0v91.026c14.669-12.837 42.825-14.415 61.05 4.95 19.646-11.227 45.624-1.687 53.625 12.925 39.128-6.524 61.325 10.076 61.325 50.6V264c0 45.491-35.913 77.21-39.676 120H183.571c-2.964-25.239-21.222-42.966-39.596-59.075-12.65-11.275-25.3-21.725-39.875-30.799C80.712 279.645 48 267.994 48 259.2c0-23.375 8.8-44 35.2-44 35.2 0 53.075 26.4 70.4 26.4V83.2c0-18.425 16.5-35.2 35.2-35.2 18.975 0 35.2 16.225 35.2 35.2zM352 424c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24z"></path>
                </svg>
              </div>
              <CardTitle className="text-center text-white font-sans mt-10 text-xl md:text-3xl">
                Selecciona tu taza
              </CardTitle>
              <CardContent>
                <p className="font-sans text-gray-200 md:text-md text-xs text-center">
                  Personalizala a tu medida.
                </p>
              </CardContent>
            </CardHeader>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="w-fit rounded-xl ">
          <Card className="border-none  flex-col flex items-center justify-start bg-gradient-to-tr from-green-800 to-slate-900">
            <span className="mt-10 text-emerald-50 font-bold text-3xl">
              Paso 2
            </span>
            <CardHeader>
              <div className="flex justify-center">
              <svg 
              width={50}
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        fill="#f5f5f7"
        fillRule="evenodd"
        d="M21.121 2.707a3 3 0 00-4.242 0l-1.68 1.68-7.906 7.906a1 1 0 00-.263.464l-1 4a1 1 0 001.213 1.213l4-1a1 1 0 00.464-.263l7.849-7.848 1.737-1.738a3 3 0 000-4.242l-.172-.172zm-2.828 1.414a1 1 0 011.414 0l.172.172a1 1 0 010 1.414l-1.017 1.017-1.555-1.617.986-.986zm-2.4 2.4l1.555 1.617-6.96 6.959-2.114.529.529-2.115 6.99-6.99zM4 8a1 1 0 011-1h5a1 1 0 100-2H5a3 3 0 00-3 3v11a3 3 0 003 3h11a3 3 0 003-3v-5a1 1 0 00-2 0v5a1 1 0 01-1 1H5a1 1 0 01-1-1V8z"
        clipRule="evenodd"
      ></path>
    </svg>
              </div>
              <CardTitle className="text-center text-white font-sans mt-10 text-xl md:text-3xl">
                Personalizá tu web
              </CardTitle>
              <CardContent>
                <p className="font-sans text-gray-300 md:text-md text-xs text-center">
                  Completa el formulario para que tu regalo sea único.
                </p>
              </CardContent>
            </CardHeader>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="w-fit rounded-xl">
          <Card className="border-none  flex-col flex items-center justify-start bg-gradient-to-tr from-green-800 to-slate-900">
            <span className="mt-10 text-emerald-50 font-bold text-3xl">
              Paso 3
            </span>
              <div className="flex justify-center mt-2">
                <img src="/phone.png" className="w-[100px]" />
              </div>
            <CardHeader>
              <CardTitle className="text-center text-gray-300 font-sans text-xl md:text-3xl">
                Escaneá y viví la experiencia.
              </CardTitle>
            </CardHeader>
          </Card>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
