import { Button, Flex,Image } from '@chakra-ui/react';
import React from 'react';

type OAuthButtonProps = {
    
};

const OAuthButton:React.FC<OAuthButtonProps> = () => {
 
     return <Flex direction={"column"} width="100%" mb={4}>
        <Button variant={"oauth"}><Image src='/images/googlelogo.png' height={"20px"} mr={4}/> Continue With Google</Button>
        <Button mt={2} variant={"oauth"}>Some Other Provider</Button>
     </Flex>
}
export default OAuthButton;