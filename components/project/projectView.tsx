"use client";
import Link from "next/link";
import Image from "next/image";

export function Project({ projectDetails }: { projectDetails: any }) {
  return (
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
      </div>
    </div>
  );
}
