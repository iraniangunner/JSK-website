"use client";
import { CustomError } from "../error";
import { Project } from "./projectView";
import Pagination from "@/components/project/projectPagination";
import { unstable_noStore as noStore } from "next/cache";
import { useState, useEffect, createContext } from "react";
import projectsData from "@/data.json";
import { AnimatePresence, motion } from "framer-motion";
import { Filter } from "./projectFilter";

export const ProjectContext = createContext<any>({});

export const FilterContext = createContext<any>({});

export const ActiveContext = createContext<any>({});

export default function ProjectsTable({
  type,
  page,
}: {
  type: number;
  page: number;
}) {
  // const options = {
  //   method: "GET",
  //   headers: {
  //     accept: "application/json",
  //     Authorization:
  //       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDcwNWJkNGQzNWU0MGUyZmUyZGFhZDhjNGVmOGQ0YyIsInN1YiI6IjY2NDg2ZDZmNzNiN2FlNDAzODdhM2M2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n49ziu8wMl4nILzUvN3r222fH9-x4oofAlLVtvMkduc",
  //   },
  // };
  // try {
  //   const response = await fetch(
  //     `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&year=${type}`,
  //     { ...options }
  //   );

  //   const projects = await response.json();
  //   return (
  //     <>
  //       <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
  //         {projects.results.map((project: any) => (
  //           <Project project={project} key={project.id} />
  //         ))}
  //       </div>
  //       <Pagination
  //         type={type}
  //         totalPages={projects.total_pages}
  //         currentPage={page}
  //       />
  //     </>
  //   );
  // } catch (error) {
  //   return <CustomError />;
  // }

  const [projects, setProjects] = useState<any>([]);

  const [filtered, setFiltered] = useState<any>([]);

  const [activeProject, setActiveProject] = useState("all");

  // const [message, setMessage] = useState("");

  useEffect(() => {
    // fetchPopular();
    setProjects(projectsData.projects);
    setFiltered(projectsData.projects);
  }, []);

  // useEffect(() => {
  //   // Use setTimeout to update the message after 2000 milliseconds (2 seconds)
  //   const timeoutId = setTimeout(() => {
  //     setMessage("Delayed message after 3 seconds!");
  //   }, 3000);

  //   // Cleanup function to clear the timeout if the component unmounts
  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, []);

  return (
    <>
      <ProjectContext.Provider value={{ projects, setProjects }}>
        <FilterContext.Provider value={{ filtered, setFiltered }}>
          <ActiveContext.Provider value={{ activeProject, setActiveProject }}>
            <Filter />
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              <AnimatePresence>
                {filtered.map((project: any) => {
                  return <Project key={project.id} projectDetails={project} />;
                })}
              </AnimatePresence>
            </motion.div>
          </ActiveContext.Provider>
        </FilterContext.Provider>
      </ProjectContext.Provider>
    </>
  );
}
