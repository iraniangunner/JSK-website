"use client";
import React from "react";
import Image from "next/image";
import { HiOutlineLogin } from "react-icons/hi";
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

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(({ title, description }) => (
    <a href="#" key={title}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1 font-iransans">
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
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 font-medium font-iransans text-blue-gray-900 lg:flex lg:rounded-full hover:bg-opacity-0 focus:bg-opacity-0 active:bg-opacity-0">
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
        <MenuList className="hidden w-[24rem] grid-cols-3 gap-3 overflow-visible lg:grid">
          {/* <Card
            color="blue"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
          </Card> */}
          <ul className="col-span-3 flex w-full flex-col gap-1">
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
  {
    label: "تماس با ما",
    // icon: CodeBracketSquareIcon,
  },
];

function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:gap-6 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
      {navListItems.map(({ label, icon }, key) => (
        <Typography
          key={label}
          as="a"
          href="#"
          variant="small"
          color="gray"
          className="relative font-medium font-iransans text-blue-gray-500 after:hidden after:lg:block after:content-[''] after:border-b-[3px] after:border-b-[#ffa500] after:scale-0 after:transition-all hover:after:scale-100 after:duration-200"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full h-full py-6 hover:bg-opacity-0 focus:bg-opacity-0 active:bg-opacity-0">
            {/* {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "} */}
            <div className="text-gray-900"> {label}</div>
          </MenuItem>
        </Typography>
      ))}
      <Button
        size="md"
        variant="text"
        className="lg:hidden flex items-center justify-between text-md"
      >
        <span>ورود</span>
        <HiOutlineLogin size={25} />
      </Button>
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
    <Navbar className="mx-auto max-w-screen-3xl rounded-none py-0 lg:pl-6 font-iransans">
      <div className="relative mx-auto flex items-center justify-center text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="block lg:hidden mr-4 cursor-pointer py-1.5 font-medium ml-auto"
        >
          <Image src="./jsk.svg" alt="JSK Logo" width={200} height={24} />
        </Typography>
        {isScroll ? (
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium ml-auto hidden lg:block"
          >
            <Image src="./jsk.svg" alt="JSK Logo" width={200} height={24} />
          </Typography>
        ) : (
          <></>
        )}
        <div className={`hidden lg:block ${isScroll ? "ml-auto" : ""}`}>
          <NavList />
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

        {isScroll ? (
          <Button
            size="md"
            variant="text"
            className="hidden lg:mr-auto lg:flex items-center justify-between text-md"
          >
            <span>ورود</span>
            <HiOutlineLogin size={25} />
          </Button>
        ) : (
          <></>
        )}

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
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
}
