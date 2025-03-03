import type { Metadata } from "next";
import { CustomError } from "@/components/customError";
import { getTranslations } from "next-intl/server";
import { getJobById, getJobs } from "@/utils/server/jobsApi";
import { JobDetail } from "./_components/job-detail";
import NotFound from "@/app/[locale]/not-found";
import { JobResponse } from "@/types/job";

type Props = {
  params: {
    id: string;
    locale: string;
  };
};

export async function generateStaticParams() {
  const jobs = await getJobs();

  return jobs.map((p: JobResponse) => ({
    id: p.id.toString(),
  }));
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata | undefined> => {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "Hiring.job",
  });

  try {
    const id = Number.parseInt(params.id, 10);
    const job = await getJobById(id);
    return {
      title: {
        absolute: t("title", {
          title: params.locale === "fa" ? job.title : job.title_en,
        }),
      },
      description: params.locale === "fa" ? job.text : job.text_en,
      alternates: {
        canonical: `/job-opportunities/${params.id}`,
      },
      openGraph: {
        title: params.locale === "fa" ? job.title : job.title_en,
        description: params.locale === "fa" ? job.text : job.text_en,
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

export default async function JobPage({ params }: Props) {
  try {
    const job = await getJobById(Number.parseInt(params.id, 10));
    return <JobDetail job={job} />;
  } catch (error) {
    if (error instanceof Error && error.message === "No such job") {
      return <NotFound />;
    }
    return <CustomError />;
  }
}
