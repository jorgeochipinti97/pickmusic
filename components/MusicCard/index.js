"use client";
import { useEffect, useRef } from "react";

export const MusicCard = ({ onCall, play }) => {
  const audioRef = useRef(null); // Referencia al elemento de audio
  useEffect(() => {
    if (play) {
      audioRef.current.play(); // Reproduce el audio si 'play' es true
    } else {
      audioRef.current.pause(); // Pausa el audio si 'play' es false
    }
  }, [play]);
  return (
    <>
      <div
        onClick={() => onCall(!play)}
        className="flex fixed top-[85%] left-[40%]  glowElement border border-[#22C55E] z-50 shadowBox   justify-around  rounded-xl w-fit p-4"
      >
        <div className="flex justify-around w-[95%] items-center ">
          <div>
            <button className="rounded-full p-2 border-2 hover:scale-[1.2] transition-all duration-500  border-[#22C55E]">
              {play ? (
                <svg
                  className="hover:opacity-[0.7] "
                  width={20}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-1 0 8 8"
                >
                  <g>
                    <g
                      fill="none"
                      fillRule="evenodd"
                      stroke="none"
                      strokeWidth="1"
                    >
                      <g fill="#22C55E" transform="translate(-227 -3765)">
                        <g transform="translate(56 160)">
                          <path d="M172 3605a1 1 0 00-1 1v6a1 1 0 002 0v-6a1 1 0 00-1-1m5 1v6a1 1 0 01-2 0v-6a1 1 0 012 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              ) : (
                <>
                  <svg
                    className="hover:opacity-[0.7]  "
                    width={20}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-3 0 28 28"
                  >
                    <g>
                      <g
                        fill="none"
                        fillRule="evenodd"
                        stroke="none"
                        strokeWidth="1"
                      >
                        <g fill="#22C55E" transform="translate(-419 -571)">
                          <path d="M440.415 583.554l-18.997-12.243c-1.127-.607-2.418-.544-2.418 1.635v24.108c0 1.992 1.385 2.306 2.418 1.635l18.997-12.243a2.076 2.076 0 000-2.892"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="hidden">
          <audio src="./luna.mp3"  ref={audioRef}></audio>
        </div>
      </div>
    </>
  );
};
