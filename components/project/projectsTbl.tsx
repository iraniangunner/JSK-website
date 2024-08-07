import { CustomError } from "../error";
import { Project } from "./projectView";
import Pagination from "@/components/project/projectPagination";
import { unstable_noStore as noStore } from "next/cache";

export default async function ProjectsTable({
  type,
  page,
}: {
  type: number;
  page: number;
}) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDcwNWJkNGQzNWU0MGUyZmUyZGFhZDhjNGVmOGQ0YyIsInN1YiI6IjY2NDg2ZDZmNzNiN2FlNDAzODdhM2M2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n49ziu8wMl4nILzUvN3r222fH9-x4oofAlLVtvMkduc",
    },
  };

  noStore();

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&year=${type}`,
      { ...options }
    );
  
    const projects = await response.json();
    return (
      <>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {projects.results.map((project: any) => (
            <Project project={project} key={project.id} />
          ))}
        </div>
        <Pagination
          type={type}
          totalPages={projects.total_pages}
          currentPage={page}
        />
      </>
    );
  } catch (error) {
    return <CustomError />;
  }
}
