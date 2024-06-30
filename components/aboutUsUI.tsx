"use client";
import { motion } from "framer-motion";

export function AboutUsDetailsUI({ detail }: { detail: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className="text-xl overflow-hidden max-w-lg"
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeIn" }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 100 },
      }}
    >
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        درباره شرکت
      </h2>
      <p className="mt-4 text-gray-600 text-lg">{detail}</p>
      <div className="mt-8">
        {/* <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">
          Learn more about us
          <span className="ml-2">&#8594;</span>
        </a> */}
      </div>
    </motion.div>
  );
}
