"use client";
import React, { useState } from "react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
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
    </>
  );
}
