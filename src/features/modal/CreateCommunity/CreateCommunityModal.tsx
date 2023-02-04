import { ModalOverlay,Text,Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Flex, ModalFooter, Button, Box, Input } from '@chakra-ui/react';
import React, { PropsWithChildren, useState } from 'react';
import AuthInputs from '../Auth/AuthInputs';
import OAuthButton from '../Auth/OAuthButton';
import ResetPassword from '../Auth/ResetPassword';

type CreateCommunityModalProps ={open:boolean;handleOnClose:()=>void} & PropsWithChildren;

const CreateCommunityModal:React.FC<CreateCommunityModalProps> = ({open, handleOnClose}) => {
    const [communityName, setCommunityName]=useState("")
    const CHARACTER_LENGTHS=21
    const [characterRemains, setCharacterRemain]=useState(CHARACTER_LENGTHS)
   const handleOnChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
    if(e.target.value.length>CHARACTER_LENGTHS) return
    setCommunityName(e.target.value) 
    setCharacterRemain(CHARACTER_LENGTHS-e.target.value.length)  
}
    return     <>
    <Modal isOpen={open} onClose={handleOnClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader display={"flex"} flexDirection={"column"} fontSize={15} padding={3} justifyContent={"center"}>
       Create a Community  
          </ModalHeader>
        <ModalCloseButton />
        <Box pl={3} pr={3}>
        <ModalBody mb={6} display={"flex"} padding="10px 0" flexDirection="column"  justifyContent="center">
          <Text fontSize={15} fontWeight="600">Name</Text>
          <Text fontSize={11} color="gray.500">Community name including capitalization cannot be changed</Text>
          <Text position={"relative"} top={"28px"} left="10px" width={"20px"} color="gray.400">r/</Text>
          <Input position={"relative"} size={"sm"} pl={"22px"} onChange={handleOnChange} value={communityName}/>
          <Text fontSize={"9pt"} color={characterRemains===0?"red":
        "gray.500"}>{characterRemains} Characters remaining </Text>
        </ModalBody>
        </Box>
        <ModalFooter>
            <Button colorScheme={"blue"} mr={"3"} onClick={handleOnClose}>Close</Button>
            <Button variant="ghost">Create Community</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>

}
export default CreateCommunityModal;