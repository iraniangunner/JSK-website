"use client"
import { motion } from "framer-motion";
import Link from "next/link";

export function Project({ projectDetails, message }) {

  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <Link href={`/projects/${projectDetails.id}`} className="relative block">
        <div
          className={`absolute top-0 left-0 bottom-0 rounded-lg w-full h-0 opacity-0 flex items-center justify-center bg-blue-gray-900 text-white  ${
            message ? "h-full opacity-60" : ""
          } transition-all duration-200`}
        >
          <div className="flex items-center justify-center h-[80%] w-[80%] p-[8px] border border-solid border-[#ccc]">
            <h1>{projectDetails.title}</h1>
          </div>
        </div>
        <img
          src={"https://image.tmdb.org/t/p/w500" + projectDetails.backdrop_path}
          className="h-auto max-w-full rounded-lg"
          alt=""
        />
      </Link>
    </motion.div>
  );
}
