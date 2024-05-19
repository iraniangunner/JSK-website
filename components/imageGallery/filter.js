import { useEffect } from "react";

// interface Project {
//   projects: any;
//   setFiltered: () => void;
//   activeProject: number;
//   setActiveProject: () => void;
// }

export function Filter({
  projects,
  setFiltered,
  activeProject,
  setActiveProject,
}) {
  useEffect(() => {
    if (activeProject == 0) {
      setFiltered(projects);
      return;
    }

    const filtered = projects.filter((project) =>
      project.genre_ids.includes(activeProject)
    );
    setFiltered(filtered);
  }, [activeProject]);
  return (
    <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
      <button
        onClick={() => setActiveProject(0)}
        type="button"
        className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
      >
        All categories
      </button>
      <button
        onClick={() => setActiveProject(35)}
        type="button"
        className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
      >
        Comedy
      </button>
      <button
        onClick={() => setActiveProject(28)}
        type="button"
        className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
      >
        Action
      </button>
    </div>
  );
}
