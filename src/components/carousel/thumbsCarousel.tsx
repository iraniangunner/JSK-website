// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Navigation, Thumbs } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
// import { Project } from "@/types/projectTypes";
// import { ChevronLeftIcon } from "@heroicons/react/24/solid";
// import { ChevronRightIcon } from "@heroicons/react/24/solid";

// export default function ProjectCarousel({ project }: { project: Project }) {
//   const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null);

//   return (
//     <section className="lg:py-12">
//       <div className="relative">
//         <Swiper
//           loop={true}
//           freeMode={true}
//           navigation={{
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//           }}
//           dir="ltr"
//           spaceBetween={10}
//           effect="fade"
//           thumbs={{
//             swiper:
//               thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
//           }}
//           modules={[FreeMode, Navigation, Thumbs]}
//           className="lg:h-96 w-full select-none"
//         >
//           {project.images.map((image, index) => (
//             <SwiperSlide key={index}>
//               <div className="flex h-full w-full items-center justify-center">
//                 <Image
//                   src={image.full_path}
//                   alt="project-image"
//                   width={1280}
//                   height={675}
//                   className="w-full"
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <button className="swiper-button-prev project-prev after:hidden absolute bg-white rounded-full shadow-md">
//           <ChevronLeftIcon color="#ffa500" />
//         </button>
//         <button className="swiper-button-next project-next after:hidden absolute border bg-white rounded-full shadow-md">
//           <ChevronRightIcon color="#ffa500" />
//         </button>

//         {/* Thumbnail */}
//         <Swiper
//           onSwiper={setThumbsSwiper}
//           loop={true}
//           spaceBetween={12}
//           slidesPerView={4}
//           freeMode={true}
//           watchSlidesProgress={true}
//           modules={[FreeMode, Navigation, Thumbs]}
//           dir="ltr"
//           className="thumbs mt-[-30px] sm:mt-1 lg:mt-3 h-32 w-full select-none"
//         >
//           {project.images.map((image, index) => (
//             <SwiperSlide key={index}>
//               <button className="flex h-full w-full items-center justify-center">
//                 <Image
//                   src={image.full_path}
//                   width={300}
//                   height={100}
//                   alt="thumbnail-image"
//                   className="w-full"
//                 />
//               </button>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }

"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Project } from "@/types/projectTypes";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function ProjectCarousel({ project }: { project: Project }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null);

  return (
    <section className="w-full">
      <div className="relative bg-gray-50 rounded-lg overflow-hidden">
        {/* Main Swiper */}
        <Swiper
          loop={true}
          freeMode={true}
          navigation={{
            nextEl: ".project-button-next",
            prevEl: ".project-button-prev",
          }}
          dir="ltr"
          spaceBetween={10}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="w-full aspect-video select-none"
        >
          {project.images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-full w-full items-center justify-center bg-gray-100">
                <Image
                  src={image.full_path}
                  alt={`project image ${index + 1}`}
                  width={1280}
                  height={720}
                  className="w-full h-full object-cover"
                  priority={index === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button 
          className="project-button-prev after:hidden absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white hover:bg-[#ffa500] rounded-full shadow-lg flex items-center justify-center transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <ChevronLeftIcon className="w-6 h-6 text-[#ffa500] group-hover:text-white transition-colors" />
        </button>
        <button 
          className="project-button-next after:hidden absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white hover:bg-[#ffa500] rounded-full shadow-lg flex items-center justify-center transition-all duration-300 group"
          aria-label="Next slide"
        >
          <ChevronRightIcon className="w-6 h-6 text-[#ffa500] group-hover:text-white transition-colors" />
        </button>

        {/* Thumbnail Swiper */}
        <div className="bg-white p-3 border-t border-gray-200">
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={12}
            slidesPerView={3}
            breakpoints={{
              640: {
                slidesPerView: 4,
                spaceBetween: 12,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 16,
              },
            }}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            dir="ltr"
            className="thumbs w-full select-none"
          >
            {project.images.map((image, index) => (
              <SwiperSlide key={index}>
                <button className="relative w-full aspect-video rounded-lg overflow-hidden border-2 border-transparent hover:border-[#ffa500] transition-all duration-300 group">
                  <Image
                    src={image.full_path}
                    width={200}
                    height={120}
                    alt={`thumbnail ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Image Counter */}
        <div className="absolute bottom-4 left-4 z-10 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium">
          {project.images.length} {project.images.length > 1 ? 'Images' : 'Image'}
        </div>
      </div>

      {/* Custom Styles for Active Thumbnail */}
      <style jsx global>{`
        .thumbs .swiper-slide-thumb-active button {
          border-color: #ffa500;
        }
        .thumbs .swiper-slide-thumb-active img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}