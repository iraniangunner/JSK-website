"use client";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const Slide = ({ index, children }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    // transition={{
    //   duration: 0.8,
    //   delay: (index + 1) * 0.2,
    //   ease: "easeIn",
    // }}
    variants={{
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 50 },
    }}
    // initial={{ opacity: 0, y: 50 }}
    // animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }} // Adjust delay multiplier (0.2 seconds here)
  >
    {children}
  </motion.div>
);

export function RelatedCarousel({ related }) {
  return (
    <Swiper
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
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
      autoplay={{
        delay: 4000,
      }}
      loop={true}
      modules={[Autoplay, Navigation, EffectFade]}
      className="h-full"
    >
      {related.map((p, index) => (
        <SwiperSlide key={p.id} className="pt-[60px]">
          <Slide index={index}>
            <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl font-iransans">
              <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                <img
                  src={"https://image.tmdb.org/t/p/w500" + p.backdrop_path}
                  alt="card-image"
                  className="h-full w-full"
                />
              </div>
              <div className="p-6">
                <h5 className="block mb-2 font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  {p.title}
                </h5>
                {/* <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                {p.overview.substr(0, 20)}
              </p> */}
              </div>
              <div className="p-6 pt-0 self-center">
                <Link
                  className="align-middle select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                  href={`/projects/${p.id}`}
                >
                  مشاهده بیشتر
                </Link>
              </div>
            </div>
          </Slide>
        </SwiperSlide>
      ))}

      <div className="absolute right-[20px] top-0 flex gap-2">
        <div className="swiper-button-prev related-prev after:hidden border border-[#ffa500] rounded-full p-[8px]">
          <FaArrowLeftLong />
        </div>
        <div className="swiper-button-next related-next after:hidden border border-[#ffa500] rounded-full p-[8px]">
          <FaArrowRightLong />
        </div>
      </div>
    </Swiper>
  );
}
