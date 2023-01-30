import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button,Menu as NavMenu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";

// type MenuProps = {

// };

const Menu: React.FC = () => {
  return (
    <NavMenu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Actions
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </NavMenu>
  );
};
export default Menu;
