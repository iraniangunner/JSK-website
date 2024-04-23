import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";
   
  export function ConvertLanguageBtn() {
    return (
      <Menu className="hidden lg:flex">
        <MenuHandler>
          <Button>Menu</Button>
        </MenuHandler>
        <MenuList>
          <MenuItem>Menu Item 1</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
          <MenuItem>Menu Item 3</MenuItem>
        </MenuList>
      </Menu>
    );
  }