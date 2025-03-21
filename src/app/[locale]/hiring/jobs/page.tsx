import { PageCover } from "@/components/pageCover";
import ResumeForm from "./_components/resume-form";
import { getJobCities, getJobCategory } from "@/utils/server/jobsApi";
import { getLocale, getTranslations } from "next-intl/server";
import { CustomError } from "@/components/customError";
import QueryProvider from "@/providers/query-provider";
import { JobGrid } from "./_components/job-grid";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "Hiring" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "/hiring/jobs",
    },
    openGraph: {
      title: t("default"),
      description: t("description"),
    },
  };
}

export default async function JobsOpportunityPage() {
  const locale = await getLocale();
  try {
    const [cities, categories] = await Promise.all([
      getJobCities(),
      getJobCategory(),
    ]);
    return (
      <div>
        <PageCover
          title={`${locale === "fa" ? "فرصت های شغلی" : "Job Opportunities"}`}
        />
        <div className="container mx-auto px-4 py-12">
          <QueryProvider>
            <JobGrid cities={cities} categories={categories} />
          </QueryProvider>
          <ResumeForm />
        </div>
      </div>
    );
  } catch {
    return (
      <div>
        <PageCover
          title={`${locale === "fa" ? "فرصت های شغلی" : "Job Opportunities"}`}
        />
        <CustomError />
        <ResumeForm />
      </div>
    );
  }
}
