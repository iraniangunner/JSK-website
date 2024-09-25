"use client";
import React, { useState } from "react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import SliderButtons from "./SliderButtons";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { motion } from "framer-motion";

interface Slide {
  id: number;
  title: string;
  tagline: string;
  image: string;
  buttons: ButtonProps[];
}

interface ButtonProps {
  id: number;
  text: string;
  link: string;
  type: string;
}

interface MainCarouselProps {
  data: Slide[];
}

const MainCarousel: React.FC<MainCarouselProps> = ({ data }) => {
  const [activeSlideIndex, setActiveStyleIndex] = useState<number>(0);

  return (
    <section className="w-full" dir="ltr">
      <div className="h-screen">
        <ul className="h-full w-full">
          <Swiper
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            autoplay={{
              delay: 4000,
            }}
            effect="fade"
            loop={true}
            onSlideChange={(el) => {
              setActiveStyleIndex((activeSlideIndex) => el.realIndex);
            }}
            modules={[Autoplay, Navigation, EffectFade]}
            className="h-full"
          >
            {data.map(({ id, image, tagline, title, buttons }) => (
              <SwiperSlide key={id}>
                {({ isActive }) => (
                  <>
                    <div
                      className="h-full w-full absolute left-0 top-0"
                      style={{
                        background: `url(${image}) center center / cover scroll no-repeat`,
                      }}
                    ></div>
                    <div className="h-full w-full absolute left-0 top-0 bg-black opacity-20"></div>
                    <div className="relative z-10 h-full w-full">
                      <div className="absolute top-[25%] left-[50%] translate-x-[-50%] max-w-[30%]  overflow-hidden">
                        <motion.div
                          initial={{ x: 100, opacity: 0 }}
                          animate={{
                            x: isActive ? 0 : 100,
                            opacity: isActive ? 1 : 0,
                          }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                        >
                          {/* <p className="text-3xl sm:text-6xl lg:text-5xl uppercase font-bold text-white">
                            {title}
                          </p> */}
                        </motion.div>
                        {tagline && (
                          <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{
                              y: isActive ? 0 : 50,
                              opacity: isActive ? 1 : 0,
                            }}
                            transition={{ duration: 0.5 }}
                          >
                            <p
                              dir="rtl"
                              className="text-md sm:text-xl lg:text-3xl font-semibold text-center text-white"
                            >
                              {tagline}
                            </p>
                          </motion.div>
                        )}

                        {buttons.length > 0 ? (
                          <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{
                              x: isActive ? 0 : 100,
                              opacity: isActive ? 1 : 0,
                            }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="self-center"
                          >
                            {/* <div className="inline-block px-9 py-4 text-white bg-[#ffa500] mt-10">
                              <SliderButtons buttons={buttons} />
                            </div> */}
                          </motion.div>
                        ) : null}
                      </div>
                    </div>
                  </>
                )}
              </SwiperSlide>
            ))}

            <div className="swiper-button-prev main-prev flex hover:h-[100px] group after:hidden transition-all duration-500">
              <div className="w-0 h-[80px] group-hover:w-[180px] group-hover:h-[100px] transition-all duration-500">
                <div
                  style={{
                    background: `url(${
                      activeSlideIndex === 0
                        ? data[data.length - 1].image
                        : data[activeSlideIndex - 1].image
                    }) center center / cover scroll no-repeat`,
                    width: "inherit",
                    height: "inherit",
                  }}
                ></div>
              </div>
              <div
                className="relative before:absolute before:content-[''] before:skew-x-[10deg] before:transition-all before:duration-500 before:inline-block before:top-0 before:left-0 before:bottom-0 before:right-0 before:bg-[rgba(255_255_255)] before:opacity-[0.2] 
                 before:origin-[50%_100%] before:z-[-1] pr-[10px] flex justify-center items-center w-[80px] h-[80px] group-hover:h-[100px] text-white group-hover:before:bg-[#ffa500] group-hover:before:opacity-100 group-hover:text-white"
                style={{ transition: "inherit" }}
              >
                <FaArrowLeft className="next_icon" />
              </div>
            </div>
            <div className="swiper-button-next main-next flex hover:h-[100px] group after:hidden transition-all duration-500">
              <div
                className="relative before:absolute before:content-[''] before:skew-x-[-10deg] before:transition-all before:duration-500 before:inline-block before:top-0 before:left-0 before:bottom-0 before:right-0 before:bg-[rgba(255_255_255)] before:opacity-[0.2] 
                before:origin-[50%_100%] before:z-[-1] pl-[10px] flex justify-center items-center w-[80px] h-[80px] group-hover:h-[100px] text-white group-hover:before:bg-[#ffa500] group-hover:before:opacity-100  group-hover:text-white"
                style={{ transition: "inherit" }}
              >
                <FaArrowRight className="next_icon" />
              </div>

              <div className="w-0 h-[80px] group-hover:h-[100px] group-hover:w-[180px] transition-all duration-500">
                <div
                  style={{
                    background: `url(${
                      activeSlideIndex === data.length - 1
                        ? data[0].image
                        : data[activeSlideIndex + 1].image
                    }) 
                    center center / cover no-repeat`,
                    width: "inherit",
                    height: "inherit",
                  }}
                ></div>
              </div>
            </div>
          </Swiper>
        </ul>
      </div>
    </section>
  );
};

export default MainCarousel;
