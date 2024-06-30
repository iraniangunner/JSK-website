import { getAllProjects } from "@/utils/server-utils/getAllProjects";
import { ProjectsSectionUI } from "./projectsSectionUI";

export async function ProjectSection() {
  try {
    const projects = await getAllProjects(1, 2014);
    const sliderProjects = projects.results.slice(0, 6);
    return <ProjectsSectionUI projects={sliderProjects} />;
  } catch (error) {
    return (
      <div>
        <h2>Something went wrong!</h2>
        {/* {error.message} */}
        {/* <button onClick={() => reset()}>Try again</button> */}
      </div>
    );
  }
}
