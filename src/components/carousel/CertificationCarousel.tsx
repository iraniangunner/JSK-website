"use client";
import React, { useState, useEffect } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";

// Simulated server response for items
const fetchItems = (): Promise<{ id: number; src: string; alt: string }[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, src: "iso-1.jpg", alt: "First slide" },
        { id: 2, src: "iso-2.jpg", alt: "Second slide" },
        { id: 3, src: "iso-3.jpg", alt: "Third slide" },
        { id: 4, src: "iso-2.jpg", alt: "Fourth slide" },
      ]);
    }, 2000); 
  });

export function CertificationsCarousel() {
  const [items, setItems] = useState<
    { id: number; src: string; alt: string }[] | null
  >(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchItems().then((data) => {
      setItems(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">گواهینامه های شرکت</h2>
      <div className="border border-gray-200 rounded-lg p-4 select-none">
        {loading ? (
          // Skeleton loader
          <div className="flex gap-4">
            {[1, 2, 3].map((skeleton) => (
              <div
                key={skeleton}
                className="animate-pulse bg-gray-200 w-full h-56 rounded-lg"
              />
            ))}
          </div>
        ) : (
          // Swiper carousel
          <Swiper
            loop={true}
            navigation
            autoplay={{
              delay: 4000,
            }}
            spaceBetween={20}
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
                spaceBetween: 40,
              },
            }}
            modules={[Autoplay, Navigation]}
            slidesPerView={1}
          >
            {items?.map((item) => (
              <SwiperSlide key={item.id} className="border">
                <Image
                  src={"/images/" + item.src}
                  alt={item.alt}
                  className="w-full h-auto object-cover rounded-lg"
                  width={500} 
                  height={300}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}
