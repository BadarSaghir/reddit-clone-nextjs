import { Flex, Image } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";
import SearchInput from "../SearchInput";
// import  RedditLogo from "../../../public/images/redditFace.svg"
type NavbarProps = {} & PropsWithChildren;

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Flex bg={"white"} height="44px" padding={"6px 12px"}>
      <Flex align={"center"}>
        <Image
          src={"/images/redditFace.svg"}
          alt={"reddit Logo"}
          height="30px"
        />
        <Image
          src="/images/redditText.svg"
          height={"46px"}
          display={{
            base: "none",
            md: "unset",
          }}
        />
      </Flex>
      {/* <Directory /> */}
      <SearchInput />
      {/* <RightContent /> */}
    </Flex>
  );
};
export default Navbar;
