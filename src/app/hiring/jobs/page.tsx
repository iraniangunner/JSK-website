import { JobGrid } from "./_components/job-grid";
import { Metadata } from "next";
import { PageCover } from "@/components/pageCover";

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

export default function JobsPage() {
  return (
    <div>
      <PageCover title="فرصت های شغلی" bgImage="projects-pattern" />
      <div className="container mx-auto px-4 py-12">
        <JobGrid />
      </div>
    </div>
  );
}
