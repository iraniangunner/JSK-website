import { PageCover } from "@/components/pageCover";
import ResumeForm from "./_components/resume-form";
import JobGridWrapper from "./_components/job-grid-wrapper";
import { getCities, getJobCategory } from "@/utils/server/jobsApi";
import { getTranslations } from "next-intl/server";

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

export default async function JobsPage() {
  try {
    const cities = await getCities();
    const categories = await getJobCategory();
    return (
      <div>
        <PageCover title="فرصت های شغلی" bgImage="projects-pattern" />
        <div className="container mx-auto px-4 py-12">
          <JobGridWrapper cities={cities} categories={categories} />
          <ResumeForm />
        </div>
      </div>
    );
  } catch {
    return (
      <div>
        <PageCover title="فرصت های شغلی" bgImage="projects-pattern" />
        <div className="min-h-[300px] flex justify-center items-center">
          <p className="text-red-500">خطایی رخ داده است</p>
        </div>
        <ResumeForm />
      </div>
    );
  }
}
