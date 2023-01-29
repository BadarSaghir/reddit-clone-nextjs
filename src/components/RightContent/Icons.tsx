import { Flex, Icon } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';
import {IoFilterCircleOutline,IoNotificationsOutline,IoVideocamOutline} from "react-icons/io5"
import {BsArrowUpRightCircle,BsChatDots} from "react-icons/bs"
import {GrAdd} from "react-icons/gr"

type IconsProps = PropsWithChildren;
const icons =[BsArrowUpRightCircle,IoFilterCircleOutline,IoVideocamOutline]
const Icons:React.FC<IconsProps> = () => {
    
    return <Flex>
        <Flex display={{base:"none",md:"flex"}} align="center" borderRight={"1px solid"} borderColor="gray.200">
        {icons.map((icon,idx)=><Flex mr={1.5} ml={1.5} key={idx} padding={1} fontSize={idx==0?20:23} cursor={"pointer"} borderRadius={4} _hover={{bg:"gray.200"}}><Icon as={icon}/></Flex>)}    
        </Flex>
    </Flex>
}
export default Icons;