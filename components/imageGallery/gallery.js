"use client";
import { useEffect, useState } from "react";
import { Project } from "./project";
import { Filter } from "./filter";

export function ProjectsGallery() {
  const [projects, setProjects] = useState([]);

  const [filtered, setFiltered] = useState([]);

  const[activeProject , setActiveProject] = useState(0);

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
      console.log(projects);
      setProjects(projects.results);
      setFiltered(projects.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-[960px] mx-auto">
      <Filter />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project) => {
          return <Project key={project.id} projectDetails={project} />;
        })}
      </div>
    </div>
  );
}
