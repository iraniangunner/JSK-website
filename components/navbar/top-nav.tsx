"use client";
import { Typography } from "@material-tailwind/react";
import { BsFillPersonFill } from "react-icons/bs";
import Image from "next/image";
import { ConvertLanguageBtn } from "../convertLanguageBtn";
import { MenuItem } from "@material-tailwind/react";
import { FaShoppingCart } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import jsk from "../../public/images/jsk.png";

export default function TopNav() {
  return (
    <div className="hidden sticky top-0 lg:flex items-center justify-center gap-4 lg:gap-8 bg-white pt-[10px]">
      <div className="flex justify-center items-center">
        <Link
          href="/"
          className="block relative cursor-pointer font-medium
          before:content-[''] before:absolute before:right-[100%] 
          before:bottom-0 before:border-l-[50px] before:border-l-transparent 
          before:border-b-[65px] before:border-b-[#ffa500]
          after:content-[''] after:absolute after:left-[100%] 
          after:bottom-0 after:min-w-[100vw] after:h-[100%] after:bg-[#ffa500] xl:mr-auto"
        >
          <Image
            src={jsk}
            alt="JSK logo"
            width={200}
            className="bg-[#ffa500] h-[64px]"
          />
        </Link>
      </div>

      <div className="flex justify-center items-center gap-3 lg:mr-10">
        <div className="lg:hidden 2xl:flex items-center justify-center ml-4">
          <div className="border border-[#ffa500] text-[#ffa500] hover:bg-[#ffa500] hover:text-white transition-all rounded-full p-2 ml-3">
            <FaLocationDot size={20} />
          </div>
          <div>
            <p className="mb-2 font-bold">آدرس</p>
            <p className="text-sm">
              {" "}
              تهران، میدان ونک، خیابان ملاصدرا، خیابان شاد، کوچه باغسرا، پلاک ۱۳
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center ml-4">
          <div className="border border-[#ffa500] text-[#ffa500] hover:bg-[#ffa500] hover:text-white transition-all rounded-full p-2 ml-3">
            <FaPhoneFlip size={20} />
          </div>
          <div>
            <p className="mb-2 font-bold">تلفن</p>
            <p className="text-sm">021-88660368</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div
            className="border border-[#ffa500] text-[#ffa500] hover:bg-[#ffa500] 
          hover:text-white transition-all rounded-full p-2 ml-3"
          >
            <MdEmail size={20} />
          </div>
          <div>
            <p className="mb-2 font-bold">پست الکترونیکی</p>
            <p className="text-sm">info@jsk-co.com</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-1 lg:mr-10">
        <Link
          // as="a"
          href="/login"
          // variant="medium"
          color="gray"
          className="relative font-medium font-iransans text-blue-gray-500 login_btn"
        >
          <MenuItem
            className="lg:flex items-center justify-between text-md hover:bg-opacity-0 rounded-none border-l border-[#ccc] py-3 
            focus:bg-opacity-0 active:bg-opacity-0 text-[#737272] 
            hover:text-[#323131] hover:transition-all duration-[0.4s] delay-0 ease-in-out"
          >
            <BsFillPersonFill size={17} />
            <span className="mr-1">ورود</span>
          </MenuItem>
        </Link>
        <ConvertLanguageBtn />
        <Typography
          as="a"
          href="#"
          // variant="medium"
          color="gray"
          className="relative font-medium font-iransans text-blue-gray-500"
        >
          <MenuItem
            className={`lg:flex items-center justify-between text-md hover:bg-opacity-0 rounded-none
            focus:bg-opacity-0 active:bg-opacity-0 text-[#737272] 
            hover:text-[#323131] hover:transition-all duration-[0.4s] delay-0 ease-in-out`}
          >
            <FaShoppingCart size={17} />
          </MenuItem>
        </Typography>
      </div>
    </div>
  );
}
