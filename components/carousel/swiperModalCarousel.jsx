"use client";
import React, { useState } from "react";
import { Autoplay, Navigation, EffectFade, Thumbs, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// import "swiper/css/thumbs";

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

export function SwiperCarousel() {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const handleShow = (selectedIndex) => {
    setIndex(selectedIndex);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <div className="min-h-[100vh] flex justify-center">
      <div className="w-[80%] pt-[60px]">
        <Swiper
          loop={true}
          navigation
          autoplay={{
            // disableOnInteraction: false, // Optional, but recommended
            delay: 4000,
            // pauseOnMouseEnter: true,
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
          modules={[Autoplay, Navigation, EffectFade]}
          // spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {items.map((item, idx) => (
            <SwiperSlide key={item.id} onClick={() => handleShow(idx)}>
              <img src={item.src} alt={item.alt} className="slider-item" />
            </SwiperSlide>
          ))}
        </Swiper>

        {show && (
          <div className="modal" onClick={handleClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={handleClose}>
                &times;
              </span>
              <Swiper
                initialSlide={index}
                spaceBetween={50}
                navigation
                loop={true}
                // thumbs={{
                //   swiper:
                //     thumbsSwiper && !thumbsSwiper.destroyed
                //       ? thumbsSwiper
                //       : null,
                // }}
                modules={[FreeMode, Navigation, EffectFade, Thumbs]}
                slidesPerView={1}
              >
                {items.map((item) => (
                  <SwiperSlide key={item.id}>
                    <img
                      className="carousel-image"
                      src={item.src}
                      alt={item.alt}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* <Swiper
                onSwiper={setThumbsSwiper}
                modules={[FreeMode , Navigation , Thumbs]}
                spaceBetween={10}
                slidesPerView={3}
                //   effect="fade"
                loop
                freeMode
                watchSlidesProgress
                className="thumbnail-slider"
              >
                {items.map((item) => (
                  <SwiperSlide key={item.id}>
                    <img
                      className="thumbnail-image"
                      src={item.src}
                      alt={item.alt}
                    />
                  </SwiperSlide>
                ))}
              </Swiper> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
