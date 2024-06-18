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
import { useState } from "react";
import { motion } from "framer-motion";

interface SlideProps {
  delay: number;
  children: React.ReactNode;
}

const Slide: React.FC<SlideProps> = ({ delay, children }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 50 },
    }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

interface Project {
  id: string;
  title: string;
  backdrop_path: string;
}

interface ProjectsCarouselProps {
  projects: Project[];
}

export const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({
  projects,
}) => {
  const [delays, setDelays] = useState<number[]>([]);

  const handleSwiperInit = (swiper: any) => {
    const newDelays = [];
    for (let i = 0; i < swiper.params.slidesPerView; i++) {
      newDelays.push(i * 0.6); // Apply delay incrementally to initial visible slides
    }
    setDelays(newDelays);
  };

  return (
    <Swiper
      onInit={handleSwiperInit}
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
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      }}
      loop={true}
      //autoplay={{ delay: 4000 }}
      grabCursor={true}
      modules={[Autoplay, Navigation, EffectFade]}
      style={{paddingTop:60 , height:"100%"}}
    >
      {projects.map((p, index) => (
        <SwiperSlide key={p.id}>
          <Slide delay={delays[index] || 0}>
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
              </div>
              <div className="p-6 pt-0 self-center">
                <Link
                  className="align-middle select-none font-bold text-center 
                    uppercase transition-all disabled:opacity-50 disabled:shadow-none 
                    disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 
                    text-white shadow-md shadow-gray-900/10 hover:shadow-lg 
                    hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none 
                    active:opacity-[0.85] active:shadow-none"
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
          <FaArrowLeftLong color="white" />
        </div>
        <div className="swiper-button-next related-next after:hidden border border-[#ffa500] rounded-full p-[8px]">
          <FaArrowRightLong color="white" />
        </div>
      </div>
    </Swiper>
  );
};
