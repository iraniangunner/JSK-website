import { Project } from "./projectView";
import { getAllProjects } from "@/utils/server-utils/getAllProjects";

export default async function ProjectsTable({ type }: { type: number }) {
  // await new Promise((resolve) => setTimeout(resolve, 1000));

  const projects = await getAllProjects(type);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {projects.results.map((project: any) => (
        <Project projectDetails={project} key={project.id} />
      ))}
    </div>
  );
}
