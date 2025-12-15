"use client";
import React, { useState, useEffect } from "react";
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Image from "next/image";
import {
  Eye,
  Download,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Types
interface CertificationItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  issuer: string;
  year: string;
}

// Simulated server response
const fetchItems = (): Promise<CertificationItem[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          src: "iso-1.jpg",
          alt: "ISO 9001 Certificate",
          title: "ISO 9001:2015",
          issuer: "Quality Management",
          year: "2024",
        },
        {
          id: 2,
          src: "iso-2.jpg",
          alt: "ISO 14001 Certificate",
          title: "ISO 14001:2015",
          issuer: "Environmental Management",
          year: "2024",
        },
        {
          id: 3,
          src: "iso-3.jpg",
          alt: "ISO 45001 Certificate",
          title: "ISO 45001:2018",
          issuer: "Occupational Health & Safety",
          year: "2023",
        },
        {
          id: 4,
          src: "iso-2.jpg",
          alt: "ISO 27001 Certificate",
          title: "ISO 27001:2022",
          issuer: "Information Security",
          year: "2024",
        },
      ]);
    }, 1500);
  });

export function CertificationsCarousel() {
  const [items, setItems] = useState<CertificationItem[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetchItems().then((data) => {
      setItems(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto">
      {loading ? (
        <SkeletonLoader />
      ) : (
        <div className="relative group">
          {/* Custom Navigation Buttons */}
          <button
            className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 
                       w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center
                       opacity-0 group-hover:opacity-100 transition-all duration-300
                       hover:bg-blue-500 hover:text-white text-slate-600
                       disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 
                       w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center
                       opacity-0 group-hover:opacity-100 transition-all duration-300
                       hover:bg-blue-500 hover:text-white text-slate-600
                       disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 20 },
              640: { slidesPerView: 1.5, spaceBetween: 30 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 2.5, spaceBetween: 40 },
            }}
            modules={[Autoplay, Navigation, Pagination, EffectCoverflow]}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="py-8 px-4"
          >
            {items?.map((item, index) => (
              <SwiperSlide key={item.id}>
                <CertificationCard
                  item={item}
                  isActive={index === activeIndex}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Styles */}
          <style jsx global>{`
            .swiper-pagination-bullet {
              width: 10px;
              height: 10px;
              background: #cbd5e1;
              opacity: 1;
              transition: all 0.3s ease;
            }
            .swiper-pagination-bullet-active {
              background: #3b82f6;
              width: 24px;
              border-radius: 5px;
            }
          `}</style>
        </div>
      )}
    </div>
  );
}

// Certificate Card Component
function CertificationCard({
  item,
  isActive,
}: {
  item: CertificationItem;
  isActive: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-white border-2 transition-all duration-500 select-none
                  ${isActive ? "border-blue-400 shadow-xl shadow-blue-100" : "border-slate-200 shadow-lg"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge */}
      <div className="absolute top-4 right-4 z-10">
        <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full shadow-sm">
          Verified
        </span>
      </div>

      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
        <Image
          src={"/images/" + item.src}
          alt={item.alt}
          fill
          className={`object-contain p-4 transition-transform duration-500 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />

        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 bg-slate-900/60 flex items-center justify-center gap-3 
                      transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
        >
          <button className="p-3 bg-white rounded-full hover:bg-blue-500 hover:text-white transition-colors">
            <Eye className="w-5 h-5" />
          </button>
          <button className="p-3 bg-white rounded-full hover:bg-blue-500 hover:text-white transition-colors">
            <Download className="w-5 h-5" />
          </button>
          <button className="p-3 bg-white rounded-full hover:bg-blue-500 hover:text-white transition-colors">
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-slate-800">{item.title}</h3>
          <span className="text-sm text-slate-400">{item.year}</span>
        </div>
        <p className="text-slate-500 text-sm">{item.issuer}</p>

        {/* Progress Bar (decorative) */}
        <div className="mt-4 h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full transition-all duration-1000
                        ${isActive ? "w-full" : "w-0"}`}
          />
        </div>
      </div>
    </div>
  );
}

// Skeleton Loader Component
function SkeletonLoader() {
  return (
    <div className="flex gap-6 overflow-hidden py-8 justify-center">
      {[1, 2, 3].map((skeleton) => (
        <div
          key={skeleton}
          className="flex-shrink-0 w-full max-w-[320px]
                     bg-white rounded-2xl border border-slate-200 overflow-hidden"
        >
          {/* Image skeleton */}
          <div className="aspect-[4/3] bg-slate-100 animate-pulse relative overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent 
                          -translate-x-full animate-[shimmer_1.5s_infinite]"
            />
          </div>
          {/* Content skeleton */}
          <div className="p-5 space-y-3">
            <div className="flex justify-between items-center">
              <div className="h-6 bg-slate-200 rounded-md w-32 animate-pulse" />
              <div className="h-4 bg-slate-200 rounded-md w-12 animate-pulse" />
            </div>
            <div className="h-4 bg-slate-200 rounded-md w-48 animate-pulse" />
            <div className="h-1.5 bg-slate-100 rounded-full mt-4" />
          </div>
        </div>
      ))}
    </div>
  );
}
