"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function ProjectCarousel({ project }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="py-12">
      <div>
        <Swiper
          loop={true}
          freeMode={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          dir="ltr"
          spaceBetween={10}
          effect="fade"
          // navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="lg:h-96 w-full select-none"
        >
          {/* {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-full w-full items-center justify-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="block h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))} */}

          <SwiperSlide>
            <img
              src={"https://image.tmdb.org/t/p/w500" + project.backdrop_path}
              className="w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
          </SwiperSlide>

          <div className="swiper-button-prev">
            
          </div>
          <div className="swiper-button-next">
            
          </div>
        </Swiper>

        {/* Thumbnail */}
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={12}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          dir="ltr"
          className="thumbs mt-3 h-32 w-full select-none"
        >
          {/* {images.map((image, index) => (
            <SwiperSlide key={index}>
              <button className="flex h-full w-full items-center justify-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="block h-full w-full object-cover"
                />
              </button>
            </SwiperSlide>
          ))} */}
          <SwiperSlide>
            <div className="h-full w-full absolute left-0 top-0">
              <img
                src={"https://image.tmdb.org/t/p/w500" + project.backdrop_path}
                className="w-full h-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full w-full absolute left-0 top-0">
              <img
                src="https://swiperjs.com/demos/images/nature-2.jpg"
                className="w-full h-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full w-full absolute left-0 top-0">
              <img
                src="https://swiperjs.com/demos/images/nature-3.jpg"
                className="w-full h-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full w-full absolute left-0 top-0">
              <img
                src="https://swiperjs.com/demos/images/nature-4.jpg"
                className="w-full h-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full w-full absolute left-0 top-0">
              <img
                src="https://swiperjs.com/demos/images/nature-5.jpg"
                className="w-full h-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full w-full absolute left-0 top-0">
              <img
                src="https://swiperjs.com/demos/images/nature-6.jpg"
                className="w-full h-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full w-full absolute left-0 top-0">
              <img
                src="https://swiperjs.com/demos/images/nature-7.jpg"
                className="w-full h-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full w-full absolute left-0 top-0">
              <img
                src="https://swiperjs.com/demos/images/nature-8.jpg"
                className="w-full h-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full w-full absolute left-0 top-0">
              <img
                src="https://swiperjs.com/demos/images/nature-9.jpg"
                className="w-full h-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full w-full absolute left-0 top-0">
              <img
                src="https://swiperjs.com/demos/images/nature-10.jpg"
                className="w-full h-full"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
