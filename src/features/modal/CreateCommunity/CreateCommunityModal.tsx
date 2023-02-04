import {
  ModalOverlay,
  Text,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Flex,
  ModalFooter,
  Button,
  Box,
  Input,
  Stack,
  Checkbox,
  Icon,
} from "@chakra-ui/react";
import { doc, DocumentReference, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import React, { PropsWithChildren, useState } from "react";
import { IconType } from "react-icons";
import { BsEyeFill, BsFillPersonFill } from "react-icons/bs";
import { HiLockClosed } from "react-icons/hi";
import { COLLECTIONS, CommunityModel } from "../../../constant";
import { firestore } from "../../../firebase/clientApp";
import { useAppSelector } from "../../../hooks/hooks";

// eslint-disable-next-line no-useless-escape
const FORMAT = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

type CreateCommunityModalProps = {
  open: boolean;
  handleOnClose: () => void;
} & PropsWithChildren;

const C_TYPES: {
  name: "private" | "public" | "restricted";
  placeholder: string;
  desc: string;
  icon: IconType;
}[] = [
  {
    name: "public",
    placeholder: "Public",
    desc: "Anyone can view, post and comments to this community",
    icon: BsFillPersonFill,
  },
  {
    name: "restricted",
    placeholder: "Restricted",
    desc: "Anyone can view, but only approved user can post in this community",
    icon: BsEyeFill,
  },
  {
    name: "private",
    placeholder: "Private",
    desc: "Only approve user can view and submit to this community",
    icon: HiLockClosed,
  },
];

const CreateCommunityModal: React.FC<CreateCommunityModalProps> = ({
  open,
  handleOnClose,
}) => {
  const user = useAppSelector((state)=>state.userInfo.user)
  const [loading, setLoading]=useState(false)
  const [communityName, setCommunityName] = useState("");
  const [communityType, setCommunityType] = useState<
    "public" | "restricted" | "private"
  >("public");
  const CHARACTER_LENGTHS = 21;
  const [characterRemains, setCharacterRemain] = useState(CHARACTER_LENGTHS);
  const [error, setError]=useState("")
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > CHARACTER_LENGTHS) return;
    setCommunityName(e.target.value);
    setCharacterRemain(CHARACTER_LENGTHS - e.target.value.length);
  };
  async function handleCreateCommunity(_e:React.MouseEvent<HTMLButtonElement, MouseEvent>):Promise< React.MouseEventHandler<HTMLButtonElement>>{
    setLoading(true)
    if(FORMAT.test(communityName)|| communityName.length<3){
      setError("Community name must be between 3-21 characters and can only contains letter and number")
      setLoading(false)

      return;
    }

  try {
    const communityDocRef=  doc(firestore,COLLECTIONS.communities,communityName) as DocumentReference<CommunityModel>;
    const communityDoc=await getDoc(communityDocRef)
    if(communityDoc.exists()){
     setError("Sorry! community already exists, try with different name.")
   
     setLoading(false)
   
     return
    }
    await setDoc<CommunityModel>(communityDocRef,{
     creatorId:user.uid,
     createdAt:serverTimestamp(),
     numberOfMembers:1,
     privacyType:communityType,
    })
    setLoading(false)
    setCommunityName("")
    setCommunityType("public")
    setCharacterRemain(CHARACTER_LENGTHS)
   handleOnClose()
       
  } catch (error) {
    setLoading(false)
    setError("An unexpected error occur, check your internet connection and try again")
  }  
  }

  return (
    <>
      <Modal isOpen={open} size="lg" onClose={handleOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            display={"flex"}
            flexDirection={"column"}
            fontSize={15}
            padding={3}
            justifyContent={"center"}
          >
            Create a Community
          </ModalHeader>
          <ModalCloseButton />
          <Box pl={3} pr={3}>
            <ModalBody
              mb={6}
              display={"flex"}
              padding="10px 0"
              flexDirection="column"
              justifyContent="center"
            >
              <Text fontSize={15} fontWeight="600">
                Name
              </Text>
              <Text fontSize={11} color="gray.500">
                Community name including capitalization cannot be changed
              </Text>
              <Text
                position={"relative"}
                top={"28px"}
                left="10px"
                width={"20px"}
                color="gray.400"
              >
                r/
              </Text>
              <Input
                position={"relative"}
                size={"sm"}
                pl={"22px"}
                onChange={handleOnChange}
                value={communityName}
              />
              <Text
                fontSize={"9pt"}
                color={characterRemains === 0 ? "red" : "gray.500"}
              >
                {characterRemains} Characters remaining{" "}
              </Text>
              <Text
                fontSize={"9pt"}
                color={error.length !== 0 ? "red" : "gray.500"}
              >
                {error} 
              </Text>
              <Box mt={4} mb={4}>
                <Text fontWeight={"600"} fontSize={15}>
                  Community Type
                </Text>
                <Stack spacing={2}>
                  {C_TYPES.map((value, idx) => (
                    <>
                      <Checkbox
                        key={idx}                        onChange={() => setCommunityType(value.name)}
                        isChecked={value.name === communityType}
                        name={value.name}
                      >
                        <Flex align="center">
                            <Icon as={value.icon} mr={2} />
                          <Text fontSize={"10pt"} mr={2}>
                            {value.placeholder}
                          </Text>
                          <Text fontSize={"8pt"} color="gray.500" pt={0.5}>
                            {value.desc}
                          </Text>
                        </Flex>
                      </Checkbox>
                    </>
                  ))}
                </Stack>
              </Box>
            </ModalBody>
          </Box>
          <ModalFooter bg="gray.100" borderRadius={"0px 0px 10px 10px"}>
            <Button variant="outline" height="30px" colorScheme={"blue"} mr={"3"} onClick={handleOnClose}>
              Close
            </Button>
            <Button isLoading={loading} onClick={handleCreateCommunity}  height="30px">Create Community</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default CreateCommunityModal;
