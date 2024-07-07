import Link from "next/link";
import { Suspense } from "react";
import ProjectsTable from "@/components/project/projectsTbl";
import Skeleton from "@/components/loadingSkeleton";
import ProjectTab from "@/components/project/projectTab";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ژیوار صنعت کیان | پروژه ها",
  description: "پروژه های ژیوار صنعت کیان",
  openGraph: {
    title: "ژیوار صنعت کیان | پروژه ها",
    description: "پروژه های ژیوار صنعت کیان",
  },
};

const buttonTypes = [
  { type: 2012, text: "همه" },
  { type: 2013, text: "طراحی و مهندسی" },
  { type: 2014, text: "خرید" },
  { type: 2015, text: "نصب" },
  { type: 2016, text: "اجرا" },
  { type: 2017, text: "بهره برداری" },
];

export default async function Projects({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const type =
    typeof searchParams.type === "string" ? Number(searchParams.type) : 2012;

  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;

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
          className="px-[15px] mx-auto md:max-w-[720px] lg:max-w-[920px] relative"
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
        <h1 className="text-[35px] font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          پروژه های ما
        </h1>
      </div>

      <div className="my-12 mx-8">
        <div className="max-w-[960px] mx-auto">
          <div className="flex items-center justify-center gap-2 lg:gap-0 py-4 md:py-8 flex-wrap">
            {buttonTypes.map((button) => (
              <ProjectTab
                key={button.text}
                type={button.type}
                text={button.text}
              />
            ))}
          </div>

          <Suspense key={type + page} fallback={<Skeleton />}>
            <ProjectsTable type={type} page={page} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
