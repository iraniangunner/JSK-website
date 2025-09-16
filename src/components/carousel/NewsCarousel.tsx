"use client";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useLocale } from "next-intl";
import { News, PaginatedResponse } from "@/types/news";

interface SlideProps {
  delay: number;
  children: React.ReactNode;
}

const Slide: React.FC<SlideProps> = ({ delay, children }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    className="h-full"
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

export const NewsCarousel = ({ news }: { news: PaginatedResponse<News> }) => {
  const [delays, setDelays] = useState<number[]>([]);

  const locale = useLocale();

  const handleSwiperInit = (swiper: any) => {
    const newDelays = [];
    for (let i = 0; i < swiper.params.slidesPerView; i++) {
      // Apply delay incrementally to initial visible slides
      newDelays.push(i * 0.6);
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
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
        1280: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        1536: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      }}
      loop={true}
      autoplay={{ delay: 4000 }}
      modules={[Autoplay, Navigation, EffectFade]}
      style={{ paddingTop: 60, height: "100%" }}
    >
      {news.data.map((n, index) => (
        <SwiperSlide key={n.id}>
          <Slide delay={delays[index] || 0}>
            <div
              className="relative h-full text-gray-700 border-[3px] border-gray-400  group project_slider_container bg-white select-none"
              style={{
                fontFamily: `${
                  locale === "fa"
                    ? "var(--font-yekanbakh)"
                    : "var(--font-inter)"
                }`,
              }}
            >
              <div className="relative h-full">
                <Image
                  src={`https://jsk-co.com${n.image_url}`}
                  width={500}
                  height={400}
                  alt="project-image"
                  sizes="(max-width: 768px) 250px, 400px"
                  style={{ width: "100%", height: 400 }}
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full project_slider_content flex flex-col justify-end py-6 px-4">
                <div className="translate-y-0 mb-[30px]mb-0 transition-all duration-[0.3]">
                  <h3 className="mb-3 text-white">
                    <Link href={`/news/${n.id}`}>
                      {locale === "fa" ? n.title : n.title_en}
                    </Link>
                  </h3>
                  <div className="mb-4 h-[1px] bg-[rgb(225_230_238)] opacity-[0.4]"></div>
                  <div className="mb-6 opacity-0 group-hover:opacity-[1] grop transition-all duration-[0.3] delay-[0.1]">
                    <div className="text-gray-300"></div>
                  </div>
                </div>
                <div className="text-white group-hover:text-[#EC9123] transition-all duration-[0.3]">
                  <Link
                    href={`/news/${n.id}`}
                    className="flex items-center gap-1 h-full"
                  >
                    <span>
                      {locale === "fa" ? "مشاهده بیش تر" : "View More"}
                    </span>
                    {locale === "fa" ? (
                      <IoIosArrowRoundBack size={30} />
                    ) : (
                      <IoIosArrowRoundForward size={30} />
                    )}
                  </Link>
                </div>
              </div>
            </div>

            {/* <NewsCard news={n}/> */}
          </Slide>
        </SwiperSlide>
      ))}

      <div className="absolute right-[20px] top-0 flex gap-2">
        <div
          className="swiper-button-prev related-prev after:hidden border border-[#EC9123] rounded-full
        hover:bg-white bg-[#EC9123] transition-all"
        >
          <FaArrowLeftLong className="text-white hover:text-[#EC9123] transition-all p-[8px]" />
        </div>
        <div
          className="swiper-button-next related-next after:hidden border border-[#EC9123] rounded-full
        hover:bg-white bg-[#EC9123] transition-all"
        >
          <FaArrowRightLong className="text-white hover:text-[#EC9123] transition-all p-[8px]" />
        </div>
      </div>
    </Swiper>
  );
};
