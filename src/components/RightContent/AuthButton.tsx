import { Button } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';

type AuthButtonProps = {
    
}&PropsWithChildren;

const AuthButton:React.FC<AuthButtonProps> = () => {
    
    return (<>
    <Button>Log In</Button>
    <Button>Sign Up</Button>
    </>)
}
export default AuthButton;