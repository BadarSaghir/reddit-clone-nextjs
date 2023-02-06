import { Box, Button, Flex, Icon, Image,Text } from "@chakra-ui/react";
import React, { PropsWithChildren, useState } from "react";
import { FaReddit } from "react-icons/fa";
import { CommunityModel } from "../../constant";

type HeaderProps = {
    communityData:CommunityModel
};

const Header: React.FC<HeaderProps> = ({communityData}) => {
    const is_joined=false
  return (
    <Flex direction={"column"} width="100%" height={"146px"}>
      <Box height={"50%"} bg="blue.400" />
      <Flex justify={"center"} bg="white" flexGrow={1}>
    <Flex width={"95%"} maxWidth="860px">
         
         {communityData.imageUrl?<Image src={communityData.imageUrl}/>:(

          <Icon as={FaReddit} fontSize="64px" position={"relative"} top={-3} color="blue.500" padding={"0px"} border={"4px solid #ffffff"} borderRadius="50%"/>
         )}
         <Flex padding={"10px 16px"}>
            <Flex  direction={"column"} mr={6}>
            <Text fontWeight={800} fontSize="16pt">{communityData.id}</Text>
            <Text fontWeight={600} fontSize="10pt" color={"gray.400"}>r/{communityData.id}</Text>

            </Flex>
            <Button variant={is_joined?"outline":"solid"} height="30px" pr={6} pl={6} onClick={(e)=>{e}}>{is_joined?"Joined":"Join"}</Button>
         </Flex>
        </Flex>


      </Flex>
    </Flex>
  );
};
export default Header;
