import type { Metadata } from "next";
import { CustomError } from "@/components/customError";
import { getTranslations } from "next-intl/server";
import { getJobById } from "@/utils/server/jobsApi";
import { JobDetail } from "./_components/job-detail";
import NotFound from "@/app/[locale]/not-found";

type Props = {
  params: {
    id: number;
    locale: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata | undefined> => {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "Hiring.job",
  });

  try {
    const job = await getJobById(params.id);
    return {
      title: {
        absolute: t("title", { title: job.title }),
      },
      description: job.text,
      alternates: {
        canonical: `/job-opportunities/${params.id}`,
      },
      openGraph: {
        title: t("title", { title: job.title }),
        description: job.text,
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
    const job = await getJobById(params.id);
    return <JobDetail job={job} />;
  } catch (error) {
     if (error instanceof Error && error.message === "No such job") {
          return <NotFound />;
        }
        return <CustomError />;
  }
}
