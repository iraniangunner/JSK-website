"use client";
import React from "react";
import Image from "next/image";
import { BsFillPersonFill } from "react-icons/bs";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
  Collapse,
} from "@material-tailwind/react";

import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";
import { ConvertLanguageBtn } from "./convertLanguageBtn";

// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

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
      <MenuItem className=" rounded-none px-0 py-0">
        <Typography
          variant="small"
          color="blue-gray"
          className="font-iransans px-3 py-3 hover:text-white hover:bg-[#ffa500] transition-all duration-[0.4s]"
        >
          {title}
        </Typography>
        {/* <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography> */}
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
              className={`hidden items-center gap-2 font-medium font-iransans py-3 text-gray-900  ${
                isMenuOpen && navIsScroll ? "text-[#ffa500]" : ""
              } 
               ${isMenuOpen && !navIsScroll ? "bg-[#fff]" : ""}  ${
                navIsScroll
                  ? "hover:text-[#ffa500] hover:bg-opacity-0"
                  : "hover:bg-[#fff] hover:transition-all duration-[0.4s] delay-0 ease-in-out"
              } lg:flex lg:rounded-none  focus:bg-opacity-0 active:bg-opacity-0`}
            >
              {/* <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "} */}
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
          {/* <Card
            color="blue"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
          </Card> */}
          <ul className="col-span-3 flex w-full flex-col  group-hover:text-[#ffa500] focus-visible:outline-none">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 font-medium font-iransans text-blue-gray-900 lg:hidden">
        {/* <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "} */}
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
    // icon: UserCircleIcon,
  },
  {
    label: "پروژه ها",
    // icon: CubeTransparentIcon,
  },
  {
    label: "مناقصات",
    // icon: CodeBracketSquareIcon,
  },
  {
    label: "درباره ما",
    // icon: CubeTransparentIcon,
  },
  // {
  //   label: "تماس با ما",
  //   // icon: CodeBracketSquareIcon,
  // },
];

function NavList({ navIsScroll }) {
  return (
    <ul className="mt-2 mb-4 py-2 flex flex-col gap-2 lg:gap-8 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <Typography
        // key={label}
        as="a"
        href="#"
        variant="medium"
        color="gray"
        className="relative font-medium font-iransans text-blue-gray-500"
      >
        <MenuItem
          className={`flex text-gray-900 items-center gap-2 rounded-none h-full py-3 ${
            navIsScroll
              ? "hover:text-[#ffa500] hover:bg-opacity-0"
              : "hover:bg-[#fff] hover:transition-all duration-[0.4s] delay-0 ease-in-out"
          } focus:bg-opacity-0 active:bg-opacity-0`}
        >
          {/* {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "} */}
          <div>صفحه اصلی</div>
        </MenuItem>
      </Typography>

      <NavListMenu navIsScroll={navIsScroll} />
      {navListItems.map(({ label, icon }, key) => (
        <Typography
          key={label}
          as="a"
          href="#"
          variant="medium"
          color="gray"
          className="relative font-medium font-iransans text-blue-gray-500 "
        >
          <MenuItem
            className={`flex text-gray-900 items-center gap-2 rounded-none h-full py-3 ${
              navIsScroll
                ? "hover:text-[#ffa500] hover:bg-opacity-0"
                : "hover:bg-[#fff] hover:transition-all duration-[0.4s] delay-0 ease-in-out"
            }  focus:bg-opacity-0 active:bg-opacity-0`}
          >
            {/* {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "} */}
            <div> {label}</div>
          </MenuItem>
        </Typography>
      ))}
      <Typography
        // key={label}
        as="a"
        href="#"
        variant="medium"
        // color="gray"
        className="font-medium font-iransans"
      >
        <MenuItem
          className="contact font-bold relative flex items-center gap-2 rounded-none overflow-hidden text-md transition-all duration-[0.4s] text-[#fff] hover:text-[#ffa500] h-full py-3 z-[1]"
        >

          {/* <div className="first"> */}
          تماس با ما
          {/* </div> */}
          {/* {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "} */}
          {/* <div className="last"> */}
        
          {/* </div> */}
          {/* <span className="contact absolute w-0 h-0 block rounded-none translate-x-[50%] translate-y-[40%] group-hover:w-[200%] group-hover:h-[500px] group-hover:bg-[#000] group-hover:z-[-1]"></span> */}
        </MenuItem>
      </Typography>
      {/* <Button
        size="md"
        variant="text"
        className="lg:hidden flex items-center justify-between text-md text-[#626161] 
        hover:bg-[#fff] hover:text-black hover:transition-all duration-[0.4s] delay-0 ease-in-out"
      >
        <BsFillPersonFill size={20} />
        <span className="mr-1">ورود</span>
      </Button> */}
      <Typography
        as="a"
        href="#"
        variant="medium"
        color="gray"
        className="relative font-medium font-iransans"
      >
        <MenuItem
          className={`lg:hidden flex items-center justify-between text-md text-[#626161] rounded-none
          hover:bg-[#fff] hover:text-black hover:transition-all duration-[0.4s] delay-0 ease-in-out`}
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
      <div className="relative mx-auto flex items-center justify-center xl:gap-16 text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="block lg:hidden cursor-pointer py-1.5 font-medium ml-auto"
        >
          <Image src="./jsk.svg" alt="JSK Logo" width={200} height={24} />
        </Typography>
        {isScroll ? (
          // <Typography
          //   as="a"
          //   href="#"
          //   className="mr-4 cursor-pointer py-1.5 font-medium ml-auto hidden lg:block"
          // >
          //   <Image src="./jsk.svg" alt="JSK Logo" width={200} height={24} />
          // </Typography>
          <></>
        ) : (
          // <></>
          <></>
        )}
        <div
          className={`hidden lg:block relative after:content-[''] after:absolute after:w-full after:left-0 after:bottom-[-3px] after:h-[3px] after:bg-[#ffa502]`}
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
        {/* 
        {isScroll ? (
          <div className="flex justify-center items-center gap-4">
            <Typography
              as="a"
              href="#"
              variant="medium"
              color="gray"
              className="relative font-medium font-iransans text-blue-gray-500"
            >
              <MenuItem
                className={`n lg:flex items-center justify-between text-md text-[#626161] border-l rounded-none border-[#ccc]
                hover:text-black hover:transition-all duration-[0.4s] delay-0 ease-in-out hover:bg-transparent focus:bg-transparent active:bg-transparent`}
              >
                // {/* {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "} 
                <BsFillPersonFill size={20} />
                <span className="mr-1">ورود</span>
              </MenuItem>
            </Typography>
            <ConvertLanguageBtn />
          </div>
          <></>
        ) : (
          <></>
        )} */}

        {/* <Button
          size="md"
          variant="text"
          className="hidden lg:mr-auto lg:flex items-center justify-between text-md"
        >
          <span>ورود</span>
          <HiOutlineLogin size={25} />
        </Button> */}
        {/* <ProfileMenu /> */}
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll ">
        <NavList />
      </Collapse>
    </Navbar>
  );
}
