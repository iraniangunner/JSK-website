import NotFound from "@/app/[locale]/not-found";
import { CustomError } from "@/components/customError";
import { SingleProject } from "@/components/project/singleProject";
import type { Project } from "@/types/projectTypes";
import { getProjectById, getProjects } from "@/utils/server/projectsApi";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Props = {
  params: {
    id: string;
    locale: string;
  };
};

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects.data.map((p: Project) => ({
    id: p.id.toString(),
  }));
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata | undefined> => {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "Projects.project",
  });

  try {
    const id = Number.parseInt(params.id, 10);
    const project = await getProjectById(id);

    return {
      title: {
        absolute: t("title", { title: project.title }),
      },
      description: project.text,
      alternates: {
        canonical: `/projects/${params.id}`,
      },
      openGraph: {
        title: t("title", { title: project.title }),
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
        absolute: t("fallbackTitle"),
      },
      description: t("fallbackDescription"),
      openGraph: {
        title: t("fallbackTitle"),
        description: t("fallbackDescription"),
      },
    };
  }
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id } = await params;

  try {
    const project = await getProjectById(Number.parseInt(id, 10));
    return <SingleProject project={project} />;
  } catch (error) {
    if (error instanceof Error && error.message === "No such project") {
      return <NotFound />;
    }
    return <CustomError />;
  }
}
