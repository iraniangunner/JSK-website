"use client";
import Image from "next/image";
import pic3 from "../../public/images/pic3.jpg";
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
      {/* <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us Image" className="object-cover rounded-lg shadow-md" /> */}
      <Image src={pic3.src} width={500} height={200} alt="about_img" />
    </motion.div>
  );
}
