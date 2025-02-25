"use client";
// import pic1 from "../../public/images/pic1.jpg";
// import pic2 from "../../public/images/pic2.jpg";
// import pic3 from "../../public/images/pic3.jpg";
import { motion } from "framer-motion";
import { AccordionItem } from "./accordion/accordionItem";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { getServicesData } from "@/utils/client/services-data";

export default function ServicesSection() {
  const locale = useLocale();
  const t1 = useTranslations("ServicesSection");
  const t = useTranslations();
  const services = getServicesData(t);

   // ✅ Lazy load images only when the component is rendered
   const pic1 = require("../../public/images/pic1.jpg").default;
   const pic2 = require("../../public/images/pic2.jpg").default;
   const pic3 = require("../../public/images/pic3.jpg").default;

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] xl:w-[80%] mx-auto gap-10 pb-10 pt-20 overflow-hidden lg:overflow-visible">
        <div className="order-1 lg:order-2 max-w-full flex flex-col justify-center">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            className="text-xl overflow-hidden text-black"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeIn" }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 100 },
            }}
          >
            {t1("title")}
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            className="mt-6 mb-8 sm:text-justify overflow-hidden sm:leading-8 text-black"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeIn" }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 100 },
            }}
          >
            {t1("description")}
          </motion.p>
          <AccordionItem data={services} />
        </div>

        <div className="flex items-start order-1 lg:order-2">
          <div className="relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeIn" }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 100 },
              }}
              className={`w-[75%] ${
                locale === "fa" ? "mr-[80px]" : "ml-[80px]"
              }`}
            >
              <motion.div
                animate={{
                  translateX: [0, 10, 5, 10, 0],
                  translateY: [0, 10, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                <Image
                  src={pic1}
                  alt="pic1"
                  width={370}
                  height={500}
                  className="block h-full border-[5px] border-solid border-[#fff] max-w-full"
                />
              </motion.div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeIn" }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 100 },
              }}
              className={`w-[75%] absolute ${
                locale === "fa" ? "right-0" : "left-0"
              } top-[25%]`}
            >
              <motion.div
                animate={{
                  translateX: [0, 10, 5, 10, 0],
                  translateY: [0, 10, 5, -5, 0],
                }}
                transition={{
                  duration: 8,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                <Image
                  src={pic2}
                  alt="pic2"
                  className="block h-full border-[5px] border-solid border-[#fff] max-w-full"
                />
              </motion.div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeIn" }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 100 },
              }}
              className={`relative z-[1] mt-[-15%] ${
                locale === "fa" ? "ml-[-20%] pr-[80px]" : "mr-[-20%] pl-[80px]"
              }`}
            >
              <motion.div
                animate={{
                  translateX: [0, 10, 5, 10, 0],
                  translateY: [0, 10, 5, -5, 0],
                }}
                transition={{
                  duration: 10,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                <Image
                  src={pic3}
                  alt="pic3"
                  className="block h-full border-[5px] border-solid border-[#fff] max-w-full"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
