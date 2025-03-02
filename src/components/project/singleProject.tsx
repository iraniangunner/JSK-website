"use client";
import { FaRegUser } from "react-icons/fa";
import dynamic from "next/dynamic";
import { FaRegCalendar } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
// import ProjectCarousel from "../carousel/thumbsCarousel";
import { Project } from "@/types/projectTypes";
import { useScroll } from "@/hooks/useScroll";
import { useLocale, useTranslations } from "next-intl";
import { DetailCover } from "../detailCover";

const ProjectCarousel = dynamic(() => import("../carousel/thumbsCarousel"), {
  loading: () => <p>Loading ...</p>,
  // ssr: false, // Ensure it's only loaded on the client side
});

export function SingleProject({ project }: { project: Project }) {
  const [isScrolling] = useScroll(80);
  const locale = useLocale();
  const t = useTranslations("Projects.project");

  return (
    <>
      <DetailCover
        title={locale === "fa" ? project.title : project.title_en}
        location={locale === "fa" ? project.location : project.location_en}
        link="/projects"
        linkTitle={locale === "fa" ? "پروژه ها" : "Projects"}
      />
      <div className="max-w-[1300px] flex flex-col xl:flex-row gap-8 lg:gap-9 my-10 lg:my-24 mx-auto px-8">
        <div
          className={`hidden lg:block lg:w-[50%] xl:w-[30%] h-fit ${
            isScrolling ? "xl:sticky xl:top-24" : "xl:relative"
          }`}
        >
          <ul>
            <li className="flex items-center py-[15px] border-b border-solid border-[#001c472e]">
              <div>
                <h4 className="text-[20px] mb-[3px] text-[#001c47] font-[600]">
                  {t("projectTitle")}
                </h4>
                <p className="text-[16px] text-[#53545A]">
                  {locale === "fa" ? project.title : project.title_en}
                </p>
              </div>
            </li>
            <li className="flex items-center py-[15px] border-b border-solid border-[#001c472e]">
              <FaRegUser
                className={`${
                  locale === "fa" ? "ml-[20px]" : "mr-[20px]"
                } text-[#FF5E14]`}
                size={20}
              />
              <div>
                <h4 className="text-[20px] mb-[3px] text-[#001c47] font-[600]">
                  {t("employer")}
                </h4>
                <p className="text-[16px] text-[#53545A]">
                  {locale === "fa" ? project.employer : project.employer_en}
                </p>
              </div>
            </li>
            <li className="flex items-center py-[15px] border-b border-solid border-[#001c472e]">
              <FaRegCalendar
                className={`${
                  locale === "fa" ? "ml-[20px]" : "mr-[20px]"
                } text-[#FF5E14]`}
                size={20}
              />
              <div>
                <h4 className="text-[20px] mb-[3px] text-[#001c47] font-[600]">
                  {t("startDate")}
                </h4>
                <p className="text-[16px] text-[#53545A]">
                  {project.start_date}
                </p>
              </div>
            </li>
            <li className="flex items-center py-[15px]">
              <FaLocationDot
                className={`${
                  locale === "fa" ? "ml-[20px]" : "mr-[20px]"
                } text-[#FF5E14]`}
                size={20}
              />
              <div>
                <h4 className="text-[20px] mb-[3px] text-[#001c47] font-[600]">
                  {t("projectLocation")}
                </h4>
                <p className="text-[16px] text-[#53545A]">
                  {locale === "fa" ? project.location : project.location_en}
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="block lg:hidden">
          <ul>
            <li className="flex items-center py-[15px] border-b border-solid border-[#001c472e]">
              <div>
                <h4 className="text-[20px] mb-[3px] text-[#001c47] font-[600]">
                  {t("projectTitle")}
                </h4>
                <p className="text-[16px] text-[#53545A]">
                  {locale === "fa" ? project.title : project.title_en}
                </p>
              </div>
            </li>
            <li className="flex items-center py-[15px] border-b border-solid border-[#001c472e]">
              <FaRegUser
                className={`${
                  locale === "fa" ? "ml-[20px]" : "mr-[20px]"
                } text-[#FF5E14]`}
                size={20}
              />
              <div>
                <h4 className="text-[20px] mb-[3px] text-[#001c47] font-[600]">
                  {t("employer")}
                </h4>
                <p className="text-[16px] text-[#53545A]">
                  {locale === "fa" ? project.employer : project.employer_en}
                </p>
              </div>
            </li>
            <li className="flex items-center py-[15px] border-b border-solid border-[#001c472e]">
              <FaRegCalendar
                className={`${
                  locale === "fa" ? "ml-[20px]" : "mr-[20px]"
                } text-[#FF5E14]`}
                size={20}
              />
              <div>
                <h4 className="text-[20px] mb-[3px] text-[#001c47] font-[600]">
                  {t("startDate")}
                </h4>
                <p className="text-[16px] text-[#53545A]">
                  {project.start_date}
                </p>
              </div>
            </li>
            <li className="flex items-center py-[15px]">
              <FaLocationDot
                className={`${
                  locale === "fa" ? "ml-[20px]" : "mr-[20px]"
                } text-[#FF5E14]`}
                size={20}
              />
              <div>
                <h4 className="text-[20px] mb-[3px] text-[#001c47] font-[600]">
                  {t("projectLocation")}
                </h4>
                <p className="text-[16px] text-[#53545A]">
                  {locale === "fa" ? project.location : project.location_en}
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-full lg-w-[50%] xl:w-[70%] flex flex-col justify-center gap-3">
          <ProjectCarousel project={project} />
          <h1 className="font-bold text-lg text-black">
            {t("projectDescription")}
          </h1>
          <p className="lg:text-justify w-[100%] leading-7 text-black">
            {locale === "fa" ? project.text : project.text_en}
          </p>
        </div>
      </div>
    </>
  );
}
