import { Button } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';
import { openModalState } from '../../features/modal/Auth/authModalSlice';
import { useAppDispatch } from '../../hooks';

type AuthButtonProps = {
    
}&PropsWithChildren;

const AuthButton:React.FC<AuthButtonProps> = () => {
    const dispatch = useAppDispatch()

    const onOpen = (view:"login" | "signup" | "resetPassword")=>{
        return ()=> {
          console.log("onopen",open)
          dispatch(openModalState(view))}
        }
    
    return (<>
    <Button variant={"outline"} height="38px" 
    width={{base:"70px",md:"110px"}}
    display={{base:"none", sm:"flex"}}
    mr={2}
    onClick={onOpen("login")}
    
    > Log In</Button>
    <Button height="38px" 
    onClick={onOpen("signup")}
    width={{base:"70px",md:"110px"}}
    display={{base:"none", sm:"flex"}}
    mr={2}>Sign Up</Button>
    </>)
}
export default AuthButton;