import { Flex, Image } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";
import RightContent from "../RightContent";
import SearchInput from "../SearchInput";
// import  RedditLogo from "../../../public/images/redditFace.svg"
type NavbarProps = {} & PropsWithChildren;

const Navbar: React.FC<NavbarProps> = () => (
    <Flex bg={"white"} height="44px" padding={"6px 12px"}>
        <Flex align={"center"}>
            <Image
                src={"/images/redditFace.svg"}
                alt={"reddit Logo"}
                height="30px" 
                mr={{
                    base:"2",
                    md:"0"
                }}
                />
                
            <Image
                src="/images/redditText.svg"
                height={"46px"}
                display={{
                    base: "none",
                    md: "unset",
                }} />
        </Flex>
        <SearchInput />
        <RightContent />
        {/* <Directory /> */}
    </Flex>
);
export default Navbar;
