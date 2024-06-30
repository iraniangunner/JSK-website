"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function Project({ projectDetails }: { projectDetails: any }) {
  return (
    // <div>
    //   <Link
    //     href={`/projects/${projectDetails.id}`}
    //     className="relative block group"
    //   >
    //     {/* <div
    //       className={`absolute top-0 left-0 bottom-0 rounded-lg w-full h-0 opacity-0 flex items-center justify-center bg-blue-gray-900 text-white  ${
    //         message ? "h-full opacity-60" : ""
    //       } transition-all duration-200`}
    //     > */}
    //     <div
    //       className="absolute group-hover:h-full group-hover:opacity-60 top-0 left-0 bottom-0 rounded-lg w-full h-0 opacity-0 flex items-center justify-center bg-blue-gray-900 text-white
    //       transition-all duration-200"
    //     >
    //       <div className="flex items-center justify-center h-[80%] w-[80%] p-[8px] border border-solid border-[#ccc]">
    //         <h1>{projectDetails.title}</h1>
    //       </div>
    //     </div>
    //     <Image
    //       src={"https://image.tmdb.org/t/p/w500" + projectDetails.backdrop_path}
    //       width={300}
    //       height={300}
    //       className="h-auto max-w-full rounded-lg"
    //       alt="project-image"
    //     />
    //   </Link>
    // </div>

    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href={`/projects/${projectDetails.id}`} className="relative block">
        <Image
          src={"https://image.tmdb.org/t/p/w500" + projectDetails.backdrop_path}
          width={300}
          height={300}
          className="h-auto max-w-full rounded-t-lg w-full"
          alt="project-image"
        />
      </Link>
      {/* <a href="#">
        <img
          className="rounded-t-lg"
          src="/docs/images/blog/image-1.jpg"
          alt=""
        />
      </a> */}
      <div className="p-5">
        <Link
          href={`/projects/${projectDetails.id}`}
          className="relative block"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {projectDetails.title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {/* {projectDetails.overview} */}
        </p>
        {/* <Link
          href={`/projects/${projectDetails.id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
         مشاهده بیشتر
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link> */}
      </div>
    </div>
  );
}
