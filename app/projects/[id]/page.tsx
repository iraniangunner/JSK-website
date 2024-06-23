import { SingleProject } from "@/components/project/singleproject/singleProject";
import { getProjectById } from "@/utils/server-utils/getSingleProject";
import { Metadata } from "next";
import { notFound } from "next/navigation";
// import Error from "./error";

type Props = {
  params: { id: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata | undefined> => {
  const project = await getProjectById(params.id);

  if (!project) {
    return;
  }

  return {
    title: `پروژه ${project.title}`,
    description: project.overview,
    openGraph: {
      title: `پروژه ${project.title}`,
      description: project.overview,
      images: [
        {
          url: "https://image.tmdb.org/t/p/w500" + project.backdrop_path,
        },
      ],
    },
  };
};

export default async function ProjectPage({ params}: Props) {
  const project = await getProjectById(params.id);

  if (!project ) {
    notFound();
  }
  return <SingleProject project={project} />;
}
