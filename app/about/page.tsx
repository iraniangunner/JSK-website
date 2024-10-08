import Link from "next/link";
import { Suspense } from "react";
import { AboutUsDetails } from "@/components/aboutUs";
import LoadingSpinner from "@/components/loadingSpinner";
import { AboutUsImage } from "@/components/aboutUsImage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ژیوار صنعت کیان | درباره ما",
  description: "درباره شرکت ژیوار صنعت کیان",
  openGraph: {
    title: "ژیوار صنعت کیان | درباره ما",
    description: "درباره شرکت ژیوار صنعت کیان",
  },
};

export default function About() {
  return (
    <>
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
              <span>درباره ما</span>
            </li>
          </ol>
        </nav>
        <h1 className="text-[35px] font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          درباره ما
        </h1>
      </div>

      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-[80%] mx-auto gap-10 py-20">
          <Suspense fallback={<LoadingSpinner />}>
            <AboutUsDetails />
          </Suspense>

          {/* <div className="mt-12 md:mt-0">
            <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us Image" className="object-cover rounded-lg shadow-md" />
          </div> */}
          <AboutUsImage />
        </div>
      </div>
    </>
  );
}
