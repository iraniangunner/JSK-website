import { SingleProject } from "@/components/project/singleproject/singleProject";
import { getProjectById } from "@/utils/server-utils/getSingleProject";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import projectsData from "../../../../data.json";
// import Error from "./error";

type Props = {
  params: { id: number };
};

// type Props = {
//   params: { id: string };
// };

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata | undefined> => {
  // const project = await getProjectById(params.id);

  const project = projectsData.projects[params.id];

  // if (!project) {
  //   return;
  // }

  return {
    title: `پروژه ${project.title}`,
    description: project.description,
    openGraph: {
      title: `پروژه ${project.title}`,
      description: project.description,
      images: [
        {
          url: "/images/" + project.image,
        },
      ],
    },
  };
};

// export default async function ProjectPage({ params }: Props) {
//   const project = await getProjectById(params.id);

//   if (!project) {
//     notFound();
//   }
//   return <SingleProject project={project} />;
// }

export default function ProjectPage({ params }: Props) {
  const project = projectsData.projects[params.id];

  return <SingleProject project={project} />;
}
