"use client";
import { useEffect, useState } from "react";
import { FaBriefcase } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { RelatedCarousel } from "./relatedprojects/relatedProjects";


export function SingleProject({ project, related }) {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    // const related = allProjects.filter(
    //   (p) =>
    //     p.genre_ids.some((item) =>
    //       project.genres.map((g) => g.id).includes(item)
    //     ) && p.id !== project.id
    // );
    // setRelatedPosts(related);

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
          className="px-[15px] mx-auto md:max-w-[720px] lg:max-w-[920px] relative"
        ></nav>
        <h1 className="text-[35px] font-bold text-[#fff] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          {project.title}
        </h1>
      </div>
      <div className="max-w-[1200px] flex gap-8 my-12 mx-auto px-8">
        <div
          className={`hidden lg:block lg:w-[50%] xl:w-[30%] h-fit ${
            isScrolling ? "sticky top-24" : "relative"
          }`}
        >
          <ul>
            <li className="flex items-center py-[15px] border-b border-solid border-[#001c472e]">
              <FaBriefcase className="ml-[20px] text-[#FF5E14]" size={20} />
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
                <p className="text-[16px] text-[#53545A]">ThemeForest Envato</p>
              </div>
            </li>
            <li className="flex items-center py-[15px] border-b border-solid border-[#001c472e]">
              <FaRegCalendar className="ml-[20px] text-[#FF5E14]" size={20} />
              <div>
                <h4 className="text-[20px] mb-[3px] text-[#001c47] font-[600]">
                  تاریخ شروع
                </h4>
                <p className="text-[16px] text-[#53545A]">
                  {project.release_date}
                </p>
              </div>
            </li>
            <li className="flex items-center py-[15px]">
              <FaLocationDot className="ml-[20px] text-[#FF5E14]" size={20} />
              <div>
                <h4 className="text-[20px] mb-[3px] text-[#001c47] font-[600]">
                  محل پروژه
                </h4>
                <p className="text-[16px] text-[#53545A]">Kerman</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-full lg-w-[50%] xl:w-[70%] flex flex-col justify-center gap-3">
          <img
            src={"https://image.tmdb.org/t/p/w500" + project.backdrop_path}
          />
          <h1 className="text-xl">{project.id}</h1>
          <p>{project.title}</p>
          <p>{project.overview}</p>
          <p>{project.release_date}</p>
        </div>
        {/* <div>
          {related.map((post) => (
            <div>{post.title}</div>
          ))}
        </div> */}
      </div>
      <div className="max-w-[1300px] my-24 mx-auto px-8">
      {/* <h1 className="mb-8 text-xl">پروژه ها ی مرتبط</h1> */}
        <RelatedCarousel related={related} size={30} />
      </div>

      <div>
     
      </div>

      {/* <ProjectCarousel/> */}
    </>
  );
}
