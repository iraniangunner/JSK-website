import { useState } from "react";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export function ConvertLanguageBtn() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Menu className="hidden lg:flex" open={openMenu} handler={setOpenMenu}>
      <MenuHandler>
        <Button className="flex justify-between items-center text-[#737272] hover:text-[#323131] text-md font-iransans rounded-none
         gap-1 px-3 border-l border-[#ccc] bg-transparent shadow-none hover:shadow-none font-medium">
          <span className="">فارسی</span>
          <ChevronDownIcon
                strokeWidth={2}
                fontSize={20}
                className={`h-3 w-3 transition-transform ${
                  openMenu ? "rotate-180" : ""
                }`}
              />
        </Button>
      </MenuHandler>
      <MenuList>
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <MenuItem>Menu Item 3</MenuItem>
      </MenuList>
    </Menu>
  );
}
