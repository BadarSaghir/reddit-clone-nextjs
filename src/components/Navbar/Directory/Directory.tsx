import { ChevronDownIcon } from "@chakra-ui/icons";
import { MenuButton, Flex, Icon, Text, Menu, MenuList } from "@chakra-ui/react";
import { User } from "firebase/auth";
import React, { PropsWithChildren } from "react";
import { TiHome } from "react-icons/ti";
import { IoSparkles } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import Communities from "./Communities";

type DirectoryProps = {
  user: User;
} & PropsWithChildren;

const Directory: React.FC<DirectoryProps> = ({ user }) => {
  return user ? (
    <Menu>
      <MenuButton
        cursor={"pointer"}
        borderRadius={4}
        mr={2}
        ml={2}
        padding="0px 6px"
        _hover={{ outlineColor: "gray.200" }}
      >
        <Flex align={"center"} justify={"center"}>
          <Flex align={"center"} justify={"center"}>
            <Icon fontSize={24} mr={{ base: 1, md: 2 }} as={TiHome} />
            <Flex display={{ base: "none", lg: "flex" }} justify={"center"}>
              <Text fontWeight={600} mt={0} fontSize={14}>
                Home
              </Text>
            </Flex>
          </Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList>
        {/* {Communities list} */}
        <Communities />
      </MenuList>
    </Menu>
  ) : (
    <></>
  );
};
export default Directory;
