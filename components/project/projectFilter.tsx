"use client";

import { useEffect, useContext } from "react";
import { ActiveContext, FilterContext, ProjectContext } from "./projectsTbl";

export function Filter() {
  const activeProjectData = useContext(ActiveContext);
  const projectsData = useContext(ProjectContext);
  const filteredData = useContext(FilterContext);

  useEffect(() => {
    if (activeProjectData.activeProject == "all") {
      filteredData.setFiltered(projectsData.projects);
      return;
    }

    const filtered = projectsData.projects.filter((project: any) =>
      project.categories.includes(activeProjectData.activeProject)
    );
    filteredData.setFiltered(filtered);
  }, [activeProjectData.activeProject]);
  return (
    <div className="flex items-center justify-center py-4 md:py-8 gap-6 flex-wrap">
      <button
        onClick={() => activeProjectData.setActiveProject("all")}
        type="button"
        className={`filter_btn hover:text-white ${
          activeProjectData.activeProject === "all"
            ? "filter_active hover:before:bg-[#ffa500] hover:before:w-0 hover:before:h-0"
            : ""
        }`}
      >
        همه
      </button>
      <button
        onClick={() => activeProjectData.setActiveProject("طراحی و مهندسی")}
        type="button"
        className={`filter_btn hover:text-white ${
          activeProjectData.activeProject === "طراحی و مهندسی"
            ? "filter_active hover:before:bg-[#ffa500] hover:before:w-0 hover:before:h-0"
            : ""
        }`}
      >
        طراحی و مهندسی
      </button>
      <button
        onClick={() => activeProjectData.setActiveProject("خرید")}
        type="button"
        className={`filter_btn hover:text-white ${
          activeProjectData.activeProject === "خرید"
            ? "filter_active hover:before:bg-[#ffa500] hover:before:w-0 hover:before:h-0"
            : ""
        }`}
      >
        خرید
      </button>
      <button
        onClick={() => activeProjectData.setActiveProject("نصب")}
        type="button"
        className={`filter_btn hover:text-white ${
          activeProjectData.activeProject === "نصب"
            ? "filter_active hover:before:bg-[#ffa500] hover:before:w-0 hover:before:h-0"
            : ""
        }`}
      >
        نصب
      </button>
      <button
        onClick={() => activeProjectData.setActiveProject("اجرا")}
        type="button"
        className={`filter_btn hover:text-white ${
          activeProjectData.activeProject === "اجرا"
            ? "filter_active hover:before:bg-[#ffa500] hover:before:w-0 hover:before:h-0"
            : ""
        }`}
      >
        اجرا
      </button>
      <button
        onClick={() => activeProjectData.setActiveProject("بهره برداری")}
        type="button"
        className={`filter_btn hover:text-white ${
          activeProjectData.activeProject === "بهره برداری"
            ? "filter_active hover:before:bg-[#ffa500] hover:before:w-0 hover:before:h-0"
            : ""
        }`}
      >
        بهره برداری
      </button>
    </div>
  );
}
