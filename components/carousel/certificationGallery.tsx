"use client";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import iso1 from "../../public/images/iso-1.jpg";
import iso2 from "../../public/images/iso-2.jpg";
import iso3 from "../../public/images/iso-3.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useState } from "react";

export function CertificationsGallery() {
  
  return (
    <div className="min-h-[100vh] flex justify-center">
      <div className="w-[80%] pt-[60px]">
        <Swiper
          // navigation={{
          //   nextEl: ".swiper-button-next",
          //   prevEl: ".swiper-button-prev",
          // }}
          //   zoom={{
          //     maxRatio:5
          //   }}
          //   onMouseMove={}
          //  slideToClickedSlide={true}
          style={{padding:"10px 40px"}}
          navigation
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          loop={true}
          modules={[Autoplay, Navigation, EffectFade]}
          autoplay={{
            // disableOnInteraction: false, // Optional, but recommended
            delay: 4000,
            // pauseOnMouseEnter: true,
          }}
        >
          <SwiperSlide>
            <div>
              <div className="p-[4px] m-[40px] border-[2px] border-solid border-[#fff]">
                <img src={iso1.src} alt="card-image" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="p-[4px] m-[40px]">
                <img src={iso2.src} alt="card-image" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="p-[4px] m-[40px]">
                <img src={iso3.src} alt="card-image" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="p-[4px] m-[40px]">
                <img src={iso2.src} alt="card-image" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
