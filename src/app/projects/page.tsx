
import { Metadata } from "next";
import { ProjectsGrid } from "@/components/project/projectsGrid";
import { Suspense } from "react";
import Skeleton from "@/components/loadingSkeleton";
import { PageCover } from "@/components/pageCover";

export const metadata: Metadata = {
  title: "پروژه ها",
  description: "پروژه های ژیوار صنعت کیان",
  openGraph: {
    title: "ژیوار صنعت کیان | پروژه ها",
    description: "پروژه های ژیوار صنعت کیان",
  },
};

export default async function Projects() {
  return (
    <div>
      <PageCover title="پروژه ها" bgImage="projects-pattern" />
      <div className="my-6 mx-8 mt-12">
        <div className="max-w-[960px] mx-auto">
          <Suspense fallback={<Skeleton />}>
            <ProjectsGrid />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
