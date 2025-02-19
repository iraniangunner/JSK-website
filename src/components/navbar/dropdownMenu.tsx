"use client";
import { useState } from "react";
import {
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { Link } from "@/i18n/routing";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { DropdownItemType } from "@/types/dropdownItemTypes";
import { useLocale } from "next-intl";

interface DropdownMenuProps {
  isScroll: boolean;
  dropdownItem: DropdownItemType;
}
export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  isScroll,
  dropdownItem,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const locale = useLocale();
  return (
    <>
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
              style={{
                fontFamily: `${
                  locale === "fa"
                    ? "var(--font-yekanbakh)"
                    : "var(--font-inter)"
                }`,
              }}
              className={`hidden items-center gap-2 font-medium py-3 text-gray-900 ${
                isMenuOpen && isScroll ? "text-[#ffa500]" : ""
              } 
               ${isMenuOpen && !isScroll ? "bg-[#fff]" : ""}  ${
                isScroll
                  ? "hover:text-[#ffa500] hover:bg-opacity-0"
                  : "hover:bg-[#fff] hover:transition-all duration-[0.4s] delay-0 ease-in-out"
              } lg:flex lg:rounded-none focus:bg-opacity-0 active:bg-opacity-0`}
            >
              {dropdownItem.linkTitle}
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
            {dropdownItem.subLinks.map((item) => (
              <Link href={item.linkAddress} key={item.title}>
                <MenuItem className="rounded-none px-0 py-0">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="px-3 py-3 hover:text-white hover:bg-[#ffa500] transition-all duration-[0.4s]"
                    style={{
                      fontFamily: `${
                        locale === "fa"
                          ? "var(--font-yekanbakh)"
                          : "var(--font-inter)"
                      }`,
                    }}
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
        {dropdownItem.linkTitle}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {dropdownItem.subLinks.map((item) => (
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
    </>
  );
};
