"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { getServicesData } from "@/utils/client/services-data";

const AccordionItem = dynamic(
  () => import("./accordion/accordionItem").then((mod) => mod.AccordionItem),
  {
    loading: () => (
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-20 bg-gray-100 rounded-2xl animate-pulse" />
        ))}
      </div>
    ),
  }
);

export default function ServicesSection() {
  const locale = useLocale();
  const t1 = useTranslations("ServicesSection");
  const t = useTranslations();
  const services = getServicesData(t);
  const isRTL = locale === "fa";

  const pic1 = require("../../public/images/pic1.jpg").default;
  const pic2 = require("../../public/images/pic2.jpg").default;
  const pic3 = require("../../public/images/pic3.jpg").default;

  return (
    <section className="relative overflow-hidden">
      <div className="relative z-10 w-[92%] xl:w-[88%] max-w-7xl mx-auto py-20 lg:py-28">
        {/* Section Header */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-3 text-[#EC9123] text-sm font-semibold tracking-widest uppercase mb-4">
            <span className="w-8 h-px bg-[#EC9123]" />
            {isRTL ? "خدمات ما" : "Our Services"}
            <span className="w-8 h-px bg-[#EC9123]" />
          </span>
        </motion.div> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Side */}
          <div className={`${isRTL ? "lg:order-1" : "lg:order-2"}`}>
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2c4050] leading-tight mb-5">
                {t1("title")}
              </h2>
              <div className="w-16 h-1.5 bg-[#EC9123] rounded-full mb-6" />
              <p className="text-gray-600 text-lg leading-relaxed lg:text-justify">
                {t1("description")}
              </p>
            </motion.div>

            <AccordionItem data={services} />
          </div>

          {/* Images Side - Overlapping Stack Layout */}
          <div className={`${isRTL ? "lg:order-2" : "lg:order-1"}`}>
            <div className="relative h-[500px] sm:h-[550px] lg:h-[600px]">
              
              {/* Image 1 - Main/Back */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`absolute top-0 ${isRTL ? "left-0" : "right-0"} w-[75%] z-10`}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
                  className="relative group"
                >
                  <div className="relative h-[300px] sm:h-[340px] overflow-hidden rounded-2xl shadow-2xl shadow-black/10 border-4 border-white">
                    <Image
                      src={pic1}
                      alt="Service 1"
                      fill
                      sizes="(max-width: 768px) 75vw, 40vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* Image 2 - Middle */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className={`absolute top-[25%] ${isRTL ? "right-0" : "left-0"} w-[65%] z-20`}
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
                  className="relative group"
                >
                  <div className="relative h-[240px] sm:h-[280px] overflow-hidden rounded-2xl shadow-2xl shadow-black/15 border-4 border-white">
                    <Image
                      src={pic2}
                      alt="Service 2"
                      fill
                      sizes="(max-width: 768px) 65vw, 35vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* Image 3 - Front/Bottom */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`absolute bottom-0 ${isRTL ? "left-[10%]" : "right-[10%]"} w-[60%] z-30`}
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
                  className="relative group"
                >
                  <div className="relative h-[200px] sm:h-[240px] overflow-hidden rounded-2xl shadow-2xl shadow-black/15 border-4 border-white">
                    <Image
                      src={pic3}
                      alt="Service 3"
                      fill
                      sizes="(max-width: 768px) 60vw, 30vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* Decorative Elements */}
              <div className={`absolute top-[15%] ${isRTL ? "right-[70%]" : "left-[70%]"} w-20 h-20 border-2 border-[#EC9123]/20 rounded-full z-0`} />
              <div className={`absolute bottom-[20%] ${isRTL ? "left-[75%]" : "right-[75%]"} w-12 h-12 bg-[#EC9123]/10 rounded-full z-0`} />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}