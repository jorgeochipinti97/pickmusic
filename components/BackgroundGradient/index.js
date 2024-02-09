"use client";
import { cn } from "@/lib/utils";
import gsap, { Power1 } from "gsap";
import { useEffect, useRef, useState } from "react";

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "rgb(0, 0, 0)",
  gradientBackgroundEnd = "rgb(0, 0, 0)",
  firstColor = "18, 113, 255",
  secondColor = "221, 74, 255",
  thirdColor = "100, 220, 255",
  fourthColor = "200, 50, 50",
  fifthColor = "180, 180, 50",
  pointerColor = "140, 100, 255",
  size = "100%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName,
  isPlay,
}) => {
  const interactiveRef = useRef(null);

  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);

  useEffect(() => {
    isPlay &&
      gsap.to(".buble", {
        opacity: "1",
        duration: ".6",
        delay: 0.5,
        ease: Power1.easeIn,
      });
    isPlay &&
      gsap.to(".slider", {
        opacity: "1",
        duration: ".6",
        delay: 0.5,
        ease: Power1.easeIn,
      });

    !isPlay &&
      gsap.to(".buble", {
        opacity: "0",
        duration: ".5",
        ease: Power1.easeIn,
      });
  }, [isPlay]);

  useEffect(() => {
    document.body.style.setProperty(
      "--gradient-background-start",
      gradientBackgroundStart
    );
    document.body.style.setProperty(
      "--gradient-background-end",
      gradientBackgroundEnd
    );
    document.body.style.setProperty("--first-color", firstColor);
    document.body.style.setProperty("--second-color", secondColor);
    document.body.style.setProperty("--third-color", thirdColor);
    document.body.style.setProperty("--fourth-color", fourthColor);
    document.body.style.setProperty("--fifth-color", fifthColor);
    document.body.style.setProperty("--pointer-color", pointerColor);
    document.body.style.setProperty("--size", size);
    document.body.style.setProperty("--blending-value", blendingValue);
  }, []);

  useEffect(() => {
    let requestId;
  
    const speed = 5; // Controla la velocidad de movimiento
    const direction = { x: speed, y: speed }; // Dirección inicial del movimiento
  
    function move() {
      if (!interactiveRef.current) {
        return;
      }
  
      // Actualiza las posiciones actuales basadas en la dirección
      setCurX((curX) => {
        let newX = curX + direction.x;
        // Obtén el ancho del contenedor para limitar el movimiento
        const maxWidth = interactiveRef.current.parentNode.offsetWidth - interactiveRef.current.offsetWidth;
        if (newX <= 0 || newX >= maxWidth) {
          direction.x *= -1; // Invierte la dirección en X
          newX = curX + direction.x; // Ajusta la posición para evitar que se "atasque"
        }
        return newX;
      });
  
      setCurY((curY) => {
        let newY = curY + direction.y;
        // Obtén la altura del contenedor para limitar el movimiento
        const maxHeight = interactiveRef.current.parentNode.offsetHeight - interactiveRef.current.offsetHeight;
        if (newY <= 0 || newY >= maxHeight) {
          direction.y *= -1; // Invierte la dirección en Y
          newY = curY + direction.y; // Ajusta la posición para evitar que se "atasque"
        }
        return newY;
      });
  
      requestId = requestAnimationFrame(move); // Continúa el movimiento en el próximo frame
    }
  
    move();
  
    return () => {
      cancelAnimationFrame(requestId); // Limpia el requestAnimationFrame cuando el componente se desmonte
    };
  }, []);
  
  const handleMouseMove = (event) => {
    if (interactiveRef.current) {
      const rect = interactiveRef.current.getBoundingClientRect();
      // Calcula la posición del mouse relativa al contenedor
      let mouseX = event.clientX - rect.left;
      let mouseY = event.clientY - rect.top;
  
      // Asegúrate de que mouseX y mouseY no excedan los límites del contenedor
      mouseX = Math.max(0, Math.min(mouseX, rect.width));
      mouseY = Math.max(0, Math.min(mouseY, rect.height));
  
      setTgX(mouseX - rect.width / 2); // Ajusta según sea necesario para centrar
      setTgY(mouseY - rect.height / 2); // Ajusta según sea necesario para centrar
    }
  };

  return (
    <div
      className={cn(
        " max-h-screen h-screen w-screen relative overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]"
      )}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={cn("", className)}>{children}</div>
      <div className="gradients-container [filter:url(#blurMe)_blur(40px)] h-full w-full">
        <div
          style={{ opacity: 0 }}
          className={cn(
            `absolute buble [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:center_center]`,
            `animate-first`,

            containerClassName
          )}
        ></div>
        <div
          style={{ opacity: 0 }}
          className={cn(
            `absolute buble [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-400px)]`,
            `animate-second`,

            containerClassName
          )}
        ></div>
        <div
          style={{ opacity: 0 }}
          className={cn(
            `absolute buble [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%+400px)]`,
            `animate-third`,

            containerClassName
          )}
        ></div>
        <div
          style={{ opacity: 0 }}
          className={cn(
            `absolute buble [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-200px)]`,
            `animate-fourth`,

            containerClassName
          )}
        ></div>
        <div
          style={{ opacity: 0 }}
          className={cn(
            `absolute buble [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-800px)_calc(50%+800px)]`,
            `animate-fifth`,

            containerClassName
          )}
        ></div>

        {interactive && (
          <div
            style={{ opacity: 0 }}
            ref={interactiveRef}
            onMouseMove={handleMouseMove}
            className={cn(
              `absolute buble [background:radial-gradient(circle_at_center,__rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
              `[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2`,

              containerClassName
            )}
          ></div>
        )}
      </div>
    </div>
  );
};
