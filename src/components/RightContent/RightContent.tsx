import React, { PropsWithChildren } from 'react';
import { Flex } from "@chakra-ui/react";
import AuthButton from './AuthButton';
import {AuthModal} from '../../features/modal';

type RightContentProps = {
    
}&PropsWithChildren;

const RightContent:React.FC<RightContentProps> = () => {
    
    return <>
    <AuthModal/>
    <Flex justify={"center"} align={"center"}>
<AuthButton />        

    </Flex>
    </>
}
export default RightContent;