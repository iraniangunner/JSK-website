import { JobGrid } from "./_components/job-grid";
import { Metadata } from "next";

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
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            فرصت‌های همکاری با ژیوار صنعت کیان
          </h1>
          <p className="text-gray-600">کار در قله‌های موفقیت</p>
        </div>
        <JobGrid />
      </div>
    </div>
  );
}
