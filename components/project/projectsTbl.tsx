import { Project } from "./projectView";
import { getAllProjects } from "@/utils/server-utils/getAllProjects";
import Pagination from "@/components/project/projectPagination";


export default async function ProjectsTable({
  type,
  page,
}: {
  type: number;
  page: number;
}) {
  try {
    const data = await getAllProjects(page, type);
    return (
      <>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {data.results.map((project: any) => (
            <Project projectDetails={project} key={project.id} />
          ))}
        </div>
        <Pagination
          type={type}
          totalPages={data.total_pages}
          currentPage={page}
        />
      </>
    );
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
