"use client";

import { BackgroundGradientAnimation } from "@/components/BackgroundGradient";
import { MusicCard } from "@/components/MusicCard";
import { Slider } from "@/components/Slider";
import gsap, { Power1 } from "gsap";
import { useEffect, useState } from "react";

export default function Home() {
  const [play, setIsPlay] = useState(false);
  const [counter, setCounter] = useState(0);
  const [mensaje, setMensaje] = useState("Hermano, te quiero decir algo");

  useEffect(() => {
    play && setCounter(1);
    counter == 0 &&
      gsap.set(".swiper-slide", {
        xPercent: 100,
        opacity: 0,
      });

    play &&
      gsap.to(".glowElement", {
        boxShadow: "0 0 20px #22C55E", // Ajusta para el efecto deseado
        yoyo: true, // Para que la animación vaya y venga
        duration: 1, // Duración de la animación en segundos
      });

    !play && gsap.to(".glowElement", { boxShadow: "none" });

    gsap.to(".coverflowslide", {
      opacity: 1,
      duration: 1,
    });

    if (play && counter == 0) {
      gsap.to(".texto", {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          setMensaje(play ? "Posta, morite." : "Hermano, te quiero decir algo");

          gsap.fromTo(".texto", { opacity: 0 }, { opacity: 1, duration: 0.1 });
        },
      });

      const slides = gsap.utils.toArray(".swiper-slide");

      slides.forEach((slide, index) => {
        // Anima los slides para entrar en la vista
        gsap.to(slide, {
          xPercent: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          delay: index * 0.2, // Ajusta el retraso según sea necesario
        });
      });
    }
  }, [play]);

  return <></>;
}
