"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Navbar,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
} from "@material-tailwind/react";
import MenuModal from "./menuModal";
import { AnimatePresence } from "framer-motion";
import { ChevronDownIcon, Bars2Icon } from "@heroicons/react/24/solid";
import jsk from "../../../public/images/jsk.png";
import { useBrowserWidth } from "@/hooks/useBrowserWidth";

const strings = [
  { linkTitle: "صفحه اصلی", linkAddress: "/" },
  {
    linkTitle: "خدمات",
    subLinks: [
      {
        title: "بازرگانی و تامین اقلام پروژه",
        linkAddress: "/services/commerce",
      },
      {
        title: "بهره برداری پروژه های صنعتی و معدنی",
        linkAddress: "/services/operation",
      },
      {
        title: "مدیریت پروژه های صنعتی و معدنی",
        linkAddress: "/services/management",
      },
    ],
  },

  { linkTitle: "گواهینامه ها و جوایز", linkAddress: "/certifications" },
  { linkTitle: "پروژه ها", linkAddress: "/projects" },
  { linkTitle: "مناقصات", linkAddress: "/tenders" },

  { linkTitle: "درباره ما", linkAddress: "/about" },
  { linkTitle: "همکاری با ما", linkAddress: "/hiring" },
  { linkTitle: "تماس با ما", linkAddress: "/contact" },
];

export function ComplexNavbar({ isScroll }: { isScroll: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [browserWidth] = useBrowserWidth();

  const closeNav = () => setIsNavOpen(false);
  const openNav = () => setIsNavOpen(true);

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
    if (browserWidth >= 992) {
      closeNav();
      document.body.style.overflow = "visible";
    }
  }, [browserWidth]);

  return (
    <Navbar className="mx-auto max-w-screen-3xl shadow-none rounded-none px-2 lg:px-8 py-0 lg:pl-6">
      <div className="relative mx-auto flex items-center justify-center xl:gap-10 text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          className="block lg:hidden cursor-pointer py-1.5 font-medium ml-auto"
        >
          <Image src={jsk} alt="JSK logo" width={200} height={24} />
        </Typography>
        {isScroll ? (
          <Link href="/" className="cursor-pointer font-medium hidden lg:block">
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
          after:bottom-[-3px] after:h-[3px] after:bg-[#ffa502]"
        >
          <ul className="mt-2 mb-4 py-2 flex flex-col gap-2 2xl:gap-6 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
            {strings.map((item, index) =>
              item.subLinks ? (
                <div key={item.linkTitle}>
                  <Menu
                    allowHover
                    open={isMenuOpen}
                    handler={setIsMenuOpen}
                    offset={{ mainAxis: 10 }}
                    animate={{
                      mount: { y: 0 },
                      unmount: { y: 25 },
                    }}
                  >
                    <MenuHandler>
                      <Typography
                        as="div"
                        className="font-normal focus-visible:outline-none text-sm 2xl:text-[16px]"
                      >
                        <MenuItem
                          className={`hidden items-center gap-2 font-medium py-3 text-gray-900 ${
                            isMenuOpen && isScroll ? "text-[#ffa500]" : ""
                          } 
               ${isMenuOpen && !isScroll ? "bg-[#fff]" : ""}  ${
                            isScroll
                              ? "hover:text-[#ffa500] hover:bg-opacity-0"
                              : "hover:bg-[#fff] hover:transition-all duration-[0.4s] delay-0 ease-in-out"
                          } lg:flex lg:rounded-none focus:bg-opacity-0 active:bg-opacity-0`}
                        >
                          {item.linkTitle}
                          <ChevronDownIcon
                            strokeWidth={2}
                            className={`h-3 w-3 transition-transform ${
                              isMenuOpen ? "rotate-180" : ""
                            }`}
                          />
                        </MenuItem>
                      </Typography>
                    </MenuHandler>
                    <MenuList className="hidden w-[18rem] rounded-none gap-3 overflow-visible py-0 px-0 lg:grid grid-cols-3">
                      <ul className="col-span-3 flex w-full flex-col group-hover:text-[#ffa500] focus-visible:outline-none">
                        {item.subLinks.map((item) => (
                          <Link href={item.linkAddress} key={item.title}>
                            <MenuItem className="rounded-none px-0 py-0">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="px-3 py-3 hover:text-white hover:bg-[#ffa500] transition-all duration-[0.4s]"
                              >
                                {item.title}
                              </Typography>
                            </MenuItem>
                          </Link>
                        ))}
                      </ul>
                    </MenuList>
                  </Menu>
                  <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
                    {item.linkTitle}
                  </MenuItem>
                  <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
                    {item.subLinks.map((item) => (
                      <Link href={item.linkAddress} key={item.title}>
                        <MenuItem className="rounded-none px-0 py-0">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="px-3 py-3 hover:text-white hover:bg-[#ffa500] transition-all duration-[0.4s]"
                          >
                            {item.title}
                          </Typography>
                        </MenuItem>
                      </Link>
                    ))}
                  </ul>
                </div>
              ) : item.linkAddress === "/contact" ? (
                <Link
                  href={item.linkAddress}
                  className="contact font-bold relative flex items-center gap-2 rounded-none py-3 px-3
        overflow-hidden text-sm 2xl:text-[16px] transition-all duration-[0.5s] text-[#fff] hover:text-[#ffa500] h-full z-[1]"
                >
                  {item.linkTitle}
                </Link>
              ) : (
                <Link
                  key={item.linkTitle}
                  href={
                    item.linkAddress === "/tenders" ||
                    item.linkAddress === "/hiring"
                      ? ""
                      : item.linkAddress
                  }
                  className="relative font-medium text-sm 2xl:text-[16px] text-blue-gray-500"
                >
                  <MenuItem
                    className={`flex text-gray-900 items-center gap-2 rounded-none h-full py-3 ${
                      isScroll
                        ? "hover:text-[#ffa500] hover:bg-opacity-0"
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
        {isNavOpen && <MenuModal modalOpen={openNav} handleClose={closeNav} />}
      </AnimatePresence>
    </Navbar>
  );
}
