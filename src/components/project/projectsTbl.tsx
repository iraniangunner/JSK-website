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
  }, [selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-center gap-6 flex-wrap">
          {categories.map((category: ProjectCategory) => (
            <button
              key={category.order}
              onClick={() => setSelectedCategory(category.id)}
              className={`filter_btn hover:text-white ${
                selectedCategory === category.id
                  ? "filter_active hover:before:bg-[#ffa500] hover:before:w-0 hover:before:h-0"
                  : ""
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>
      {!filteredProjects ||
        (!filteredProjects.length && (
          <div className="text-center py-8 text-gray-500">
            {locale === "fa" ? "پروژه ای یافت نشد" : "No projects found"}
          </div>
        ))}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <AnimatePresence>
          {filteredProjects.map((project: any) => {
            return <ProjectView key={project.id} projectDetails={project} />;
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
