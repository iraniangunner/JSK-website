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
  //   function geSlideDataIndex(swipe:any){
  //     var activeIndex = swipe.activeIndex;
  //     var slidesLen = swipe.slides.length;

  //     console.log(slidesLen)
  //     if(swipe.params.loop){
  //         switch(swipe.activeIndex){
  //             case 0:
  //                 activeIndex = slidesLen-3;
  //                 break;
  //             case slidesLen-1:
  //                 activeIndex = 0;
  //                 break;
  //             default:
  //                 --activeIndex;
  //         }
  //     }
  //     return  activeIndex;
  // }

  return (
    <section className="w-full" dir="ltr">
      <div className="h-screen">
        <ul className="h-full w-full">
          <Swiper
            // navigation
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            effect="fade"
            autoplay={true}
            // loop={true}
            onSlideChange={(el) =>
              setActiveStyleIndex((activeSlideIndex) => el.activeIndex)
            }
            modules={[Autoplay, Navigation, EffectFade]}
            className="h-full"
          >
            {data.map(({ id, image, tagline, title, buttons }) => (
              <SwiperSlide key={id}>
                <div
                  className="h-full w-full absolute left-0 top-0"
                  style={{
                    background: `url(${image}) center center / cover scroll no-repeat`,
                  }}
                ></div>
                <div className="h-full w-full absolute left-0 top-0 bg-black opacity-20"></div>
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center">
                    {tagline && (
                      <p className="text-md sm:text-xl lg:text-3xl font-semibold text-white">
                        {tagline}
                      </p>
                    )}
                    <p className="text-3xl sm:text-6xl lg:text-8xl font-bold text-white">
                      {title}
                    </p>
                    {buttons.length > 0 ? (
                      <p className=" bg-gray-800 inline-block px-9 py-2 rounded-full text-white mt-10 lg:mt-20">
                        <SliderButtons buttons={buttons} />
                      </p>
                    ) : null}
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className="swiper-button-prev flex group after:hidden transition-all duration-500">
              <div
                className={`w-0 h-[100px] ${
                  activeSlideIndex !== 0
                    ? "group-hover:w-[200px] group-hover:h-[100px] transition-all duration-500"
                    : ""
                }`}
              >
                <div
                  style={{
                    background: `url(${
                      data[activeSlideIndex - 1]
                        ? data[activeSlideIndex - 1].image
                        : ""
                    }) center center / cover scroll no-repeat`,
                    width: "inherit",
                    height: "inherit",
                  }}
                ></div>
              </div>
              <div
                className={`relative before:absolute before:content-[''] before:skew-x-[10deg] before:transition-all before:duration-500 before:inline-block before:top-0 before:left-0 before:bottom-0 before:right-0 before:bg-[#ccc] ${
                  activeSlideIndex === 0 ? "before:hidden" : ""
                }  before:origin-[50%_100%] before:z-[-1] pr-[10px] flex justify-center items-center w-[80px] h-[100px]`}
                style={{ transition: "inherit" }}
              >
                <FaArrowLeft className="next_icon" />
              </div>
            </div>
            <div className="swiper-button-next flex group after:hidden transition-all duration-500">
              <div
                className={`relative before:absolute before:content-[''] before:skew-x-[-10deg] before:transition-all before:duration-500 before:inline-block before:top-0 before:left-0 before:bottom-0 before:right-0 before:bg-[#ccc] ${
                  activeSlideIndex === data.length - 1 ? "before:hidden" : ""
                }  before:origin-[50%_100%] before:z-[-1] pl-[10px] flex justify-center items-center w-[80px] h-[100px]`}
                style={{ transition: "inherit" }}
              >
                <FaArrowRight className="next_icon" />
              </div>

              <div
                className={`w-0 h-[100px] ${
                  activeSlideIndex !== data.length - 1
                    ? "group-hover:w-[200px] group-hover:h-[100px] transition-all duration-500"
                    : ""
                }`}
              >
                <div
                  style={{
                    background: `url(${
                      activeSlideIndex === 0
                        ? data[activeSlideIndex + 1].image
                        : data[activeSlideIndex + 1]
                        ? data[activeSlideIndex + 1].image
                        : ""
                    }) 
                    center center / cover  no-repeat`,
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