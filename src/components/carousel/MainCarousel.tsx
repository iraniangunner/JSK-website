"use client";
import React, { useState } from "react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Slide } from "@/types/mainSliderTypes";
import Link from "next/link";

export const MainCarousel = ({ data }: { data: Slide[] }) => {
  const [activeSlideIndex, setActiveStyleIndex] = useState<number>(0);

  return (
    <section className="w-full select-none" dir="ltr">
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
            {data.map(
              ({
                id,
                image,
                text,
                link,
              }: {
                id: number;
                image: string;
                text: string;
                link: string;
              }) => (
                <SwiperSlide key={id}>
                  {({ isActive }) => (
                    <>
                      <div
                        className="h-full w-full absolute left-0 top-0 before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:opacity-[0.3] before:z-[0] before:bg-[#042038]"
                        style={{
                          background: `url(https://jsk-co.com/storage/${image}) center center / cover scroll no-repeat`,
                        }}
                      ></div>
                      <div className="h-full w-full absolute left-0 top-0 bg-black opacity-20"></div>
                      <div className="relative z-10 h-full w-full">
                        <div className="absolute top-[25%] left-[50%] translate-x-[-50%] lg:max-w-[30%] overflow-hidden">
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
                              className="text-[20px] lg:text-[30px] font-semibold leading-10 lg:leading-[70px] text-center text-white"
                            >
                              {text}
                            </p>
                          </motion.div>

                          <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{
                              x: isActive ? 0 : 100,
                              opacity: isActive ? 1 : 0,
                            }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="flex justify-center items-center mt-8"
                          >
                            <div className="text-white bg-[#ffa500]">
                              <Link
                                href={link}
                                className="px-6 py-4 w-full h-full block"
                              >
                                مشاهده بیش تر
                              </Link>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </>
                  )}
                </SwiperSlide>
              )
            )}

            <div className="swiper-button-prev main-prev flex hover:h-[100px] group after:hidden transition-all duration-500">
              <div className="hidden lg:block w-0 h-[80px] group-hover:w-[180px] group-hover:h-[100px] transition-all duration-500">
                <div
                  style={{
                    background: `url(https://jsk-co.com/storage/${
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
                className="flex justify-center items-center relative before:absolute before:content-[''] before:skew-x-[10deg] before:transition-all before:duration-500 before:inline-block before:top-0 before:left-0 before:bottom-0 before:right-0 before:bg-[rgba(255_255_255)] before:opacity-[0.2] 
                 before:origin-[50%_100%] before:z-[-1] pr-[10px] w-[80px] h-[80px] lg:group-hover:h-[100px] text-white lg:group-hover:before:bg-[#ffa500] lg:group-hover:before:opacity-100 lg:group-hover:text-white"
                style={{ transition: "inherit" }}
              >
                <FaArrowLeft className="next_icon" />
              </div>
            </div>
            <div className="swiper-button-next main-next flex hover:h-[100px] group after:hidden transition-all duration-500">
              <div
                className="relative before:absolute before:content-[''] before:skew-x-[-10deg] before:transition-all before:duration-500 before:inline-block before:top-0 before:left-0 before:bottom-0 before:right-0 before:bg-[rgba(255_255_255)] before:opacity-[0.2] 
                before:origin-[50%_100%] before:z-[-1] pl-[10px] flex justify-center items-center w-[80px] h-[80px] lg:group-hover:h-[100px] text-white lg:group-hover:before:bg-[#ffa500] lg:group-hover:before:opacity-100  lg:group-hover:text-white"
                style={{ transition: "inherit" }}
              >
                <FaArrowRight className="next_icon" />
              </div>

              <div className="hidden lg:block w-0 h-[80px] group-hover:h-[100px] group-hover:w-[180px] transition-all duration-500">
                <div
                  style={{
                    background: `url(https://jsk-co.com/storage/${
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
