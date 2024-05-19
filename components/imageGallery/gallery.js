"use client";
import { useEffect, useState } from "react";
import { Project } from "./project";
import { Filter } from "./filter";
import { motion, AnimatePresence } from "framer-motion";

export function ProjectsGallery() {
  const [projects, setProjects] = useState([]);

  const [filtered, setFiltered] = useState([]);

  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDcwNWJkNGQzNWU0MGUyZmUyZGFhZDhjNGVmOGQ0YyIsInN1YiI6IjY2NDg2ZDZmNzNiN2FlNDAzODdhM2M2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n49ziu8wMl4nILzUvN3r222fH9-x4oofAlLVtvMkduc",
    },
  };

  const fetchPopular = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        options
      );
      const projects = await data.json();
      // console.log(projects);
      setProjects(projects.results);
      setFiltered(projects.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-[960px] mx-auto">
      <div className="mb-[40px]">
        <h1 className="text-[35px] font-bold mb-2">پروژه های ما</h1>
        <p className="text-[#ffa500] text-[20px] mb-4">
          گواهی بر تخصص و تطبیق پذیری ما در ارائه پروژه های موفق در بخش های
          مختلف صنعت می باشد
        </p>
        <p className="text-[#ffa500] text-[20px]">
          ما بهترین خدمات را ارائه می دهیم
        </p>
      </div>
      <Filter
        projects={projects}
        setFiltered={setFiltered}
        activeProject={activeProject}
        setActiveProject={setActiveProject}
      />
      <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <AnimatePresence>
          {filtered.map((project) => {
            return <Project key={project.id} projectDetails={project} />;
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
