"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFillPersonFill } from "react-icons/bs";
import {
  Navbar,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
  Collapse,
} from "@material-tailwind/react";

import { ChevronDownIcon, Bars2Icon } from "@heroicons/react/24/solid";
import jsk from "../public/images/jsk .png";

// nav list menu
const navListMenuItems = [
  {
    title: "بازرگانی و تامین اقلام پروژه",
    description:
      "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
  },
  {
    title: "بهره برداری پروژه های صنعتی و معدنی",
    description:
      "Learn how to use @material-tailwind/react, packed with rich components for React.",
  },
  {
    title: "مدیریت پروژه های صنعتی و معدنی",
    description:
      "A complete set of UI Elements for building faster websites in less time.",
  },
];

function NavListMenu({ navIsScroll }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(({ title, description }) => (
    <a href="#" key={title}>
      <MenuItem className="rounded-none px-0 py-0">
        <Typography
          variant="small"
          color="blue-gray"
          className="font-iransans px-3 py-3 hover:text-white hover:bg-[#ffa500] transition-all duration-[0.4s]"
        >
          {title}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
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
            as="a"
            href="#"
            variant="medium"
            className="font-normal focus-visible:outline-none"
          >
            <MenuItem
              className={`hidden items-center gap-2 font-medium font-iransans py-3 text-gray-900 ${
                isMenuOpen && navIsScroll ? "text-[#ffa500]" : ""
              } 
               ${isMenuOpen && !navIsScroll ? "bg-[#fff]" : ""}  ${
                navIsScroll
                  ? "hover:text-[#ffa500] hover:bg-opacity-0"
                  : "hover:bg-[#fff] hover:transition-all duration-[0.4s] delay-0 ease-in-out"
              } lg:flex lg:rounded-none focus:bg-opacity-0 active:bg-opacity-0`}
            >
              خدمات{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[18rem] rounded-none gap-3 overflow-visible py-0 px-0 lg:grid grid-cols-3 ">
          <ul className="col-span-3 flex w-full flex-col  group-hover:text-[#ffa500] focus-visible:outline-none">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 font-medium font-iransans text-blue-gray-900 lg:hidden">
        خدمات{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}

// nav list component
const navListItems = [
  {
    label: "گواهینامه ها و جوایز",
    link: "/certifications",
  },
  {
    label: "پروژه ها",
    link: "/projects",
  },
  {
    label: "مناقصات",
    link: "/tender",
  },
  {
    label: "درباره ما",
    link: "/about-us",
  },
];

function NavList({ navIsScroll }) {
  return (
    <ul className="mt-2 mb-4 py-2 flex flex-col gap-2 lg:gap-8 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <Link
        href="/"
        className="relative font-medium font-iransans text-blue-gray-500"
      >
        <MenuItem
          className={`flex text-gray-900 items-center gap-2 rounded-none h-full py-3 ${
            navIsScroll
              ? "hover:text-[#ffa500] hover:bg-opacity-0"
              : "hover:bg-[#fff] hover:transition-all duration-[0.4s] delay-0 ease-in-out"
          } focus:bg-opacity-0 active:bg-opacity-0`}
        >
          <div>صفحه اصلی</div>
        </MenuItem>
      </Link>

      <NavListMenu navIsScroll={navIsScroll} />
      {navListItems.map(({ label, icon, link }, key) => (
        <Link
          key={label}
          href={link}
          className="relative font-medium font-iransans text-blue-gray-500 "
        >
          <MenuItem
            className={`flex text-gray-900 items-center gap-2 rounded-none h-full py-3 ${
              navIsScroll
                ? "hover:text-[#ffa500] hover:bg-opacity-0"
                : "hover:bg-[#fff] hover:transition-all duration-[0.4s] delay-0 ease-in-out"
            }  focus:bg-opacity-0 active:bg-opacity-0`}
          >
            <div> {label}</div>
          </MenuItem>
        </Link>
      ))}

      <Link
        href="/contact"
        className="contact font-bold relative flex items-center gap-2 rounded-none py-3 px-3
        overflow-hidden text-md transition-all duration-[0.5s] text-[#fff] hover:text-[#ffa500] h-full z-[1]"
      >
        {" "}
        تماس با ما
      </Link>

      <Typography
        as="a"
        href="#"
        variant="medium"
        color="gray"
        className="relative font-medium font-iransans"
      >
        <MenuItem
          className="lg:hidden flex items-center justify-between text-md text-[#626161] rounded-none
          hover:bg-[#fff] hover:text-black hover:transition-all duration-[0.4s] delay-0 ease-in-out"
        >
          <BsFillPersonFill size={20} />
          <span className="mr-1">ورود</span>
        </MenuItem>
      </Typography>
    </ul>
  );
}

export function ComplexNavbar({ isScroll }) {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-3xl shadow-none rounded-none px-2 lg:px-8 py-0 lg:pl-6 font-iransans">
      <div className="relative mx-auto flex items-center justify-center xl:gap-20 text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="block lg:hidden cursor-pointer py-1.5 font-medium ml-auto"
        >
          <Image src={jsk} alt="JSK logo" width={200} height={24} />
        </Typography>
        {isScroll ? (
          <Typography
            as="a"
            href="#"
            className="cursor-pointer font-medium hidden lg:block"
          >
            <Image
              src={jsk}
              alt="JSK logo"
              width={200}
              height={24}
              className="w-full h-full"
            />
          </Typography>
        ) : (
          <></>
        )}
        <div
          className="hidden lg:block relative after:content-[''] after:absolute after:w-full after:left-0 
          after:bottom-[-3px] after:h-[3px] after:bg-[#ffa502]"
        >
          <NavList navIsScroll={isScroll} />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>

        {/* <ProfileMenu /> */}
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll ">
        <NavList />
      </Collapse>
    </Navbar>
  );
}
