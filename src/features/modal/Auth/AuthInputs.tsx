import { Flex } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';
import { useAppSelector } from '../../../hooks';
import LogIn from './LogIn';
import SignUp from './SignUp';

type AuthInputsProps = PropsWithChildren;

const AuthInputs:React.FC<AuthInputsProps> = () => {
    const {open,view} = useAppSelector((state)=>state.authModal)
    return <Flex flexDirection={"column"} mt={4} align="center" width={"100%"}>
        {view==="login"&&<LogIn />}
        {view=="signup"&& <SignUp />}
    </Flex>
}
export default AuthInputs;