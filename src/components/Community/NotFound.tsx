import { Button, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import React, { PropsWithChildren } from 'react';

type NotFoundProps =PropsWithChildren

const NotFound:React.FC<NotFoundProps> = () => {
    
    return <Flex direction={"column"} justify="center" alignItems={"center"} minHeight="60vh">

        Sorry Community does not exists or has been banned
       <Link href='/'>
       <Button mt={4}>GO Home</Button>
       </Link> 
    </Flex>
}
export default NotFound;