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
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <Link href={`/projects/${projectDetails.id}`} className="relative block">
        <Image
          src={`/images/${projectDetails.image}`}
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
          {/* {message} */}
        </p>
      </div>
    </motion.div>
  );
}
