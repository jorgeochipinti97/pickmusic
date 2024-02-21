"use client";

import { BackgroundGradientAnimation } from "@/components/BackgroundGradient";
import { MusicCard } from "@/components/MusicCard";
import { Slider } from "@/components/Slider";
import gsap, { Power1 } from "gsap";
import { useEffect, useState } from "react";

export default function Page() {
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

        duration: 1,
        top:'10%',
        onComplete: () => {
          setMensaje(play ? "Vamos al faro?" : "Hermano, te quiero decir algo");

          gsap.fromTo(".texto", { opacity: 0 }, { opacity: 1, duration: 2 });
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

  return (
    <BackgroundGradientAnimation
      // interactive={false}
      isPlay={play}
      firstColor="127, 171, 74"
      secondColor="249, 109, 43"
      thirdColor="32, 127, 91"
      fourthColor="127, 171, 74"
      fifthColor="243, 129, 149"
    >
      <div className="w-screen flex my-5 flex-col  items-center justify-center">
        <MusicCard onCall={setIsPlay} play={play} />
      </div>
      <div className=" h-screen items-center flex justify-center">
        <div className=" slider w-[100%] " style={{ opacity: 1 }}>
          <Slider
            sliderItems={[
              {
                type: "image",
                url: "https://res.cloudinary.com/datptrifz/image/upload/v1707505410/cbjjpcsqmcvrdjsatrgr.jpg",
              },
              {
                type: "image",
                url: "https://res.cloudinary.com/datptrifz/image/upload/v1707505411/lj5uutb0hkwonkls7p5c.jpg",
              },
              {
                type: "video",
                url: "https://res.cloudinary.com/datptrifz/video/upload/v1707505541/video_qvmvcl.mp4",
              },
              {
                type: "image",
                url: "https://res.cloudinary.com/datptrifz/image/upload/v1707505410/xcs7dh1jtdjtorjlawju.jpg",
              },
              {
                type: "image",
                url: "https://res.cloudinary.com/datptrifz/image/upload/v1707505415/qcyxmnwkexo8frfjdxiv.jpg",
              },
              {
                type: "image",
                url: "https://res.cloudinary.com/datptrifz/image/upload/v1707505414/teligiunpbtald8126ad.jpg",
              },
            ]}
          />
        </div>
      </div>
      <div className="h-[20vh] flex items-center justify-center w-full">
      <p className="font-sans mesnsaje_ texto z-50 text-4xl  text-white font-thin fixed top-[30%] w-10/12  text-center ">
          {mensaje}
        </p>
      </div>
    </BackgroundGradientAnimation>
  );
}
