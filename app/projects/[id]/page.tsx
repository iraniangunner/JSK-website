import { SingleProject } from "@/components/project/singleproject/singleProject";
import { getProjectById } from "@/app/projects/api/route";
import { getAllProjects } from "@/app/projects/api/route";
// import { notFound } from "next/navigation";
// import Error from "./error";
// import type { Metadata, ResolvedMetadata } from "next";

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const project = await getProjectById(params.id);

//   return {
//     title: `localhost:3000/projects/${project.id}`,
//   };
// }

type Props = {
  params: { id: string };
};

export default async function ProjectPage({ params }: Props) {
  const project = await getProjectById(params.id);
  const allProjects = await getAllProjects();
  const related = allProjects.results.filter(
    (p: any) =>
      p.genre_ids.some((item: any) =>
        project.genres.map((g: any) => g.id).includes(item)
      ) && p.id !== project.id
  );

  // if(!project || !allProjects){
  //   notFound();
  // }
  return <SingleProject project={project} related={related} />;
}
