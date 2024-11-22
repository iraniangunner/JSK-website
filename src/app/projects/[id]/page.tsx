import NotFound from "@/app/not-found";
import { CustomError } from "@/components/customError";
import { SingleProject } from "@/components/project/singleProject";
import { getProjectById } from "@/utils/server/projectsApi";
import { Metadata } from "next";
type Props = {
  params: { id: number };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata | undefined> => {
  try {
    const project = await getProjectById(params.id);
    return {
      title: {
        absolute: `پروژه ها | پروژه ${project.title}`,
      },
      description: project.text,
      openGraph: {
        title: `پروژه ها | پروژه ${project.title}`,
        description: project.text,
        images: [
          {
            url: project.images[0].full_path,
          },
        ],
      },
    };
  } catch (error) {
    return {
      title: {
        absolute: "ژیوار صنعت کیان",
      },
      description:
        "ژیوار صنعت کیان - اجرا و بهره برداری پروژه های صنعتی و معدنی",
      openGraph: {
        title: "ژیوار صنعت کیان",
        description:
          "ژیوار صنعت کیان - اجرا و بهره برداری پروژه های صنعتی و معدنی",
      },
    };
  }
};

export default async function ProjectPage({ params }: Props) {
  try {
    const project = await getProjectById(params.id);
    return <SingleProject project={project} />;
  } catch (error) {
    if (error instanceof Error && error.message === "No such project") {
      return <NotFound />;
    }
    return <CustomError />;
  }
}
