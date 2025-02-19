"use client";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { ProjectsCarousel } from "./carousel/ProjectsCarousel";
import { ProjectsData } from "@/types/projectTypes";
import { useLocale, useTranslations } from "next-intl";

export const ProjectsSectionUI = ({ projects }: { projects: ProjectsData }) => {
  const t = useTranslations("ProjectsSection");
  const locale = useLocale();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] xl:w-[80%] mx-auto gap-10 py-20 ">
      <div className="order-2 lg:order-1">
        <ProjectsCarousel projects={projects} />
      </div>
      <div className="z-[1] order-1 lg:order-2 flex flex-col justify-center">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          className="text-xl mb-4 overflow-hidden select-none text-black"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeIn" }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
        >
          {t("title")}
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          className="text-justify overflow-hidden select-none leading-8 text-black"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeIn" }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
        >
          {t("description")}
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          className="overflow-hidden"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeIn" }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
        >
          <Link
            href="/projects"
            className="inline-block px-4 py-2 text-white bg-[#ffa500] select-none
                mt-8 border border-[#ffa500] hover:bg-white hover:text-[#ffa500] 
                transition-all"
          >
            {locale === "fa" ? "مشاهده همه" : "View All"}
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
