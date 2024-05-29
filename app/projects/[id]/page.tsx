import { SingleProject } from "@/components/project/singleproject/singleProject";

export async function getProjectById(project_id: string) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDcwNWJkNGQzNWU0MGUyZmUyZGFhZDhjNGVmOGQ0YyIsInN1YiI6IjY2NDg2ZDZmNzNiN2FlNDAzODdhM2M2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n49ziu8wMl4nILzUvN3r222fH9-x4oofAlLVtvMkduc",
    },
  };

  const project = await fetch(
    `https://api.themoviedb.org/3/movie/${project_id}`,
    options
  ).then((res) => res.json());

  const allProjects = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options
  ).then((res) => res.json());

  return project;
}

export async function getAllProjects() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDcwNWJkNGQzNWU0MGUyZmUyZGFhZDhjNGVmOGQ0YyIsInN1YiI6IjY2NDg2ZDZmNzNiN2FlNDAzODdhM2M2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n49ziu8wMl4nILzUvN3r222fH9-x4oofAlLVtvMkduc",
    },
  };

  

  const allProjects = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options
  ).then((res) => res.json());

  return allProjects;
}

export default async function ProjectPage({ params }: any) {
  const project = await getProjectById(params.id);
  const allProjects = await getAllProjects();
  const related = allProjects.results.filter(
    (p:any) =>
      p.genre_ids.some((item:any) =>
        project.genres.map((g:any) => g.id).includes(item)
      ) && p.id !== project.id
  );
  return (
    <SingleProject
      project={project}
      related={related}
    />
  );
}
