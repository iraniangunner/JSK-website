
import Certificate from "@/components/Certificate";
import { Suspense } from "react";
import LoadingSpinner from "@/components/loadingSpinner";
import { Metadata } from "next";
import { PageCover } from "@/components/pageCover";

export const metadata: Metadata = {
  title: "گواهینامه ها",
  description: "گواهینامه ها و جوایز شرکت ژیوار صنعت کیان",
  alternates: {
    canonical: "/certifications",
  },
  openGraph: {
    title: "ژیوار صنعت کیان | گواهینامه ها",
    description: "گواهینامه ها و جوایز شرکت ژیوار صنعت کیان",
  },
};

export default async function Certifications() {
  return (
    <>
      <PageCover title="گواهینامه ها و جوایز" bgImage="projects-pattern" />
      <div className="flex justify-center my-16">
        <div className="w-[80%] pt-[60px]">
          <Suspense fallback={<LoadingSpinner />}>
            <Certificate />
          </Suspense>
        </div>
      </div>
    </>
  );
}
