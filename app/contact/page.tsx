import Hero from "@/components/hero";
import Link from "next/link";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <div
        className="relative bg-contact-pattern pt-[80px] lg:pt-[260px] 
        lg:pb-[10px] bg-[top_right] bg-no-repeat bg-fixed
        before:absolute before:content-[''] before:left-0 before:top-0
        before:w-full before:h-full before:opacity-0 before:z-[-1]"
      >
        {/* <h1>Hi every one</h1> */}
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

      <div className="flex flex-wrap justify-center items-center gap-4 pt-[50px] pb-[20px] lg:pt-[60px] lg:pb-[30px]">
        <div className="relative flex items-center py-[20px] px-[30px] shadow-lg overflow-hidden bg-white">
          <FaPhone />
          <div className="overflow-hidden">
            <h4 className="mb-[10px]">تلفن</h4>
            <p className="mb-0">
              +91 123 456 7890,
              <br /> +91 987 654 3210
            </p>
          </div>
        </div>
        <div className="relative flex items-center py-[20px] px-[30px] shadow-lg overflow-hidden bg-white">
          <FaPhone />
          <div className="overflow-hidden">
            <h4 className="mb-[10px]">تلفن</h4>
            <p className="mb-0">
              +91 123 456 7890,
              <br /> +91 987 654 3210
            </p>
          </div>
        </div>
        <div className="relative flex items-center py-[20px] px-[30px] shadow-lg overflow-hidden bg-white">
          <FaPhone />
          <div className="overflow-hidden">
            <h4 className="mb-[10px]">تلفن</h4>
            <p className="mb-0">
              +91 123 456 7890,
              <br /> +91 987 654 3210
            </p>
          </div>
        </div>
      </div>
      <Hero />
    </>
  );
}
