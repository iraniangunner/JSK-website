import { Project } from "./projectView";
import { getAllProjects } from "@/utils/server-utils/getAllProjects";

export default async function ProjectsTable({
  type,
  page,
}: {
  type: number;
  page: number;
}) {
  const data = await getAllProjects(page, type);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {data.results.map((project: any) => (
        <Project projectDetails={project} key={project.id} />
      ))}
    </div>
  );
}
