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
          {project.images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-full w-full items-center justify-center">
                {/* <Image
                  src={image.src}
                  alt={image.alt}
                  className="block h-full w-full object-cover"
                /> */}

                <img src={"/images/" + image.src} className="w-full" />
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
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
          {project.images.map((image, index) => (
            <SwiperSlide key={index}>
              <button className="flex h-full w-full items-center justify-center">
                {/* <Image
                  src={image.src}
                  alt={image.alt}
                  className="block h-full w-full object-cover"
                /> */}
                <img src={"/images/" + image.src} className="w-full" />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
