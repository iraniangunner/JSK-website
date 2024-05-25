import { useEffect } from "react";

export function Filter({
  projects,
  setFiltered,
  activeProject,
  setActiveProject,
  setMessage,
}) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMessage(true);
    }, 2000);

    if (activeProject === 0) {
      setFiltered(projects);
      return;
    }

    const filtered = projects.filter((project) =>
      project.genre_ids.includes(activeProject)
    );
    setFiltered(filtered);
    return () => clearTimeout(timeoutId);
  }, [activeProject]);

  return (
    <div className="flex items-center justify-center gap-2 lg:gap-0 py-4 md:py-8 flex-wrap">
      <button
        onClick={() => {
          setActiveProject(0);
          setMessage(false);
        }}
        type="button"
        className={`filter_btn hover:text-white ${
          activeProject === 0
            ? "filter_active hover:before:bg-[#ffa500] hover:before:w-0 hover:before:h-0"
            : ""
        }`}
      >
        همه
      </button>
      <button
        onClick={() => {
          setActiveProject(35);
          setMessage(false);
        }}
        type="button"
        className={`filter_btn hover:text-white ${
          activeProject === 35
            ? "filter_active hover:before:bg-[#ffa500] hover:before:w-0 hover:before:h-0"
            : ""
        }`}
      >
        طراحی و مهندسی
      </button>
      <button
        onClick={() => {
          setActiveProject(28);
          setMessage(false);
        }}
        type="button"
        className={`filter_btn hover:text-white ${
          activeProject === 28
            ? "filter_active hover:before:bg-[#ffa500] hover:before:w-0 hover:before:h-0"
            : ""
        }`}
      >
        خرید
      </button>
      <button
        onClick={() => {
          setActiveProject(16);
          setMessage(false);
        }}
        type="button"
        className={`filter_btn hover:text-white ${
          activeProject === 16
            ? "filter_active hover:before:bg-[#ffa500] hover:before:w-0 hover:before:h-0"
            : ""
        }`}
      >
        نصب
      </button>
      <button
        onClick={() => {
          setActiveProject(12);
          setMessage(false);
        }}
        type="button"
        className={`filter_btn hover:text-white ${
          activeProject === 12
            ? "filter_active hover:before:bg-[#ffa500] hover:before:w-0 hover:before:h-0"
            : ""
        }`}
      >
        اجرا
      </button>
      <button
        onClick={() => {
          setActiveProject(18);
          setMessage(false);
        }}
        type="button"
        className={`filter_btn hover:text-white ${
          activeProject === 18
            ? "filter_active hover:before:bg-[#ffa500] hover:before:w-0 hover:before:h-0"
            : ""
        }`}
      >
        بهره برداری
      </button>
    </div>
  );
}
