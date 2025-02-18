import { ProjectsGrid } from "@/components/project/projectsGrid";
import { Suspense } from "react";
import Skeleton from "@/components/loadingSkeleton";
import { PageCover } from "@/components/pageCover";
import { getTranslations } from "next-intl/server";

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
  return (
    <div>
      <PageCover title="پروژه ها" bgImage="projects-pattern" />
      <div className="my-6 mx-8 mt-12">
        <div className="max-w-[960px] mx-auto">
          <Suspense fallback={<Skeleton />}>
            <ProjectsGrid />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
