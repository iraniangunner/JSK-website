import Link from "next/link";
import { Suspense } from "react";
import ProjectsTable from "@/components/project/projectsTbl";
import Skeleton from "@/components/loadingSkeleton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ژیوار صنعت کیان | پروژه ها",
  description: "پروژه های ژیوار صنعت کیان",
  openGraph: {
    title: "ژیوار صنعت کیان | پروژه ها",
    description: "پروژه های ژیوار صنعت کیان",
  },
};

async function getProjects() {
  const res = await fetch("https://jsk-co.com/api/projects", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  return res.json();
}

async function getCategories() {
  const res = await fetch("https://jsk-co.com/api/categories", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
}

export default async function Projects() {
  const projectsData = await getProjects();
  const categoriesData = await getCategories();
  return (
    <div>
      <div
        className="relative bg-projects-pattern pt-[80px] lg:pt-[260px] 
        lg:pb-[10px] bg-[top_right] bg-no-repeat bg-fixed
        before:absolute before:content-[''] before:left-0 before:top-0
        before:w-full before:h-full before:opacity-0 before:z-[-1]"
      >
        <nav
          aria-label="breadcrumb"
          className="px-[15px] mx-auto md:max-w-[720px] lg:max-w-[920px] relative hidden md:block"
        >
          <ol className="flex flex-wrap items-center absolute bottom-[20px] rounded-md bg-opacity-60 px-[1rem]">
            <li className="flex items-center text-lg font-iransans antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer text-blue-gray-900 hover:text-[#ffa500]">
              <Link href="/" className="opacity-60">
                خانه
              </Link>
              <span className="mx-2 font-sans text-lg antialiased font-normal leading-normal pointer-events-none select-none text-blue-gray-500">
                /
              </span>
            </li>
            <li className="flex items-center font-iransans text-lg antialiased font-normal leading-normal text-blue-gray-900">
              <span>پروژه ها</span>
            </li>
          </ol>
        </nav>
        <h1 className="lg:text-[35px] font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          پروژه های ما
        </h1>
      </div>

      <div className="my-12 mx-8">
        <div className="max-w-[960px] mx-auto">
          <div className="flex items-center justify-center gap-2 lg:gap-0 py-4 md:py-8 flex-wrap"></div>

          {/* <Suspense fallback={<Skeleton />}> */}
          <ProjectsTable
            projectsData={projectsData}
            categories={categoriesData}
          />
          {/* </Suspense> */}
        </div>
      </div>
    </div>
  );
}
