"use client";
import { useEffect, useState } from "react";
import { Project } from "./project";
import { Filter } from "./filter";
import { motion, AnimatePresence } from "framer-motion";

export function ProjectsGallery({ projects }) {
  const [filtered, setFiltered] = useState([]);

  const [activeProject, setActiveProject] = useState(0);

  const [message, setMessage] = useState(false);

  useEffect(() => {
    // console.log(projects);
    setFiltered(projects);
  }, []);

  return (
    <div className="max-w-[960px] mx-auto">
      <div className="mb-[40px]">
        {/* <h1 className="text-[35px] font-bold mb-2">پروژه های ما</h1> */}
        {/* <p className="text-[#ffa500] text-[20px] mb-4">
          گواهی بر تخصص و تطبیق پذیری ما در ارائه پروژه های موفق در بخش های
          مختلف صنعت می باشد
        </p>
        <p className="text-[#ffa500] text-[20px]">
          ما بهترین خدمات را ارائه می دهیم
        </p> */}
      </div>
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
