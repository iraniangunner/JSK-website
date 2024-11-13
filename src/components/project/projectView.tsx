"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

type Project = {
  id: number;
  title: string;
  employer: string;
  start_date: string;
  location: string;
  images: { full_path: string; image: string }[];
  categories: { id: number; title: string }[];
};

export function Project({ projectDetails }: { projectDetails: Project }) {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="max-w-sm bg-white border relative border-gray-200 shadow overflow-hidden group"
    >
      <Link href={`/projects/${projectDetails.id}`} className="block">
        <img
          // src={projectDetails.images[0].full_path}
          src="https://jsk-co.com/storage/project/2024/11/12/kRtiEPaCaF2DfdzJ6Tz5rXr65mDogw28FlpfA7w7.webp"
          // width={300}
          // height={300}
          className="h-auto max-w-full w-full"
          alt="project-image"
        />
      </Link>
      <div className="block lg:hidden">
        <Link
          href={`/projects/${projectDetails.id}`}
          className="relative block p-4"
        >
          <h5 className="mb-2 text-gray-900">{projectDetails.title}</h5>
        </Link>
      </div>
      <div className="absolute hidden lg:block bottom-0 left-0 right-0 top-0 z-0 w-full h-full bg-black opacity-[0.8] translate-x-[500px] group-hover:translate-x-0 transition-all duration-[0.6s]"></div>

      <Link
        href={`/projects/${projectDetails.id}`}
        className="absolute top-3 bottom-3 left-3 right-3 border hidden lg:flex justify-center items-center translate-x-[500px] group-hover:translate-x-0 transition-all duration-[0.6s] z-[2]"
      >
        <h5 className="p-2 lg:p-4 text-lg text-center text-white">
          {projectDetails.title}
        </h5>
      </Link>
    </motion.div>
  );
}
