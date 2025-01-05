import { JobGrid } from "./_components/job-grid";
import { Metadata } from "next";
import { PageCover } from "@/components/pageCover";
import ResumeForm from "./_components/resume-form";

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

async function getCities() {
  const response = await fetch("https://jsk-co.com/api/cities", {
    cache: "no-store",
  });

  const cities = await response.json();
  return cities;
}

async function getJobCategory() {
  const response = await fetch("https://jsk-co.com/api/job-categories", {
    cache: "no-store",
  });

  const categories = await response.json();
  return categories;
}

export default async function JobsPage() {
  const cities = await getCities();
  const categories = await getJobCategory();
  return (
    <div>
      <PageCover title="فرصت های شغلی" bgImage="projects-pattern" />
      <div className="container mx-auto px-4 py-12">
        <JobGrid cities={cities} categories={categories} />
        <ResumeForm />
      </div>
    </div>
  );
}
