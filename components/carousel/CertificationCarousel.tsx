"use client";
import React, { useState } from "react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const items = [
  {
    id: 1,
    src: "https://swiperjs.com/demos/images/nature-2.jpg",
    alt: "First slide",
  },
  {
    id: 2,
    src: "https://swiperjs.com/demos/images/nature-3.jpg",
    alt: "Second slide",
  },
  {
    id: 3,
    src: "https://swiperjs.com/demos/images/nature-4.jpg",
    alt: "Third slide",
  },
  {
    id: 4,
    src: "https://swiperjs.com/demos/images/nature-5.jpg",
    alt: "Third slide",
  },
];

export function CertificationsCarousel() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const handleOpen = (selectedIndex: number) => {
    setIndex(selectedIndex);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <div
        className="relative bg-projects-pattern pt-[80px] lg:pt-[260px] 
        lg:pb-[10px] bg-[top_right] bg-no-repeat bg-fixed
        before:absolute before:content-[''] before:left-0 before:top-0
        before:w-full before:h-full before:opacity-0 before:z-[-1]"
      >
        <nav
          aria-label="breadcrumb"
          className="px-[15px] mx-auto md:max-w-[720px] lg:max-w-[920px] relative"
        >
          <ol className="flex flex-wrap items-center absolute bottom-[20px] rounded-md bg-opacity-60 px-[1rem]">
            <li className="flex items-center text-lg font-iransans antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer text-blue-gray-900 hover:text-[#ffa500]">
              <Link href="/" className="opacity-60">
                خانه
              </Link>
              <span className="mx-2 font-sans text-lg antialiased font-normal leading-normal pointer-events-none select-none text-blue-gray-500">
                /
              </span>
            </li>
            <li className="flex items-center font-iransans text-lg antialiased font-normal leading-normal text-blue-gray-900">
              <span>گواهینامه ها و جوایز</span>
            </li>
          </ol>
        </nav>
        <h1 className="text-[35px] font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
         گواهینامه ها 
        </h1>
      </div>
      <div className="flex justify-center my-16">
        <div className="w-[80%] pt-[60px]">
          <Swiper
            loop={true}
            navigation
            autoplay={{
              delay: 4000,
            }}
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
            modules={[Autoplay, Navigation]}
            slidesPerView={1}
          >
            {items?.map((item: any, idx: number) => (
              <SwiperSlide
                key={item.id}
                className="cursor-pointer"
                onClick={() => handleOpen(idx)}
              >
                <img src={item.src} alt={item.alt} />
              </SwiperSlide>
            ))}
          </Swiper>

          <Modal
            open={open}
            onClose={handleClose}
            center
            showCloseIcon={false}
            classNames={{
              overlay: "customOverlay",
              modal: "customModal",
              modalAnimationIn: "customEnterModalAnimation",
              // modalAnimationOut: 'customLeaveModalAnimation',
            }}
            animationDuration={800}
          >
            <Swiper
              initialSlide={index}
              spaceBetween={50}
              navigation
              effect="fade"
              loop={true}
              modules={[Navigation, EffectFade]}
              slidesPerView={1}
            >
              {items.map((item: any) => (
                <SwiperSlide key={item.id}>
                  <img src={item.src} alt={item.alt} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Modal>
        </div>
      </div>
    </>
  );
}
