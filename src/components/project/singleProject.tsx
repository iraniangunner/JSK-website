"use client";
import { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import ProjectCarousel from "../carousel/thumbsCarousel";
import { Project } from "@/types/projectTypes";


export function SingleProject({ project }: { project: Project }) {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="relative bg-projects-pattern pt-[80px] lg:pt-[260px]
        lg:pb-[10px] bg-[top_right] bg-no-repeat bg-fixed
        before:absolute before:content-[''] before:left-0 before:top-0
        before:w-full before:h-full before:opacity-[0.9] before:z-[0] before:bg-[#042038]"
      >
        <nav
          aria-label="breadcrumb"
          className="p-[10px] mx-auto md:max-w-[720px] lg:max-w-[920px] relative"
        ></nav>
        <h1 className="lg:text-[35px] font-bold text-center text-[#fff] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          {project.title}
        </h1>
      </div>
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
                  عنوان پروژه
                </h4>
                <p className="text-[16px] text-[#53545A]">{project.title}</p>
              </div>
            </li>
            <li className="flex items-center py-[15px] border-b border-solid border-[#001c472e]">
              <FaRegUser className="ml-[20px] text-[#FF5E14]" size={20} />
              <div>
                <h4 className="text-[20px] mb-[3px] text-[#001c47] font-[600]">
                  کارفرما
                </h4>
                <p className="text-[16px] text-[#53545A]">{project.employer}</p>
              </div>
            </li>
            <li className="flex items-center py-[15px] border-b border-solid border-[#001c472e]">
              <FaRegCalendar className="ml-[20px] text-[#FF5E14]" size={20} />
              <div>
                <h4 className="text-[20px] mb-[3px] text-[#001c47] font-[600]">
                  تاریخ شروع
                </h4>
                <p className="text-[16px] text-[#53545A]">
                  {project.start_date}
                </p>
              </div>
            </li>
            <li className="flex items-center py-[15px]">
              <FaLocationDot className="ml-[20px] text-[#FF5E14]" size={20} />
              <div>
                <h4 className="text-[20px] mb-[3px] text-[#001c47] font-[600]">
                  محل پروژه
                </h4>
                <p className="text-[16px] text-[#53545A]">{project.location}</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="block lg:hidden">
          <ul>
            <li className="flex items-center py-[15px] border-b border-solid border-[#001c472e]">
              <div>
                <h4 className="text-[20px] mb-[3px] text-[#001c47] font-[600]">
                  عنوان پروژه
                </h4>
                <p className="text-[16px] text-[#53545A]">{project.title}</p>
              </div>
            </li>
            <li className="flex items-center py-[15px] border-b border-solid border-[#001c472e]">
              <FaRegUser className="ml-[20px] text-[#FF5E14]" size={20} />
              <div>
                <h4 className="text-[20px] mb-[3px] text-[#001c47] font-[600]">
                  کارفرما
                </h4>
                <p className="text-[16px] text-[#53545A]">{project.employer}</p>
              </div>
            </li>
            <li className="flex items-center py-[15px] border-b border-solid border-[#001c472e]">
              <FaRegCalendar className="ml-[20px] text-[#FF5E14]" size={20} />
              <div>
                <h4 className="text-[20px] mb-[3px] text-[#001c47] font-[600]">
                  تاریخ شروع
                </h4>
                <p className="text-[16px] text-[#53545A]">
                  {project.start_date}
                </p>
              </div>
            </li>
            <li className="flex items-center py-[15px]">
              <FaLocationDot className="ml-[20px] text-[#FF5E14]" size={20} />
              <div>
                <h4 className="text-[20px] mb-[3px] text-[#001c47] font-[600]">
                  محل پروژه
                </h4>
                <p className="text-[16px] text-[#53545A]">{project.location}</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-full lg-w-[50%] xl:w-[70%] flex flex-col justify-center gap-3">
          <ProjectCarousel project={project} />
          <h1 className="font-bold text-lg text-black">معرفی پروژه</h1>
          <p className="text-justify w-[100%] leading-7 text-black">{project.text}</p>
        </div>
      </div>
    </>
  );
}
