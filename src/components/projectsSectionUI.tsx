"use client";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { ProjectsCarousel } from "./carousel/ProjectsCarousel";
import { ProjectsData } from "@/types/projectTypes";
import { useLocale, useTranslations } from "next-intl";


export const ProjectsSectionUI = ({ projects }: { projects: ProjectsData }) => {
  const t = useTranslations("ProjectsSection");
  const locale = useLocale();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] xl:w-[80%] mx-auto gap-10 py-20 ">
      <div className="order-2 lg:order-1">
        <ProjectsCarousel projects={projects} />
      </div>
      <div className="z-[1] order-1 lg:order-2 flex flex-col justify-center">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          className="text-xl mb-4 overflow-hidden select-none text-black"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeIn" }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
        >
          {t("title")}
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          className="sm:text-justify overflow-hidden select-none sm:leading-8 text-black"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeIn" }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
        >
          {t("description")}
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          className="overflow-hidden"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeIn" }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
        >
          <Link
            href="/projects"
            className="inline-block px-4 py-2 text-white bg-[#EC9123] select-none
                mt-8 border border-[#EC9123] hover:bg-white hover:text-[#EC9123] 
                transition-all"
          >
            {locale === "fa" ? "مشاهده همه" : "View All"}
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

// "use client";
// import { Link } from "@/i18n/routing";
// import { motion } from "framer-motion";
// import { ProjectsCarousel } from "./carousel/ProjectsCarousel";
// import { ProjectsData } from "@/types/projectTypes";
// import { useLocale, useTranslations } from "next-intl";

// export const ProjectsSectionUI = ({ projects }: { projects: ProjectsData }) => {
//   const t = useTranslations("ProjectsSection");
//   const locale = useLocale();
  
//   return (
//     <div className="relative py-16 lg:py-24 overflow-hidden">
//       {/* Background Decoration */}
//       <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-transparent pointer-events-none"></div>
      
//       <div className="relative w-[90%] xl:w-[85%] max-w-[1400px] mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
//           {/* Left Side - Content */}
//           <div className="order-2 lg:order-1 space-y-6">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               {/* Label Badge */}
//               <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full mb-4">
//                 <div className="w-2 h-2 bg-[#ffa500] rounded-full animate-pulse"></div>
//                 <span className="text-sm font-semibold text-[#ffa500]">
//                   {locale === "fa" ? "پروژه‌ها" : "Projects"}
//                 </span>
//               </div>

//               {/* Title */}
//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
//                 {t("title")}
//               </h2>

//               {/* Decorative Line */}
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="h-1 w-16 bg-[#ffa500] rounded-full"></div>
//                 <div className="h-1 w-8 bg-[#ffa500]/50 rounded-full"></div>
//                 <div className="h-1 w-4 bg-[#ffa500]/30 rounded-full"></div>
//               </div>
//             </motion.div>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="text-base md:text-lg text-gray-600 leading-relaxed text-justify"
//             >
//               {t("description")}
//             </motion.p>

//             {/* CTA Button */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               className="pt-4"
//             >
//               <Link
//                 href="/projects"
//                 className="group inline-flex items-center gap-3 px-8 py-4 bg-[#ffa500] text-white font-semibold rounded-lg hover:bg-[#ff8c00] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
//               >
//                 <span>{locale === "fa" ? "مشاهده همه پروژه‌ها" : "View All Projects"}</span>
//                 <svg 
//                   className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${locale === "fa" ? "rotate-180" : ""}`}
//                   fill="none" 
//                   stroke="currentColor" 
//                   viewBox="0 0 24 24"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                 </svg>
//               </Link>

//               {/* Stats */}
//               {/* <div className="flex items-center gap-8 mt-8">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center">
//                     <svg className="w-6 h-6 text-[#ffa500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-2xl font-bold text-gray-900">{projects.data.length}+</p>
//                     <p className="text-sm text-gray-600">{locale === "fa" ? "پروژه موفق" : "Successful Projects"}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center">
//                     <svg className="w-6 h-6 text-[#ffa500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-2xl font-bold text-gray-900">100%</p>
//                     <p className="text-sm text-gray-600">{locale === "fa" ? "رضایت مشتری" : "Client Satisfaction"}</p>
//                   </div>
//                 </div>
//               </div> */}
//             </motion.div>
//           </div>

//           {/* Right Side - Carousel */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="order-1 lg:order-2"
//           >
//             <ProjectsCarousel projects={projects} />
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };