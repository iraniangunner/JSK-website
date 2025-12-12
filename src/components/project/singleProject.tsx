"use client";
import { FaRegUser } from "react-icons/fa";
import dynamic from "next/dynamic";
import { FaRegCalendar } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { Project } from "@/types/projectTypes";
import { useScroll } from "@/hooks/useScroll";
import { useLocale, useTranslations } from "next-intl";
import { DetailCover } from "../detailCover";

const ProjectCarousel = dynamic(() => import("../carousel/thumbsCarousel"), {
  loading: () => <p>Loading ...</p>,
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
        {/* Desktop Sidebar */}
        <div
          className={`hidden lg:block lg:w-[50%] xl:w-[30%] h-fit ${
            isScrolling ? "xl:sticky xl:top-24" : "xl:relative"
          }`}
        >
          <div className="bg-white rounded-lg shadow-md p-6">
            <ul className="space-y-4">
              <li className="pb-4 border-b border-gray-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {t("projectTitle")}
                </h4>
                <p className="text-gray-600">
                  {locale === "fa" ? project.title : project.title_en}
                </p>
              </li>

              <li className="flex items-start gap-3 pb-4 border-b border-gray-200">
                <FaRegUser
                  className="text-[#ffa500] mt-1 flex-shrink-0"
                  size={20}
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {t("employer")}
                  </h4>
                  <p className="text-gray-600">
                    {locale === "fa" ? project.employer : project.employer_en}
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 pb-4 border-b border-gray-200">
                <FaRegCalendar
                  className="text-[#ffa500] mt-1 flex-shrink-0"
                  size={20}
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {t("startDate")}
                  </h4>
                  <p className="text-gray-600">{project.start_date}</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <FaLocationDot
                  className="text-[#ffa500] mt-1 flex-shrink-0"
                  size={20}
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {t("projectLocation")}
                  </h4>
                  <p className="text-gray-600">
                    {locale === "fa" ? project.location : project.location_en}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Info */}
        <div className="block lg:hidden">
          <div className="bg-white rounded-lg shadow-md p-6">
            <ul className="space-y-4">
              <li className="pb-4 border-b border-gray-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {t("projectTitle")}
                </h4>
                <p className="text-gray-600">
                  {locale === "fa" ? project.title : project.title_en}
                </p>
              </li>

              <li className="flex items-start gap-3 pb-4 border-b border-gray-200">
                <FaRegUser
                  className="text-[#ffa500] mt-1 flex-shrink-0"
                  size={20}
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {t("employer")}
                  </h4>
                  <p className="text-gray-600">
                    {locale === "fa" ? project.employer : project.employer_en}
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 pb-4 border-b border-gray-200">
                <FaRegCalendar
                  className="text-[#ffa500] mt-1 flex-shrink-0"
                  size={20}
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {t("startDate")}
                  </h4>
                  <p className="text-gray-600">{project.start_date}</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <FaLocationDot
                  className="text-[#ffa500] mt-1 flex-shrink-0"
                  size={20}
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {t("projectLocation")}
                  </h4>
                  <p className="text-gray-600">
                    {locale === "fa" ? project.location : project.location_en}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-[50%] xl:w-[70%] flex flex-col gap-6">
          <div className="rounded-lg overflow-hidden shadow-md">
            <ProjectCarousel project={project} />
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-[#ffa500]">
              {t("projectDescription")}
            </h2>
            <p className="text-gray-700 leading-7 text-justify">
              {locale === "fa" ? project.text : project.text_en}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
