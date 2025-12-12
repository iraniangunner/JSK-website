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

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Item animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Category Filter Section */}
      <div className="mb-8">
        <div className="flex items-center justify-center gap-6 flex-wrap">
          {categories.map((category: ProjectCategory) => (
            <motion.button
              key={category.order}
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
      </div>

      {/* Empty State */}
      {!filteredProjects || !filteredProjects.length ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="text-center py-16"
        >
          <div className="inline-block">
            <svg
              className="w-24 h-24 mx-auto text-gray-300 mb-4"
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
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              {locale === "fa" ? "پروژه‌ای یافت نشد" : "No Projects Found"}
            </h3>
            <p className="text-sm text-gray-500">
              {locale === "fa"
                ? "لطفاً دسته‌بندی دیگری را انتخاب کنید"
                : "Please try selecting a different category"}
            </p>
          </div>
        </motion.div>
      ) : (
        /* Projects Grid with Stagger Animation */
        <motion.div
          key={selectedCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project: any) => (
              <motion.div key={project.id} variants={itemVariants} layout>
                <ProjectView projectDetails={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
