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
  baseImageUrl?: string; // Optional prop to configure base URL
}

export function MainCarousel({
  data,
  baseImageUrl = "https://jsk-co.com/storage/",
}: MainCarouselProps) {
  const [activeSlideIndex, setActiveStyleIndex] = useState<number>(0);
  const locale = useLocale();

  // Function to get the full image URL
  const getImageUrl = (path: string) => `${baseImageUrl}${path}`;

  return (
    <section className="w-full select-none" dir="ltr">
      <div className="h-screen">
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
          {data.map(({ id, image, text, link, text_en }) => (
            <SwiperSlide key={id}>
              {({ isActive }) => (
                <div className="relative h-full">
                  {/* Main slide image with Next.js Image optimization */}
                  <div className="absolute inset-0">
                    <Image
                      src={getImageUrl(image) || "/placeholder.svg"}
                      alt={text}
                      fill
                      priority={id === 11} // Priority load first slide
                      quality={85}
                      sizes="100vw"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                    {/* Dark overlays */}
                    <div className="absolute inset-0 bg-[#042038] opacity-30 z-[1]" />
                    <div className="absolute inset-0 bg-black opacity-20 z-[1]" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full w-full">
                    <div className="absolute top-[25%] left-[50%] translate-x-[-50%] lg:max-w-[30%] overflow-hidden">
                      <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{
                          y: isActive ? 0 : 50,
                          opacity: isActive ? 1 : 0,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <p
                          className={`text-sm sm:text-[30px] font-semibold leading-8 sm:leading-10 lg:leading-[50px] ${
                            locale === "fa" ? "text-center" : "text-left"
                          } text-white`}
                        >
                          {locale === "fa" ? text : text_en}
                        </p>
                      </motion.div>

                      <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{
                          x: isActive ? 0 : 100,
                          opacity: isActive ? 1 : 0,
                        }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex justify-center items-center mt-8"
                      >
                        <div className="text-white bg-[#ffa500]">
                          <Link
                            href={link}
                            className="px-4 py-2 sm:px-6 sm:py-4 w-full h-full block hover:bg-[#ffa600]/90 transition-colors text-sm sm:text-[18px]"
                          >
                            {locale === "fa" ? "مشاهده بیش تر" : "View More"}
                          </Link>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}

          {/* Navigation Buttons with Preview */}
          <NavigationButtons
            data={data}
            activeIndex={activeSlideIndex}
            getImageUrl={getImageUrl}
          />
        </Swiper>
      </div>
    </section>
  );
}

// Separate component for navigation buttons
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
           before:origin-[50%_100%] before:z-[-1] pr-[10px] w-[80px] h-[80px] lg:group-hover:h-[100px] text-white lg:group-hover:before:bg-[#ffa500] lg:group-hover:before:opacity-100 lg:group-hover:text-white"
          style={{ transition: "inherit" }}
        >
          <FaArrowLeft className="next_icon" />
        </div>
      </div>

      <div className="swiper-button-next main-next flex hover:h-[100px] group after:hidden transition-all duration-500">
        <div
          className="relative before:absolute before:content-[''] before:skew-x-[-10deg] before:transition-all before:duration-500 before:inline-block before:top-0 before:left-0 before:bottom-0 before:right-0 before:bg-[rgba(255_255_255)] before:opacity-[0.2] 
          before:origin-[50%_100%] before:z-[-1] pl-[10px] flex justify-center items-center w-[80px] h-[80px] lg:group-hover:h-[100px] text-white lg:group-hover:before:bg-[#ffa500] lg:group-hover:before:opacity-100 lg:group-hover:text-white"
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
