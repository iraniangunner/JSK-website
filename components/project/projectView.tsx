"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Project({ projectDetails }: { projectDetails: any }) {
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   // Use setTimeout to update the message after 2000 milliseconds (2 seconds)
  //   const timeoutId = setTimeout(() => {
  //     setMessage("Delayed message after 3 seconds!");
  //   }, 3000);

  //   // Cleanup function to clear the timeout if the component unmounts
  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, []); // Empty dependency array ensures the effect runs only once

  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="max-w-sm bg-white border relative border-gray-200 rounded-lg shadow overflow-hidden group dark:bg-gray-800 dark:border-gray-700"
    >
      <Link href={`/projects/${projectDetails.id}`} className="block">
        <Image
          src={`/images/${projectDetails.image}`}
          width={300}
          height={300}
          className="h-auto max-w-full rounded-lg w-full"
          alt="project-image"
        />
      </Link>
      <div
        className={`absolute bottom-0 z-0 rounded-b-lg left-0 right-0 top-0 w-full h-full bg-[#ffa500] opacity-[0.8] translate-y-[300px] group-hover:translate-y-0 transition-all duration-[0.4]`}
      ></div>

      <Link
        href={`/projects/${projectDetails.id}`}
        className="absolute top-0 bottom-0 left-0 right-0 translate-y-[300px] group-hover:translate-y-0 transition-all duration-[0.4] block w-full h-full z-[2]"
      >
        <h5 className="p-5 text-lg font-bold tracking-tight text-white">
          {projectDetails.title}
        </h5>
      </Link>
    </motion.div>
  );
}
