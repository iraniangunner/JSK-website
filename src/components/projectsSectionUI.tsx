
"use client";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { ProjectsCarousel } from "./carousel/ProjectsCarousel";
import { ProjectsData } from "@/types/projectTypes";
import { useLocale, useTranslations } from "next-intl";

export const ProjectsSectionUI = ({ projects }: { projects: ProjectsData }) => {
  const t = useTranslations("ProjectsSection");
  const locale = useLocale();
  const isRTL = locale === "fa";

  return (
    <section className="relative overflow-hidden">
      <div className="relative z-10 w-[92%] xl:w-[88%] max-w-8xl mx-auto py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Carousel Side */}
          <div className={`${isRTL ? "lg:order-1" : "lg:order-2"}`}>
            <ProjectsCarousel projects={projects} />
          </div>

          {/* Content Side */}
          <div className={`${isRTL ? "lg:order-2" : "lg:order-1"}`}>
            <div className="max-w-xl">
              {/* Section label */}
            
              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2c4050] leading-tight mb-5 select-none"
              >
                {t("title")}
              </motion.h2>

              {/* Decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`w-16 h-1.5 bg-[#EC9123] rounded-full mb-6 ${isRTL ? "origin-right" : "origin-left"}`}
              />

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-600 text-lg leading-relaxed mb-8 lg:text-justify"
              >
                {t("description")}
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link
                  href="/projects"
                  className={`
                    group inline-flex items-center gap-3 px-7 py-4 
                    bg-[#EC9123] text-white font-semibold rounded-xl
                    hover:bg-[#2c4050] shadow-lg shadow-[#EC9123]/25 
                    hover:shadow-[#2c4050]/25 transition-all duration-300
                    ${isRTL ? "flex-row-reverse" : ""}
                  `}
                >
                  <span>{isRTL ? "مشاهده همه پروژه‌ها" : "View All Projects"}</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isRTL
                        ? ""
                        : "group-hover:translate-x-1"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};