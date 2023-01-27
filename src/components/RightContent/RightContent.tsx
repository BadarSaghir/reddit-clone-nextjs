import React, { PropsWithChildren } from 'react';
import { Flex } from "@chakra-ui/react";
import AuthButton from './AuthButton';

type RightContentProps = {
    
}&PropsWithChildren;

const RightContent:React.FC<RightContentProps> = () => {
    
    return <>
    {/* <AuthModel/> */}
    <Flex justify={"center"} align={"center"}>
<AuthButton />        

    </Flex>
    </>
}
export default RightContent;