import { PageCover } from "@/components/pageCover";
import { CustomError } from "@/components/customError";
import ProjectsTable from "@/components/project/projectsTbl";
import { getProjects, getCategories } from "@/utils/server/projectsApi";
import { getLocale, getTranslations } from "next-intl/server";


type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "Projects" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "/projects",
    },
    openGraph: {
      title: t("default"),
      description: t("description"),
    },
  };
}

export default async function Projects() {
  const locale = await getLocale();

  try {
    const [projectsData, categoriesData] = await Promise.all([
      getProjects(),
      getCategories(),
    ]);

    return (
      <div>
        <PageCover
          title={locale === "fa" ? "پروژه ها" : "Projects"}
        />
        <div className="my-6 mx-8 mt-12">
          <div className="max-w-[960px] mx-auto">
            <ProjectsTable
              projectsData={projectsData}
              categories={categoriesData}
            />
           
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div>
        <PageCover
          title={locale === "fa" ? "پروژه ها" : "Projects"}
        />
        <div className="my-6 mx-8 mt-12">
          <div className="max-w-[960px] mx-auto">
            <CustomError />
          </div>
        </div>
      </div>
    );
  }
}
