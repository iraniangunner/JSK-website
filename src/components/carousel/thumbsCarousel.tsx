"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Project } from "@/types/projectTypes";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function ProjectCarousel({ project }: { project: Project }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null);

  return (
    <section className="lg:py-12">
      <div className="relative">
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
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="lg:h-96 w-full select-none"
        >
          {project.images.slice(1).map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-full w-full items-center justify-center">
                <Image
                  src={image.full_path}
                  alt="project-image"
                  width={1280}
                  height={675}
                  className="w-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="swiper-button-prev project-prev after:hidden absolute bg-white rounded-full shadow-md">
          <ChevronLeftIcon color="#ffa500" />
        </button>
        <button className="swiper-button-next project-next after:hidden absolute border bg-white rounded-full shadow-md">
          <ChevronRightIcon color="#ffa500" />
        </button>

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
          className="thumbs mt-[-30px] sm:mt-1 lg:mt-3 h-32 w-full select-none"
        >
          {project.images.slice(1).map((image, index) => (
            <SwiperSlide key={index}>
              <button className="flex h-full w-full items-center justify-center">
                <Image
                  src={image.full_path}
                  width={300}
                  height={100}
                  alt="thumbnail-image"
                  className="w-full"
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
