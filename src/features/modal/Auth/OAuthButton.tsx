import { Button, Flex,Image,Text } from '@chakra-ui/react';
import React from 'react';

type OAuthButtonProps = {
    
};

const OAuthButton:React.FC<OAuthButtonProps> = () => {
 
     return <Flex direction={"column"} width="100%" mb={4} _active={{color:"gray.900"}} color={"gray.500"} _hover={{color:"gray.600"}} >
        <Button  variant={"oauth"}><Image src='/images/googlelogo.png' height={"20px"} mr={4}/> <Text    display={{base:"none",sm:"inherit"}}>
        Continue With Google </Text> </Button>
        {/* <Button mt={2} variant={"oauth"}>Some Other Provider</Button> */}
     </Flex>
}
export default OAuthButton;