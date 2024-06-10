"use client";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useState } from "react";

export function CertificationsCarousel() {


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
          navigation
        //   slidesPerView={1}
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
        //   autoplay={{
        //     disableOnInteraction: false, // Optional, but recommended
        //     delay: 4000,
        //     pauseOnMouseEnter: true,
        //   }}
       
        >
          <SwiperSlide 
          
          className="" onClick={() => console.log("Hello")}>
            {/* <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl font-iransans">
              <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40"> */}

            <img
              src="https://swiperjs.com/demos/images/nature-2.jpg"
              alt="card-image"
            //   className="hover:scale-150 transition-all"
            //   className="h-full"
            />
            {/* </div>
            </div> */}
          </SwiperSlide>
          <SwiperSlide className="">
            {/* <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl font-iransans">
              <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40"> */}
            <img
              src="https://swiperjs.com/demos/images/nature-3.jpg"
              alt="card-image"
              //   className="h-full w-full"
            />
            {/* </div>
            </div> */}
          </SwiperSlide>
          <SwiperSlide className="">
            {/* <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl font-iransans">
              <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40"> */}
            <img
              src="https://swiperjs.com/demos/images/nature-4.jpg"
              alt="card-image"
              //   className="h-full w-full"
            />
            {/* </div>
            </div> */}
          </SwiperSlide>
          <SwiperSlide className="">
            {/* <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl font-iransans">
              <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40"> */}
            <img
              src="https://swiperjs.com/demos/images/nature-5.jpg"
              alt="card-image"
              //   className="h-full w-full"
            />
            {/* </div>
            </div> */}
          </SwiperSlide>
          <SwiperSlide className="">
            {/* <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl font-iransans">
              <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40"> */}
            <img
              src="https://swiperjs.com/demos/images/nature-6.jpg"
              alt="card-image"
              //   className="h-full w-full"
            />
            {/* </div>
            </div> */}
          </SwiperSlide>
          <SwiperSlide className="">
            {/* <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl font-iransans">
              <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40"> */}
            <img
              src="https://swiperjs.com/demos/images/nature-7.jpg"
              alt="card-image"
              //   className="h-full w-full"
            />
            {/* </div>
            </div> */}
          </SwiperSlide>
          <SwiperSlide className="">
            {/* <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl font-iransans">
              <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40"> */}
            <img
              src="https://swiperjs.com/demos/images/nature-8.jpg"
              alt="card-image"
              //   className="h-full w-full"
            />
            {/* </div>
            </div> */}
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
