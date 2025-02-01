import { Metadata } from "next";
import { PageCover } from "@/components/pageCover";
import ResumeForm from "./_components/resume-form";
import JobGridWrapper from "./_components/job-grid-wrapper";
import { getCities, getJobCategory } from "@/utils/server/jobsApi";

export const metadata: Metadata = {
  title: "فرصت های شغلی",
  description: "فرصت های شغلی ژیوار صنعت کیان",
  alternates: {
    canonical: "/hiring/jobs",
  },
  openGraph: {
    title: "ژیوار صنعت کیان | فرصت های شغلی",
    description: "فرصت های شغلی ژیوار صنعت کیان",
  },
};


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
