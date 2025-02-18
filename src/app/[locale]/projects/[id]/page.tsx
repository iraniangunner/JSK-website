import NotFound from "@/app/[locale]/not-found";
import { CustomError } from "@/components/customError";
import { SingleProject } from "@/components/project/singleProject";
import { Project } from "@/types/projectTypes";
import { getProjectById, getProjects } from "@/utils/server/projectsApi";
import { Metadata } from "next";

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects.data.map((p: Project) => ({
    id: p.id.toString(),
  }));
}

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}): Promise<Metadata | undefined> => {
  try {
    const id = parseInt(params.id, 10);
    const project = await getProjectById(id);
    return {
      title: {
        absolute: `پروژه ها | پروژه ${project.title}`,
      },
      description: project.text,
      alternates: {
        canonical: `/projects/${params.id}`,
      },
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

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  try {
    const project = await getProjectById(parseInt(id, 10));
    return <SingleProject project={project} />;
  } catch (error) {
    if (error instanceof Error && error.message === "No such project") {
      return <NotFound />;
    }
    return <CustomError />;
  }
}
