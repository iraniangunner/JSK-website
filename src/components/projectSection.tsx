import { getProjects } from "@/utils/server/projectsApi";
import { CustomError } from "./customError";
import dynamic from "next/dynamic";
// import { ProjectsSectionUI } from "./projectsSectionUI";

const ProjectsSectionUI = dynamic(
  () => import("./projectsSectionUI").then((mod) => mod.ProjectsSectionUI),
  {
    loading: () => <p>Loading...</p>,
    //ssr: false, // Ensure it's only loaded on the client side
  }
);

export async function ProjectSection() {
  try {
    const projectsData = await getProjects();
    return <ProjectsSectionUI projects={projectsData} />;
  } catch (error) {
    return <CustomError />;
  }
}
