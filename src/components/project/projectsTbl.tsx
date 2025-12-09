// "use client";
// import { useState, useMemo } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { ProjectView } from "./projectView";
// import { ProjectCategory, ProjectsData } from "@/types/projectTypes";
// import { useLocale } from "next-intl";

// export default function ProjectsTable({
//   projectsData,
//   categories,
// }: {
//   projectsData: ProjectsData;
//   categories: ProjectCategory[];
// }) {
//   const [selectedCategory, setSelectedCategory] = useState(1);
//   const locale = useLocale();

//   const filteredProjects = useMemo(() => {
//     return selectedCategory
//       ? projectsData.data.filter((project) =>
//           project.categories.some(
//             (category) => category.id === selectedCategory
//           )
//         )
//       : projectsData.data;
//   }, [selectedCategory]);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="mb-8">
//         <div className="flex items-center justify-center gap-6 flex-wrap">
//           {categories.map((category: ProjectCategory) => (
//             <button
//               key={category.order}
//               onClick={() => setSelectedCategory(category.id)}
//               className={`filter_btn hover:text-white ${
//                 selectedCategory === category.id
//                   ? "filter_active hover:before:bg-[#ffa500] hover:before:w-0 hover:before:h-0"
//                   : ""
//               }`}
//             >
//               {locale === "fa" ? category.title : category.title_en}
//             </button>
//           ))}
//         </div>
//       </div>
//       {!filteredProjects ||
//         (!filteredProjects.length && (
//           <div className="text-center py-8 text-gray-500">
//             {locale === "fa" ? "پروژه ای یافت نشد" : "No projects found"}
//           </div>
//         ))}
//       <motion.div
//         layout
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
//       >
//         <AnimatePresence>
//           {filteredProjects.map((project: any) => {
//             return <ProjectView key={project.id} projectDetails={project} />;
//           })}
//         </AnimatePresence>
//       </motion.div>
//     </div>
//   );
// }

"use client";
import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectView } from "./projectView";
import { ProjectCategory, ProjectsData } from "@/types/projectTypes";
import { useLocale } from "next-intl";

export default function ProjectsTable({
  projectsData,
  categories,
}: {
  projectsData: ProjectsData;
  categories: ProjectCategory[];
}) {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const locale = useLocale();

  const filteredProjects = useMemo(() => {
    return selectedCategory
      ? projectsData.data.filter((project) =>
          project.categories.some(
            (category) => category.id === selectedCategory
          )
        )
      : projectsData.data;
  }, [selectedCategory, projectsData.data]);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          {locale === "fa" ? "نمونه کارها" : "Our Projects"}
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          {locale === "fa" 
            ? "مرور پروژه‌های انجام شده بر اساس دسته‌بندی" 
            : "Browse our completed projects by category"}
        </p> */}
      </motion.div>

      {/* Category Filter Section */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-10"
      >
        <div className="flex items-center justify-center gap-3 md:gap-6 flex-wrap max-w-5xl mx-auto">
          {categories.map((category: ProjectCategory, index: number) => (
            <motion.button
              key={category.order}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`filter_btn hover:text-white ${
                selectedCategory === category.id
                  ? "filter_active hover:before:bg-[#ffa500] hover:before:w-0 hover:before:h-0"
                  : ""
              }`}
            >
              {locale === "fa" ? category.title : category.title_en}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Projects Count Badge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex items-center justify-center mb-8"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-full">
          <svg 
            className="w-4 h-4 text-[#ffa500]" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
          </svg>
          <span className="text-sm font-semibold text-gray-700">
            {filteredProjects.length} {locale === "fa" ? "پروژه" : "Projects"}
          </span>
        </div>
      </motion.div>

      {/* Empty State */}
      {!filteredProjects || !filteredProjects.length ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center py-16 md:py-24"
        >
          <div className="inline-block">
            <motion.div
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="mb-6"
            >
              <svg
                className="w-24 h-24 md:w-32 md:h-32 mx-auto text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
            </motion.div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-700 mb-2">
              {locale === "fa" ? "پروژه‌ای یافت نشد" : "No Projects Found"}
            </h3>
            <p className="text-sm md:text-base text-gray-500">
              {locale === "fa"
                ? "لطفاً دسته‌بندی دیگری را انتخاب کنید"
                : "Please try selecting a different category"}
            </p>
          </div>
        </motion.div>
      ) : (
        /* Projects Grid */
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: any, index: number) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <ProjectView projectDetails={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Bottom Decoration */}
      {filteredProjects && filteredProjects.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 text-gray-400">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
          </div>
        </motion.div>
      )}
    </div>
  );
}