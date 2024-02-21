"use client";

import { BackgroundGradientAnimation } from "@/components/BackgroundGradient";
import { MusicCard } from "@/components/MusicCard";
import { Slider } from "@/components/Slider";
import { Steps } from "@/components/Steps";
import gsap, { Power1 } from "gsap";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { SliderFlip } from "@/components/Sliderflip";
import Marquee from "react-fast-marquee";
import { useIsMobile } from "./hook/useIsMobile";
import { Checkbox } from "@/components/ui/checkbox";

export default function Home() {
  const tarjetas = [
    { name: "Visa Crédito", value: 1 },
    { name: "Visa Débito", value: 31 },
    { name: "MasterCard Débito", value: 105 },
    { name: "MasterCard Crédito", value: 104 },
    { name: "Maestro Débito", value: 106 },
    { name: "Cabal Débito", value: 108 },
    { name: "Cabal Crédito", value: 63 },
    { name: "American Express	", value: 65 },
  ];

  const isMobile = useIsMobile();

  return (
    <>
      <div className=" bg-black min-h-screen">
        <div className="w-screen flex justify-center items-center flex-col  ">
          <div className="md:w-fit w-9/12">
            <p
              style={{
                opacity: 0.9,
                mixBlendMode: "difference",
              }}
              className="font-geist text-white tracking-tighter	 text-4xl md:text-7xl text-center pt-10"
            >
              Pick Day Music
            </p>
            <div className="ShadowSeparator bg-gradient-to-r from-lime-400 to-green-500 h-[1vh] rounded-full mt-2" />
            <p className="text-white font-sans text-center tracking-tighter	 mt-2 text-md md:text-xl">
Escanea, Sonríe y Compartí
            </p>
          </div>
          <div className="w-screen flex justify-center mt-5">
            <div className="w-8/12 border-2 h-[60vh] bg-slate-200 rounded-xl"></div>
          </div>
          <div className="w-fit">
            <p
              style={{
                letterSpacing: -2,
              }}
              className="font-geist text-white tracking-tighter text-4xl text-center pt-10"
            >
              ¿Cómo funciona?
            </p>
            <div className="ShadowSeparator bg-gradient-to-r from-green-500 to-green-700 h-[.3vh] rounded-full mt-2" />
          </div>
          <div className="w-full mt-10">
            <Steps />
          </div>

          <Marquee className="mt-5 md:mt-20 mb-20" autoFill speed={130}>
            <div
              className="h-[300px]  w-[300px] rounded-xl mx-2 flex items-end justify-center"
              style={{
                backgroundImage:
                  " linear-gradient(to bottom, rgba(0,0,0,.1), rgba(0,0,0,0.5)), url('./taza1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Dialog>
                <DialogTrigger className="my-2 bg-green-200 text-black px-2 shadow-md shadow-gray-800 py-1 rounded-md flex items-center">
                  {" "}
                  <svg
                    width={20}
                    className="mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10h1m17 0h-1m0 0l-1 10H5L4 10m16 0h-4M4 10h4m4 4v2m3-2v2m-6-2v2m-1-6h8m-8 0V8c0-1.333.8-4 4-4s4 2.667 4 4v2"
                    ></path>
                  </svg>
                  Comprar
                </DialogTrigger>
                <DialogContent>
                  <div className="  bg-white">
                    <p className="text-center tracking-tighter text-md md:text-xl font-bold">
                      TAZA PERSONALIZADA YOU
                    </p>
                    <p className="text-center text-xl font-medium opacity-[0.6]">
                      $20.000
                    </p>
                    <div className=" grid grid-cols-1 md:grid-cols-1">
                      <div className="flex justify-center">
                        <SliderFlip images={["/taza1.png", "/taza2.png"]} />
                      </div>
                      <div>
                        <p className="text-center tracking-tighter hidden md:block text-xs">
                          Qui ut esse enim amet eu Lorem deserunt irure nulla ad
                          et.Voluptate duis aliquip quis velit elit non laboris
                          dolor ea voluptate duis fugiat non.
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <form className="w-11/12 md:w-8/12 md:mt-5 ">
                          <div className=" justify-center">
                            <Label>Nombre completo</Label>
                            <Input />
                          </div>
                          <div className=" justify-center mt-5">
                            <Label>Tarjeta</Label>
                            <Input />
                          </div>
                          <div className=" justify-center mt-5">
                            <Label>MM/AA</Label>
                            <Input />
                          </div>
                          <div className=" justify-center mt-5">
                            <Label>CVV</Label>
                            <Input />
                          </div>
                          <div className="flex items-center mt-5 space-x-2">
                            <Checkbox id="terms" />
                            <Label
                              htmlFor="terms"
                              className="text-sm tracking-tighter  font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Aceptar terminos y condiciones
                            </Label>
                          </div>
                          <Button className="mt-5">
                            <svg
                              className="mr-1"
                              width={20}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              stroke="#f5f5f7"
                              viewBox="0 0 24 24"
                            >
                              <g
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                              >
                                <rect
                                  width="18"
                                  height="13"
                                  x="3"
                                  y="6"
                                  rx="2"
                                ></rect>
                                <path d="M3 10h17.5M7 15h2"></path>
                              </g>
                            </svg>
                            Pagar
                          </Button>
                        </form>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div
              className="h-[300px]  w-[300px] rounded-xl mx-2 flex items-end justify-center"
              style={{
                backgroundImage:
                  " linear-gradient(to bottom, rgba(0,0,0,.1), rgba(0,0,0,0.5)), url('./tazaresi.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Dialog>
                <DialogTrigger className="my-2 bg-green-200 text-black px-2 shadow-md shadow-gray-800 py-1 rounded-md flex items-center">
                  {" "}
                  <svg
                    width={20}
                    className="mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10h1m17 0h-1m0 0l-1 10H5L4 10m16 0h-4M4 10h4m4 4v2m3-2v2m-6-2v2m-1-6h8m-8 0V8c0-1.333.8-4 4-4s4 2.667 4 4v2"
                    ></path>
                  </svg>
                  Comprar
                </DialogTrigger>
                <DialogContent className="">
                  <div className="  bg-white w-10/11">
                    <p className="text-center tracking-tighter text-md md:text-xl font-bold">
                      TAZA PERSONALIZADA YOU
                    </p>
                    <p className="text-center  text-xl font-medium opacity-[0.6]">
                      $20.000
                    </p>
                    <div className=" grid grid-cols-1 md:grid-cols-1">
                      <div className="flex justify-center">
                        <SliderFlip
                          images={["/tazaresi.png", "/tazaresi1.png"]}
                        />
                      </div>
                      <div>
                        <p className="text-center tracking-tighter hidden md:block text-xs">
                          Qui ut esse enim amet eu Lorem deserunt irure nulla ad
                          et.Voluptate duis aliquip quis velit elit non laboris
                          dolor ea voluptate duis fugiat non.
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <form className="w-11/12 md:w-8/12 md:mt-5 ">
                          <div className=" justify-center">
                            <Label>Nombre completo</Label>
                            <Input />
                          </div>
                          <div className=" justify-center mt-5">
                            <Label>Tarjeta</Label>
                            <Input />
                          </div>
                          <div className=" justify-center mt-5">
                            <Label>MM/AA</Label>
                            <Input />
                          </div>
                          <div className=" justify-center mt-5">
                            <Label>CVV</Label>
                            <Input />
                          </div>
                          <div className="flex mt-5 items-center space-x-2">
                            <Checkbox id="terms" />
                            <Label
                              htmlFor="terms"
                              className="text-sm font-medium leading-none tracking-tighter peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Aceptar terminos y condiciones
                            </Label>
                          </div>
                          <Button className="mt-5">
                            <svg
                              className="mr-1"
                              width={20}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              stroke="#f5f5f7"
                              viewBox="0 0 24 24"
                            >
                              <g
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                              >
                                <rect
                                  width="18"
                                  height="13"
                                  x="3"
                                  y="6"
                                  rx="2"
                                ></rect>
                                <path d="M3 10h17.5M7 15h2"></path>
                              </g>
                            </svg>
                            Pagar
                          </Button>
                        </form>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
}
