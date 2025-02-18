"use client";
import { motion } from "framer-motion";

export function AboutUsImage() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className="overflow-hidden mt-12 md:mt-0 flex flex-col justify-center items-center"
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeIn", delay: 0.2 }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
      }}
    >
      {/* <Image src={pic3.src} width={500} height={200} alt="about_img" /> */}
    </motion.div>
  );
}
