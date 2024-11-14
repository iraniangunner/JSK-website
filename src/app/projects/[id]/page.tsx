import NotFound from "@/app/not-found";
import { CustomError } from "@/components/customError";
import { SingleProject } from "@/components/project/singleProject";
import { getProjectById } from "@/utils/server/projectsApi";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: { id: number };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata | undefined> => {
  try {
    const project = await getProjectById(params.id);
    return {
      title: `پروژه ${project.title}`,
      description: project.text,
      openGraph: {
        title: `پروژه ${project.title}`,
        description: project.text,
        images: [
          {
            url: project.images[0].full_path,
          },
        ],
      },
    };
  } catch (error) {
    return;
  }
};

export default async function ProjectPage({ params }: Props) {
  try {
    const project = await getProjectById(params.id);
    return <SingleProject project={project} />;
  } catch (error) {
    // console.log(error?.message)
    if (error instanceof Error && error.message === "No such project") {
      return <NotFound />;
    }

    return <CustomError />;
  }
}
