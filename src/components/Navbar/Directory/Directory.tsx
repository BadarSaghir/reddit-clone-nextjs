import { ChevronDownIcon } from "@chakra-ui/icons";
import { MenuButton, Flex, Icon, Text, Menu, MenuList } from "@chakra-ui/react";
import { User } from "firebase/auth";
import React, { PropsWithChildren } from "react";
import { TiHome } from "react-icons/ti";
import { IoSparkles } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";

type DirectoryProps = {
  user: User;
} & PropsWithChildren;

const Directory: React.FC<DirectoryProps> = ({ user }) => {
  return (
   user? <Menu>
      <MenuButton
        cursor={"pointer"}
        padding="0px 6px"
        _hover={{ outlineColor: "gray.200" }}
      >
        <Flex align={"center"} justify={"center"}>
          <Flex align={"center"} justify={"center"}>
            <Icon fontSize={24} mr={{base:1,md:2}}  as={TiHome} />
            <Flex display={{base:"none", lg:"flex"}} justify={"center"}>

            <Text fontWeight={"600"} fontSize={"10pt"}>Home</Text>
            </Flex>
          </Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList>


      </MenuList>
    </Menu>:<></>
   );
};
export default Directory;
