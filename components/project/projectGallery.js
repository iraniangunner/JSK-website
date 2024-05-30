"use client";
import { useEffect, useState } from "react";
import { Project } from "./projectView";
import { Filter } from "./filterTabs";
import { motion, AnimatePresence } from "framer-motion";

export function ProjectsGallery({ projects }) {
  const [filtered, setFiltered] = useState([]);

  const [activeProject, setActiveProject] = useState(0);

  const [message, setMessage] = useState(false);

  useEffect(() => {
    setFiltered(projects);
  }, []);

  return (
    <div className="max-w-[960px] mx-auto">
      <Filter
        projects={projects}
        setFiltered={setFiltered}
        activeProject={activeProject}
        setActiveProject={setActiveProject}
        setMessage={setMessage}
      />
      <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <AnimatePresence>
          {filtered.map((project) => {
            return (
              <Project
                key={project.id}
                projectDetails={project}
                message={message}
              />
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
