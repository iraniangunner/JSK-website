"use client";
import { useState } from "react";
import Image from "next/image";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";
import type { Slide } from "@/types/mainSliderTypes";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface MainCarouselProps {
  data: Slide[];
  baseImageUrl?: string;
}

export function MainCarousel({
  data,
  baseImageUrl = "https://jsk-co.com/storage/",
}: MainCarouselProps) {
  const [activeSlideIndex, setActiveStyleIndex] = useState<number>(0);
  const locale = useLocale();
  const isRTL = locale === "fa";

  const getImageUrl = (path: string) => `${baseImageUrl}${path}`;

  return (
    <section className="w-full select-none" dir="ltr">
      <div className="h-screen relative">
        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 z-20 h-1 bg-white/10">
          <motion.div
            key={activeSlideIndex}
            className="h-full bg-[#EC9123]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 4, ease: "linear" }}
          />
        </div>

        <Swiper
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{
            delay: 4000,
          }}
          effect="fade"
          loop={true}
          onSlideChange={(el) => {
            setActiveStyleIndex(el.realIndex);
          }}
          modules={[Autoplay, Navigation, EffectFade]}
          className="h-full"
        >
          {data.map(({ id, image, text, link, text_en }, index) => (
            <SwiperSlide key={id}>
              {({ isActive }) => (
                <div className="relative h-full">
                  {/* Main slide image */}
                  <div className="absolute inset-0">
                    <Image
                      src={getImageUrl(image) || "/placeholder.svg"}
                      alt={text}
                      fill
                      priority={index === 0}
                      quality={90}
                      sizes="100vw"
                      className="object-cover"
                    />
                    
                    {/* Gradient overlays for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-[1]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 z-[1]" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full w-full flex items-center justify-center">
                    <div className="max-w-5xl mx-auto px-6 text-center">
                      {/* Slide number indicator */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: isActive ? 1 : 0,
                          y: isActive ? 0 : 20,
                        }}
                        transition={{ duration: 0.6 }}
                        className="mb-6"
                      >
                        <span className="inline-flex items-center gap-3 text-white/60 text-sm font-medium tracking-widest uppercase">
                          <span className="w-8 h-px bg-[#EC9123]" />
                          <span className="text-[#EC9123] font-bold">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="text-white/40">/</span>
                          <span>{String(data.length).padStart(2, "0")}</span>
                          <span className="w-8 h-px bg-white/30" />
                        </span>
                      </motion.div>

                      {/* Main heading */}
                      <div className="overflow-hidden">
                        <motion.h2
                          initial={{ y: 100, opacity: 0 }}
                          animate={{
                            y: isActive ? 0 : 100,
                            opacity: isActive ? 1 : 0,
                          }}
                          transition={{ duration: 0.7, ease: "easeOut" }}
                          className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-8 ${
                            isRTL ? "font-persian" : ""
                          }`}
                          style={{
                            textShadow: "0 4px 30px rgba(0,0,0,0.3)",
                          }}
                        >
                          {locale === "fa" ? text : text_en}
                        </motion.h2>
                      </div>

                      {/* Decorative line */}
                      <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{
                          scaleX: isActive ? 1 : 0,
                          opacity: isActive ? 1 : 0,
                        }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="w-24 h-1 bg-[#EC9123] mx-auto mb-8 rounded-full"
                      />

                      {/* CTA Button */}
                      <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{
                          y: isActive ? 0 : 30,
                          opacity: isActive ? 1 : 0,
                        }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        <Link
                          href={link}
                          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#EC9123] text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#EC9123]/30"
                        >
                          {/* Button shine effect */}
                          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                          </span>
                          
                          <span className="relative z-10">
                            {locale === "fa" ? "مشاهده بیشتر" : "View More"}
                          </span>
                          
                         <svg
                            className={`relative z-10 w-5 h-5 transition-transform duration-300 ${
                              isRTL
                                ? "group-hover:-translate-x-1"
                                : ""
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                          </svg>
                        </Link>
                      </motion.div>
                    </div>
                  </div>

                  {/* Bottom gradient for navigation area */}
                  <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/60 to-transparent z-[2] pointer-events-none" />
                </div>
              )}
            </SwiperSlide>
          ))}

          {/* Navigation Buttons - UNCHANGED */}
          <NavigationButtons
            data={data}
            activeIndex={activeSlideIndex}
            getImageUrl={getImageUrl}
          />
        </Swiper>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {data.map((_, index) => (
            <button
              key={index}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === activeSlideIndex
                  ? "w-8 bg-[#EC9123]"
                  : "w-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Side decorative elements */}
        <div className="absolute top-1/2 -translate-y-1/2 left-6 z-10 hidden xl:flex flex-col items-center gap-4">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
          <span className="text-white/50 text-xs tracking-widest uppercase [writing-mode:vertical-lr] rotate-180">
            {locale === "fa" ? "اسکرول کنید" : "Scroll"}
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}

// Navigation Buttons Component - COMPLETELY UNCHANGED
function NavigationButtons({
  data,
  activeIndex,
  getImageUrl,
}: {
  data: Slide[];
  activeIndex: number;
  getImageUrl: (path: string) => string;
}) {
  return (
    <>
      <div className="swiper-button-prev main-prev flex hover:h-[100px] group after:hidden transition-all duration-500">
        <div className="hidden lg:block w-0 h-[80px] group-hover:w-[180px] group-hover:h-[100px] transition-all duration-500 relative overflow-hidden">
          <Image
            src={getImageUrl(
              activeIndex === 0
                ? data[data.length - 1].image
                : data[activeIndex - 1].image
            )}
            alt="Previous slide"
            fill
            sizes="180px"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div
          className="flex justify-center items-center relative before:absolute before:content-[''] before:skew-x-[10deg] before:transition-all before:duration-500 before:inline-block before:top-0 before:left-0 before:bottom-0 before:right-0 before:bg-[rgba(255_255_255)] before:opacity-[0.2] 
           before:origin-[50%_100%] before:z-[-1] pr-[10px] w-[80px] h-[80px] lg:group-hover:h-[100px] text-white lg:group-hover:before:bg-[#EC9123] lg:group-hover:before:opacity-100 lg:group-hover:text-white"
          style={{ transition: "inherit" }}
        >
          <FaArrowLeft className="next_icon" />
        </div>
      </div>

      <div className="swiper-button-next main-next flex hover:h-[100px] group after:hidden transition-all duration-500">
        <div
          className="relative before:absolute before:content-[''] before:skew-x-[-10deg] before:transition-all before:duration-500 before:inline-block before:top-0 before:left-0 before:bottom-0 before:right-0 before:bg-[rgba(255_255_255)] before:opacity-[0.2] 
          before:origin-[50%_100%] before:z-[-1] pl-[10px] flex justify-center items-center w-[80px] h-[80px] lg:group-hover:h-[100px] text-white lg:group-hover:before:bg-[#EC9123] lg:group-hover:before:opacity-100 lg:group-hover:text-white"
          style={{ transition: "inherit" }}
        >
          <FaArrowRight className="next_icon" />
        </div>

        <div className="hidden lg:block w-0 h-[80px] group-hover:h-[100px] group-hover:w-[180px] transition-all duration-500 relative overflow-hidden">
          <Image
            src={getImageUrl(
              activeIndex === data.length - 1
                ? data[0].image
                : data[activeIndex + 1].image
            )}
            alt="Next slide"
            fill
            sizes="180px"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </>
  );
}