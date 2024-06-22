import { getAllProjects } from "@/utils/projects/getAllProjects";
import { Project } from "./projectView";

export default async function ProjectsTable({
  // query,
  currentType,
}: {
  // query: string;
  currentType: number;
}) {
  const projects = await getAllProjects(currentType);
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const results = projects.results;
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {results.map((project: any, index: any) => (
        <Project projectDetails={project} key={index} />
      ))}
    </div>
  );
}
