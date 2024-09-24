"use client";

import { useEffect } from "react";

export function Filter({
  projects,
  setFiltered,
  activeProject,
  setActiveProject,
}: {
  projects: any;
  setFiltered: any;
  activeProject: any;
  setActiveProject: any;
}) {
  useEffect(() => {
    if (activeProject == "all") {
      setFiltered(projects);
      return;
    }

    const filtered = projects.filter((project: any) =>
      project.categories.includes(activeProject)
    );
    setFiltered(filtered);
  }, [activeProject]);
  return (
    <div className="flex items-center justify-center py-4 md:py-8 gap-6 flex-wrap">
      <button
        onClick={() => setActiveProject("all")}
        type="button"
        className={`filter_btn hover:text-white ${
          activeProject === "all"
            ? "filter_active hover:before:bg-[#ffa500] hover:before:w-0 hover:before:h-0"
            : ""
        }`}
      >
        همه
      </button>
      <button
        onClick={() => setActiveProject("طراحی و مهندسی")}
        type="button"
        className={`filter_btn hover:text-white ${
          activeProject === "طراحی و مهندسی"
            ? "filter_active hover:before:bg-[#ffa500] hover:before:w-0 hover:before:h-0"
            : ""
        }`}
      >
        طراحی و مهندسی
      </button>
      <button
        onClick={() => setActiveProject("خرید")}
        type="button"
        className={`filter_btn hover:text-white ${
          activeProject === "خرید"
            ? "filter_active hover:before:bg-[#ffa500] hover:before:w-0 hover:before:h-0"
            : ""
        }`}
      >
        خرید
      </button>
      <button
        onClick={() => setActiveProject("نصب")}
        type="button"
        className={`filter_btn hover:text-white ${
          activeProject === "نصب"
            ? "filter_active hover:before:bg-[#ffa500] hover:before:w-0 hover:before:h-0"
            : ""
        }`}
      >
        نصب
      </button>
      <button
        onClick={() => setActiveProject("اجرا")}
        type="button"
        className={`filter_btn hover:text-white ${
          activeProject === "اجرا"
            ? "filter_active hover:before:bg-[#ffa500] hover:before:w-0 hover:before:h-0"
            : ""
        }`}
      >
        اجرا
      </button>
      <button
        onClick={() => setActiveProject("بهره برداری")}
        type="button"
        className={`filter_btn hover:text-white ${
          activeProject === "بهره برداری"
            ? "filter_active hover:before:bg-[#ffa500] hover:before:w-0 hover:before:h-0"
            : ""
        }`}
      >
        بهره برداری
      </button>
    </div>
  );
}
