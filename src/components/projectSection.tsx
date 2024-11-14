import { getProjects } from "@/utils/server/projectsApi";
import { CustomError } from "./customError";
import { ProjectsSectionUI } from "./projectsSectionUI";

export async function ProjectSection() {
  try {
    const projectsData = await getProjects();
    return <ProjectsSectionUI projects={projectsData} />;
  } catch (error) {
    return <CustomError />;
  }
}
