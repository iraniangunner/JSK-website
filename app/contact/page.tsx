import Hero from "@/components/hero";
import Link from "next/link";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { RiNumber1 } from "react-icons/ri";
import { RiNumber2 } from "react-icons/ri";
import { RiNumber3 } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <>
      <div
        className="relative bg-contact-pattern pt-[80px] lg:pt-[260px] 
        lg:pb-[10px] bg-[top_right] bg-no-repeat bg-fixed
        before:absolute before:content-[''] before:left-0 before:top-0
        before:w-full before:h-full before:opacity-0 before:z-[-1]"
      >
        <nav
          aria-label="breadcrumb"
          className="px-[15px] mx-auto md:max-w-[720px] lg:max-w-[920px]"
        >
          <ol className="flex flex-wrap items-center rounded-md bg-opacity-60 px-[1rem] py-[0.75rem]">
            <li className="flex items-center text-lg font-iransans antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer text-blue-gray-900 hover:text-[#ffa500]">
              <Link href="/" className="opacity-60">
                خانه
              </Link>
              <span className="mx-2 font-sans text-lg antialiased font-normal leading-normal pointer-events-none select-none text-blue-gray-500">
                /
              </span>
            </li>
            <li className="flex items-center font-iransans text-lg antialiased font-normal leading-normal  text-blue-gray-900">
              <span>تماس با ما</span>
            </li>
          </ol>
        </nav>
      </div>

      <div className="flex flex-wrap justify-center mt-10">
        <div className="p-4 max-w-sm">
          <div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 ml-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 className="text-white dark:text-white text-lg font-medium">
                تلفن
              </h2>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <p className="leading-relaxed text-base text-white dark:text-gray-300">
              Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet 33 
              nihil molestias. Rem perspiciatis iure ut laborum inventore et maxime amet
              </p>
              <a
                href="#"
                className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          {/* <div className="relative group flex items-center h-full p-8 shadow-[0_5px_20px_0_rgba(0,0,0,0.15)] overflow-hidden bg-white hover:shadow-[0_5px_60px_0_rgba(0,0,0,0.15)] hover:translate-y-[-10px] transition-all duration-[0.8s]">
            <RiNumber1 className="absolute text-[80px] left-[10px] bottom-[5px] leading-[1px] font-[700] text-[#000] transition-all duration-[0.8s] opacity-[0.05] group-hover:scale-[2]" />
            <FaPhone size={45} className="ml-[20px]" color="#ffa500" />
            <div className="overflow-hidden">
              <h4 className="mb-[10px] text-[1rem] lg:text-[1.5rem] font-bold">
                تلفن
              </h4>
              <p className="mb-0 text-[18px] text-[#777777]">
                021-88660368
                <br />
                021-88660628
              </p>
            </div>
          </div> */}
        </div>

        <div className="p-4 max-w-sm">
          <div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 className="text-white dark:text-white text-lg font-medium">
                Feature 2
              </h2>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <p className="leading-relaxed text-base text-white dark:text-gray-300">
                Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet
                33 nihil molestias. Rem perspiciatis iure ut laborum inventore
                et maxime amet.
              </p>
              <a
                href="#"
                className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="p-4 max-w-sm">
          <div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 className="text-white dark:text-white text-lg font-medium">
                Feature 3
              </h2>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <p className="leading-relaxed text-base text-white dark:text-gray-300">
                Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet
              </p>
              <a
                href="#"
                className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-[50px] pb-[20px] lg:pt-[60px] lg:pb-[30px] px-10 lg:px-30 2xl:px-60 mx-auto">
        <div className="relative group flex items-center py-5 px-10 lg:py-[20px] lg:px-[30px] shadow-[0_5px_20px_0_rgba(0,0,0,0.15)] overflow-hidden bg-white hover:shadow-[0_5px_60px_0_rgba(0,0,0,0.15)] hover:translate-y-[-10px] transition-all duration-[0.8s]">
          <RiNumber1 className="absolute text-[80px] left-[10px] bottom-[5px] leading-[1px] font-[700] text-[#000] transition-all duration-[0.8s] opacity-[0.05] group-hover:scale-[2]" />
          <FaPhone size={45} className="ml-[20px]" color="#ffa500" />
          <div className="overflow-hidden">
            <h4 className="mb-[10px] text-[1rem] lg:text-[1.5rem] font-bold">
              تلفن
            </h4>
            <p className="mb-0 text-[18px] text-[#777777]">
              021-88660368
              <br />
              021-88660628
            </p>
          </div>
        </div>

        <div className="relative group flex items-center py-5 px-10 lg:py-[20px] lg:px-[30px] overflow-hidden bg-white shadow-[0_5px_20px_0_rgba(0,0,0,0.15)] hover:shadow-[0_5px_60px_0_rgba(0,0,0,0.15)] hover:translate-y-[-10px] transition-all duration-[0.8s]">
          <RiNumber2 className="absolute text-[80px] left-[10px] bottom-[5px] leading-[1px] font-[700] text-[#000] transition-all duration-[0.8s] opacity-[0.05] group-hover:scale-[2]" />
          <FaLocationDot size={45} className="ml-[20px]" color="#ffa500" />
          <div className="overflow-hidden">
            <h4 className="mb-[10px] text-[1rem] lg:text-[1.5rem] font-bold">
              آدرس
            </h4>
            <p className="mb-0 text-[18px] text-[#777777]">
              تهران، میدان ونک، خیابان ملاصدرا، <br /> خیابان شاد، کوچه باغسرا،
              پلاک ۱۳
            </p>
          </div>
        </div>
        <div className="relative group flex items-center py-5 px-10 lg:py-[20px] lg:px-[30px] shadow-[0_5px_20px_0_rgba(0,0,0,0.15)] overflow-hidden bg-white hover:shadow-[0_5px_60px_0_rgba(0,0,0,0.15)] hover:translate-y-[-10px] transition-all duration-[0.8s]">
          <RiNumber3 className="absolute text-[80px] left-[10px] bottom-[5px] leading-[1px] font-[700] text-[#000] transition-all duration-[0.8s] opacity-[0.05] group-hover:scale-[2]" />
          <MdEmail size={45} className="ml-[20px]" color="#ffa500" />
          <div className="overflow-hidden">
            <h4 className="mb-[10px] text-[1rem] lg:text-[1.5rem] font-bold">
              ایمیل
            </h4>
            <p className="mb-0 text-[18px] text-[#777777]">
              info@jsk-co.com
              <br /> services@gmail.com
            </p>
          </div>
        </div>
      </div> */}
      <Hero />
    </>
  );
}
