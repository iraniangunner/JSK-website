import { getAllProjects } from "@/utils/projects/getAllProjects";
import { ProjectsGallery } from "./projectGallery";

export default async function ProjectsGrid() {
  const projects = await getAllProjects();
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return <ProjectsGallery projects={projects.results} />;
}
