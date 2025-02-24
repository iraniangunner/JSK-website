import Image from "next/image";
import { FaPhoneFlip } from "react-icons/fa6";
import { Link } from "@/i18n/routing";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import jsk from "../../../public/images/jsk.png";
import LocalSwitcher from "../language-switcher";
import { getLocale, getTranslations } from "next-intl/server";

export default async function TopNav() {
  const locale = await getLocale();
  const t = await getTranslations();

  return (
    <div className="hidden top-0 lg:flex items-center justify-center gap-4 lg:gap-8 bg-white pt-[10px]">
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

      <div
        className={`flex justify-center items-center gap-3 ${
          locale === "fa" ? "lg:mr-10" : "lg:ml-10"
        }`}
      >
        <div
          className={`lg:hidden 2xl:flex items-center justify-center ${
            locale === "fa" ? "ml-4" : "mr-4"
          }`}
        >
          <a
            href={process.env.GOOGLE_MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`border border-[#ffa500] text-[#ffa500] hover:bg-[#ffa500] hover:text-white transition-all rounded-full p-2 ${
              locale === "fa" ? "ml-3" : "mr-3"
            }`}
          >
            <FaLocationDot size={20} />
          </a>
          <div className="text-black">
            <p className="mb-2 font-bold text-black">
              {t.raw("Header.Address.title")}
            </p>
            <p className="text-sm">{t.raw("Header.Address.description")}</p>
          </div>
        </div>
        <div
          className={`flex justify-center items-center ${
            locale === "fa" ? "ml-4" : "mr-4"
          }`}
        >
          <a
            href="tel:02188660368"
            className={`border border-[#ffa500] text-[#ffa500] hover:bg-[#ffa500] hover:text-white transition-all rounded-full p-2 ${
              locale === "fa" ? "ml-3" : "mr-3"
            }`}
          >
            <FaPhoneFlip size={20} />
          </a>
          <div>
            <p className="mb-2 font-bold text-black">
              {t.raw("Header.Phone.title")}
            </p>
            <p className="text-sm text-black">021-88660368</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <a
            href="mailto:info@jsk-co.com"
            className={`border border-[#ffa500] text-[#ffa500] hover:bg-[#ffa500] 
          hover:text-white transition-all rounded-full p-2 ${
            locale === "fa" ? "ml-3" : "mr-3"
          }`}
          >
            <MdEmail size={20} />
          </a>
          <div>
            <p className="mb-2 font-bold text-black">
              {t.raw("Header.Email.title")}
            </p>
            <p className="text-sm text-black">info@jsk-co.com</p>
          </div>
        </div>
      </div>
      <div
        className={`flex justify-center items-center gap-1 ${
          locale === "fa" ? "lg:mr-10" : "lg:ml-10"
        }`}
      >
        <LocalSwitcher />
      </div>
    </div>
  );
}
