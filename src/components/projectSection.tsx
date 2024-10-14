import { ProjectsSectionUI } from "./projectsSectionUI";
import { CgDanger } from "react-icons/cg";
import projectsData from "../../data.json";

export function ProjectSection() {
  
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
  //     `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&year=2014`,
  //     { ...options, cache: "no-store" }
  //   );

  //   const projects = await response.json();
  //   const sliderProjects = projects.results.slice(0, 6);
  //   return <ProjectsSectionUI projects={sliderProjects} />;
  // } catch (error) {
    return (
      <ProjectsSectionUI projects={projectsData.projects} />
      // <div className="mx-auto max-w-screen-sm text-center z-[1] relative">
      //   <div className="mb-4 text-7xl flex justify-center items-center font-extrabold tracking-tight text-white lg:text-9xl">
      //     <CgDanger color="white" />
      //   </div>
      //   <p className="mb-4 text-lg font-light text-white">
      //     مشکلی پیش آمده دوباره تلاش کنید
      //   </p>
      // </div>
    );
  // }
}
