import Link from "next/link";
import Certificate from "../../components/certificate";
import { Suspense } from "react";
import LoadingSpinner from "@/components/loadingSpinner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ژیوار صنعت کیان | گواهینامه ها",
  description: "گواهینامه ها و جوایز شرکت ژیوار صنعت کیان",
  openGraph: {
    title: "ژیوار صنعت کیان | گواهینامه ها",
    description: "گواهینامه ها و جوایز شرکت ژیوار صنعت کیان",
  },
};

export default async function Certifications() {
  return (
    //
    <>
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
              <span>گواهینامه ها و جوایز</span>
            </li>
          </ol>
        </nav>
        <h1 className="text-[35px] font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          گواهینامه ها
        </h1>
      </div>
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
