import { CustomError } from "./error";
import { ProjectsSectionUI } from "./projectsSectionUI";

async function getProjects() {
  const res = await fetch("https://jsk-co.com/api/projects", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  return res.json();
}

export async function ProjectSection() {
  try {
    const projectsData = await getProjects();
    return <ProjectsSectionUI projects={projectsData} />;
  } catch (error) {
    return <CustomError />;
  }
}
