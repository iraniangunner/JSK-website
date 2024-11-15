import { CustomError } from "../customError";
import Skeleton from "../loadingSkeleton";
import ProjectsTable from "./projectsTbl";
import { getProjects } from "@/utils/server/projectsApi";
import { getCategories } from "@/utils/server/projectsApi";

export const ProjectsGrid: React.FC = async () => {
  try {
    const projectsData = await getProjects();
    const categoriesData = await getCategories();
    return (
      <div>
        <ProjectsTable
          projectsData={projectsData}
          categories={categoriesData}
        />
      </div>
    );
  } catch (error) {
    return (
      <div>
        <CustomError />
      </div>
    );
  }
};
