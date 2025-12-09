// "use client";
// import { Link } from "@/i18n/routing";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Project } from "@/types/projectTypes";
// import { useLocale } from "next-intl";

// export function ProjectView({ projectDetails }: { projectDetails: Project }) {
//   const locale = useLocale();
//   return (
//     <motion.div
//       layout
//       animate={{ opacity: 1 }}
//       initial={{ opacity: 0 }}
//       exit={{ opacity: 0 }}
//       className="max-w-sm bg-white border relative border-gray-200 shadow overflow-hidden group"
//     >
//       <Link href={`/projects/${projectDetails.id}`} className="block">
//         <Image
//           src={projectDetails.preview_image_url ||""}
//           width={384}
//           height={256}
//           className="h-auto max-w-full w-full"
//           alt="project-image"
//         />
//       </Link>
//       <div className="block lg:hidden">
//         <Link
//           href={`/projects/${projectDetails.id}`}
//           className="relative block p-4"
//         >
//           <h5 className="mb-2 text-gray-900">
//             {locale === "fa" ? projectDetails.title : projectDetails.title_en}
//           </h5>
//         </Link>
//       </div>
//       <div className="absolute hidden lg:block bottom-0 left-0 right-0 top-0 z-0 w-full h-full bg-black opacity-[0.8] translate-x-[500px] group-hover:translate-x-0 transition-all duration-[0.6s]"></div>

//       <Link
//         href={`/projects/${projectDetails.id}`}
//         className="absolute top-3 bottom-3 left-3 right-3 border hidden lg:flex justify-center items-center translate-x-[500px] group-hover:translate-x-0 transition-all duration-[0.6s] z-[2]"
//       >
//         <h5 className="p-2 lg:p-4 text-lg text-center text-white">
//           {locale === "fa" ? projectDetails.title : projectDetails.title_en}
//         </h5>
//       </Link>
//     </motion.div>
//   );
// }
"use client";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/types/projectTypes";
import { useLocale } from "next-intl";

export function ProjectView({ projectDetails }: { projectDetails: Project }) {
  const locale = useLocale();
  
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100"
    >
      {/* Image Container */}
      <Link href={`/projects/${projectDetails.id}`} className="block relative overflow-hidden">
        <div className="relative h-64 w-full bg-gray-100">
          <Image
            src={projectDetails.preview_image_url || ""}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            alt={locale === "fa" ? projectDetails.title : projectDetails.title_en}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Desktop Overlay Content */}
        <div className="hidden lg:flex absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
          <div className="text-center px-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white drop-shadow-lg">
              {locale === "fa" ? "مشاهده جزئیات" : "View Details"}
            </h3>
          </div>
        </div>
      </Link>

      {/* Content Section */}
      <div className="p-5">
        <Link href={`/projects/${projectDetails.id}`} className="block">
          <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-[#ffa500] transition-colors duration-300">
            {locale === "fa" ? projectDetails.title : projectDetails.title_en}
          </h3>
        </Link>

        {/* Categories Tags */}
        {projectDetails.categories && projectDetails.categories.length > 0 && (() => {
          const filteredCategories = projectDetails.categories.filter(
            (category) => category.title !== "همه" && category.title_en?.toLowerCase() !== "all"
          );
          return filteredCategories.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {filteredCategories.slice(0, 2).map((category) => (
                <span
                  key={category.id}
                  className="px-3 py-1 bg-orange-50 text-[#ffa500] text-xs font-medium rounded-full"
                >
                  {locale === "fa" ? category.title : category.title_en}
                </span>
              ))}
              {filteredCategories.length > 2 && (
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                  +{filteredCategories.length - 2}
                </span>
              )}
            </div>
          );
        })()}

        {/* View Button for Mobile */}
        <div className="lg:hidden mt-4">
          <Link
            href={`/projects/${projectDetails.id}`}
            className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-[#ffa500] text-white font-medium rounded-lg hover:bg-[#ff8c00] hover:shadow-lg transition-all duration-300"
          >
            {locale === "fa" ? "مشاهده پروژه" : "View Project"}
            <svg
              className={`w-4 h-4 ${locale === "fa" ? "mr-2 rotate-180" : "ml-2"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#ffa500]/20 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}