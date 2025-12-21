"use client";
import { Typography } from "@material-tailwind/react";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import jsk from "../../public/images/jsk_gray.png";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { getUsefulLinks } from "@/utils/client/useful-links";
import bgImage from "../../public/images/footer1.jpg";

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations();
  const links = getUsefulLinks(t);
  return (
    <footer className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-[-2]">
        <Image
          src={bgImage}
          alt="Footer background"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-[-1] bg-[#042038] opacity-90"
        aria-hidden="true"
      ></div>
      <div className="mx-auto w-full max-w-7xl px-8 z-[2] relative py-4 md:py-8 lg:py-12 xl:py-19">
        <div className="grid grid-cols-1 justify-between gap-4 lg:gap-8 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div className={`${locale === "fa" ? "ml-6" : "mr-6"} text-white`}>
            <Image
              src={jsk}
              alt="JSK logo"
              width={200}
              height={30}
              className="mb-4"
              // className={`select-none ${
              //   locale === "fa" ? "mr-[-20px]" : "ml-[-20px]"
              // }`}
            />

            <p className="sm:text-justify sm:leading-7 select-none text-[16px]">
              {t("Footer.text")}
            </p>
          </div>
          <div>
            <Typography
              variant="h5"
              color="white"
              style={{
                fontFamily: `${
                  locale === "fa"
                    ? "var(--font-yekanbakh)"
                    : "var(--font-inter)"
                }`,
              }}
              className="mb-5 text-[18px] font-bold relative 
                  
                  before:content-[''] before:absolute before:left-0 before:bottom-[-8px] before:h-[2px] before:w-full before:bg-[#EC9123]"
            >
              {locale === "fa" ? "لینک های مفید" : "Useful Links"}
            </Typography>
            {links.map(({ items }, index) => (
              <ul
                key={index}
                className="flex flex-col justify-between items-start gap-1"
                style={{
                  fontFamily: `${
                    locale === "fa"
                      ? "var(--font-yekanbakh)"
                      : "var(--font-inter)"
                  }`,
                }}
              >
                {items.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.link}
                      className={`py-2 w-full font-normal text-[#fff] flex items-center gap-2 hover:text-[#EC9123] ${
                        locale === "fa" ? "hover:mr-[10px]" : "hover:ml-[10px]"
                      } transition-all duration-[0.4s]`}
                    >
                      {locale === "fa" ? (
                        <MdKeyboardDoubleArrowLeft size={18} />
                      ) : (
                        <MdKeyboardDoubleArrowRight size={18} />
                      )}

                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="text-white flex flex-col gap-4">
            <Typography
              variant="h5"
              color="white"
              style={{
                fontFamily: `${
                  locale === "fa"
                    ? "var(--font-yekanbakh)"
                    : "var(--font-inter)"
                }`,
              }}
              className="mb-3 text-[18px] font-bold relative 
              before:content-[''] before:absolute before:left-0 before:bottom-[-10px] before:h-[2px] before:w-full before:bg-[#EC9123]"
            >
              {locale === "fa" ? "ارتباط با ما" : "Contact Us"}
            </Typography>
            <div>
              <h1 className="text-md mb-2">{t.raw("Header.Address.title")}:</h1>
              <p className="flex gap-4">
                <FaMapLocationDot color="#fff" size={20} />{" "}
                <span className="text-[15px]">
                  {t.raw("Header.Address.description")}
                </span>
              </p>
            </div>
            <div>
              <h1 className="text-md mb-2">{t.raw("Header.Phone.title")}:</h1>
              <p className="flex gap-4">
                <FaPhone size={14} />
                <span className="text-[15px]">021-88660368</span>
              </p>
              <p className="flex gap-4">
                <FaPhone size={14} />
                <span className="text-[15px]">021-88660628</span>
              </p>
            </div>
            <div>
              <h1 className="text-md mb-2">{t.raw("Header.Email.title")}:</h1>
              <p className="flex gap-4">
                <MdEmail color="#fff" size={20} />
                <span>info@jsk-co.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bar mt-12 px-6 w-full flex flex-col justify-center md:flex-row md:justify-around items-center border-t border-blue-gray-50 py-4 lg:py-6 relative">
        <Typography
          className="my-4 text-[17px] text-[#fff] md:mt-0 md:mb-0"
          style={{
            fontFamily: `${
              locale === "fa" ? "var(--font-yekanbakh)" : "var(--font-inter)"
            }`,
          }}
        >
          {t("Footer.description")}
        </Typography>
        <div className="flex gap-4 text-[#fff]">
         
          <Typography
            as="a"
            href="https://www.instagram.com/jsk.corp?igsh=N3o4a3R5N2tkYXNs&utm_source=qr"
            target="_blank"
            rel="noreferrer noopener"
            className="opacity-80 transition-opacity hover:opacity-100"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clip-rule="evenodd"
              />
            </svg>
          </Typography>
         
        </div>
      </div>
    </footer>
  );
}
