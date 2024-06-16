import { SingleProject } from "@/components/project/singleproject/singleProject";
import { getProjectById } from "@/app/projects/api/routes";
import { getAllProjects } from "@/app/projects/api/routes";
import { Metadata } from "next";
// import { notFound } from "next/navigation";
// import Error from "./error";

type Props = {
  params: { id: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const project = await getProjectById(params.id);

  return {
    title: `پروژه ${project.title}`,
  };
};

// export const generateMetadata = ({ params }: Props): Metadata => {
// return {title:`پروژه ${params.id}`}
// }

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
