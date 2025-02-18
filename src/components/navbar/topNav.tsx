"use client";
import Image from "next/image";
import { FaPhoneFlip } from "react-icons/fa6";
import { Link } from "@/i18n/routing";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import jsk from "../../../public/images/jsk.png";
import LocalSwitcher from "../local-switcher";
import { useLocale } from "next-intl";

export default function TopNav() {
  const locale = useLocale();
  return (
    <div className="hidden sticky top-0 lg:flex items-center justify-center gap-4 lg:gap-8 bg-white pt-[10px]">
      <div className="flex justify-center items-center">
        <Link
          href="/"
          className={`block relative cursor-pointer font-medium h-auto lg:h-[68px]
          before:content-[''] before:absolute ${
            locale === "fa" ? "before:right-[100%]" : "before:left-[100%]"
          } 
          before:bottom-0 ${
            locale === "fa"
              ? "before:border-l-[50px]"
              : "before:border-r-[50px]"
          }
            ${
              locale === "fa"
                ? "before:border-l-transparent"
                : "before:border-r-transparent"
            } 
          before:border-b-[68px] before:border-b-[#ffa500]
          after:content-[''] after:absolute ${
            locale === "fa" ? "after:left-[100%]" : "after:right-[100%]"
          } 
          after:bottom-0 after:min-w-[100vw] after:h-[100%] after:bg-[#ffa500] ${
            locale === "fa" ? "xl:mr-auto" : "xl:ml-auto"
          }`}
        >
          <Image
            src={jsk}
            alt="JSK logo"
            width={200}
            height={24}
            className="w-full h-full bg-[#ffa500]"
          />
        </Link>
      </div>

      <div className="flex justify-center items-center gap-3 lg:mr-10">
        <div className="lg:hidden 2xl:flex items-center justify-center ml-4">
          <a
            href={process.env.GOOGLE_MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#ffa500] text-[#ffa500] hover:bg-[#ffa500] hover:text-white transition-all rounded-full p-2 ml-3"
          >
            <FaLocationDot size={20} />
          </a>
          <div className="text-black">
            <p className="mb-2 font-bold text-black">آدرس</p>
            <p className="text-sm">
              {" "}
              تهران، میدان ونک، خیابان ملاصدرا، خیابان شاد، کوچه باغسرا، پلاک ۱۳
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center ml-4">
          <a
            href="tel:02188660368"
            className="border border-[#ffa500] text-[#ffa500] hover:bg-[#ffa500] hover:text-white transition-all rounded-full p-2 ml-3"
          >
            <FaPhoneFlip size={20} />
          </a>
          <div>
            <p className="mb-2 font-bold text-black">تلفن</p>
            <p className="text-sm text-black">021-88660368</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <a
            href="mailto:info@jsk-co.com"
            className="border border-[#ffa500] text-[#ffa500] hover:bg-[#ffa500] 
          hover:text-white transition-all rounded-full p-2 ml-3"
          >
            <MdEmail size={20} />
          </a>
          <div>
            <p className="mb-2 font-bold text-black">پست الکترونیکی</p>
            <p className="text-sm text-black">info@jsk-co.com</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-1 lg:mr-10">
        <LocalSwitcher />
      </div>
    </div>
  );
}
