"use client";
import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectView } from "./projectView";
import { ProjectCategory, ProjectsData } from "@/types/projectTypes";

export default function ProjectsTable({
  projectsData,
  categories,
}: {
  projectsData: ProjectsData;
  categories: ProjectCategory[];
}) {
  const [selectedCategory, setSelectedCategory] = useState<string>("1");

  const filteredProjects = useMemo(() => {
    return selectedCategory
      ? projectsData.data.filter((project) =>
          project.categories.some(
            (category) => category.id.toString() === selectedCategory
          )
        )
      : projectsData.data;
  }, [selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-center gap-6 flex-wrap">
          {categories.map((category) => (
            <button
              key={category.order}
              onClick={() => setSelectedCategory(category.order)}
              className={`filter_btn hover:text-white ${
                selectedCategory === category.order
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
          <div className="text-center py-8">پروژه ای یافت نشد.</div>
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
