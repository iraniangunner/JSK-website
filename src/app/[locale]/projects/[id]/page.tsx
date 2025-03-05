import NotFound from "@/app/[locale]/not-found";
import { CustomError } from "@/components/customError";
import { SingleProject } from "@/components/project/singleProject";
import { getProjectById } from "@/utils/server/projectsApi";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Props = {
  params: {
    id: string;
    locale: string;
  };
};

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
        absolute: t("title", {
          title: params.locale === "fa" ? project.title : project.title_en,
        }),
      },
      description: params.locale === "fa" ? project.text : project.text_en,
      alternates: {
        canonical: `/projects/${params.id}`,
      },
      openGraph: {
        title: t("title", {
          title: params.locale === "fa" ? project.title : project.title_en,
        }),
        description: params.locale === "fa" ? project.text : project.text_en,
        images: [
          {
            url: project.images[0]?.full_path || "/default-image.jpg",
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

// ✅ FIX: Correct `params` typing & remove `await params`
export default async function ProjectPage({ params }: Props) {
  try {
    const project = await getProjectById(Number.parseInt(params.id, 10));
    return <SingleProject project={project} />;
  } catch (error) {
    if (error instanceof Error && error.message === "No such project") {
      return <NotFound />;
    }
    return <CustomError />;
  }
}
