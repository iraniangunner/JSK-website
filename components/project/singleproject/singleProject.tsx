"use client";
import { useEffect, useState } from "react";
import { FaBriefcase } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { RelatedCarousel } from "./relatedprojects/relatedProjects";
import { VideoPlayer } from "./videoplayer/video-player";
import { FaCheck } from "react-icons/fa6";
import ProjectCarousel from "./thumbscarousel/thumbsCarousel";

export function SingleProject({ project }: { project: any }) {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  const videoJsOptions = {
    // autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    experimentalSvgIcons: true,
    playbackRates: [0.5, 1, 1.5, 2],
    sources: [
      {
        src: "//vjs.zencdn.net/v/oceans.mp4",
        type: "video/mp4",
      },
    ],
    controlBar: {
      skipButtons: {
        forward: 10,
        backward: 10,
      },
    },
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
      <div className="max-w-[1300px] flex flex-col lg:flex-row gap-8 lg:gap-9 my-24 mx-auto px-8">
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
                <p className="text-[16px] text-[#53545A]">{project.employee}</p>
              </div>
            </li>
            <li className="flex items-center py-[15px] border-b border-solid border-[#001c472e]">
              <FaRegCalendar className="ml-[20px] text-[#FF5E14]" size={20} />
              <div>
                <h4 className="text-[20px] mb-[3px] text-[#001c47] font-[600]">
                  تاریخ شروع
                </h4>
                <p className="text-[16px] text-[#53545A]">
                  {project.startDate}
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
        <div
          className="block lg:hidden"
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
                <p className="text-[16px] text-[#53545A]">{project.employee}</p>
              </div>
            </li>
            <li className="flex items-center py-[15px] border-b border-solid border-[#001c472e]">
              <FaRegCalendar className="ml-[20px] text-[#FF5E14]" size={20} />
              <div>
                <h4 className="text-[20px] mb-[3px] text-[#001c47] font-[600]">
                  تاریخ شروع
                </h4>
                <p className="text-[16px] text-[#53545A]">
                  {project.startDate}
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

          <h1 className="font-bold text-lg">معرفی پروژه</h1>
          <p className="text-justify w-[100%] leading-7">
            {project.description}
          </p>
          {/* <p>{project.startDate}</p> */}
          {/* <div className="my-8">
            <h1 className="mb-4 text-lg">چالش های پروژه</h1>
            <p className="text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div> */}

          {/* <div className="grid grid-cols-1 lg:grid-cols-2 my-8 gap-8">
            <ul>
              <li className="mb-3 flex items-center gap-2">
                <FaCheck color="#ffa500" />
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت </p>
              </li>
              <li className="mb-3 flex items-center gap-2">
                <FaCheck color="#ffa500" />
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت </p>
              </li>
              <li className="mb-3 flex items-center gap-2">
                <FaCheck color="#ffa500" />
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت </p>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck color="#ffa500" />
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت </p>
              </li>
            </ul>
            <div>
              <VideoPlayer
                options={videoJsOptions}
                // onReady={() => console.log("The video is ready to play")}
              />
            </div>
          </div> */}
        </div>
      </div>

      <div className="max-w-[1300px] my-24 mx-auto px-8">
        {/* <h1 className="mb-8 text-xl">پروژه ها ی مرتبط</h1> */}
        {/* <RelatedCarousel related={related} /> */}
      </div>
    </>
  );
}
