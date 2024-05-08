"use client";
import React, { useState } from "react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import SliderButtons from "./SliderButtons";

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
    <section className="w-full">
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
            dir="rtl"
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
            <div className="swiper-button-prev">
              <div className="">{activeSlideIndex}</div>
            </div>
            <div className="swiper-button-next">
              <div className="">{activeSlideIndex}</div>
            </div>
          </Swiper>
        </ul>
      </div>
    </section>
  );
};

export default MainCarousel;
