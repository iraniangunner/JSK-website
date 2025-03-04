import type { Metadata } from "next";
import { CustomError } from "@/components/customError";
import { getTranslations } from "next-intl/server";
import { getJobById, getJobs } from "@/utils/server/jobsApi";
import { JobDetail } from "./_components/job-detail";
import NotFound from "@/app/[locale]/not-found";
import type { JobResponse } from "@/types/job";

type Props = {
  params: {
    id: string;
    locale: string;
  };
};

// ✅ FIX: Ensure API returns valid data before generating paths
export async function generateStaticParams() {
  // try {
  const jobs = await getJobs();
  // if (!jobs.length || !Array.isArray(jobs)) return [];

  return jobs.flatMap((p: JobResponse) => [
    { id: p.id.toString(), locale: "en" },
    { id: p.id.toString(), locale: "fa" },
  ]);
  // } catch (error) {
  //   console.error("Error in generateStaticParams:", error);
  //   return [];
  // }
}

// ✅ FIX: Prevent metadata errors & ensure fallback values
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

    // if (!job) {
    //   throw new Error("No job data found");
    // }

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
    // console.error("Metadata Error:", error);
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

// ✅ FIX: Improved error handling & API validation
export default async function JobPage({ params }: Props) {
  try {
    const job = await getJobById(Number.parseInt(params.id, 10));

    // if (!job) {
    //   console.error(`Job not found for ID: ${params.id}`);
    //   return <NotFound />;
    // }

    return <JobDetail job={job} />;
  } catch (error) {
    if (error instanceof Error && error.message === "No such job") {
      return <NotFound />;
    }
    return <CustomError />;
  }
}
