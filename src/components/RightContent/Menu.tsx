
import { Flex,Icon,Menu as NavMenu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { User } from "firebase/auth";
import React from "react";
import {FaRedditSquare} from "react-icons/fa"
type MenuProps = {
user:User|null
};

const Menu: React.FC<MenuProps> = ({user}) => {
  return (
    <NavMenu>
      <MenuButton>
        {user?<Flex><Icon as={FaRedditSquare} fontSize={24}color={"gray.300"} ml={1.5} mr={1.5}/></Flex>:<div>No User</div>}
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
