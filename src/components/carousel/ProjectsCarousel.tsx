// "use client";
// import { Autoplay, Navigation, EffectFade } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";
// import { Link } from "@/i18n/routing";
// import Image from "next/image";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { FaArrowLeftLong } from "react-icons/fa6";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
// import { ProjectsData } from "@/types/projectTypes";
// import { useLocale } from "next-intl";

// interface SlideProps {
//   delay: number;
//   children: React.ReactNode;
// }

// const Slide: React.FC<SlideProps> = ({ delay, children }) => (
//   <motion.div
//     initial="hidden"
//     whileInView="visible"
//     className="h-full"
//     viewport={{ once: true }}
//     variants={{
//       visible: { opacity: 1, y: 0 },
//       hidden: { opacity: 0, y: 50 },
//     }}
//     transition={{ duration: 0.6, delay }}
//   >
//     {children}
//   </motion.div>
// );

// export const ProjectsCarousel = ({ projects }: { projects: ProjectsData }) => {
//   const [delays, setDelays] = useState<number[]>([]);

//   const locale = useLocale();

//   const handleSwiperInit = (swiper: any) => {
//     const newDelays = [];
//     for (let i = 0; i < swiper.params.slidesPerView; i++) {
//       // Apply delay incrementally to initial visible slides
//       newDelays.push(i * 0.6);
//     }
//     setDelays(newDelays);
//   };

//   return (
//     <Swiper
//       onInit={handleSwiperInit}
//       navigation={{
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       }}
//       slidesPerView={1}
//       spaceBetween={10}
//       breakpoints={{
//         640: {
//           slidesPerView: 1,
//           spaceBetween: 20,
//         },
//         768: {
//           slidesPerView: 1,
//           spaceBetween: 40,
//         },
//         1024: {
//           slidesPerView: 1,
//           spaceBetween: 50,
//         },
//         1280: {
//           slidesPerView: 1,
//           spaceBetween: 30,
//         },
//         1536: {
//           slidesPerView: 2,
//           spaceBetween: 20,
//         },
//       }}
//       loop={true}
//       autoplay={{ delay: 4000 }}
//       modules={[Autoplay, Navigation, EffectFade]}
//       style={{ paddingTop: 60, height: "100%" }}
//     >
//       {projects.data.map((p, index) => (
//         <SwiperSlide key={p.id}>
//           <Slide delay={delays[index] || 0}>
//             <div
//               className="relative h-full text-gray-700 border-[3px] border-gray-400  group project_slider_container bg-white select-none"
//               style={{
//                 fontFamily: `${
//                   locale === "fa"
//                     ? "var(--font-yekanbakh)"
//                     : "var(--font-inter)"
//                 }`,
//               }}
//             >
//               <div className="relative h-full">
//                 <Image
//                   src={p.images[0].full_path}
//                   width={500}
//                   height={400}
//                   alt="project-image"
//                   sizes="(max-width: 768px) 250px, 400px"
//                   style={{ width: "100%", height: 400 }}
//                 />
//               </div>
//               <div className="absolute top-0 left-0 w-full h-full project_slider_content flex flex-col justify-end py-6 px-4">
//                 <div className="translate-y-[80px] group-hover:translate-y-0 mb-[30px] group-hover:mb-0 transition-all duration-[0.3]">
//                   <h3 className="mb-6 text-white">
//                     <Link href={`/projects/${p.id}`}>
//                       {locale === "fa" ? p.title : p.title_en}
//                     </Link>
//                   </h3>
//                   <div className="mb-4 h-[1px] bg-[rgb(225_230_238)] opacity-[0.4]"></div>
//                   <div className="mb-6 opacity-0 group-hover:opacity-[1] grop transition-all duration-[0.3] delay-[0.1]">
//                     <div className="text-gray-300">
//                       <div className="h-5 flex flex-wrap">
//                         {p.categories.map((item) =>
//                           item.title === "همه" || item.title_en === "All" ? (
//                             ""
//                           ) : (
//                             <p key={item.id} className="ml-2 text-xs">
//                               #{locale === "fa" ? item.title : item.title_en}
//                             </p>
//                           )
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="text-white group-hover:text-[#EC9123] transition-all duration-[0.3]">
//                   <Link
//                     href={`/projects/${p.id}`}
//                     className="flex items-center gap-1 h-full"
//                   >
//                     <span>
//                       {locale === "fa" ? "مشاهده بیش تر" : "View More"}
//                     </span>
//                     {locale === "fa" ? (
//                       <IoIosArrowRoundBack size={30} />
//                     ) : (
//                       <IoIosArrowRoundForward size={30} />
//                     )}
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </Slide>
//         </SwiperSlide>
//       ))}

//       <div className="absolute right-[20px] top-0 flex gap-2">
//         <div
//           className="swiper-button-prev related-prev after:hidden border border-[#EC9123] rounded-full
//         hover:bg-white bg-[#EC9123] transition-all"
//         >
//           <FaArrowLeftLong className="text-white hover:text-[#EC9123] transition-all p-[8px]" />
//         </div>
//         <div
//           className="swiper-button-next related-next after:hidden border border-[#EC9123] rounded-full
//         hover:bg-white bg-[#EC9123] transition-all"
//         >
//           <FaArrowRightLong className="text-white hover:text-[#EC9123] transition-all p-[8px]" />
//         </div>
//       </div>
//     </Swiper>
//   );
// };

"use client";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { ProjectsData } from "@/types/projectTypes";
import { useLocale } from "next-intl";

export const ProjectsCarousel = ({ projects }: { projects: ProjectsData }) => {
  const locale = useLocale();

  return (
    <div className="relative">
      <Swiper
        navigation={{
          nextEl: ".projects-carousel-next",
          prevEl: ".projects-carousel-prev",
        }}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Autoplay, Navigation, EffectFade]}
        className="!pb-12 !pt-16"
      >
        {projects.data.map((p) => (
          <SwiperSlide key={p.id}>
            <div
              className="relative overflow-hidden rounded-xl shadow-lg group bg-white select-none h-[450px]"
              style={{
                fontFamily: `${
                  locale === "fa"
                    ? "var(--font-yekanbakh)"
                    : "var(--font-inter)"
                }`,
              }}
            >
              {/* Image */}
              <div className="relative h-full overflow-hidden">
                <Image
                  src={p.images[0].full_path}
                  width={600}
                  height={450}
                  alt={locale === "fa" ? p.title : p.title_en}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                {/* Title and Categories */}
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <Link href={`/projects/${p.id}`}>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-[#ffa500] transition-colors duration-300">
                      {locale === "fa" ? p.title : p.title_en}
                    </h3>
                  </Link>
                  
                  {/* Divider */}
                  <div className="h-px bg-white/30 mb-4"></div>
                  
                  {/* Categories */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 mb-4">
                    <div className="flex flex-wrap gap-2">
                      {p.categories
                        .filter((item) => item.title !== "همه" && item.title_en?.toLowerCase() !== "all")
                        .slice(0, 3)
                        .map((item) => (
                          <span
                            key={item.id}
                            className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full border border-white/30"
                          >
                            #{locale === "fa" ? item.title : item.title_en}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>

                {/* View More Link */}
                <div className="mt-2">
                  <Link
                    href={`/projects/${p.id}`}
                    className="inline-flex items-center gap-2 text-white group-hover:text-[#ffa500] transition-colors duration-300 font-medium"
                  >
                    <span className="text-sm">
                      {locale === "fa" ? "مشاهده بیشتر" : "View More"}
                    </span>
                    {locale === "fa" ? (
                      <IoIosArrowRoundBack className="text-2xl group-hover:translate-x-1 transition-transform duration-300" />
                    ) : (
                      <IoIosArrowRoundForward className="text-2xl group-hover:translate-x-1 transition-transform duration-300" />
                    )}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="absolute right-0 top-0 flex gap-3 z-10">
        <button
          className="projects-carousel-prev w-12 h-12 rounded-full bg-[#ffa500] hover:bg-white border-2 border-[#ffa500] flex items-center justify-center transition-all duration-300 shadow-lg group"
          aria-label="Previous slide"
        >
          <FaArrowRightLong className="text-lg text-white group-hover:text-[#ffa500] transition-colors" />
        </button>
        <button
          className="projects-carousel-next w-12 h-12 rounded-full bg-[#ffa500] hover:bg-white border-2 border-[#ffa500] flex items-center justify-center transition-all duration-300 shadow-lg group"
          aria-label="Next slide"
        >
          <FaArrowLeftLong className="text-lg text-white group-hover:text-[#ffa500] transition-colors" />
        </button>
      </div>
    </div>
  );
};