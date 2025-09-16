"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Navbar, MenuItem, IconButton } from "@material-tailwind/react";
import MenuModal from "./navModal";
import { AnimatePresence } from "framer-motion";
import { Bars2Icon } from "@heroicons/react/24/solid";
import jsk from "../../../public/images/jsk1.png";
import { useBrowserWidth } from "@/hooks/useBrowserWidth";
import { useScroll } from "@/hooks/useScroll";
import { DropdownMenu } from "./dropdownMenu";
import { getMenuItems } from "@/utils/client/menu-items";
import { useTranslations, useLocale } from "next-intl";
import LanguageSwitcher from "../language-switcher";

export function ScrollNav() {
  const [isScrolling] = useScroll(70);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [browserWidth] = useBrowserWidth();

  const closeNav = () => setIsNavOpen(false);
  const openNav = () => setIsNavOpen(true);

  const t = useTranslations();
  const menuItems = getMenuItems(t);
  const locale = useLocale();

  useEffect(() => {
    if (isNavOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "visible";
    }

    return () => {
      document.documentElement.style.overflow = "visible";
    };
  }, [isNavOpen]);

  useEffect(() => {
    if (browserWidth) {
      if (browserWidth >= 992) {
        closeNav();
        document.body.style.overflow = "visible";
      }
    }
  }, [browserWidth]);

  return (
    <div
      className={`z-10 w-full ${
        isScrolling
          ? "fixed flex justify-between animate-slideIn main_nav"
          : "top-[72px] flex justify-between bg-[#737373]"
      }`}
    >
      <Navbar className="mx-auto max-w-screen-3xl shadow-none rounded-none px-2 lg:px-8 py-0 lg:pl-6">
        <div className="relative mx-auto flex items-center justify-center xl:gap-10 text-blue-gray-900">
          <Link
            href="/"
            className={`block lg:hidden cursor-pointer py-1.5 font-medium ${
              locale === "fa" ? "ml-auto" : "mr-auto"
            }`}
          >
            <Image
              src={jsk}
              alt="JSK-logo"
              width={120}
              height={24}
              className="w-full h-full"
            />
          </Link>
          {isScrolling ? (
            <Link
              href="/"
              className="cursor-pointer font-medium hidden lg:block lg:h-[68px] py-2"
            >
              <Image
                src={jsk}
                alt="JSK logo"
                width={200}
                height={24}
                className="w-full h-full"
              />
            </Link>
          ) : (
            <></>
          )}
          <div
            className="hidden lg:block relative after:content-[''] after:absolute after:w-full after:left-0 
          after:bottom-[-3px] after:h-[3px] after:bg-[#EC9123]"
          >
            <ul className="mt-2 mb-4 py-2 flex flex-col gap-2 2xl:gap-6 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
              {menuItems.map((item) =>
                item.subLinks ? (
                  <div key={item.linkTitle}>
                    <DropdownMenu isScroll={isScrolling} dropdownItem={item} />
                  </div>
                ) : item.linkAddress === "/contact" ? (
                  <Link
                    key={item.linkTitle}
                    href={item.linkAddress}
                    className="contact font-bold relative flex items-center gap-2 rounded-none py-3 px-3
        overflow-hidden text-sm 2xl:text-[16px] transition-all duration-[0.5s] text-[#fff] hover:text-[#EC9123] h-full z-[1]"
                  >
                    {item.linkTitle}
                  </Link>
                ) : (
                  <Link
                    key={item.linkTitle}
                    href={item.linkAddress}
                    className="relative font-medium text-sm 2xl:text-[16px] text-blue-gray-500"
                  >
                    <MenuItem
                      className={`flex text-gray-900 items-center gap-2 rounded-none h-full py-3 ${
                        isScrolling
                          ? "hover:text-[#EC9123] hover:bg-opacity-0"
                          : "hover:bg-[#fff] hover:transition-all duration-[0.4s] delay-0 ease-in-out"
                      }  focus:bg-opacity-0 active:bg-opacity-0`}
                    >
                      <div> {item.linkTitle}</div>
                    </MenuItem>
                  </Link>
                )
              )}
            </ul>
          </div>
          <div className={`${locale === "fa" ? "ml-2" : "mr-2"} lg:hidden`}>
            <LanguageSwitcher />
          </div>
          <IconButton
            size="sm"
            color="blue-gray"
            variant="text"
            onClick={openNav}
            className="mr-2 lg:hidden"
          >
            <Bars2Icon className="h-6 w-6" />
          </IconButton>
        </div>

        {/* Responsive navbar */}
        <AnimatePresence
          initial={false}
          // exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {isNavOpen && (
            <MenuModal modalOpen={openNav} handleClose={closeNav} />
          )}
        </AnimatePresence>
      </Navbar>
    </div>
  );
}
